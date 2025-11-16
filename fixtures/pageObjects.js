import {test as base, expect as baseExpect} from '@playwright/test';
import { Homepage } from '../pages/homepage.js';
import { LoginPage } from '../pages/loginpage.js';

/**
 * Extend the base test by adding page objects.
 */
export const test = base.extend({
  homepage: async ({ page }, use) => {
    await use(new Homepage(page));
  },

  loginpage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },    
});

// Re-export expect for convenience.
export const expect = baseExpect;   