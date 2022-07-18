/// <reference types="cypress" />

import loc from '../../support/locators'

describe("Todo Spec", () => {
    before(() => {
        cy.visit("https://center.umov.me/");
        cy.login('trindade', 'cypress', 'alterarsenha');
    })

    beforeEach(() => {
        cy.get(loc.MAIN.MENU_LOCAL).click();
    })

    it('Should insert local', () => {
        const descriptionLocal = 'Target Trust - ' + Math.floor(Math.random() * 1001); 

        cy.get(loc.LOCAL_LIST.BTN_ADD).click();
        cy.get(loc.LOCAL_ADD.TF_DESCRIPTION).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.TF_CORPORATE_NAME).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.BTN_SAVE).click();

        cy.get(loc.LOCAL_LIST.TF_SEARCH).type(descriptionLocal);
        cy.get(loc.LOCAL_LIST.BTN_SEARCH).click();

        cy.xpath(loc.LOCAL_LIST.FN_XP_FIND_LOCAL(descriptionLocal)).should('exist');
    })

    it.only('Should edit local', () => {
        const descriptionLocal = 'Target Trust - ' + Math.floor(Math.random() * 1001); 

        cy.get(loc.LOCAL_LIST.BTN_ADD).click();
        cy.get(loc.LOCAL_ADD.TF_DESCRIPTION).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.TF_CORPORATE_NAME).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.BTN_SAVE).click();

        cy.get(loc.LOCAL_LIST.TF_SEARCH).type(descriptionLocal);
        cy.get(loc.LOCAL_LIST.BTN_SEARCH).click();

        cy.xpath(loc.LOCAL_LIST.FN_XP_EDIT_LOCAL(descriptionLocal)).click();


        
    })
})