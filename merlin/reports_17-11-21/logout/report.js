$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Logout.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Aleksandra Torbe\u0027"
    }
  ],
  "line": 2,
  "name": "Logout",
  "description": "Description: Testing Logout functionalities",
  "id": "logout",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "(ID: Logout-1) Successful logout",
  "description": "",
  "id": "logout;(id:-logout-1)-successful-logout",
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
  "comments": [
    {
      "line": 8,
      "value": "#login"
    }
  ],
  "line": 9,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#logout"
    }
  ],
  "line": 13,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "logout;(id:-logout-1)-successful-logout;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 19,
      "id": "logout;(id:-logout-1)-successful-logout;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 20,
      "id": "logout;(id:-logout-1)-successful-logout;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 21,
      "id": "logout;(id:-logout-1)-successful-logout;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "(ID: Logout-1) Successful logout",
  "description": "",
  "id": "logout;(id:-logout-1)-successful-logout;;2",
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
  "comments": [
    {
      "line": 8,
      "value": "#login"
    }
  ],
  "line": 9,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#logout"
    }
  ],
  "line": 13,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 17,
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
  "duration": 3682128725,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4837485463,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 87951775,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 287997462,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 73589358,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 6794855084,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3066044162,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3200217109,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 40665826,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 817477081,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "(ID: Logout-1) Successful logout",
  "description": "",
  "id": "logout;(id:-logout-1)-successful-logout;;3",
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
  "comments": [
    {
      "line": 8,
      "value": "#login"
    }
  ],
  "line": 9,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "#logout"
    }
  ],
  "line": 13,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "TWOJE KONTO feature is not enabled",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 17,
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
  "duration": 5741123454,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3833372476,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 285210539,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 126950582,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 227988552,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 5420675568,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3018190331,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3020304406,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 38844377,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 230497576,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "(ID: Logout-2) Unsuccessful logout when user not signed in",
  "description": "",
  "id": "logout;(id:-logout-2)-unsuccessful-logout-when-user-not-signed-in",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User is signed out",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Feature of login is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "logout;(id:-logout-2)-unsuccessful-logout-when-user-not-signed-in;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 30,
      "id": "logout;(id:-logout-2)-unsuccessful-logout-when-user-not-signed-in;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 31,
      "id": "logout;(id:-logout-2)-unsuccessful-logout-when-user-not-signed-in;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 32,
      "id": "logout;(id:-logout-2)-unsuccessful-logout-when-user-not-signed-in;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "(ID: Logout-2) Unsuccessful logout when user not signed in",
  "description": "",
  "id": "logout;(id:-logout-2)-unsuccessful-logout-when-user-not-signed-in;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User is signed out",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Feature of login is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
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
  "duration": 3105452644,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4662093156,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3028124858,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 36148072,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 848772107,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "(ID: Logout-2) Unsuccessful logout when user not signed in",
  "description": "",
  "id": "logout;(id:-logout-2)-unsuccessful-logout-when-user-not-signed-in;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User is signed out",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Feature of login is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
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
  "duration": 5727091042,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4621391083,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3026440093,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 29931583,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 240214994,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "(ID: Logout-3) Still signed out when navigating to a previous page after successful logout",
  "description": "Description: User is signed in, browse a product\u0027s page and decides to sign out.\r\nAfter this user goes back to the previous site. User should still be signed out.",
  "id": "logout;(id:-logout-3)-still-signed-out-when-navigating-to-a-previous-page-after-successful-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#login"
    }
  ],
  "line": 40,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User goes to a product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#logout"
    }
  ],
  "line": 45,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User navigates to the previous page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User goes to TWOJE KONTO page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "There is a message about having to log in and a login button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "logout;(id:-logout-3)-still-signed-out-when-navigating-to-a-previous-page-after-successful-logout;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 53,
      "id": "logout;(id:-logout-3)-still-signed-out-when-navigating-to-a-previous-page-after-successful-logout;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 54,
      "id": "logout;(id:-logout-3)-still-signed-out-when-navigating-to-a-previous-page-after-successful-logout;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 55,
      "id": "logout;(id:-logout-3)-still-signed-out-when-navigating-to-a-previous-page-after-successful-logout;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "(ID: Logout-3) Still signed out when navigating to a previous page after successful logout",
  "description": "Description: User is signed in, browse a product\u0027s page and decides to sign out.\r\nAfter this user goes back to the previous site. User should still be signed out.",
  "id": "logout;(id:-logout-3)-still-signed-out-when-navigating-to-a-previous-page-after-successful-logout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#login"
    }
  ],
  "line": 40,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User goes to a product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#logout"
    }
  ],
  "line": 45,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User navigates to the previous page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User goes to TWOJE KONTO page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "There is a message about having to log in and a login button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
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
  "duration": 3073635045,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4838830405,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 121288381,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 252612104,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 73000333,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 11800314148,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2045763544,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_navigates_to_the_previous_page()"
});
formatter.result({
  "duration": 1101133498,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_goes_to_TWOJE_KONTO_page()"
});
formatter.result({
  "duration": 3846446965,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3081539321,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 58009620,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.there_is_a_message_about_having_to_log_in_and_a_login_button()"
});
formatter.result({
  "duration": 70328948,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 869781456,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "(ID: Logout-3) Still signed out when navigating to a previous page after successful logout",
  "description": "Description: User is signed in, browse a product\u0027s page and decides to sign out.\r\nAfter this user goes back to the previous site. User should still be signed out.",
  "id": "logout;(id:-logout-3)-still-signed-out-when-navigating-to-a-previous-page-after-successful-logout;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 37,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 39,
      "value": "#login"
    }
  ],
  "line": 40,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User goes to a product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 44,
      "value": "#logout"
    }
  ],
  "line": 45,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User navigates to the previous page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User goes to TWOJE KONTO page",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "There is a message about having to log in and a login button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
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
  "duration": 5733388334,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4335664769,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 293344007,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 105149824,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 236026113,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 6038651810,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2207774010,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_navigates_to_the_previous_page()"
});
formatter.result({
  "duration": 821580251,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_goes_to_TWOJE_KONTO_page()"
});
formatter.result({
  "duration": 4713136035,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3025352660,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 36721617,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.there_is_a_message_about_having_to_log_in_and_a_login_button()"
});
formatter.result({
  "duration": 43528644,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 280354473,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "(ID: Logout-4) Still signed out after running a new session",
  "description": "Description: User is signed in, then quits session.\r\nAfter running new session user should still be signed out.",
  "id": "logout;(id:-logout-4)-still-signed-out-after-running-a-new-session",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#login"
    }
  ],
  "line": 64,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User runs a new session",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "logout;(id:-logout-4)-still-signed-out-after-running-a-new-session;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 73,
      "id": "logout;(id:-logout-4)-still-signed-out-after-running-a-new-session;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 74,
      "id": "logout;(id:-logout-4)-still-signed-out-after-running-a-new-session;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 75,
      "id": "logout;(id:-logout-4)-still-signed-out-after-running-a-new-session;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 74,
  "name": "(ID: Logout-4) Still signed out after running a new session",
  "description": "Description: User is signed in, then quits session.\r\nAfter running new session user should still be signed out.",
  "id": "logout;(id:-logout-4)-still-signed-out-after-running-a-new-session;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#login"
    }
  ],
  "line": 64,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User runs a new session",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 71,
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
  "duration": 3093604914,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4588986347,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 127847337,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 244288336,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 77672894,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 826791621,
  "status": "passed"
});
formatter.match({
  "location": "LogoutNewSessionSteps.user_runs_a_new_session()"
});
formatter.result({
  "duration": 6635098020,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3028446557,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 34697407,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 770177538,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "(ID: Logout-4) Still signed out after running a new session",
  "description": "Description: User is signed in, then quits session.\r\nAfter running new session user should still be signed out.",
  "id": "logout;(id:-logout-4)-still-signed-out-after-running-a-new-session;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 61,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 62,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 63,
      "value": "#login"
    }
  ],
  "line": 64,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "User runs a new session",
  "keyword": "When "
});
formatter.step({
  "line": 69,
  "name": "User is signed out",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "Feature of login is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 71,
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
  "duration": 5710026280,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4549959599,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 291098533,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 110306822,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 239863089,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 227031762,
  "status": "passed"
});
formatter.match({
  "location": "LogoutNewSessionSteps.user_runs_a_new_session()"
});
formatter.result({
  "duration": 6017617919,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3017235052,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 82885774,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 247937654,
  "status": "passed"
});
});