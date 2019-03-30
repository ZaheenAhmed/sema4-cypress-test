/// <reference types = "Cypress" />

// Elements located on the Review choices page
var b_add_to_cart = ".cta-button-container > .mdc-button"

export class GoogleReviewChoicesPage {

    //Function to click add to cart
    clickAddToCart(){
        cy.wait(2000);
        cy.get(b_add_to_cart).click({force: true});
    }

}

export const googleReviewChoicesPage = new GoogleReviewChoicesPage();