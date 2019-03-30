/// <reference types = "Cypress" />

// Elements located on the Shop Accessories page 
var b_go_to_cart= '[jsaction="JIbuQc:IXVHne"] > .mdc-button > .mdc-button__label'

export class GoogleShopAccessoriesPage {

    //Function to click go to cart
    clickGoToCart(){
        cy.wait(1000);
        cy.get(b_go_to_cart).click();
    }
}

export const googleShopAccessoriesPage = new GoogleShopAccessoriesPage();