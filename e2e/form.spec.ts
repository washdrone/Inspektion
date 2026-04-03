import { test, expect } from './fixtures'

test.describe('Contact form', () => {
  test('form fields are focusable and usable', async ({ page }) => {
    await page.goto('/kontakt', { waitUntil: 'domcontentloaded' })

    const nameInput = page.getByLabel(/namn/i)
    await expect(nameInput).toBeVisible()
    await nameInput.focus()
    await expect(nameInput).toBeFocused()

    const companyInput = page.getByLabel(/företag/i)
    await expect(companyInput).toBeVisible()
    await companyInput.focus()
    await expect(companyInput).toBeFocused()

    const emailInput = page.getByLabel(/e-post/i)
    await expect(emailInput).toBeVisible()
    await emailInput.focus()
    await expect(emailInput).toBeFocused()

    const messageInput = page.getByLabel(/beskriv/i)
    await expect(messageInput).toBeVisible()
    await messageInput.focus()
    await expect(messageInput).toBeFocused()
  })

  test('submit button is visible and not blocked', async ({ page }) => {
    await page.goto('/kontakt', { waitUntil: 'domcontentloaded' })

    const submitBtn = page.getByRole('button', { name: /skicka förfrågan/i })
    await expect(submitBtn).toBeVisible()
    await expect(submitBtn).toBeEnabled()

    const box = await submitBtn.boundingBox()
    expect(box).toBeTruthy()
    expect(box!.height).toBeGreaterThanOrEqual(44)
  })

  test('select dropdown is usable', async ({ page }) => {
    await page.goto('/kontakt', { waitUntil: 'domcontentloaded' })

    const select = page.getByLabel(/typ av inspektion/i)
    await expect(select).toBeVisible()
    await select.selectOption('takinspektion')
    await expect(select).toHaveValue('takinspektion')
  })
})

test.describe('Contact form (EN)', () => {
  test('English form fields are focusable', async ({ page }) => {
    await page.goto('/en/contact', { waitUntil: 'domcontentloaded' })

    const nameInput = page.getByLabel(/name/i)
    await expect(nameInput).toBeVisible()

    const emailInput = page.getByLabel(/email/i)
    await expect(emailInput).toBeVisible()

    const submitBtn = page.getByRole('button', { name: /send enquiry/i })
    await expect(submitBtn).toBeVisible()
    await expect(submitBtn).toBeEnabled()
  })
})
