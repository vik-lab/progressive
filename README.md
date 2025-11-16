# Project Name

Progressive: Playwright + Javascript UI test suite.

## Setup
1. npm install
2. npx playwright install

## Run tests
npx playwright test
npx playwright show-report

## Project structure
- pages/
  - homepage.ts        — HomePage page object
  - components/
    - header.ts        — Header component page object
    - footer.ts        — Footer component page object
- fixtures/
  - page-objects.ts    — Playwright fixtures (homepage, loginpage)
- tests/               
  - progressive.spec.ts - Tests using POM 
- playwright.config.ts
- package.json
- .gitignore
- README.md