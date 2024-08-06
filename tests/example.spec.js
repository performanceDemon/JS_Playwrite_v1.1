const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('basic test', async ({ page }) => {
  await page.goto(process.env.URL_PAGE1);
  await page.getByRole('heading', { name: 'Playwright enables reliable' }).click();
  await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  await page.getByRole('link', { name: 'Community' }).click();
});
