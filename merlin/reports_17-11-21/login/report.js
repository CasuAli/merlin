$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Aleksandra Torbe\u0027"
    }
  ],
  "line": 2,
  "name": "Login",
  "description": "Description: Testing Login functionalities",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "(ID: Login-1) Successful login with a valid credentials",
  "description": "",
  "id": "login;(id:-login-1)-successful-login-with-a-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Message Jestes zalogowany is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "TWOJE KONTO feature is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login;(id:-login-1)-successful-login-with-a-valid-credentials;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 15,
      "id": "login;(id:-login-1)-successful-login-with-a-valid-credentials;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 16,
      "id": "login;(id:-login-1)-successful-login-with-a-valid-credentials;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 17,
      "id": "login;(id:-login-1)-successful-login-with-a-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "(ID: Login-1) Successful login with a valid credentials",
  "description": "",
  "id": "login;(id:-login-1)-successful-login-with-a-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Message Jestes zalogowany is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "TWOJE KONTO feature is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3628474499,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4814339385,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 124756838,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 268041187,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 73451919,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.message_displayed_success()"
});
formatter.result({
  "duration": 16614,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.KONTO_feature_is_enabled()"
});
formatter.result({
  "duration": 4356182130,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 827748410,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "(ID: Login-1) Successful login with a valid credentials",
  "description": "",
  "id": "login;(id:-login-1)-successful-login-with-a-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Message Jestes zalogowany is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "TWOJE KONTO feature is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5708822553,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3950720424,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 298649771,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 136501865,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 228480539,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.message_displayed_success()"
});
formatter.result({
  "duration": 12460,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.KONTO_feature_is_enabled()"
});
formatter.result({
  "duration": 2997935766,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 227041202,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "(ID: Login-2) Unsuccessful login with an invalid E-mail address format and a valid password",
  "description": "",
  "id": "login;(id:-login-2)-unsuccessful-login-with-an-invalid-e-mail-address-format-and-a-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters invalid E-mail format and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Message Wprowadzono bledne dane is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login;(id:-login-2)-unsuccessful-login-with-an-invalid-e-mail-address-format-and-a-valid-password;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 29,
      "id": "login;(id:-login-2)-unsuccessful-login-with-an-invalid-e-mail-address-format-and-a-valid-password;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 30,
      "id": "login;(id:-login-2)-unsuccessful-login-with-an-invalid-e-mail-address-format-and-a-valid-password;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 31,
      "id": "login;(id:-login-2)-unsuccessful-login-with-an-invalid-e-mail-address-format-and-a-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "(ID: Login-2) Unsuccessful login with an invalid E-mail address format and a valid password",
  "description": "",
  "id": "login;(id:-login-2)-unsuccessful-login-with-an-invalid-e-mail-address-format-and-a-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters invalid E-mail format and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Message Wprowadzono bledne dane is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3092182945,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4689921991,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 91243524,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.user_enters_invalid_email()"
});
formatter.result({
  "duration": 244394058,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 79363701,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.message_displayed_invalid_email()"
});
formatter.result({
  "duration": 218707239,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3182697739,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 794850554,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "(ID: Login-2) Unsuccessful login with an invalid E-mail address format and a valid password",
  "description": "",
  "id": "login;(id:-login-2)-unsuccessful-login-with-an-invalid-e-mail-address-format-and-a-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enters invalid E-mail format and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Message Wprowadzono bledne dane is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5715600127,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4312226443,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 295487155,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.user_enters_invalid_email()"
});
formatter.result({
  "duration": 113442630,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 230427724,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.message_displayed_invalid_email()"
});
formatter.result({
  "duration": 100311126,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3009760840,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 244876607,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "(ID: Login-3) Unsuccessful login with a valid E-mail address and an invalid password",
  "description": "",
  "id": "login;(id:-login-3)-unsuccessful-login-with-a-valid-e-mail-address-and-an-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters valid E-mail and invalid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "login;(id:-login-3)-unsuccessful-login-with-a-valid-e-mail-address-and-an-invalid-password;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 43,
      "id": "login;(id:-login-3)-unsuccessful-login-with-a-valid-e-mail-address-and-an-invalid-password;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 44,
      "id": "login;(id:-login-3)-unsuccessful-login-with-a-valid-e-mail-address-and-an-invalid-password;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 45,
      "id": "login;(id:-login-3)-unsuccessful-login-with-a-valid-e-mail-address-and-an-invalid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "(ID: Login-3) Unsuccessful login with a valid E-mail address and an invalid password",
  "description": "",
  "id": "login;(id:-login-3)-unsuccessful-login-with-a-valid-e-mail-address-and-an-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters valid E-mail and invalid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3113579315,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5137864176,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 128111643,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 232314495,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 75657368,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 483466494,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3156483439,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 799374727,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "(ID: Login-3) Unsuccessful login with a valid E-mail address and an invalid password",
  "description": "",
  "id": "login;(id:-login-3)-unsuccessful-login-with-a-valid-e-mail-address-and-an-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User enters valid E-mail and invalid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5718829953,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3855705245,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 281941068,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 118746885,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 240779856,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 211143919,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3023223105,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 270895698,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "(ID: Login-4) Unsuccessful login with a non-existing E-mail address and a valid password",
  "description": "",
  "id": "login;(id:-login-4)-unsuccessful-login-with-a-non-existing-e-mail-address-and-a-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User enters non-existing E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "login;(id:-login-4)-unsuccessful-login-with-a-non-existing-e-mail-address-and-a-valid-password;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 57,
      "id": "login;(id:-login-4)-unsuccessful-login-with-a-non-existing-e-mail-address-and-a-valid-password;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 58,
      "id": "login;(id:-login-4)-unsuccessful-login-with-a-non-existing-e-mail-address-and-a-valid-password;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 59,
      "id": "login;(id:-login-4)-unsuccessful-login-with-a-non-existing-e-mail-address-and-a-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "(ID: Login-4) Unsuccessful login with a non-existing E-mail address and a valid password",
  "description": "",
  "id": "login;(id:-login-4)-unsuccessful-login-with-a-non-existing-e-mail-address-and-a-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User enters non-existing E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3097096782,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4707743048,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 119534518,
  "status": "passed"
});
formatter.match({
  "location": "LoginNonExistingEmailSteps.user_enters_invalid_email()"
});
formatter.result({
  "duration": 259705714,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 70319132,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 319134283,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3324236154,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 797138693,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "(ID: Login-4) Unsuccessful login with a non-existing E-mail address and a valid password",
  "description": "",
  "id": "login;(id:-login-4)-unsuccessful-login-with-a-non-existing-e-mail-address-and-a-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "User enters non-existing E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5712254761,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3976680235,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 282969975,
  "status": "passed"
});
formatter.match({
  "location": "LoginNonExistingEmailSteps.user_enters_invalid_email()"
});
formatter.result({
  "duration": 134842398,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 229682379,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 132602966,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3030838154,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 254808491,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 61,
  "name": "(ID: Login-5) Unsuccessful login with a valid E-mail address and no password",
  "description": "",
  "id": "login;(id:-login-5)-unsuccessful-login-with-a-valid-e-mail-address-and-no-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 62,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User enters valid E-mail and no password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Message Ta wartosc nie powinna byc pusta is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 70,
  "name": "",
  "description": "",
  "id": "login;(id:-login-5)-unsuccessful-login-with-a-valid-e-mail-address-and-no-password;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 71,
      "id": "login;(id:-login-5)-unsuccessful-login-with-a-valid-e-mail-address-and-no-password;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 72,
      "id": "login;(id:-login-5)-unsuccessful-login-with-a-valid-e-mail-address-and-no-password;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 73,
      "id": "login;(id:-login-5)-unsuccessful-login-with-a-valid-e-mail-address-and-no-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 72,
  "name": "(ID: Login-5) Unsuccessful login with a valid E-mail address and no password",
  "description": "",
  "id": "login;(id:-login-5)-unsuccessful-login-with-a-valid-e-mail-address-and-no-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 62,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User enters valid E-mail and no password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Message Ta wartosc nie powinna byc pusta is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3074243328,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4329109589,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 91463654,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 218703841,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 79467536,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 373931446,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3289479467,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 792273188,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "(ID: Login-5) Unsuccessful login with a valid E-mail address and no password",
  "description": "",
  "id": "login;(id:-login-5)-unsuccessful-login-with-a-valid-e-mail-address-and-no-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 62,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User enters valid E-mail and no password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Message Ta wartosc nie powinna byc pusta is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5745999910,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4025488967,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 292586202,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 87763740,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 239737733,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 129452810,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3018391582,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 253478274,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 75,
  "name": "(ID: Login-6) Unsuccessful login with no E-mail address and a valid password",
  "description": "",
  "id": "login;(id:-login-6)-unsuccessful-login-with-no-e-mail-address-and-a-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "User enters no E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Message Ta wartosc nie powinna byc pusta is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "login;(id:-login-6)-unsuccessful-login-with-no-e-mail-address-and-a-valid-password;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 85,
      "id": "login;(id:-login-6)-unsuccessful-login-with-no-e-mail-address-and-a-valid-password;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 86,
      "id": "login;(id:-login-6)-unsuccessful-login-with-no-e-mail-address-and-a-valid-password;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 87,
      "id": "login;(id:-login-6)-unsuccessful-login-with-no-e-mail-address-and-a-valid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "(ID: Login-6) Unsuccessful login with no E-mail address and a valid password",
  "description": "",
  "id": "login;(id:-login-6)-unsuccessful-login-with-no-e-mail-address-and-a-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "User enters no E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Message Ta wartosc nie powinna byc pusta is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3122060534,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5288202489,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 121481325,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullEmailSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 163335020,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 73466645,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 355342768,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3164238571,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 798217442,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "(ID: Login-6) Unsuccessful login with no E-mail address and a valid password",
  "description": "",
  "id": "login;(id:-login-6)-unsuccessful-login-with-no-e-mail-address-and-a-valid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 76,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "User enters no E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Message Ta wartosc nie powinna byc pusta is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5702259821,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3911668001,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 281801362,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullEmailSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 66265424,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 245219827,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 15192340,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3012785262,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 260363082,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "(ID: Login-7) No login option when already signed in",
  "description": "",
  "id": "login;(id:-login-7)-no-login-option-when-already-signed-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "There is no CZESC ZALOGUJ SIE hyperlink",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 97,
  "name": "",
  "description": "",
  "id": "login;(id:-login-7)-no-login-option-when-already-signed-in;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 98,
      "id": "login;(id:-login-7)-no-login-option-when-already-signed-in;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 99,
      "id": "login;(id:-login-7)-no-login-option-when-already-signed-in;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 100,
      "id": "login;(id:-login-7)-no-login-option-when-already-signed-in;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 99,
  "name": "(ID: Login-7) No login option when already signed in",
  "description": "",
  "id": "login;(id:-login-7)-no-login-option-when-already-signed-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "There is no CZESC ZALOGUJ SIE hyperlink",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3092224857,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4569850931,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 119287958,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 250918276,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 71222682,
  "status": "passed"
});
formatter.match({
  "location": "LoginAlreadyLoggedSteps.testNoLoginOption()"
});
formatter.result({
  "duration": 10191585235,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 826728564,
  "status": "passed"
});
formatter.scenario({
  "line": 100,
  "name": "(ID: Login-7) No login option when already signed in",
  "description": "",
  "id": "login;(id:-login-7)-no-login-option-when-already-signed-in;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "There is no CZESC ZALOGUJ SIE hyperlink",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5724954312,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4331385269,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 298632780,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 104649529,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 230530425,
  "status": "passed"
});
formatter.match({
  "location": "LoginAlreadyLoggedSteps.testNoLoginOption()"
});
formatter.result({
  "duration": 10020886635,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 244368760,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 102,
  "name": "(ID: Login-8) Existing forgotten password option",
  "description": "",
  "id": "login;(id:-login-8)-existing-forgotten-password-option",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "There is Zapomniales hasla hyperlink and user clicks it",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "User enters e-mail address in input field and submits",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "The notice about a sent e-mail message is displayed and a button Zamknij enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 110,
  "name": "",
  "description": "",
  "id": "login;(id:-login-8)-existing-forgotten-password-option;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 111,
      "id": "login;(id:-login-8)-existing-forgotten-password-option;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 112,
      "id": "login;(id:-login-8)-existing-forgotten-password-option;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 113,
      "id": "login;(id:-login-8)-existing-forgotten-password-option;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 112,
  "name": "(ID: Login-8) Existing forgotten password option",
  "description": "",
  "id": "login;(id:-login-8)-existing-forgotten-password-option;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "There is Zapomniales hasla hyperlink and user clicks it",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "User enters e-mail address in input field and submits",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "The notice about a sent e-mail message is displayed and a button Zamknij enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3081710743,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4670985939,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 124789688,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.user_clicks_forgotten_pass_hyperlink()"
});
formatter.result({
  "duration": 380589705,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.user_enters_email_address_in_input_field_and_submits()"
});
formatter.result({
  "duration": 224159506,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.the_notice_about_a_sent_e_mail_message_is_displayed_and_a_button_Zamknij_enabled()"
});
formatter.result({
  "duration": 1273102656,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 800490100,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "(ID: Login-8) Existing forgotten password option",
  "description": "",
  "id": "login;(id:-login-8)-existing-forgotten-password-option;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 103,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "There is Zapomniales hasla hyperlink and user clicks it",
  "keyword": "When "
});
formatter.step({
  "line": 107,
  "name": "User enters e-mail address in input field and submits",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "The notice about a sent e-mail message is displayed and a button Zamknij enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 109,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5703720303,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4679723536,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 290958828,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.user_clicks_forgotten_pass_hyperlink()"
});
formatter.result({
  "duration": 50466312,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.user_enters_email_address_in_input_field_and_submits()"
});
formatter.result({
  "duration": 294744831,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.the_notice_about_a_sent_e_mail_message_is_displayed_and_a_button_Zamknij_enabled()"
});
formatter.result({
  "duration": 727532434,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 230737340,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 115,
  "name": "(ID: Login-9) Checkbox for login with old credentials",
  "description": "Description: User can sign in with credentials for an account created before 2016, 1st of March",
  "id": "login;(id:-login-9)-checkbox-for-login-with-old-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User selects a checkbox that he wants to login with old username and saw the agreement",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "Message Jestes zalogowany is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "TWOJE KONTO feature is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 127,
  "name": "",
  "description": "",
  "id": "login;(id:-login-9)-checkbox-for-login-with-old-credentials;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 128,
      "id": "login;(id:-login-9)-checkbox-for-login-with-old-credentials;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 129,
      "id": "login;(id:-login-9)-checkbox-for-login-with-old-credentials;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 130,
      "id": "login;(id:-login-9)-checkbox-for-login-with-old-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 129,
  "name": "(ID: Login-9) Checkbox for login with old credentials",
  "description": "Description: User can sign in with credentials for an account created before 2016, 1st of March",
  "id": "login;(id:-login-9)-checkbox-for-login-with-old-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User selects a checkbox that he wants to login with old username and saw the agreement",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "Message Jestes zalogowany is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "TWOJE KONTO feature is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 3050497273,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4659195224,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 122795684,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 244811662,
  "status": "passed"
});
formatter.match({
  "location": "LoginCheckboxSteps.user_selects_checkbox()"
});
formatter.result({
  "duration": 83861820,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 70170742,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.message_displayed_success()"
});
formatter.result({
  "duration": 10950,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.KONTO_feature_is_enabled()"
});
formatter.result({
  "duration": 4440611455,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 853610428,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "(ID: Login-9) Checkbox for login with old credentials",
  "description": "Description: User can sign in with credentials for an account created before 2016, 1st of March",
  "id": "login;(id:-login-9)-checkbox-for-login-with-old-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 118,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User selects a checkbox that he wants to login with old username and saw the agreement",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "Message Jestes zalogowany is displayed in a popup window",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "TWOJE KONTO feature is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 5
    }
  ],
  "location": "_LoginCommonSteps.classSetup(String)"
});
formatter.result({
  "duration": 5745200571,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4062502454,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 300168779,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 125605262,
  "status": "passed"
});
formatter.match({
  "location": "LoginCheckboxSteps.user_selects_checkbox()"
});
formatter.result({
  "duration": 225223528,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 233307910,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.message_displayed_success()"
});
formatter.result({
  "duration": 12082,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.KONTO_feature_is_enabled()"
});
formatter.result({
  "duration": 3192060231,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 232725302,
  "status": "passed"
});
});