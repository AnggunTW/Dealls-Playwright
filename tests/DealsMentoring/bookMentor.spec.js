// Test book Mentor
const { test, expect } = require('@playwright/test');
test('User can book a mentoring session', async ({ page }) => {
  await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/sign-in?returnUrl=%2Fmentoring');
  
  // Simulate login
  await page.getByPlaceholder('Enter your email').fill('sactestqa@gmail.com');
  await page.getByPlaceholder('Enter your password').fill('Test12345');
  await page.click('button:has-text("Sign In")');
  await page.waitForNavigation();

  // Go to mentoring page
  await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app/mentoring');
  await page.getByPlaceholder('Cari berdasarkan nama, perusahaan, peran, industri, universitas, jurusan, topik').fill('Cika');
  await page.waitForTimeout(1000);
  await page.locator('.MentorCard_mentor_card__zMRXB').first().click();

  // Book a session
  //const availableSlot = page.getByText(/PM|AM/).first(); // assuming time slot has "PM" or "AM"
  //await availableSlot.click();
  //await page.getByRole('button', { name: 'Book Session' }).click();

  // Confirmation
  //await expect(page.getByText('Booking confirmed')).toBeVisible();
});