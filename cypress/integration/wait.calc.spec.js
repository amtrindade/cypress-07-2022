/// <reference types="cypress" />

describe("Work with hooks", () => {
    beforeEach(() =>{
        cy.visit("http://antoniotrindade.com.br/treinoautomacao/desafiosoma.html")
    })

    it('Test sum with wait', () => {
        cy.get('#number1').type('5');
        cy.get('#number2').type('7');
        cy.get('#somar').click();
        //cy.wait(1000);
        cy.get('#total', {timeout: 4000}).should('have.value', '12');
    })
})
