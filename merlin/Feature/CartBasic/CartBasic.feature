#Author: Aleksandra Torbe'
Feature: Shopping Cart (Basic)
Description: Testing basic shopping cart functionalities
  
  Scenario Outline: (ID: Cart-B-1) Adding a product to the shopping cart
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    And Quantity one of the products in the cart is correct
    And Title of the product in the cart is correct
    And Quantity one in the input field is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-B-2) Information about a product is displayed 
    Given The "<browser>" is turned on
    And User is on Home Page
    And User goes to chosen product's page
    And User clicks Do koszyka button on this page
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    And Information about product's title is displayed
    And Information about product's author is displayed
    And Information about product's price is displayed
    And Product's title is linked to its page
    And Product's image is linked to its page
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
          
  Scenario Outline: (ID: Cart-B-3) Adding a product to the shopping cart from a product's page
    Given The "<browser>" is turned on
    And User is on Home Page
    When User goes to some product's page
    And User clicks Do koszyka button on this page
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    And Quantity one of the products in the cart is correct
    And Title of the product in the cart is correct
    And Quantity one in the input field is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
   Scenario Outline: (ID: Cart-B-4) Adding the same product to the shopping cart again
   Description: When user adds a product that is already in the cart
   system should change quantity instead of adding a new position. 
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks Do koszyka button
    And User clicks Powroc do sklepu button
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    And Quantity two of the products in the cart is correct
    And Title of the product in the cart is correct
    And Quantity two in the input field is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
   Scenario Outline: (ID: Cart-B-5) Adding more products to the shopping cart
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks Do koszyka button
    And User clicks Powroc do sklepu button
    And User clicks another Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    And Quantity two of the products in the cart is correct
    And Quantity one in the input field is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-B-6) Final value (sum) of products in the shopping cart
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks Do koszyka button
    And User clicks Powroc do sklepu button
    And User clicks another Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    And Summed value of products in the cart is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-B-7) Removing a product from the shopping cart
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    When User clicks Usun hyperlink
    Then Quantity zero of the products in the cart is correct
    And Information about empty cart is displayed
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-B-8) Removing a product from the shopping cart when more products are in it
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Powroc do sklepu button
    And User clicks another Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    When User clicks Usun hyperlink
    Then Quantity one of the products in the cart is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
  
  Scenario Outline: (ID: Cart-B-9) Products added to the shopping cart staying in the shopping cart after login
  Description: When user has products in the shopping cart when he/she is signed out these products should
  appear in the shopping cart after login (when user had nothing in the shopping cart on his/her account before). 
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    And Shopping cart page is opened
    #login
    When User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    Then Title of the product in the cart is correct
    And Quantity one in the input field is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
          
  Scenario Outline: (ID: Cart-B-10) Products disappearing from the shopping cart after logout
  Description: When user has products in the shopping cart
  these products shouldn't be displayed after logout when user isn't signed in.
    Given The "<browser>" is turned on
    And User is on Home Page
    #login
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    And Cart is empty
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    And Shopping cart page is opened
    #logout
    When User clicks WYLOGUJ SIE hyperlink
    Then Quantity zero of the products in the cart is correct
    And Information about empty cart is displayed
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-B-11) Products reappearing in the shopping cart after login again
  Description: When user has products in the shopping cart they should
  be displayed after login again when user is signed in. 
    Given The "<browser>" is turned on
    And User is on Home Page
    #login
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    And Cart is empty
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    And Shopping cart page is opened
    And Information about products is displayed
    #logout
    When User clicks WYLOGUJ SIE hyperlink
    #login
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    Then Title of the product in the cart is correct
    And Quantity one in the input field is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |