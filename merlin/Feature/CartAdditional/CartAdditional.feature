#Author: Aleksandra Torbe'
Feature: Shopping Cart (Additional)
Description: Testing additional shopping cart functionalities
  
  Scenario Outline: (ID: Cart-A-1) Checkout
  Description: User should use checkout to buy products
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    When User clicks Przejdz do platnosci button
    Then User is on checkout page
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-A-2) Continuing shopping
  Description: User can come back to the Home Page to continue shopping
  without losing products in the shopping cart
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    When User clicks Wroc do zakupow hyperlink
    Then User comes back to Home Page
    And Quantity one of the products in the cart is correct
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-A-3) Promo code
  Description: User can use promo code in the shopping cart before checkout
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    When User clicks Posiadasz link promocyjny? hyperlink
    Then Input field for promo code is enabled
    And OK button for submitting promo code is enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-A-4) Estimated sending date of products being displayed in the shopping cart
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    And Notice is displayed
    And Information about sending date of products is displayed
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-A-5) Adding Bookmark
  Description: User can save a product to remember about it later
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks Do koszyka button
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
    And Dodaj do schowka hyperlink is enabled
    When User clicks Dodaj do schowka hyperlink
    Then Produkt zostal dodany do schowka hyperlink is displayed
    When User clicks Produkt zostal dodany do schowka hyperlink
    Then Dodaj do schowka hyperlink is enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-A-6) Clicking on a product's title directing to its page
    Given The "<browser>" is turned on
    And User is on Home Page
    And User goes to some product's page
    And User clicks Do koszyka button on this page
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
	When User clicks on a product's title
	Then User is directed to a product's page
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Cart-A-7) Clicking on a product's image directing to its page
    Given The "<browser>" is turned on
    And User is on Home Page
    And User goes to some product's page
    And User clicks Do koszyka button on this page
    And User clicks Przejdz do koszyka button
    Then Shopping cart page is opened
	When User clicks on a product's image
	Then User is directed to a product's page
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |