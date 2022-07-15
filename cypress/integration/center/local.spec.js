/// <reference types="cypress" />

import loc from '../../support/locators'

describe("Todo Spec", () => {
    before(() => {
       cy.visit("https://center.umov.me/");

       cy.get(loc.LOGIN.TF_WORKSPACE).type('trindade');
       cy.get(loc.LOGIN.TF_USER).type('cypress');
       cy.get(loc.LOGIN.TF_PASS).type('trocarsenhavalendo');
       cy.get(loc.LOGIN.BTN_ACCESS).click();

       cy.get(loc.MAIN.IMG_LOGO).should("be.visible")
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Should insert local', () => {

        


    })
})