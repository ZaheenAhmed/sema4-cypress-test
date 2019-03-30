/// <reference types = "Cypress" />

// Elements located on the storage page 
var b_64_gb = ":nth-child(1) > .mqn-cards__card__inner > .mqn-cards__card__meta"
var b_128_gb = "//div[contains(text(),'128GB')]"
var b_next = "//button[@class='mdc-button mdc-button--unelevated GmFillButton GmTextLabelButton']"

export class GoogleStoragePage {

    //Function to select 64 gb
    select64Gb(){
        cy.wait(2000);
        cy.get(b_64_gb).click();
    }

    //Function to select 128 gb
    select128Gb(){
        cy.xpath(b_128_gb).click();
    }

    //Function to click next
    clickNext(){
        cy.xpath(b_next).click();
    }
}

export const googleStoragePage = new GoogleStoragePage();