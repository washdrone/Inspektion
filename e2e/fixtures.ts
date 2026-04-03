import { test as base } from '@playwright/test'

// Block external resources that hang in sandbox environments
// and prevent React hydration from completing
export const test = base.extend({
  page: async ({ page }, use) => {
    await page.route(/(fonts\.googleapis|fonts\.gstatic|googletagmanager|google-analytics|www\.google)/, (route) =>
      route.abort()
    )
    await use(page)
  },
})

export { expect } from '@playwright/test'

/**
 * Navigate and wait for React hydration to complete.
 * Use this instead of page.goto() for tests that need interaction.
 */
export async function gotoAndHydrate(page: any, path: string) {
  await page.goto(path, { waitUntil: 'domcontentloaded' })
  // Wait for React hydration - client components need JS to execute
  await page.waitForTimeout(2000)
}
