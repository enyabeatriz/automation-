import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "http://www.buscacep.correios.com.br";

  
Given(/^usuario acessa correios$/, () => {
  cy.visit(url);
});





  



