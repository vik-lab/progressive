import { page } from '@playwright/test';

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
    }
}