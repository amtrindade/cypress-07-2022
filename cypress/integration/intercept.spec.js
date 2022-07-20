/// <reference types="cypress" />

const requiredExample = require('../fixtures/example')

context('Files', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/files')
  })

  beforeEach(() => {
    cy.fixture('example.json').as('example')
  })

  it('cy.fixture() - load a fixture', () => {
    cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment')

    cy.get('.fixture-btn').click()

    cy.wait('@getComment').its('response.body')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')
  })
})