// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('http://techno.sac.id');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Techno/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
