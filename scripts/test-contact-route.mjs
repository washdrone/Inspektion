import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import vm from 'node:vm'
import ts from 'typescript'

const require = createRequire(import.meta.url)
const servicesFile = new URL('../src/lib/contact-services.ts', import.meta.url)
const routeFile = new URL('../src/app/api/kontakt/route.ts', import.meta.url)
function loadTs(file, overrides = {}) {
  const compiled = ts.transpileModule(readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText
  const exports = {}
  const context = { exports, require: name => name === '@/lib/contact-services' ? loadTs(servicesFile) : require(name), process: { env: {} }, console: { error() {} }, fetch: () => { throw new Error('Unexpected network call') }, ...overrides }
  vm.runInNewContext(compiled, context)
  return exports
}
const valid = { name: 'Test <namn>', company: 'Test & organisation', email: 'test@example.invalid', service: 'volymberakning', message: 'Test only', website: '' }
const request = body => ({ json: async () => body })

test('missing delivery configuration returns failure rather than false success', async () => {
  const route = loadTs(routeFile)
  assert.equal((await route.POST(request(valid))).status, 503)
})
test('invalid types, whitespace-only names and unknown service are rejected', async () => {
  const route = loadTs(routeFile)
  for (const body of [null, [], { ...valid, name: {} }, { ...valid, name: ' ' }, { ...valid, service: 'invalid' }, { ...valid, email: 'not-an-email' }, { ...valid, message: 'x'.repeat(5001) }]) {
    assert.equal((await route.POST(request(body))).status, 400)
  }
})
test('honeypot never contacts the delivery provider', async () => {
  const route = loadTs(routeFile)
  assert.equal((await route.POST(request({ ...valid, website: 'bot' }))).status, 200)
})
test('provider acceptance returns success and content is escaped', async () => {
  let calls = 0
  const route = loadTs(routeFile, { process: { env: { RESEND_API_KEY: 'test-only-not-real' } }, fetch: async (url, options) => {
    calls++
    assert.equal(url, 'https://api.resend.com/emails')
    const data = JSON.parse(options.body)
    assert.equal(data.reply_to, valid.email)
    assert.ok(data.html.includes('Test &lt;namn&gt;'))
    assert.ok(data.html.includes('Test &amp; organisation'))
    return { ok: true }
  } })
  assert.equal((await route.POST(request(valid))).status, 200)
  assert.equal(calls, 1)
})
test('provider rejection never produces a success response or logs contact content', async () => {
  const logs = []
  const route = loadTs(routeFile, { process: { env: { RESEND_API_KEY: 'test-only-not-real' } }, console: { error: (...args) => logs.push(args) }, fetch: async () => ({ ok: false, status: 429 }) })
  assert.equal((await route.POST(request(valid))).status, 500)
  assert.ok(!JSON.stringify(logs).includes(valid.email))
})
