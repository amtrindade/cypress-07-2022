/// <reference types="cypress" />

describe("Tests API Rest", () => {

    it('GET Jedi', () => {
        const value = 1;

        cy.request({
            url: `https://swapi.dev/api/people/${value}`,
            method: 'GET'
        }).as('getJedi');

        cy.get('@getJedi').then(response => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.property('name', 'Luke Skywalker');
            expect(response.body).to.have.property('height', '172');
        })
    })
})

