context('Form', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it(' type wrong info into login form inputs', () => {

    cy.get('[data-cy=login-button]')
      .click({force: true});

    cy.get('[data-cy=email-input]')
      .type('fake@email.com').should('have.value', 'fake@email.com')

    cy.get('[data-cy=password-input]')
      .type('password').should('have.value', 'password');

    cy.get('[data-cy=login-submit]')
      .click({force: true});

    cy.get('[data-cy=login-error-message]')
      .should('be.visible')
  });

  it(' type into register form inputs', () => {

    cy.get('[data-cy=register-username-input]')
      .type('giansco').should('have.value', 'giansco');

    cy.get('[data-cy=register-email-input]')
      .type('fake@email.com').should('have.value', 'fake@email.com')

    cy.get('[data-cy=register-password-input]')
      .type('password').should('have.value', 'password');

    cy.get('[data-cy=register-btn]')
      .click({force: true});

    cy.contains('Welcome giansco').should('be.visible')
  });

  it(' register - logout - login', () => {

    cy.get('[data-cy=register-username-input]')
      .type('giansco').should('have.value', 'giansco');

    cy.get('[data-cy=register-email-input]')
      .type('fake@email.com').should('have.value', 'fake@email.com');

    cy.get('[data-cy=register-password-input]')
      .type('password').should('have.value', 'password');

    cy.get('[data-cy=register-btn]')
      .click({force: true});

    cy.contains('Welcome giansco').should('be.visible');

    cy.get('[data-cy=logout-button]')
      .click({force: true});

    cy.contains('Join us').should('be.visible');

    cy.get('[data-cy=login-button]')
      .click({force: true});

    cy.get('[data-cy=email-input]')
      .type('fake@email.com').should('have.value', 'fake@email.com');

    cy.get('[data-cy=password-input]')
      .type('password').should('have.value', 'password');

    cy.get('[data-cy=login-submit]')
      .click({force: true});

    cy.contains('Welcome giansco').should('be.visible')
  });

});
