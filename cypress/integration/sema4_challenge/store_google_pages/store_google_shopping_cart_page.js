/// <reference types = "Cypress" />

// Elements located on the Shopping cart page
var b_guest_checkout= 'div[jscontroller="eoSTdf"] > .button-shadow > .text-center'
var b_sign_in = '.transaction.id-checkout-button'

export class GoogleShoppingCartPage {

    //Function to click guest checkout
    clickGuestCheckout(){
        cy.wait(1000);
        cy.get(b_guest_checkout).click();
    }

    //Function to click sign in
    clickSignIn(){
        cy.wait(1000);
        cy.get(b_sign_in).click();
        }
}

export const googleShoppingCartPage = new GoogleShoppingCartPage();