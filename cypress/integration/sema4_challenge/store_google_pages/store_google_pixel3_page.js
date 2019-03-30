/// <reference types = "Cypress" />

    // Elements located on the Phones page 
    var b_buyNow = "//a[@class='mqn2-aao ng-scope mqn2-aat']"
    var b_buy = ".price-and-button-container > .button-wrap > div > .button > .button-text"

export class GooglePixel3Page {

    //Function to click Buy Now
    selectBuyNow(){
        cy.xpath(b_buyNow).click();
    }

    //Function to click Buy
    selectBuy(){
        cy.wait(1000);
        cy.get(b_buy).click();
    }
}

export const googlePixel3Page = new GooglePixel3Page();