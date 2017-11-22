#Author: Aleksandra Torbe'
Feature: Logout
Description: Testing Logout functionalities
  
  Scenario Outline: (ID: Logout-1) Successful logout
    Given The "<browser>" is turned on
    And User is on Home Page
    #login
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    #logout
    When User clicks WYLOGUJ SIE hyperlink
    Then User is signed out
    And TWOJE KONTO feature is not enabled
    And Feature of login is enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
       
  Scenario Outline: (ID: Logout-2) Unsuccessful logout when user not signed in
    Given The "<browser>" is turned on
    And User is on Home Page
    When User is signed out
    Then Feature of login is enabled 
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
       
  Scenario Outline: (ID: Logout-3) Still signed out when navigating to a previous page after successful logout
  Description: User is signed in, browses a product's page and decides to sign out.
  After this user goes back to the previous site. User should still be signed out. 
    Given The "<browser>" is turned on
    And User is on Home Page
    #login
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    When User goes to a product's page
    #logout
    And User clicks WYLOGUJ SIE hyperlink
    And User navigates to the previous page
    And User goes to TWOJE KONTO page
    Then User is signed out
    And Feature of login is enabled
    And There is a message about having to log in and a login button
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Logout-4) Still signed out after running a new session
  Description: User is signed in, then quits session.
  After running new session user should still be signed out. 
  
    Given The "<browser>" is turned on
    And User is on Home Page
    #login
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    And Browser can be turned off
    When User runs a new session
    Then User is signed out
    And Feature of login is enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |