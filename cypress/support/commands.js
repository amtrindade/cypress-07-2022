// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('login', (environment, user, passwd) => {
    cy.get(loc.LOGIN.TF_WORKSPACE).type(environment);
    cy.get(loc.LOGIN.TF_USER).type(user);
    cy.get(loc.LOGIN.TF_PASS).type(passwd);
    cy.get(loc.LOGIN.BTN_ACCESS).click();

    cy.get(loc.MAIN.IMG_LOGO).should("be.visible")
})

Cypress.Commands.add('search', (description) => {
    cy.get(loc.LOCAL_LIST.TF_SEARCH).type(description);
    cy.get(loc.LOCAL_LIST.BTN_SEARCH).click();
})

