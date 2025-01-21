# Loan Details Form Validation Tests

This project includes tests for validating the Loan Details form in an application. The tests verify user inputs, uch ass loan amount, duration, use, person details, email, and phone number validation. It uses **Playwright** for end-to-end testing.

## Table of Contents
- [Setup](#setup)
- [Test Structure](#test-structure)
- [Running Tests Locally](#running-tests-locally)
- [Test Cases](#test-cases)
---

### Setup

1. Clone the repository:
    ```bash
    git clone <repo-url>
    cd <project-directory>
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Install Playwright browsers:
    ```bash
    npx playwright install --with-deps
    ```

4. Ensure you have Node.js installed.

---

### Running Tests Locally

1. Run the tests:
    ```bash
    npx playwright test
    ```

2. You can specify which test to run using the `--project` flag if you have multiple configurations. For example:
    ```bash
    npx playwright test --project=firefox
    ```

---

### Test Structure

The tests are written in **Playwright** and are organized into a page object model to keep the code clean and maintainable. The core files in the structure are:

- **`loan-details-page.js`**: Page Object class that encapsulates all interactions with the loan details form.
- **`loan-details.spec.js`**: Spec file containing the test cases that validate different user inputs on the loan details form.

---

### Test Cases

The tests are designed to verify the form submission with valid and invalid inputs for different fields.

#### 1. **Loan Amount**:
   - Verifies that an invalid loan amount triggers the appropriate error message.

#### 2. **Loan Duration**:
   - Verifies that the user can select a valid loan duration from predefined options.

#### 3. **Loan Use**:
   - Verifies that the user can select a valid loan use category (e.g., "Bills / Expenses").

#### 4. **Personal Title**:
   - Verifies that the user can select a valid title ("Mr.", "Mrs.").

#### 5. **Personal Name**:
   - Verifies that the user can enter a valid first and last name.

#### 6. **Date of Birth**:
   - Verifies that the user can enter a valid date of birth.

#### 7. **Email**:
   - Verifies that the user can enter a valid email and shows an error for an invalid one.

#### 8. **Phone Number**:
   - Verifies that the user’s UK mobile phone number is valid, with a regex validation for format.

---



### Conclusion

This project aims to provide a solid framework for testing the loan details form, ensuring that all fields behave correctly and validations work as expected. 

---
