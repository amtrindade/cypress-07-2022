/// <reference types="cypress" />

describe('Should be validate title page', () => {

    it('Shoud be title', () => {
        cy.visit("/");
        cy.title().should("to.be.equal", "Treino Automação de Testes")
    })

    describe('WebElements test', ()=> {

        it('Display textField', ()=>{
            cy.visit("/elementsweb.html");
            cy.title().should("to.be.equal", "WebElements Test Page Lab");

            cy.get("[name='txtbox1']").should("be.enabled");
            cy.get(`[name='txtbox2']`)
                .should("be.disabled")
                .should("not.be.enabled");
        });

        it('Should validade label', () => {
            cy.visit("/elementsweb.html");
            cy.get('form > :nth-child(1) > .text-muted')
                .should("have.text", "TextField:")
        })

        it('Send text to textfield', () => {
            cy.visit("/elementsweb.html");
            cy.get("[name='txtbox1']").type("Antônio").should('have.value', 'Antônio');

            cy.get(`[name='txtbox2']`)
                .type("envia texto", {force: true})
                .should("have.value", "envia texto")
        })

        it('Work with RadioButton', () => {
            cy.visit("/elementsweb.html");
            
            cy.get("[name='radioGroup1']").first().check().should("be.checked");
            cy.get("[name='radioGroup1']").last().check().should("be.checked");
            cy.get("[name='radioGroup1']").check("Radio 3").should("be.checked");
            cy.get("[name='radioGroup1']").last().should("not.be.checked");

            cy.get("[name='radioGroup1']").should("have.length", 4);
        })

        it.only('Work with CheckBox', () => {
            cy.visit("/elementsweb.html");

            cy.get("[name='chkbox']").should("have.length", 4); 
            cy.get("[name='chkbox']")
                .check("Check 2")
                .should("be.checked")
                .uncheck("Check 2")
                .should("not.be.checked");
            
            cy.get("[name='chkbox']").check( {multiple: true} );
            cy.get("[name='chkbox']").first().should("be.checked");
            cy.get("[name='chkbox']").should("be.checked");
            cy.get("[name='chkbox']").first().uncheck().should("not.be.checked");
            
            //Não validou todos checados da forma como deveria
            cy.get("[name='chkbox']").should("be.checked");
        })
    })
})