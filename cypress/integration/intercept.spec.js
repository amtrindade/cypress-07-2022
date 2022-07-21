/// <reference types="cypress" />

const requiredExample = require('../fixtures/example')

context('Files', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/files')
    cy.fixture('example.json').as('example')
  })

  it('Should be intercerpt with load a fixture', () => {
    cy.intercept('GET', '**/comments/*', { fixture: 'example.json' }).as('getComment')

    cy.get('.fixture-btn').click()

    cy.wait('@getComment').its('response.body')
      .should('have.property', 'name')
      .and('include', 'Using fixtures to represent data')
  })

  it('Should be request api', () => {
    cy.request({
        method: 'GET',
        url: `https://jsonplaceholder.cypress.io/comments/1`
      }).as('getComment');

    cy.get('@getComment').then(response => {
      expect(response.status).to.be.equal(200);
      expect(response.body).to.have.property('name', 'id labore ex et quam laborum');
    })
  })
})