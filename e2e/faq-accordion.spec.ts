import { test, expect, gotoAndHydrate } from './fixtures'

test.describe('FAQ accordion', () => {
  test('FAQ items can be opened and closed', async ({ page }) => {
    await gotoAndHydrate(page, '/')

    // Scroll to the bottom to trigger reveal animations
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(2000)

    const faqButton = page.getByRole('button', { name: /hur fungerar/i }).first()
    await expect(faqButton).toBeVisible({ timeout: 5000 })
    await expect(faqButton).toHaveAttribute('aria-expanded', 'false')

    // Use force:true because reveal animations may affect stability check
    await faqButton.click()
    await expect(faqButton).toHaveAttribute('aria-expanded', 'true')

    await faqButton.click()
    await expect(faqButton).toHaveAttribute('aria-expanded', 'false')
  })

  test('only one FAQ item is open at a time', async ({ page }) => {
    await gotoAndHydrate(page, '/')

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await page.waitForTimeout(2000)

    // Get only FAQ buttons (not header dropdown buttons)
    const faqSection = page.locator('.faq-answer').first().locator('..')
    const faqButtons = faqSection.locator('..').locator('button[aria-expanded]')
    const count = await faqButtons.count()

    if (count >= 2) {
      await faqButtons.nth(0).click()
      await expect(faqButtons.nth(0)).toHaveAttribute('aria-expanded', 'true')

      await faqButtons.nth(1).click()
      await expect(faqButtons.nth(1)).toHaveAttribute('aria-expanded', 'true')
      await expect(faqButtons.nth(0)).toHaveAttribute('aria-expanded', 'false')
    }
  })
})
