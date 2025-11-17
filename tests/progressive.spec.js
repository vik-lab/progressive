import { test, expect } from "../fixtures/pageObjects";
import { Homepage } from "../pages/homepage";

test.describe("Progressive Homepage", () => {
  test.beforeEach(async ({ homepage }) => {
    await homepage.goto();
  });

  test("should have the correct title", async ({ homepage }) => {
    const titleText = await homepage.getTitleText();
    expect(titleText).toBe("An Insurance Company You Can Rely On | Progressive");
  });

  test("login page test", async ({ loginpage }) => {
    await loginpage.goto();
    //await loginpage.clickLoginButton();
    await loginpage.login("testuser", "password123");
    //unit tests for boundary value analysis and valid chars expected
  });
  //negative test for auto quote with invalid dob
  test("auto quote with invalid dob", async ({ homepage }) => {
    await homepage.goto();
    await homepage.clickAutoQuoteLink();
    await homepage.enterZipCodeForQuote();
    await homepage.fillQuoteFormWithInvalidDOB();
    // issue once the fields are filled in, user is required to click twice on continue button to proceed 
    const fullErrorMessage = 'Oops! Let\'s take a look at';
    // Target the element with role="alert" and assert its full text content
    await expect(homepage.page.getByRole('alert').first()).toContainText(fullErrorMessage);
  });
});
