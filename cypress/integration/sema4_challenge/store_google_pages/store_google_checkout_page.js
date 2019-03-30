/// <reference types = "Cypress" />

// Elements located on the checkout page 
var t_email= 'input[name="ContactEmailField"]'
var t_email_confirm = 'input[name="ContactEmailConfirm"]'
var t_name = 'input[name="RECIPIENT"]'
var t_address = 'input[name="ADDRESS_LINE_1"]'
var t_city = 'input[name="LOCALITY"]'
var d_state = 'input[class="addressedit-select"]'
var t_zip = 'input[name="POSTAL_CODE"]'
var t_phone = 'input[name="PHONE_NUMBER"]'


export class GoogleCheckoutPage {

    //Function to enter email
    enterEmail(email){
        cy.typeInIframeElement(t_email,email)
    }

    //Function to enter email confirm
    enterEmailConfirm(email){
        cy.typeInIframeElement(t_email_confirm, email)
    }

    //Function to enter name
    enterName(name){
        cy.typeInIframeElement(t_name, name)
    }

    //Function to enter address
    enterAddress(address){
        cy.typeInIframeElement(t_address, address)
    }

    //Function to enter city
    enterCity(city){
        cy.typeInIframeElement(t_city, city)
    }

    //Function to enter state
    selectState(state){
        //cy.typeInIframeElement(d_state, .select(state)) // not an actual drop down - need to find work around
    }

    //Function to enter zip code
    enterZip(zip){
        cy.typeInIframeElement(t_zip, zip)
    }

    //Function to enter phone number
    enterPhone(phone){
        cy.typeInIframeElement(t_phone, phone)
    }
}

export const googleCheckoutPage = new GoogleCheckoutPage();