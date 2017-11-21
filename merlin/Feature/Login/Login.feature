#Author: Aleksandra Torbe'
Feature: Login
Description: Testing Login functionalities
  
  Scenario Outline: (ID: Login-1) Successful login with a valid credentials
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    Then Message Jestes zalogowany is displayed in a popup window
    And TWOJE KONTO feature is enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
     
  Scenario Outline: (ID: Login-2) Unsuccessful login with an invalid E-mail address format and a valid password
  	Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters invalid E-mail format and valid password in a popup window
    And User clicks the Zaloguj sie button
    Then Message Wprowadzono bledne dane is displayed in a popup window
    And TWOJE KONTO feature is not enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
    
  Scenario Outline: (ID: Login-3) Unsuccessful login with a valid E-mail address and an invalid password
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and invalid password in a popup window
    And User clicks the Zaloguj sie button
    Then Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window
    And TWOJE KONTO feature is not enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
       
  Scenario Outline: (ID: Login-4) Unsuccessful login with a non-existing E-mail address and a valid password
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters non-existing E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    Then Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window
    And TWOJE KONTO feature is not enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
       
  Scenario Outline: (ID: Login-5) Unsuccessful login with a valid E-mail address and no password
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and no password in a popup window
    And User clicks the Zaloguj sie button
    Then Message Ta wartosc nie powinna byc pusta is displayed in a popup window
    And TWOJE KONTO feature is not enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
       
  Scenario Outline: (ID: Login-6) Unsuccessful login with no E-mail address and a valid password
    Given The "<browser>" is turned on
    And User is on Home Page
    When User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters no E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    Then Message Ta wartosc nie powinna byc pusta is displayed in a popup window
    And TWOJE KONTO feature is not enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
       
  Scenario Outline: (ID: Login-7) No login option when already signed in
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    And User clicks the Zaloguj sie button
    Then There is no CZESC ZALOGUJ SIE hyperlink
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
       
  Scenario Outline: (ID: Login-8) Existing forgotten password option
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    When There is Zapomniales hasla hyperlink and user clicks it
    And User enters e-mail address in input field and submits
    Then The notice about a sent e-mail message is displayed and a button Zamknij enabled
    And Browser can be turned off
  Examples:
     | browser |
     | Chrome  |
     | Firefox |
       
  Scenario Outline: (ID: Login-9) Checkbox for login with old credentials
  Description: User can sign in with credentials for an account created before 2016, 1st of March
    Given The "<browser>" is turned on
    And User is on Home Page
    And User clicks the CZESC ZALOGUJ SIE hyperlink
    And User enters valid E-mail and valid password in a popup window
    When User selects a checkbox that he wants to login with old username and saw the agreement
    And User clicks the Zaloguj sie button
    Then Message Jestes zalogowany is displayed in a popup window
    And TWOJE KONTO feature is enabled
    And Browser can be turned off
  
  Examples:
     | browser |
     | Chrome  |
     | Firefox |