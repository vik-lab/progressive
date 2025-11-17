import { page } from '@playwright/test';
import { expect } from '@playwright/test';

export class Homepage {

  constructor(page) {
    this.page = page;
  }

    async goto() {
    await this.page.goto('/');
    }

    async getTitleText() {
    return await this.page.title();
    }

    async clickAutoQuoteLink() {
    //await this.page.goto('/#l');
    await this.page.getByRole('link', { name: 'Popular Auto Average savings' }).click();
    }

    async enterZipCodeForQuote() {
      await this.page.getByRole('textbox', { name: 'Enter ZIP Code' }).fill('78717');
      await this.page.getByRole('button', { name: 'Get a quote' }).click();
      //wait for network idle
      //await this.page.waitForLoadState('networkidle');
    }

    async fillQuoteFormWithInvalidDOB() {
      // Locate the parent component first
      const firstNameComponent = this.page.getByTestId('firstName');
      const lastNameComponent = this.page.getByTestId('lastName');
      const dobComponent = this.page.getByTestId('dateOfBirth');
      const emailComponent = this.page.getByTestId('primaryEmailAddress');
      
      // Then locate the actual input element inside that component
      const firstNameInput = firstNameComponent.locator('input');
      const lastNameInput = lastNameComponent.locator('input');
      const dobInput = dobComponent.locator('input');
      const emailInput = emailComponent.locator('input');

      // Now you can fill the input
      await firstNameInput.fill('John');
      await lastNameInput.fill('Doe');
      await dobInput.fill('01/01/2019'); // Invalid DOB (under 18)
      await emailInput.fill('john.doe@mailinator.com');
      //await this.page.getByRole('button', { name: 'Continue' }).click();
      const continueButton = this.page.getByRole('button', { name: 'Continue' });
      // First click
      await continueButton.click();
      // Wait for the button to become enabled/actionable again (Playwright auto-waits for this condition)
      await expect(continueButton).toBeEnabled();
      // Second click
      await continueButton.click(); 
    }
}