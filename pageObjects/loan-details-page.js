import { expect } from '@playwright/test';

class LoanDetailsPage {
  constructor(page) {
    this.page = page;
    this.continueButton = page.getByRole('button', { name: 'Continue' });

    // Regex patterns
    this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.ukPhoneRegex = /^07\d{8,9}$/; // UK mobile numbers starting with '07', 10-11 digits
  }

  async enterLoanAmount() {
    // Assert heading is visible
    await expect(this.page.getByRole('heading', { name: 'How much would you like to' })).toBeVisible();

    // Assert error message is displayed for empty field
    await this.continueButton.click();
    await expect(this.page.getByText('Please enter a valid loan')).toBeVisible();

    // Fill loan amount and continue
    await this.page.getByRole('textbox').fill('1000');
    await this.continueButton.click();
  }

  async enterLoanDuration() {
    // Assert heading is visible
    await expect(this.page.getByRole('heading', { name: 'How long do you need to pay' })).toBeVisible();

    // Loan duration options
    const loanDurations = [
      '3 months', '6 months', '9 months', '1 year', 
      '2 years', '3 years', '4 years', '5+ years',
    ];

    // Verify each loan duration option is visible
    for (const duration of loanDurations) {
      await expect(this.page.getByRole('button', { name: duration })).toBeVisible();
    }

    // Select "3 months"
    await this.page.getByRole('button', { name: '3 months' }).click();
  }

  async enterLoanUse() {
    // Assert heading is visible
    await expect(this.page.getByRole('heading', { name: 'What do you want to use the' })).toBeVisible();

    // Select "Bills / Expenses"
    await this.page.getByRole('button', { name: 'Bills / Expenses' }).click();
  }

  async enterLoanPersonTitle() {
    // Assert heading is visible
    await expect(this.page.getByRole('heading', { name: 'What’s your title?' })).toBeVisible();

    // Select "Mr."
    await this.page.getByRole('button', { name: 'Mr', exact: true }).click();
  }

  async enterLoanPersonName() {
    // Assert heading is visible
    await expect(this.page.getByRole('heading', { name: 'What’s your name?' })).toBeVisible();

    // Assert info note is visible
    await expect(this.page.getByText('Your details are required, to')).toBeVisible();

    // Assert error messages for empty fields
    await this.continueButton.click();
    await expect(this.page.getByText('Please enter your full first')).toBeVisible();
    await expect(this.page.getByText('Please enter your full last')).toBeVisible();

    // Fill first and last name and continue
    await this.page.locator('#firstName').fill('Joseph');
    await this.page.locator('#lastName').fill('Coleshowers');
    await this.continueButton.click();
  }

  async enterLoanPersonDob() {
    // Click continue and assert DOB heading is visible
    await this.continueButton.click();
    await expect(this.page.getByRole('heading', { name: 'What’s your date of birth?' })).toBeVisible();

    // Assert error message for missing DOB
    await this.continueButton.click();
    await expect(this.page.getByText('Enter a valid birth date')).toBeVisible();

    // Fill DOB and continue
    await this.page.locator('#dateOfBirth').fill('02/02/2000');
    await this.continueButton.click();
  }

  async enterEmail() {
    // Assert spam info note is visible
    await this.continueButton.click();
    await expect(this.page.getByText('Don’t worry, we won’t spam')).toBeVisible();

    // Verify invalid email and assert error message
    const invalidEmail = 'jayceo@gmai';
    if (!this.emailRegex.test(invalidEmail)) {
      await this.page.locator('#emailAddress').fill(invalidEmail);
      await this.continueButton.click();
      await expect(this.page.getByText('Please enter a valid email')).toBeVisible();
    }

    // Fill valid email and continue
    const validEmail = 'coleshowers@gmail.com';
    if (this.emailRegex.test(validEmail)) {
      await this.page.locator('#emailAddress').fill(validEmail);
      await this.continueButton.click();
    }
  }

  async enterInvalidNumber() {
    // Assert heading and SMS info checkbox are visible
    await expect(this.page.getByRole('heading', { name: 'What’s your mobile number?' })).toBeVisible();
    await expect(this.page.getByText('Keep updated Receive a link')).toBeVisible();

    // Verify invalid number and assert error message
    const invalidNumber = '310323258';
    if (!this.ukPhoneRegex.test(invalidNumber)) {
      await this.page.locator('#mobileNumber').fill(invalidNumber);
      await this.continueButton.click();
      await expect(this.page.getByText('Enter a valid UK mobile phone')).toBeVisible();
    }
  }

  async enterValidNumber() {
    // Assert heading and SMS info checkbox are visible
    await expect(this.page.getByRole('heading', { name: 'What’s your mobile number?' })).toBeVisible();
    await expect(this.page.getByText('Keep updated Receive a link')).toBeVisible();

    // Fill valid number and continue
    const validNumber = '07897641544';
    if (this.ukPhoneRegex.test(validNumber)) {
      await this.page.locator('#mobileNumber').fill(validNumber);
      await this.continueButton.click();
    }
  }
}

export default LoanDetailsPage;
