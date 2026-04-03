import { test, expect, gotoAndHydrate } from './fixtures'

test.describe('Mobile menu regression tests', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile only test')
    await gotoAndHydrate(page, '/')
  })

  test('mobile menu open and close cycle works', async ({ page }) => {
    const hamburger = page.getByRole('button', { name: /öppna meny|stäng meny|open menu|close menu/i })

    // Open
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'true')

    // Close
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    // Verify hero CTA is still visible after closing
    await page.waitForTimeout(400)
    const cta = page.getByRole('link', { name: /begär offert|get a quote/i }).first()
    await expect(cta).toBeVisible()
  })

  test('body scroll position is preserved after menu cycle', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 300))
    await page.waitForTimeout(300)

    const scrollBefore = await page.evaluate(() => window.scrollY)
    expect(scrollBefore).toBeGreaterThan(100)

    const hamburger = page.getByRole('button', { name: /öppna meny|stäng meny|open menu|close menu/i })
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'true')

    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    // Allow scroll restoration
    await page.waitForTimeout(500)
    const scrollAfter = await page.evaluate(() => window.scrollY)
    // Allow some tolerance for scroll restoration
    expect(Math.abs(scrollAfter - scrollBefore)).toBeLessThan(50)
  })

  test('Escape key closes mobile menu', async ({ page }) => {
    const hamburger = page.getByRole('button', { name: /öppna meny|stäng meny|open menu|close menu/i })
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'true')

    await page.keyboard.press('Escape')
    await expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  test('mobile menu CTA link navigates', async ({ page }) => {
    const hamburger = page.getByRole('button', { name: /öppna meny|stäng meny|open menu|close menu/i })
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'true')
    await page.waitForTimeout(400)

    // Use the nav link instead of CTA which may be hidden on small scroll
    const link = page.getByRole('dialog', { name: /mobilmeny|mobile menu/i }).getByRole('link', { name: /priser|pricing/i })
    await link.click()
    await page.waitForURL(/priser|pricing/)
  })

  test('no horizontal overflow with mobile menu open', async ({ page }) => {
    const hamburger = page.getByRole('button', { name: /öppna meny|stäng meny|open menu|close menu/i })
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'true')

    const hasOverflow = await page.evaluate(() => {
      const doc = document.documentElement
      return doc ? doc.scrollWidth > doc.clientWidth : false
    })
    expect(hasOverflow).toBe(false)
  })
})
