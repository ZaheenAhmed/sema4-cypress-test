/// <reference types = "Cypress" />

// Elements located on the Color page 
var b_preferred_care = "//div[@class='mqn-button mqn-button--hairline selection-0 mdc-ripple-upgraded']"
var b_trade_phone = "//div[@class='mqn-button mqn-button--hairline selection-1 mdc-ripple-upgraded']"
var b_next = "//button[@class='mdc-button mdc-button--unelevated GmFillButton GmTextLabelButton']"
var a_skip = ".mqn-headline__button > .mqn-button"
var b_add_to_order = ".quantumWizDialogPaperdialogBottomButtons > .quantumWizButtonEl > .quantumWizButtonPaperbuttonFocusOverlay"

export class GoogleExtraServicesPage {

    //Function to select preffered care service
    selectPrefferedCare(){
        cy.wait(2000);
        cy.xpath(b_preferred_care).click();
        cy.get(b_add_to_order).click();
    }

    //Function to select trade in your phone service
    selectTradePhone(){
        cy.xpath(b_trade_phone).click();
    }

    //Function to click skip
    clickSkip(){
        cy.get(a_skip).click();
        cy.wait(2000);
    }

    //Function to click next
    clickNext(){
        cy.xpath(b_next).click();
    }
}

export const googleExtraServicesPage = new GoogleExtraServicesPage();