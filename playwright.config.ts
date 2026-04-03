import { defineConfig, devices } from '@playwright/test'

const baseURL = process.env.SITE_URL || 'http://127.0.0.1:3000'

const chromiumLaunchOptions = {
  executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
}

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  timeout: 30000,
  use: {
    baseURL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    navigationTimeout: 15000,
    actionTimeout: 10000,
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: chromiumLaunchOptions,
      },
    },
    {
      name: 'iPhone 13',
      use: {
        ...devices['iPhone 13'],
        defaultBrowserType: 'chromium',
        launchOptions: chromiumLaunchOptions,
      },
    },
    {
      name: 'Pixel 7',
      use: {
        ...devices['Pixel 7'],
        launchOptions: chromiumLaunchOptions,
      },
    },
    {
      name: 'iPad Mini',
      use: {
        ...devices['iPad Mini'],
        defaultBrowserType: 'chromium',
        launchOptions: chromiumLaunchOptions,
      },
    },
  ],
  webServer: process.env.SITE_URL
    ? undefined
    : {
        command: 'npm run dev',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: !process.env.CI,
      },
})
