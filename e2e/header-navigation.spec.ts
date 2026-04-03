import { test, expect, gotoAndHydrate } from './fixtures'

test.describe('Header and navigation', () => {
  test.beforeEach(async ({ page }) => {
    await gotoAndHydrate(page, '/')
  })

  test('header renders with logo and navigation', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()
    await expect(header.getByText('SurveyDrone')).toBeVisible()
  })

  test('desktop CTA button is visible on large viewport', async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Desktop only test')

    const cta = page.locator('header').getByRole('link', { name: /begär offert|get a quote/i })
    await expect(cta).toBeVisible()
  })

  test('mobile hamburger button is visible on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile only test')

    const hamburger = page.getByRole('button', { name: /öppna meny|open menu/i })
    await expect(hamburger).toBeVisible()
  })

  test('mobile menu opens and closes via hamburger', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile only test')

    const hamburger = page.getByRole('button', { name: /öppna meny|stäng meny|open menu|close menu/i })
    await expect(hamburger).toHaveAttribute('aria-expanded', 'false')

    // Open
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'true')

    // Close
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'false')
  })

  test('mobile menu links navigate correctly', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile only test')

    const hamburger = page.getByRole('button', { name: /öppna meny|stäng meny|open menu|close menu/i })
    await hamburger.click()
    await expect(hamburger).toHaveAttribute('aria-expanded', 'true')

    // Wait for transition
    await page.waitForTimeout(400)

    const link = page.getByRole('dialog', { name: /mobilmeny|mobile menu/i }).getByRole('link', { name: /priser|pricing/i })
    await link.click()

    await page.waitForURL(/priser|pricing/)
  })

  test('CTA button is clickable on mobile', async ({ page, isMobile }) => {
    test.skip(!isMobile, 'Mobile only test')

    const cta = page.getByRole('link', { name: /begär offert|get a quote/i }).first()
    await expect(cta).toBeVisible()

    const box = await cta.boundingBox()
    expect(box).toBeTruthy()
    expect(box!.width).toBeGreaterThan(40)
    expect(box!.height).toBeGreaterThan(40)
  })

  test('navigation works after route change', async ({ page }) => {
    await page.goto('/priser', { waitUntil: 'domcontentloaded' })
    await expect(page.locator('header').getByText('SurveyDrone')).toBeVisible()
  })
})

test.describe('Desktop dropdown menus', () => {
  test.beforeEach(async ({ page, isMobile }) => {
    test.skip(!!isMobile, 'Desktop only test')
    await gotoAndHydrate(page, '/')
  })

  test('services dropdown has correct aria attributes', async ({ page }) => {
    const servicesBtn = page.locator('header button[aria-haspopup="true"]').first()
    await expect(servicesBtn).toBeVisible()
    await expect(servicesBtn).toHaveAttribute('aria-expanded', 'false')
    await expect(servicesBtn).toHaveAttribute('aria-haspopup', 'true')
  })

  test('services dropdown opens on click', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, 100))
    await page.waitForTimeout(500)

    const servicesBtn = page.locator('header button[aria-haspopup="true"]').first()
    await servicesBtn.click()
    await expect(servicesBtn).toHaveAttribute('aria-expanded', 'true')
  })
})
