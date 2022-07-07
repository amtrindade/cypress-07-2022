/// <reference types="cypress" />

describe('Should be validate title page', () => {

    it('Shoud be title', () => {

        cy.visit("http://antoniotrindade.com.br/treinoautomacao/index.html");
        cy.title().should("to.be.equal", "Treino Automação de Testes")
    })
})