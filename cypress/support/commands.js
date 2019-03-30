// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Custom command that bundles the iframe method and types text into it 
Cypress.Commands.add('typeInIframeElement', (elementSelector, textToType) => {
  return cy
    .iframe('[id="paymentsParentDivIdIframe"]', elementSelector).as('checkoutiFrame')
    .then($iframe => {
      cy.get('@checkoutiFrame')
      .find(elementSelector).first()    
      .type(textToType, {force: true}) 
    })
})

// Cypress has no built in command to handle iframes, this is a custom command to find and move into an element in an iframe
Cypress.Commands.add('iframe', (iframeSelector, elSelector) => {
    return cy
      .get(`iframe${iframeSelector || ''}`, { timeout: 10000 })
      .should($iframe => {
        expect($iframe.contents().find(elSelector||'body')).to.exist
      })
      .then($iframe => {
        return cy.wrap($iframe.contents().find('body'))
      })
  })

  // Cypress has no tab command, was thinking of using this to tab to next input box to show error message
  Cypress.Commands.add('typeTab', (shiftKey, ctrlKey) => {
    cy.focused().trigger('keydown', {
        keyCode: 9,
        which: 9,
        shiftKey: shiftKey,
        ctrlKey: ctrlKey
    });
  });
