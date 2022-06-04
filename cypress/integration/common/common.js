import { Then } from "cypress-cucumber-preprocessor/steps";


import {
  searchElement
} from "../../support/functions";

before(() => {
  cy.clearCookies() // clear all cookies 
});


When(/^usuario faz click em "([^"]*)"$/, (btn) => {

  let page = searchElement()

  //Vou buscar ao json correspondente a page
  cy.fixture(`${page}/${page}`).then((json) => {

    //Setea o input com id correspondente
    let input = json[btn]
    cy.get(input).then($button => {
      if ($button.is(':visible')) {
        $button
          .click();
      }
    })

  })
});

When(/^usuario preenche campo "([^"]*)" com "([^"]*)"$/, (locator, text) => {

  let page = searchElement()

  cy.fixture(`${page}/${page}`).then((json) => {
    let input = json[locator]

    cy.get(input).type(text)

  })

})



