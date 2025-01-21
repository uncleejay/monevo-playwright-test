import { expect } from '@playwright/test';

class LoanDetailsPage {
    constructor(page) {
        this.page = page;
        this.continueButton = page.getByRole('button', {name: 'Continue'});
    }

    async loanAmount() {
        // Verify that the title is displayed on page
        await expect(page.getByRole('heading', { name: 'How much would you like to' })).toBeVisible();

        // Verify error message is displayed when continue button is clicked and the loan amount field is empty
        await this.continueButton.click();
        await expect(page.getByText('Please enter a valid loan')).toBeVisible();

        // Enter loan amount
        await page.getByPlaceholder('£1,000 to £').fill('1000');
        this.continueButton.click();
    }

    async loanDuration() {
        
    }

    async loanUse() {

    }

    async loanPersonTitle() {

    }

    async loanPersonFirstName() {

    }

    async loanPersonDob() {

    }
}

export default LoanDetailsPage;