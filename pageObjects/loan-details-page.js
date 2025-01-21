import { expect } from '@playwright/test';

export class LoanDetailsPage {
  constructor(page) {
    this.page = page;
    this.continueButton = page.getByRole('button', { name: 'Continue' });
  }

  async enterLoanAmount() {
    // Verify that the heading is displayed on page
    await expect(this.page.getByRole('heading', { name: 'How much would you like to' })).toBeVisible();

    // Verify error message is displayed when continue button is clicked and the loan amount field is empty
    await this.continueButton.click();
    await expect(this.page.getByText('Please enter a valid loan')).toBeVisible();

    // Enter loan amount and click continue
    await this.page.getByRole('textbox').fill('1000');
    await this.continueButton.click();
  }

  async enterLoanDuration() {
    // Verify loan duration heading is displayed
    await expect(this.page.getByRole('heading', { name: 'How long do you need to pay' })).toBeVisible();

    // List of expected loan duration options
    const loanDurations = [
      '3 months',
      '6 months',
      '9 months',
      '1 year',
      '2 years',
      '3 years',
      '4 years',
      '5+ years',
    ];

    // Loop through each loan duration and verify it exists on the page
    for (const duration of loanDurations) {
      await expect(this.page.getByRole('button', { name: duration })).toBeVisible();
    }

    // Click "3 months"
    await this.page.getByRole('button', { name: '3 months' }).click();
  }

  async enterLoanUse() {
    // Verify loan use headin is displayed on page
    await expect(this.page.getByRole('heading', { name: 'What do you want to use the' })).toBeVisible();

    // Select "Bills / Expenses"
    await this.page.getByRole('button', { name: 'Bills / Expenses' }).click();
  }

  async enterLoanPersonTitle() {
    // Verify "What’s your title?" heading is displayed
    await expect(this.page.getByRole('heading', { name: 'What’s your title?' })).toBeVisible();

    // Select "Mr."
    await this.page.getByRole('button', { name: 'Mr', exact: true }).click();
  }

  async enterLoanPersonName() {
    // Verify "What’s your name?" heading is displayed
    await expect(this.page.getByRole('heading', { name: 'What’s your name?' })).toBeVisible();

    // Verify the info note is displayed
    await expect(this.page.getByText('Your details are required, to')).toBeVisible();
    
    // Verify error message is handled for firstname and lastname
    await this.continueButton.click();
    await expect(this.page.getByText('Please enter your full first')).toBeVisible();
    await expect(this.page.getByText('Please enter your full last')).toBeVisible();

    // Fill first and last name
    await this.page.locator('#firstName').fill('Joseph');
    await this.page.locator('#lastName').fill('Coleshowers');

    // Click continue
    await this.continueButton.click();
  }

  async enterLoanPersonDob() {
    await this.continueButton.click();
    // Verify "What’s your date of birth?" heading is displayed
    await expect(this.page.getByRole('heading', { name: 'What’s your date of birth?' })).toBeVisible();

    // Verify error message for missing DOB
    await this.continueButton.click();
    await expect(this.page.getByText('Enter a valid birth date')).toBeVisible();

    // Fill DOB and click continue
    await this.page.locator('#dateOfBirth').fill('02/02/2000');
    await this.continueButton.click();
  }

  async enterEmail () {
    // Verify info spam note is displayed to the user
    await this.continueButton.click();
    await expect(this.page.getByText('Don’t worry, we won’t spam')).toBeVisible();

    //Verify incorrect email error is displayed
    await this.page.locator('#emailAddress').fill('jayceo@gmai');
    await this.continueButton.click();
    await expect(this.page.getByText('Please enter a valid email')).toBeVisible();

    // Enter valid email
    await this.page.locator('#emailAddress').clear()
    await this.page.locator('#emailAddress').fill('coleshowers@gmail.com');
    await this.continueButton.click();
  }

  async enterInvalidNumber () {
    // Verify heading is displayed on page
    await expect(this.page.getByRole('heading', { name: 'What’s your mobile number?' })).toBeVisible()
  }
}; 
