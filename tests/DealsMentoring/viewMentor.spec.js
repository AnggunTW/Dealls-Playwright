//Test View Mentor
const { test, expect } = require('@playwright/test');
test('User can click on a mentor to view profile details', async ({ page }) => {
  await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');

  await page.getByPlaceholder('Cari berdasarkan nama, perusahaan, peran, industri, universitas, jurusan, topik').fill('Dimas');
  await page.waitForTimeout(1000);

  const mentorCard = page.locator('.MentorCard_mentor_card__zMRXB').first();
  await mentorCard.click();

  await expect(page.getByText('Super Mentor')).toBeVisible(); // or use heading text
});