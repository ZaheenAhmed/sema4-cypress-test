/// <reference types = "Cypress" />

    // Elements located on Google Front Page
    var a_phones = "//a[contains(text(),'Phones')]";
    var a_tablets = "//a[contains(text(),'Tablets')]";
    var a_laptops = "//a[contains(text(),'Laptops')]";

export class GoogleFrontPage {

    //Function to select phones element
    selectPhones(){
        cy.wait(1000);
        cy.xpath(a_phones).click();
    }

    //Function to select tablets element
    selectTablets(){
        cy.xpath(a_tablets).click();
    }

    //Function to select laptops element
    selectLaptops(){
        cy.xpath(a_laptops).click();
    }

}

export const googleFrontPage = new GoogleFrontPage();