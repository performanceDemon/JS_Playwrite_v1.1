//import { test, expect } from '@playwright/test';

const { test, expect } = require('@playwright/test');
require('dotenv').config();


test('login test', async ({ page }) => {
  await page.goto(process.env.URL_PAGE2);
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Sign in with email' }).click();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('idsds.falso');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByText('Please enter a valid email').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('heading', { name: 'Sign in with email' }).click();
  await page.getByRole('heading', { name: 'Sign in with email' }).click();
  await page.getByRole('button', { name: 'All sign in options' }).click();
});