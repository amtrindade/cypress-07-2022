const locators = {
    LOGIN: {
        TF_WORKSPACE : '#workspace',
        TF_USER: '#username',
        TF_PASS: '#password',
        BTN_ACCESS: '#submit_button'
    },
    MAIN: {
        IMG_LOGO: 'a.topbar-widget > img',
        MENU_LOCAL: '[href="/CenterWeb/serviceLocal"]'
    },
    LOCAL_LIST: {
        BTN_ADD: '#addServiceLocal',
        FN_XP_FIND_LOCAL: value => `//td[contains(text(),'${value}')][1]`,
        TF_SEARCH: '#genericFilter',
        BTN_SEARCH: '#serviceLocalList_doSearch',
        FN_XP_EDIT_LOCAL: value => `//td[contains(text(), '${value}')][1]/..//*[contains(@class, 'edit-record-serviceLocal')]`
    },
    LOCAL_ADD:{
        TF_DESCRIPTION: '#serviceLocal_description',
        TF_CORPORATE_NAME: '#serviceLocal_corporateName',
        BTN_SAVE: '#formServiceLocal_doSave',
        CHK_ACTIVE: '#serviceLocal_active'


    }
}

export default locators;