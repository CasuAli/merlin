#Author: Aleksandra Torbe'
Feature: Shopping Cart (Quantity)
Description: Testing shopping cart functionalities connected with quantity of products
      
  Scenario Outline: (ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart 
  Description: User can change quantity of products in the cart entering
  a value in the input field. When entered value is incorrect
  system should change it to correct value.
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    And Shopping cart page is opened
    When User changes "<quantity>" of a product
    And User clicks Przelicz hyperlink
    Then Quantity "<final_quantity>" in the input field is correct
    And Browser can be turned off
  Examples:
     | browser | quantity | final_quantity |
     | Chrome  | 5  	  | 5			   |
     | Firefox | 5		  | 5			   |
     | Chrome  | 0  	  | 1			   |
     | Firefox | 0		  | 1			   |
     | Chrome  | 4.6  	  | 4			   |
     | Firefox | 4.6	  | 4			   |
     | Chrome  | 3,6  	  | 3			   |
     | Firefox | 3,6	  | 3			   |
     | Chrome  | 2 0  	  | 2			   |
     | Firefox | 2 0	  | 2			   |
     
  Scenario Outline: (ID: Cart-Q-6 to Cart-Q-8) Changing quantity of a product to invalid in the shopping cart 
  Description: User can change quantity of products in the cart entering
  a value in the input field. When entered value is invalid
  system should change it to correct value and show a notice.
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    And Shopping cart page is opened
    When User changes "<quantity>" of a product
    And User clicks Przelicz hyperlink
    Then Quantity "<final_quantity>" in the input field is correct
    And Notice about error is displayed
    And Notice contains a message about error
    And Browser can be turned off
  Examples:
     | browser | quantity | final_quantity |
     | Chrome  | -1  	  | 1			   |
     | Firefox | -1		  | 1			   |
     | Chrome  | q  	  | 1			   |
     | Firefox | q		  | 1			   |
     | Chrome  | 101  	  | 100			   |
     | Firefox | 101	  | 100			   |
     
  Scenario Outline: (ID: Cart-Q-9) Changing quantity of a product in the shopping cart over stock level 
  Description: User can change quantity of products in the cart entering
  a value in the input field. When entered value is bigger than amount
  of a product in the stock system should change it to correct value and show a notice.
    Given The "<browser>" is turned on
    And User is on a specific product's page
    And User clicks Do koszyka button on this page
    And User clicks Przejdz do koszyka button
    And Shopping cart page is opened
    When User changes quantity of a product
    And User clicks Przelicz hyperlink
    Then Quantity in the input field is changed to stock level
    And Notice about error is displayed
    And Notice contains a message about stock level
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |