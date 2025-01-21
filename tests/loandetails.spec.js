// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Monevo Loan Application Test', () => {
  // Base URL 
  const baseUrl = 'https://money.monevo.co.uk'

  test.beforeEach(async ({page}) => {
    // Navigate to the loan application page before each test
    await page.goto(baseUrl);
  });

  test('Verify the page loads successfully', async ({page}) => {
    await expect(page).toHaveTitle(/amount/);
    await expect(page).toHaveURL(baseUrl);
  });

});
