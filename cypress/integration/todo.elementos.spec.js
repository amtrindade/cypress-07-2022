/// <reference types="cypress" />

describe("Todo Spec", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo");
    })

    it('Should include new task', () => {
        const task = "Fix the bug";

        cy.get('.todo-list li').should("have.length", 2);

        cy.get('[data-test="new-todo"]').type(`${task}{enter}`);
        cy.get('.todo-list li').should("have.length", 3);
        cy.get('.todo-list li').last().should("have.text", `${task}`);

    })

    describe('Tests with task add', () => {
        const task = "Fix the bug";

        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type(`${task}{enter}`);
        })

        it('Should check task', () => {
            //cy.get('.todo-list li').last().find('input').check();
            cy.get('.todo-list').contains(`${task}`)
                .parent().find('input').check().should('be.checked');
        })

        it('Should validate complete task', () => {
            cy.get('.todo-list').contains(`${task}`)
                .parent().find('input').check().should('be.checked');

            cy.get('.filters').contains('Completed').click();
            cy.get('.todo-list li').should("have.length", 1);
            cy.get('.todo-list li').should("have.text", `${task}`);
        })

        it('Should delete new task', () => {
            cy.get('.todo-list').contains(`${task}`)
                .parent().find('input').check().should('be.checked');
            cy.get('.filters').contains('Completed').click();

            cy.get('.todo-list').contains(`${task}`)
                .parent().find('.destroy').click({force: true});
            cy.get('.filters').contains('All').click();

            cy.get('.todo-list li').should("have.length", 2);
            cy.get('.todo-list li').should("not.have.text", `${task}`);
        })

    })
})