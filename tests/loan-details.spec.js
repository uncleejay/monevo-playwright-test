// @ts-check
import { test, expect } from '@playwright/test';
import LoanDetailsPage from '../pageObjects/loan-details-page';

test.describe('Monevo Loan Application Test', () => {

  test.beforeEach(async ({page}) => {
    // Navigate to the loan application page before each test
    await page.goto('/');
    await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  });

  test('Verify the page loads successfully', async ({page}) => {
    await expect(page).toHaveURL(`/apply/loan-details/amount`);
  });

  test('Verify incorrect phone number fails the form validation', async ({page}) => {
    const loanDetailsPage = new LoanDetailsPage(page);
    await loanDetailsPage.enterLoanAmount();
    await loanDetailsPage.enterLoanDuration();
    await loanDetailsPage.enterLoanUse();
    await loanDetailsPage.enterLoanPersonTitle();
    await loanDetailsPage.enterLoanPersonName();
    await loanDetailsPage.enterLoanPersonDob();
    await loanDetailsPage.enterEmail();
    await loanDetailsPage.enterInvalidNumber();
  });

  test('Verify correct phone number passes form validation', async ({page}) => {
    const loanDetailsPage = new LoanDetailsPage(page);
    await loanDetailsPage.enterLoanAmount();
    await loanDetailsPage.enterLoanDuration();
    await loanDetailsPage.enterLoanUse();
    await loanDetailsPage.enterLoanPersonTitle();
    await loanDetailsPage.enterLoanPersonName();
    await loanDetailsPage.enterLoanPersonDob();
    await loanDetailsPage.enterEmail();
    await loanDetailsPage.enterValidNumber();
  });

});
