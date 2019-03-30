/// <reference types = "Cypress" />

// Elements located on the Carrier page 
var b_unlocked= "//div[@class='mqn-h-cards__card__inner selection-0 mdc-ripple-upgraded']"
var b_verizon = "//div[@class='mqn-h-cards__card__inner selection-1 mdc-ripple-upgraded']"
var b_googleFi = ":nth-child(3) > .mqn-h-cards__card__inner"
var b_next = "//button[@class='mdc-button mdc-button--unelevated GmFillButton GmTextLabelButton']"

export class GoogleChooseCarrierPage {

    //Function to select unlocked option
    selectUnlocked(){
        cy.xpath(b_unlocked).click();
    }

    //Function to select verizon
    selectVerizon(){
        cy.xpath(b_verizon).click();
    }

    //Function to select google fi
    selectGoogleFi(){
        cy.wait(1000)
        cy.get(b_googleFi).click();
    }

    //Function to click next
    clickNext(){
        cy.xpath(b_next).click();
    }
}

export const googleChooseCarrierPage = new GoogleChooseCarrierPage();