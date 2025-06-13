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
    await page.click('button:has-text("Ajukan Jadwal")');
    await page.click('button:has-text("LPDP")');
    await page.click('button:has-text("Selanjutnya")');

  // Confirmation
    await page.click('button:has-text("Select Date Range")');
    await page.waitForSelector('text=June 2025');
    await page.locator('[aria-label="Choose Friday June 20 of 2025"]').click();
    await page.locator('[aria-label="Choose Sunday June 22 of 2025"]').click();
 //navigate to month of june 2025
    while (!(await page.locator('text=June 2025').isVisible())) {
    await page.locator('button[aria-label="Next month"]').click();}
// Input Hour and minute
    await page.getByPlaceholder('HH:MM').first().fill('10:00');
    await page.getByPlaceholder('HH:MM').nth(1).fill('12:00');
    await page.click('button:has-text("Selanjutnya")');

//next page
    await page.getByLabel('Saya telah memposting ulang postingan di atas & tag 3 teman di bagian komentar').check();
    await page.getByLabel("I commit to attend the schedule I’ve chosen & understand the failure to attend 2x may result to suspension").check();
    await page.click('button:has-text("Selesai")');

});

