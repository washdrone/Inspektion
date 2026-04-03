import { test, expect } from './fixtures'

const pages = [
  { path: '/', name: 'Homepage (SV)' },
  { path: '/en', name: 'Homepage (EN)' },
  { path: '/kontakt', name: 'Kontakt' },
  { path: '/priser', name: 'Priser' },
  { path: '/om-oss', name: 'Om oss' },
  { path: '/hur-det-gar-till', name: 'Hur det går till' },
  { path: '/tjanster/takinspektion', name: 'Takinspektion' },
  { path: '/tjanster/fasadinspektion', name: 'Fasadinspektion' },
  { path: '/tjanster/solcellsinspektion', name: 'Solcellsinspektion' },
  { path: '/en/contact', name: 'Contact (EN)' },
  { path: '/en/pricing', name: 'Pricing (EN)' },
  { path: '/platser/inspektion-stockholm', name: 'Stockholm' },
  { path: '/en/locations/inspection-stockholm', name: 'Stockholm (EN)' },
]

test.describe('Global smoke tests', () => {
  for (const page of pages) {
    test(`${page.name} loads without errors`, async ({ page: p }) => {
      const errors: string[] = []
      p.on('pageerror', (err) => errors.push(err.message))

      const response = await p.goto(page.path, { waitUntil: 'domcontentloaded' })
      expect(response?.status()).toBeLessThan(400)

      // Check for blocking console errors from own code (ignore third-party)
      const criticalErrors = errors.filter(
        (e) => !e.includes('gtag') && !e.includes('analytics') && !e.includes('google')
      )
      expect(criticalErrors).toHaveLength(0)
    })
  }
})
