class operatorsPage {

  static switchToAdminPerspective() {
      cy.get('[data-test-id="perspective-switcher-toggle"]').click();
      cy.get('.pf-c-dropdown__menu-item').contains('Administrator').click();
  }

  static switchToDeveloperPerspective() {
    cy.get('[data-test-id="perspective-switcher-toggle"]').click();
    cy.get('.pf-c-dropdown__menu-item').contains('Developer').click();
  }

  static navigateToOperaotorHubPage() {
      cy.get('[data-component="pf-nav-expandable"]').contains('Operators').click();
      cy.get('.pf-c-nav__link').contains('OperatorHub').should('be.visible');
      cy.get('.pf-c-nav__link').contains('OperatorHub').click();
  }

  static searchOperator(operatorName) {
      cy.get('input[placeholder="Filter by keyword..."]').type(operatorName);
      cy.get('.co-catalog-page__num-items').should('be.visible');
  }

  static installPipelineOperator() {
    // cy.get('.co-m-nav-title').find('h1').should('have.text', 'Install Operator');
    // cy.byButtonText('Install').click();
    // cy.byLegacyTestID('resource-title').should('have.text', 'Installed Operators');
  }

  static verifyPipelineOperatorSubscriptionPage() {
    cy.get('.co-m-nav-title').find('h1').should('have.text', 'Install Operator');
    cy.get('h1.co-clusterserviceversion-logo__name__clusterserviceversion').should('have.text', 'OpenShift Pipelines Operator');
  }

  static verifyInstalledOperator(operatorName) {
    // cy.get('[role="dialog"]').find('[data-test-id="operator-uninstall-btn"]').should('be.exist');
    cy.get('h1.co-clusterserviceversion-logo__name__clusterserviceversion').should('have.text', operatorName);
  }
}
export default operatorsPage;
