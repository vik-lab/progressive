import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.progressive.com/');
  await page.getByRole('link', { name: 'Popular Auto Average savings' }).click();
  await page.getByRole('textbox', { name: 'Enter ZIP Code' }).fill('78717');
  await page.getByRole('button', { name: 'Get a quote' }).click();
  await page.goto('https://insurance.apps.progressivedirect.com/0/NameEdit');
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'First Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'MI' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Test');
  await page.getByRole('textbox', { name: 'Last Name' }).press('Tab');
  await page.getByLabel('Suffix').press('ArrowDown');
  await page.getByLabel('Suffix').selectOption('JR');
  await page.getByRole('textbox', { name: 'Date of birth' }).click();
  await page.getByRole('textbox', { name: 'Date of birth' }).fill('10/10/2020');
  await page.getByRole('textbox', { name: 'Date of birth' }).press('Tab');
  await page.getByRole('textbox', { name: 'Primary email address Input' }).fill('stest@test.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
});