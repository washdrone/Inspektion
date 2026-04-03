import { test, expect, gotoAndHydrate } from './fixtures'

test.describe('Cookie banner', () => {
  test('cookie banner appears and can be accepted', async ({ page }) => {
    // Navigate, clear storage, reload to ensure banner shows
    await gotoAndHydrate(page, '/')
    await page.evaluate(() => localStorage.removeItem('cookie_consent'))
    await page.reload({ waitUntil: 'domcontentloaded' })
    await page.waitForTimeout(2000)

    const banner = page.getByRole('dialog', { name: /cookie/i })
    await expect(banner).toBeVisible({ timeout: 5000 })

    const acceptBtn = banner.getByRole('button', { name: /acceptera|accept/i })
    await acceptBtn.click()
    await expect(banner).not.toBeVisible()
  })

  test('cookie banner appears and can be declined', async ({ page }) => {
    await gotoAndHydrate(page, '/')
    await page.evaluate(() => localStorage.removeItem('cookie_consent'))
    await page.reload({ waitUntil: 'domcontentloaded' })
    await page.waitForTimeout(2000)

    const banner = page.getByRole('dialog', { name: /cookie/i })
    await expect(banner).toBeVisible({ timeout: 5000 })

    const declineBtn = banner.getByRole('button', { name: /avvisa|decline/i })
    await declineBtn.click()
    await expect(banner).not.toBeVisible()
  })

  test('cookie banner does not block hero CTA', async ({ page }) => {
    await gotoAndHydrate(page, '/')
    await page.evaluate(() => localStorage.removeItem('cookie_consent'))
    await page.reload({ waitUntil: 'domcontentloaded' })
    await page.waitForTimeout(2000)

    const banner = page.getByRole('dialog', { name: /cookie/i })
    await expect(banner).toBeVisible({ timeout: 5000 })

    const cta = page.getByRole('link', { name: /begär offert|get a quote/i }).first()
    await expect(cta).toBeVisible()
  })
})
