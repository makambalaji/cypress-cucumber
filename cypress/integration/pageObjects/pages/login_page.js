class loginPage {
	static visitLoginPage() {
        cy.visit('/');
        // cy.get('a[title="Log in with kube:admin"]').click()
        cy.url().should('include', 'login');
	}

	static fillUsername(username) {
		cy.get('#inputUsername').type(username);
	}

	static fillPassword(password) {
		cy.get('#inputPassword').type(password);
	}

	static submitLoginDetails() {
		cy.get('[type="submit"]').click();
	}

	static checkLoginSuccess() {
		cy.get('[aria-label="Help menu"]').should('be.visible');
	}

	static checkErrorMessage(error_message) {
		cy.get('div.error-placeholder').should('contain.text', error_message);
	}

	static loginWithValidCredentials(username, password) {
		cy.visit('/');
        cy.url().should('include', 'login')
		cy.get('#inputUsername').type(username);
		cy.get('#inputPassword').type(password);
		cy.get('[type="submit"]').click();
	}
}

export default loginPage