/// <reference types="cypress" />

describe("Todo Spec", () => {

    it('Should include new task', () => {
        cy.visit("https://example.cypress.io/todo");

        const task = "Fix the bug";

        cy.get('.todo-list li').should("have.length", 2);

        cy.get('[data-test="new-todo"]').type(`${task}{enter}`);
        cy.get('.todo-list li').should("have.length", 3);
        cy.get('.todo-list li').last().should("have.text", `${task}`);

    })

    it('Should check task', () => {
        cy.visit("https://example.cypress.io/todo");

        const task = "Fix the bug";

        cy.get('[data-test="new-todo"]').type(`${task}{enter}`);
        //cy.get('.todo-list li').last().find('input').check();
        cy.get('.todo-list').contains(`${task}`)
            .parent().find('input').check().should('be.checked');
    })




})