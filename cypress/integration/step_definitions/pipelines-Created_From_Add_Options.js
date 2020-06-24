import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import operatorsPage from '../pageObjects/pages/operators_page';
import loginPage from '../pageObjects/pages/login_page';
import addPage from '../pageObjects/pages/add_page';
import app from '../pageObjects/utils/app';

// before(() => {
//   loginPage.loginWithValidCredentials('kubeadmin', 'YcxoK-QLkqH-rh3Tr-qQdsJ');
//   loginPage.checkLoginSuccess();
//   app.createProject('AUT_MB_Demo');
// });

Given('openshift cluster is installed with pipeline operator', () => {
  loginPage.loginWithValidCredentials('kubeadmin', 'YcxoK-QLkqH-rh3Tr-qQdsJ');
  loginPage.checkLoginSuccess();
  // operatorsPage.verifyInstalledOperator('OpenShift Pipelines Operator');
});

Given('user is at the project namespace {string} in dev perspecitve', (projectName) => {
  app.switchToDeveloperPerspective();
  app.createProject(projectName);
  app.selectProject(projectName);
});

Given('user is at {string} page', (a) => {
  addPage.navigateToAddPage();
});

When('user clicks From Git card on the +Add page', () => {
  addPage.seelctCard('importFromGit');
});

Then('user navigates to page with header name Import from git', () => {
  addPage.verifyTitle('Import from git');
});

Then('pipeline section is displayed with message {string}', (message) => {
  addPage.verifyPipelinesSection(message);
});

Given('user is at {string} form', (title) => {
  addPage.verifyTitle(title);
});

When('user type Git Repo url as {string}', (gitUrl) => {
  addPage.enterGitUrl(gitUrl);
});

Then('Add pipeline checkbox is displayed', () => {
  addPage.verifyPipelineCheckBox();
});

When('type Name as {string} in General section', (name) => {
  addPage.enterAppName(name);
});

When('select {string} radio button in Resources section', (resoruce) => {
  addPage.selectResource(resoruce);
});

When('select Add Pipeline checkbox in Pipelines section', () => {
  addPage.selectAddPipeline();
});

When('click Create button on Add page', () => {
  addPage.createWorkload();
});

Then('user redirects to topology page', () => {
  addPage.verifyTopologyPage();
});

Then('created workload {string} is present in topology page', (name) => {
  addPage.verifyWorkloadInTopologyPage(name)
});

Given('cluster is installed with knative operator', () => {
  // TODO: implement step
});

Given('{string} component is added to namespace', (a) => {
  // TODO: implement step
});

Given('user is at {string} form with builder images', (a) => {
  // TODO: implement step
});

When('user clicks From Dockerfile card on the +Add page', () => {
  // TODO: implement step
});

When('the user enters {string} into the search bar', (a) => {
  // TODO: implement step
});

When('clicks node {string} from results', (a) => {
  // TODO: implement step
});

When('clicks {string} button on Add page', (a) => {
  // TODO: implement step
});

When('the user enters {string} into the Builder Image search bar', (a) => {
  // TODO: implement step
});

When('create the application with the selected builder image', () => {
  // TODO: implement step
});

When('click {string} button on Create Source-to-Image application', (a) => {
  // TODO: implement step
});

When('user clicks node on topology page', () => {
  // TODO: implement step
});

Then('Add pipeline section is displayed', () => {
  // TODO: implement step
});

Then('side pane is displayed with pipeline name same as component name {string}', (a) => {
  // TODO: implement step
});

Then('pipeline name is displayed with the component name {string}', (a) => {
  // TODO: implement step
});

Then('user redirects to the topology page', () => {
  // TODO: implement step
});

Then('right side pane opens in topology page', () => {
  // TODO: implement step
});

Then('pipelines section is displayed', () => {
  // TODO: implement step
});

Then('{string} button is disabled', (a) => {
  // TODO: implement step
});
