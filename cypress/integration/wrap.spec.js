/// <reference types="cypress" />

describe("Todo Spec", () => {
    before(() => {
       cy.visit("/elementsweb.html");
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Work with Wrap', () =>{
        cy.get("[name='txtbox1']").then(($el) => {
            //$el.val("Antonio");
            cy.wrap($el).type("Antonio").should("have.value", "Antonio");
        })
    })

    it.only('Wrap sinc', () => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(10);
            }, 500);
        });

        cy.get("[name='alertbtn']").then(() => console.log("Encontrei o botão de alert"));
        //promise.then(num => console.log(num));
        cy.wrap(promise).then((ret) => console.log(ret));
        cy.get("[name='confirmbtn']").then(() => console.log("Encontrei o botão de confirm"));
    })
})

