import { test, expect } from '@playwright/test';
import exp from 'constants';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/main');
  await page.getByRole('button', { name: 'sign in' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('admin');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByLabel('Your profile')).toBeVisible();
});