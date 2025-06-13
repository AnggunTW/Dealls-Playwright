const {test, expect} = require('@playwright/test');

test('Validate web title', async({page}) =>{
    await page.goto('https://job-portal-user-dev-skx7zw44dq-et.a.run.app')

    // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle('Styx');

})

test('Mouse action', async({page}) =>{
    await page.goto('http://techno.sac.id')

    //click
      //await page.getByRole('button', { name: '' }).click();
      //await page.locator('article').filter({ hasText: 'SEO Case Study Royco Oyster' }).getByRole('button').click();
 
      //mouse hover
      await page.locator('canvas').nth(1).hover;
      //await page.locator('section').filter({has text:'Service Web Development'}).hover;
    await page.waitForTimeout(5000);

})