class addPage {
    static navigateToAddPage() {
        cy.get('[data-test-id="+Add-header"]').click();
        cy.get('[data-test-id="resource-title"]').should('have.text', 'Add');
    }

    static seelctCard(cardName) {
        switch (cardName) {
            case importFromGit:
                cy.get('[data-test-id="import-from-git"]').click();
                break;
            default:
                break;
        }   
    }

    static verifyTitle(title) {
        cy.get('[data-test-id="resource-title"]').should('have.text', 'Import from git');
    }

    static verifyPipelinesSection(message) {
        cy.get('.odc-form-section__heading').eq(5).should('have.text', 'Pipelines');
        cy.get('div.pf-c-form.co-m-pane__form div[aria-label="Info Alert"]').should('have.text',message)
    }

    static enterGitUrl(gitUrl) {
        cy.get('[data-test-id="git-form-input-url"]').type(gitUrl);
    }

    static verifyPipelineCheckBox() {
        cy.get('#form-checkbox-pipeline-enabled-field').should('be.visible');
    }

    static enterAppName(name) {
        cy.get('[data-test-id="application-form-app-input"]').type(name)
    }

    static selectResource(resource) {
        switch (resource) {
            case Deployment:
                cy.get('#form-radiobutton-resources-kubernetes-field').check();
                break;
            case DeploymentConfig:
                cy.get('#form-radiobutton-resources-openshift-field').check();
            default:
                break;
        }   
    }

    static selectAddPipeline() {
        cy.get('#form-checkbox-pipeline-enabled-field').check();
    }

    static createWorkload() {
        cy.get('[data-test-id="submit-button"]').click();
    }

    static verifyTopologyPage() {
        cy.url().contains('graph');
    }

    static verifyWorkloadInTopologyPage(appName) {
        cy.get('[data-test-id="namespace-bar-dropdown"] a').click();
        cy.get('[data-test-id="item-filter"]').type(appName);
        cy.get('h2.project-overview__group-heading').should('contain.text', appName);
    }
}
export default addPage;