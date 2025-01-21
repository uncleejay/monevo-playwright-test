// @ts-check
import { test, expect } from '@playwright/test';
import LoanDetailsPage from '../pageObjects/loan-details-page';

test.describe('Monevo Loan Application Test', () => {
  let loanDetailsPage;

  test.beforeEach(async ({page}) => {
    loanDetailsPage = new LoanDetailsPage(page);

    // Navigate to the loan application page before each test
    await page.goto('https://money.monevo.co.uk');

    // verify page loaded
    await expect(page).toHaveURL(`/apply/loan-details/amount`);
    await page.getByRole('button', { name: 'Accept All Cookies' }).click();

    // Complete steps up to the phone number validation
    await loanDetailsPage.enterLoanAmount();
    await loanDetailsPage.enterLoanDuration();
    await loanDetailsPage.enterLoanUse();
    await loanDetailsPage.enterLoanPersonTitle();
    await loanDetailsPage.enterLoanPersonName();
    await loanDetailsPage.enterLoanPersonDob();
    await loanDetailsPage.enterEmail();
  });

  test('Verify incorrect phone number fails the form validation', async ({page}) => {
    await loanDetailsPage.enterInvalidNumber();
  });

  test('Verify correct phone number passes form validation', async ({page}) => {
    await loanDetailsPage.enterValidNumber();
  });

});
