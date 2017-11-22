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
  "duration": 3592354577,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4826942638,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 121865223,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 251442928,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 76899406,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.message_displayed_success()"
});
formatter.result({
  "duration": 16613,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.KONTO_feature_is_enabled()"
});
formatter.result({
  "duration": 4586804504,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 826963028,
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
  "duration": 5740800412,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4492171978,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 293122275,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 116011952,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 228897530,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.message_displayed_success()"
});
formatter.result({
  "duration": 27941,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.KONTO_feature_is_enabled()"
});
formatter.result({
  "duration": 2703494971,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 230732954,
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
  "duration": 3053699280,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5140764694,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 123906429,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.user_enters_invalid_email()"
});
formatter.result({
  "duration": 214297959,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 76941695,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.message_displayed_invalid_email()"
});
formatter.result({
  "duration": 266768589,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3146165243,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 787679814,
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
  "duration": 5710709045,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4269592143,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 299493965,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.user_enters_invalid_email()"
});
formatter.result({
  "duration": 86984233,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 229176184,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.message_displayed_invalid_email()"
});
formatter.result({
  "duration": 60880883,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3015089672,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 232774537,
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
  "duration": 3051893307,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5003982731,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 87513603,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 289823344,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 77896221,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 373921344,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3232680142,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 797317207,
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
  "duration": 5713813144,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4692286838,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 291229836,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 95863442,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 226126458,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 129399487,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3014555772,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 234652629,
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
  "duration": 3049252502,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5077270191,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 119773421,
  "status": "passed"
});
formatter.match({
  "location": "LoginNonExistingEmailSteps.user_enters_invalid_email()"
});
formatter.result({
  "duration": 249359433,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 72454137,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 313197913,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3236627758,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 860142635,
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
  "duration": 5687948048,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4322619329,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 296407236,
  "status": "passed"
});
formatter.match({
  "location": "LoginNonExistingEmailSteps.user_enters_invalid_email()"
});
formatter.result({
  "duration": 102127144,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 244160512,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 89245947,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3010571530,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 229761059,
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
  "duration": 3041741648,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5006231230,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 124153745,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 186727326,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 73244038,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 426999880,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3150000339,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 871035110,
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
  "duration": 5699556040,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4271132300,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 293937096,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 83637727,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 227540501,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 202540822,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3012783403,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 234274669,
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
  "duration": 3060030947,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5002577749,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 125537204,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullEmailSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 158514805,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 71118253,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 368859862,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3187662974,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 800008986,
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
  "duration": 5699656477,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4305605502,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 293679586,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullEmailSteps.user_enters_invalid_pass()"
});
formatter.result({
  "duration": 61746300,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 235754412,
  "status": "passed"
});
formatter.match({
  "location": "LoginNullPassSteps.message_displayed_invalid_pass()"
});
formatter.result({
  "duration": 178655386,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3018549452,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 254138483,
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
  "duration": 3029666966,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5118490399,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 87106947,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 282484668,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 72757335,
  "status": "passed"
});
formatter.match({
  "location": "LoginAlreadyLoggedSteps.testNoLoginOption()"
});
formatter.result({
  "duration": 10102154708,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 851375945,
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
  "duration": 5696775906,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4596071490,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 291620633,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 105437779,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 230341024,
  "status": "passed"
});
formatter.match({
  "location": "LoginAlreadyLoggedSteps.testNoLoginOption()"
});
formatter.result({
  "duration": 10023160479,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 247771702,
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
  "duration": 3021117007,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4891273862,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 123153532,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.user_clicks_forgotten_pass_hyperlink()"
});
formatter.result({
  "duration": 377205548,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.user_enters_email_address_in_input_field_and_submits()"
});
formatter.result({
  "duration": 215661406,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.the_notice_about_a_sent_e_mail_message_is_displayed_and_a_button_Zamknij_enabled()"
});
formatter.result({
  "duration": 1099102715,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 840826315,
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
  "duration": 5707589089,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4043842135,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 302294488,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.user_clicks_forgotten_pass_hyperlink()"
});
formatter.result({
  "duration": 70257745,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.user_enters_email_address_in_input_field_and_submits()"
});
formatter.result({
  "duration": 307239675,
  "status": "passed"
});
formatter.match({
  "location": "LoginForgotPassSteps.the_notice_about_a_sent_e_mail_message_is_displayed_and_a_button_Zamknij_enabled()"
});
formatter.result({
  "duration": 874018382,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 236218460,
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
  "duration": 3033431454,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4613775915,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 85423688,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 291511890,
  "status": "passed"
});
formatter.match({
  "location": "LoginCheckboxSteps.user_selects_checkbox()"
});
formatter.result({
  "duration": 82214622,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 70129745,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.message_displayed_success()"
});
formatter.result({
  "duration": 19634,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.KONTO_feature_is_enabled()"
});
formatter.result({
  "duration": 4679453217,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 830995222,
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
  "duration": 5692208301,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4278728863,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 296358150,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 98852378,
  "status": "passed"
});
formatter.match({
  "location": "LoginCheckboxSteps.user_selects_checkbox()"
});
formatter.result({
  "duration": 231389946,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 225096038,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.message_displayed_success()"
});
formatter.result({
  "duration": 16236,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.KONTO_feature_is_enabled()"
});
formatter.result({
  "duration": 2804602267,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 232005027,
  "status": "passed"
});
});