/// <reference types="cypress" />

import loc from '../../support/locators'

describe("Local tests", () => {

    beforeEach(() => {
        cy.visit("https://center.umov.me/");
        cy.login('trindade', 'cypress', 'trocarasenha');
        cy.get(loc.MAIN.MENU_LOCAL).click();
    })

    it('Should insert local', () => {
        const descriptionLocal = 'Target Trust - ' + Math.floor(Math.random() * 1001); 

        cy.get(loc.LOCAL_LIST.BTN_ADD).click();
        cy.get(loc.LOCAL_ADD.TF_DESCRIPTION).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.TF_CORPORATE_NAME).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.BTN_SAVE).click();

        cy.search(descriptionLocal);

        cy.xpath(loc.LOCAL_LIST.FN_XP_FIND_LOCAL(descriptionLocal)).should('exist');
    })

    it('Should edit local', () => {
        const descriptionLocal = 'Target Trust - ' + Math.floor(Math.random() * 1001); 

        cy.get(loc.LOCAL_LIST.BTN_ADD).click();
        cy.get(loc.LOCAL_ADD.TF_DESCRIPTION).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.TF_CORPORATE_NAME).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.BTN_SAVE).click();

        cy.search(descriptionLocal);

        cy.xpath(loc.LOCAL_LIST.FN_XP_EDIT_LOCAL(descriptionLocal)).click();

        //edição
        const descriptionLocalEdit = descriptionLocal + ' - edit'
        cy.get(loc.LOCAL_ADD.TF_DESCRIPTION).clear().type(descriptionLocalEdit);
        cy.get(loc.LOCAL_ADD.TF_CORPORATE_NAME).clear().type(descriptionLocalEdit);
        cy.get(loc.LOCAL_ADD.BTN_SAVE).click();

        cy.search(descriptionLocalEdit);

        cy.xpath(loc.LOCAL_LIST.FN_XP_FIND_LOCAL(descriptionLocalEdit)).should('exist');
    })

    it('Should inactive local', () => {
        const descriptionLocal = 'Target Trust - ' + Math.floor(Math.random() * 1001); 

        cy.get(loc.LOCAL_LIST.BTN_ADD).click();
        cy.get(loc.LOCAL_ADD.TF_DESCRIPTION).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.TF_CORPORATE_NAME).type(descriptionLocal);
        cy.get(loc.LOCAL_ADD.BTN_SAVE).click();

        cy.search(descriptionLocal);

        cy.xpath(loc.LOCAL_LIST.FN_XP_EDIT_LOCAL(descriptionLocal)).click();

        cy.get(loc.LOCAL_ADD.CHK_ACTIVE).uncheck();
        cy.get(loc.LOCAL_ADD.BTN_SAVE).click();

        cy.search(descriptionLocal);

        cy.xpath(loc.LOCAL_LIST.FN_XP_FIND_LOCAL(descriptionLocal)).should('not.exist');
    })
})