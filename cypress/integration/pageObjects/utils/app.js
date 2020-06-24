class app {
    static switchToAdminPerspective() {
        cy.get('[data-test-id="perspective-switcher-toggle"]').click();
        cy.get('.pf-c-dropdown__menu-item').contains('Administrator').click();
    }
  
    static switchToDeveloperPerspective() {
      cy.get('[data-test-id="perspective-switcher-toggle"]').click();
      cy.get('.pf-c-dropdown__menu-item').contains('Developer').click();
      cy.get('div[data-test-id="perspective-switcher-menu"]').find('h1').should('contain.text', 'Administrator');
    }

    static createProject(projectName) {
        cy.get('[data-test-id="namespace-bar-dropdown"]').find('button').click();
        cy.get('ul[role="listbox"]').find('[data-test-id="dropdown-menu"]').click();
        cy.get('form[name="form"]').should('be.visible');
        cy.get('#input-name').type(projectName);
        cy.get('#confirm-action').click();
        cy.get('[data-test-id="namespace-bar-dropdown"] button span').contains('Project').should('contain.text', projectName);
    } 

    static selectProject(projectName) {
        cy.get('[data-test-id="namespace-bar-dropdown"]').find('button').click();
        cy.get('ul[role="listbox"]').find('[data-test-id="dropdown-text-filter"]').type(projectName);
        cy.get('[role="listbox"]').find('li[role="option"]').contains(projectName).click();
    }

    static navigateToAddPage() {
        cy.get('[data-test-id="+Add-header"]').click();
        cy.get('[data-test-id="resource-title"]').should('have.text', 'Add');
    }
}
export default app;