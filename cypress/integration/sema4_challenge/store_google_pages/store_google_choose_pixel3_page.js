/// <reference types = "Cypress" />

// Elements located on the Pixel 3 page
var b_select_5_inch= "//div[@class='mqn-button mqn-button--hairline selection-0 mdc-ripple-upgraded']"
var b_select_6_inch = ":nth-child(2) > .mqn-lobby__card__inner > .mqn-lobby__card__meta > .mqn-lobby__card__buttons > .mqn-button"
var b_next = "//button[@class='mdc-button mdc-button--unelevated GmFillButton GmTextLabelButton']"

export class GoogleChoosePixel3Page {

    //Function to select 5 inch display for phone
    selectFiveInchDisplay(){
        cy.xpath(b_select_5_inch).click();
    }

    //Function to select six inch display for phone
    selectSixInchDisplay(){
        cy.wait(2000)
        cy.get(b_select_6_inch).click();
    }

    //Function to click next
    clickNext(){
        cy.xpath(b_next).click();
    }
}

export const googleChoosePixel3Page = new GoogleChoosePixel3Page();