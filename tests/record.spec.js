import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://techno.sac.id/');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('article').filter({ hasText: 'SEO Case Study Royco Oyster' }).getByRole('button').click();
});