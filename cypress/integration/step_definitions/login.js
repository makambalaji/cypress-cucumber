import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pageObjects/pages/login_page";

before(() => {
  cy.log("I will only run before the first scenario of login.feature");
});

beforeEach(() => {
  cy.log("I will run before each Scenario of login.feature");
});

Given("user will run before all the scenarios", () => {
  cy.log("Scenario - Started");
});

Given("user open the login Page", () => {
  loginPage.visitLoginPage();
});

When("user enter a username {string}", (username) => {
  loginPage.fillUsername(username);
});

And("user enter a password {string}", (password) => {
  loginPage.fillPassword(password);
});

And("user click the sign-in button", () => {
  loginPage.submitLoginDetails();
});

Then("user should be able to login", () => {
  loginPage.checkLoginSuccess();
});

Then("error should displayed as {string}", (error_message) => {
  loginPage.checkErrorMessage(error_message);
});