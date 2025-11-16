import { page } from '@playwright/test';

export class LoginPage {
     
    constructor(page) {
        this.page = page;
    }
    //alternate way to navigate to login page
    async goto() {
        await this.page.goto('/rp/login?cntgrp=A');
    }

    async clickLoginButton() {
        await this.page.goto('/');
        // Select the element using its ID via a CSS selector
        const loginLink = page.getByRole('link', { name: 'Log In' });
        // You can then perform actions or assertions on the element
        await expect(loginLink).toBeVisible();
        await loginLink.click();
    }
        

    async login(username, password) {
        await this.page.fill('input[id="inputUserNameId"]', username);
        await this.page.fill('input[id="inputPassword"]', password);
        //await this.page.click('[data-pgr-id="buttonSubmitLogin"]');
        
    }
}
