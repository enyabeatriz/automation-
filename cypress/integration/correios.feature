@correios
Feature: Busca correios

Scenario: TC_001 usuario faz busca em correio com cep
 Given usuario acessa correios 
 When usuario preenche campo "endereço" com "69082-640"
 Then usuario faz click em "buscar"

Scenario: TC_002 usuario faz busca em correio com instituto creathus 
 Given usuario acessa correios 
 When usuario preenche campo "endereço" com "instituto creathus"
 Then usuario faz click em "buscar"