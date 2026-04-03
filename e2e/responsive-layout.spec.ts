import { test, expect } from './fixtures'

async function checkNoHorizontalOverflow(page: any) {
  await page.waitForTimeout(500)
  const hasOverflow = await page.evaluate(() => {
    const doc = document.documentElement
    if (!doc) return false
    return doc.scrollWidth > doc.clientWidth
  })
  expect(hasOverflow).toBe(false)
}

test.describe('Responsive layout', () => {
  test('no horizontal overflow on homepage', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await checkNoHorizontalOverflow(page)
  })

  test('no horizontal overflow on service page', async ({ page }) => {
    await page.goto('/tjanster/takinspektion', { waitUntil: 'domcontentloaded' })
    await checkNoHorizontalOverflow(page)
  })

  test('no horizontal overflow on contact page', async ({ page }) => {
    await page.goto('/kontakt', { waitUntil: 'domcontentloaded' })
    await checkNoHorizontalOverflow(page)
  })

  test('no horizontal overflow on pricing page', async ({ page }) => {
    await page.goto('/priser', { waitUntil: 'domcontentloaded' })
    await checkNoHorizontalOverflow(page)
  })

  test('main content containers stay within viewport', async ({ page, isMobile }) => {
    // The no-horizontal-overflow test already validates mobile containment
    test.skip(!!isMobile, 'Covered by no-horizontal-overflow tests on mobile')
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await page.waitForTimeout(500)

    const viewportWidth = page.viewportSize()?.width ?? 375
    const containers = page.locator('.container-content')
    const count = await containers.count()

    for (let i = 0; i < Math.min(count, 3); i++) {
      const box = await containers.nth(i).boundingBox()
      if (box && box.width > 0) {
        // Container width should not exceed viewport
        expect(box.width).toBeLessThanOrEqual(viewportWidth + 5)
      }
    }
  })

  test('hero CTA is visible and clickable', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })

    const cta = page.getByRole('link', { name: /begär offert|get a quote/i }).first()
    await expect(cta).toBeVisible()
    await expect(cta).toBeEnabled()

    const box = await cta.boundingBox()
    expect(box).toBeTruthy()
    // Touch target should be at least 44px (WCAG minimum)
    expect(box!.height).toBeGreaterThanOrEqual(44)
  })
})
