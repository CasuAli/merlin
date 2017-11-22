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
  "duration": 3610331237,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4872976635,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 124555870,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 264578615,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 70795799,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 7153281147,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3030167639,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3145789550,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 35717711,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 847527255,
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
  "duration": 5732009557,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4367630456,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 295940545,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 107869405,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 234023200,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 5670573252,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3025530559,
  "status": "passed"
});
formatter.match({
  "location": "LoginWrongEmailFormatSteps.KONTO_feature_is_not_enabled()"
});
formatter.result({
  "duration": 3024680623,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 36694137,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 242072485,
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
  "duration": 3035312566,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4950445433,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3050824752,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 47589632,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 786447387,
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
  "duration": 5697340768,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 3871704940,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3016124623,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 14044903,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 234898812,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 34,
  "name": "(ID: Logout-3) Still signed out when navigating to a previous page after successful logout",
  "description": "Description: User is signed in, browses a product\u0027s page and decides to sign out.\r\nAfter this user goes back to the previous site. User should still be signed out.",
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
  "description": "Description: User is signed in, browses a product\u0027s page and decides to sign out.\r\nAfter this user goes back to the previous site. User should still be signed out.",
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
  "duration": 3044757393,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4587979160,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 123393295,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 249192164,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 76096667,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 7288080805,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2738119206,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_navigates_to_the_previous_page()"
});
formatter.result({
  "duration": 990074512,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_goes_to_TWOJE_KONTO_page()"
});
formatter.result({
  "duration": 5471980423,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3063794680,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 32215263,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.there_is_a_message_about_having_to_log_in_and_a_login_button()"
});
formatter.result({
  "duration": 64591755,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 813239824,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "(ID: Logout-3) Still signed out when navigating to a previous page after successful logout",
  "description": "Description: User is signed in, browses a product\u0027s page and decides to sign out.\r\nAfter this user goes back to the previous site. User should still be signed out.",
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
  "duration": 5697884109,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4498092080,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 303844460,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 111289539,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 230301756,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 4447462538,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2118494551,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_navigates_to_the_previous_page()"
});
formatter.result({
  "duration": 896534329,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.user_goes_to_TWOJE_KONTO_page()"
});
formatter.result({
  "duration": 4452032786,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3016456518,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 37141571,
  "status": "passed"
});
formatter.match({
  "location": "LogoutPreviousPageSteps.there_is_a_message_about_having_to_log_in_and_a_login_button()"
});
formatter.result({
  "duration": 30402872,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 272375676,
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
  "duration": 3035157757,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4785467185,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 126063175,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 276763929,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 69582629,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 777575730,
  "status": "passed"
});
formatter.match({
  "location": "LogoutNewSessionSteps.user_runs_a_new_session()"
});
formatter.result({
  "duration": 6810167065,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3037195188,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 36039410,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 765121955,
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
  "duration": 5692306095,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4239497756,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 292395431,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 119173444,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 233259352,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 235982471,
  "status": "passed"
});
formatter.match({
  "location": "LogoutNewSessionSteps.user_runs_a_new_session()"
});
formatter.result({
  "duration": 6138338732,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_is_signed_out()"
});
formatter.result({
  "duration": 3014794025,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.feature_of_login_is_enabled_again()"
});
formatter.result({
  "duration": 19099211,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 234716062,
  "status": "passed"
});
});