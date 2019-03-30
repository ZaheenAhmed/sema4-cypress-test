/// <reference types = "Cypress" />

// Elements located on the Color page 
var b_black= ":nth-child(1) > .mqn-lobby-swatch__card__inner > .mqn-lobby-swatch__card__meta > .mqn-lobby-swatch__card__buttons > .mqn-button"
var b_white = "//div[@class='mannequin-container']//div[2]//div[1]//div[2]//div[2]//div[1]"
var b_notPink = "//div[@class='mqn-lobby-swatch ng-scope']//div[3]//div[1]//div[2]//div[2]//div[1]"
var b_next = "//button[@class='mdc-button mdc-button--unelevated GmFillButton GmTextLabelButton']"

export class GoogleColorPage {

    //Function to select Black
    selectBlack(){
        cy.get(b_black).click();
    }

    //Function to select White
    selectWhite(){
        cy.xpath(b_white).click();
    }

    //Function to select Not Pink
    selectNotPink(){
        cy.xpath(b_notPink).click();
    }

    //Function to click next
    clickNext(){
        cy.xpath(b_next).click();
    }
}

export const googleColorPage = new GoogleColorPage();