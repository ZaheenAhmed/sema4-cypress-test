/// <reference types="Cypress" />

import {googleFrontPage} from "./store_google_pages/store_google_front_page"
import {googlePhonesPage} from "./store_google_pages/store_google_phones_page"
import {googleChooseCarrierPage} from "./store_google_pages/store_google_carrier_page"
import {googleChoosePixel3Page} from "./store_google_pages/store_google_choose_pixel3_page"
import {googleColorPage} from "./store_google_pages/store_google_color_page"
import {googleExtraServicesPage} from "./store_google_pages/store_google_extra_services_page"
import {googlePixel3Page} from "./store_google_pages/store_google_pixel3_page"
import {googleReviewChoicesPage} from "./store_google_pages/store_google_review_choices_page"
import {googleStoragePage} from "./store_google_pages/store_google_storage_page"
import {googleShopAccessoriesPage} from "./store_google_pages/store_google_shop_accessories_page"
import {googleShoppingCartPage} from "./store_google_pages/store_google_shopping_cart_page"
import {googleCheckoutPage} from "./store_google_pages/store_google_checkout_page"

describe("Checking out Google Pixel 3", ()=> {
    before("Visit store.google.com", () => {
        cy.visit("https://store.google.com/");
        cy.viewport('macbook-15');
    })
    it("Buying google pixel 3 black", ()=> {

        googleFrontPage.selectPhones();
        googlePhonesPage.selectPixel3();
        googlePixel3Page.selectBuy();
        googleChoosePixel3Page.selectSixInchDisplay();
        googleChooseCarrierPage.selectGoogleFi();
        googleColorPage.selectBlack();
        googleStoragePage.select64Gb();
        googleExtraServicesPage.clickSkip();
        googleReviewChoicesPage.clickAddToCart();
        googleShopAccessoriesPage.clickGoToCart();
        googleShoppingCartPage.clickGuestCheckout();
        googleCheckoutPage.enterEmail("fake_email@example.com");
        googleCheckoutPage.enterEmailConfirm("fake_email@example.com");
        googleCheckoutPage.enterName("Zaheen Ahmed");
        googleCheckoutPage.enterAddress("333 Ludlow Street, South tower 3rd floor");
        googleCheckoutPage.enterCity("Stamford");
        //googleCheckoutPage.selectState("CT"); // this is not a drop down - need to find work around
        googleCheckoutPage.enterZip("06902");
        googleCheckoutPage.enterPhone("2123475654");
    
    })
})
