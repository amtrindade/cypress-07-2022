/// <reference types="cypress" />

describe("Todo Spec", () => {
    before(() => {
       cy.visit("/elementsweb.html");
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Work with Alerts...', () => {
        cy.get("[name='alertbtn']").click();

        cy.on("window:alert", (msg) => {
            console.log(msg);
            expect(msg).to.be.equal("Eu sou um alerta!")
        })

    })

    it('Work with alerts with mocks', () => {
        const stub = cy.stub();

        cy.on('window:alert', stub)

        cy.get("[name='alertbtn']").click().then(() => {
                expect(stub.getCall(0)).to.be.calledWith("Eu sou um alerta!")
        })
    })

    it('Work with Confirmation prompt', () =>{
        cy.window().then((win) => {
            cy.stub(win, "prompt").returns("2022");
        });

        cy.on("window:confirm", (msg) => {
            expect(msg).to.be.equal("O ano é 2022?");
        })

        cy.on("window:alert", (msg) => {
            expect(msg).to.be.equal("Feito!");
        })

        cy.get("#promptBtn").click();
    })

    it('Test with alerts and wrap', () => {
        let message;

        cy.on("window:alert", (msg) => {
            message = msg;
        })

        cy.get("[name='alertbtn']").click();

        cy.get("[name='txtbox1']").then(($el) => {
            cy.wrap($el).type(message).should("have.value", "Eu sou um alerta!");
        })
    })
})


