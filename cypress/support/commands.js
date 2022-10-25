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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

var userData = require("../fixtures/userPassword.json")

Cypress.Commands.add('fazerLogin', () => {
    cy.visit('/')

    cy.get('[data-test="username"]')
      .clear()
      .type(userData.user)    

    cy.get('[data-test="password"]')
      .clear()
      .type(userData.password, { log:false })

    cy.get('[data-test="login-button"]')
      .should('be.visible')  
      .click()

    cy.get('.app_logo')
      .should('be.visible')

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .click()

    cy.get('.shopping_cart_link')
      .click()

    cy.get('[data-test="checkout"]')
      .should('be.visible')
      .click()

        cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]')
      .clear()
      .type('standard_user')    

    cy.get('[data-test="password"]')
      .clear()
      .type('secret_sauce')

    cy.get('[data-test="login-button"]')
      .should('be.visible')  
      .click()

    cy.get('.app_logo')
      .should('be.visible')

    if(cy.get('[data-test="remove-sauce-labs-backpack"]'))
      cy.get('[data-test="remove-sauce-labs-backpack"]')
        .click()
    

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
      .should('be.visible')
      .click()

    cy.get('.shopping_cart_link')
      .click()

    cy.get('[data-test="checkout"]')
      .should('be.visible')
      .click()

    cy.get('[data-test="firstName"]')      
      .clear()
      .type('Rayane')

    cy.get('[data-test="lastName"]')
      .clear()
      .type('Paiva')

    cy.get('[data-test="postalCode"]')
      .clear()
      .type('32110040')

    cy.get('[data-test="continue"]')
      .should('be.visible')
      .click()

    cy.get('[data-test="finish"]')
      .should('be.visible')
      .click()
})