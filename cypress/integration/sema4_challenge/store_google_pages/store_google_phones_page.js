/// <reference types = "Cypress" />

    // Elements located on the Phones page 
    var a_pixel3 = '[href="/product/pixel_3"] > .mqn2-anr > .mqn2-ab9';
    var a_pixelStand = "//a[2]//div[1]//img[1]";
    var a_pixel2 = "//a[3]//div[1]//img[1]";
    var a_pixelCases = "//a[4]//div[1]//img[1]";
    var a_googlePixelBuds = "//a[5]//div[1]//img[1]";
    var a_Accessories = "//a[6]//div[1]//img[1]";

export class GooglePhonesPage {

    //Function to select pixel 3
    selectPixel3(){
        cy.wait(1000);
        cy.get(a_pixel3).click({ force: true });
    }

    //Function to select pixel stand
    selectPixelStand(){
        cy.xpath(a_pixelStand).click();
    }

    //Function to select pixel 2
    selectPixel2(){
        cy.xpath(a_pixel2).click();
    }

    //Function to select pixel cases
    selectPixelCases(){
        cy.xpath(a_pixelCases).click();
    }

    //Function to select pixel buds
    selectPixelBuds(){
        cy.xpath(a_googlePixelBuds).click();
    }

    //Function to select pixel accessories
    selectAccessories(){
        cy.xpath(a_Accessories).click();
    }
}

export const googlePhonesPage = new GooglePhonesPage();