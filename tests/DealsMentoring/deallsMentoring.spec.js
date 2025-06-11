// Test search
const { test, expect } = require('@playwright/test');

test('User can search for a mentor by name or skill', async ({ page }) => {
  await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');

  const searchInput = page.getByPlaceholder('Cari berdasarkan nama, perusahaan, peran, industri, universitas, jurusan, topik');
  await expect(searchInput).toBeVisible();

  await searchInput.fill('Quality Assurance');
  await page.waitForTimeout(1000); // wait for results to update

  const results = page.getByText('Gery Sitompul'); // assumed selector
  
});

