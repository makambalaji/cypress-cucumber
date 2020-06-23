import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('user logged into the openshift application', () => {
    loginPage.checkLoginSuccess();
});

Given('user is at admin perspecitve', () => {
    cy.get('div[data-test-id="perspective-switcher-menu"]').find('h1').should('contain.text', 'Administrator');
});

Given('user is at Operator Hub page with the header name {string}', (a) => {
  // TODO: implement step
});

Given('user is at OpenShift Pipeline Operator subscription page', () => {
  // TODO: implement step
});

Given('user is at OpenShift Serverless Operator subscription page', () => {
  // TODO: implement step
});

Given('cluster is installed with kantive serverless operator', () => {
  // TODO: implement step
});

Given('user is on the knative-eventing namespace', () => {
  // TODO: implement step
});

Given('cluster is installed with knative serverless and eventing operators', () => {
  // TODO: implement step
});

Given('user is at operator hub page', () => {
  // TODO: implement step
});

Given('cluster is installed with knative serverless operator', () => {
  // TODO: implement step
});

Given('user logged into the cluster via cli', () => {
  // TODO: implement step
});

When('user searches for {string}', (a) => {
  // TODO: implement step
});

When('clicks {string} card on Operator Hub page', (a) => {
  // TODO: implement step
});

When('click install button present on the right side pane', () => {
  // TODO: implement step
});

When('user installs the pipeline operator with default values', () => {
  // TODO: implement step
});

When('user uninstalls the pipeline operator from right side pane', () => {
  // TODO: implement step
});

When('clicks on Unistall button present in popup with header message {string}', (a) => {
  // TODO: implement step
});

When('user installs the Serverless operator with default values', () => {
  // TODO: implement step
});

When('user navigates to installed operators page in Admin perspecitve', () => {
  // TODO: implement step
});

When('clicks kantive eventing provided api pressent in kantive serverless operator', () => {
  // TODO: implement step
});

When('click Create Kantive Eventing button present in kantive Eventing tab', () => {
  // TODO: implement step
});

When('click on create button', () => {
  // TODO: implement step
});

When('user search and installs the kantive Camel operator with default values', () => {
  // TODO: implement step
});

When('user executes {string}', (a) => {
  // TODO: implement step
});

When('user navigates to Add page', () => {
  // TODO: implement step
});

When('user clicks on Event sources page', () => {
  // TODO: implement step
});

Then('OpenShift Pipeline operator will be displayed', () => {
  // TODO: implement step
});

Then('page redirects to Installed operators', () => {
  // TODO: implement step
});

Then('page will contain OpenShift Pipeline Operator', () => {
  // TODO: implement step
});

Then('OpenShift Pipeline Operator will not be displayed', () => {
  // TODO: implement step
});

Then('Pipelines will not be displayed in Dev perspective', () => {
  // TODO: implement step
});

Then('page will contain openShift serverless operator', () => {
  // TODO: implement step
});

Then('serverless tab displays in navigation menu of admin page', () => {
  // TODO: implement step
});

Then('Event sources card display in +Add page in dev perspecitve', () => {
  // TODO: implement step
});

Then('user redirects to Installed operators page', () => {
  // TODO: implement step
});

Then('page will contain knative apache camel operator', () => {
  // TODO: implement step
});

Then('user redirects to page with header {string}', (a) => {
  // TODO: implement step
});

Then('GitHub Source is displayed in Types section', () => {
  // TODO: implement step
});
