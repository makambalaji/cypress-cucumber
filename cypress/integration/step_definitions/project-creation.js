import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import loginPage from '../pageObjects/pages/login_page'
import app from '../pageObjects/utils/app'

Given('user is logged into the openshift application', () => {
  loginPage.loginWithValidCredentials('kubeadmin', 'VpTYd-4YMhN-p3Q8f-PfNsz');
  loginPage.checkLoginSuccess();
});

Given('user is on dev perspective', () => {
  app.switchToDeveloperPerspective();
});

When('user selects the {string} option from Projects dropdown on top navigation bar', (a) => {
  // TODO: implement step
});

When('type {string} as {string} in {string} popup', (a, b, c) => {
  // TODO: implement step
});

When('click {string} button present in {string} popup', (a, b) => {
  // TODO: implement step
});

Then('popup should get closed', () => {
  // TODO: implement step
});

Then('user navigated to Topology page with message {string}', (a) => {
  // TODO: implement step
});
