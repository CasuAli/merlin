$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CartAdditional.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Aleksandra Torbe\u0027"
    }
  ],
  "line": 2,
  "name": "Shopping Cart (Additional)",
  "description": "Description: Testing additional shopping cart functionalities",
  "id": "shopping-cart-(additional)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "(ID: Cart-A-1) Checkout",
  "description": "Description: User should use checkout to buy products",
  "id": "shopping-cart-(additional);(id:-cart-a-1)-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do platnosci button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User is on checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-1)-checkout;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 16,
      "id": "shopping-cart-(additional);(id:-cart-a-1)-checkout;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 17,
      "id": "shopping-cart-(additional);(id:-cart-a-1)-checkout;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 18,
      "id": "shopping-cart-(additional);(id:-cart-a-1)-checkout;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "(ID: Cart-A-1) Checkout",
  "description": "Description: User should use checkout to buy products",
  "id": "shopping-cart-(additional);(id:-cart-a-1)-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do platnosci button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User is on checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 3655254414,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6177060835,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 190405296,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5124799882,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 15018652,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckoutSteps.user_clicks_Przejdz_do_platnosci_button()"
});
formatter.result({
  "duration": 1786031399,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckoutSteps.user_is_on_checkout_page()"
});
formatter.result({
  "duration": 7923910,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 1371537962,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "(ID: Cart-A-1) Checkout",
  "description": "Description: User should use checkout to buy products",
  "id": "shopping-cart-(additional);(id:-cart-a-1)-checkout;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do platnosci button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User is on checkout page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
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
  "duration": 5750546737,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4444240383,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 246256287,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4237340849,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3744469,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckoutSteps.user_clicks_Przejdz_do_platnosci_button()"
});
formatter.result({
  "duration": 2238109604,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckoutSteps.user_is_on_checkout_page()"
});
formatter.result({
  "duration": 10335896,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 247028062,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "(ID: Cart-A-2) Continuing shopping",
  "description": "Description: User can come back to the Home Page to continue shopping\r\nwithout losing products in the shopping cart",
  "id": "shopping-cart-(additional);(id:-cart-a-2)-continuing-shopping",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks Wroc do zakupow hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User comes back to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-2)-continuing-shopping;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 33,
      "id": "shopping-cart-(additional);(id:-cart-a-2)-continuing-shopping;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 34,
      "id": "shopping-cart-(additional);(id:-cart-a-2)-continuing-shopping;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 35,
      "id": "shopping-cart-(additional);(id:-cart-a-2)-continuing-shopping;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 34,
  "name": "(ID: Cart-A-2) Continuing shopping",
  "description": "Description: User can come back to the Home Page to continue shopping\r\nwithout losing products in the shopping cart",
  "id": "shopping-cart-(additional);(id:-cart-a-2)-continuing-shopping;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks Wroc do zakupow hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User comes back to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 31,
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
  "duration": 3081188926,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5111217925,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 175304707,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5396251000,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7130991,
  "status": "passed"
});
formatter.match({
  "location": "CartContinueShoppingSteps.user_clicks_Wroc_do_zakupow_hyperlink()"
});
formatter.result({
  "duration": 2068139735,
  "status": "passed"
});
formatter.match({
  "location": "CartContinueShoppingSteps.user_comes_back_to_Home_Page()"
});
formatter.result({
  "duration": 60725937,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 51043255,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 919850931,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "(ID: Cart-A-2) Continuing shopping",
  "description": "Description: User can come back to the Home Page to continue shopping\r\nwithout losing products in the shopping cart",
  "id": "shopping-cart-(additional);(id:-cart-a-2)-continuing-shopping;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 23,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks Wroc do zakupow hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User comes back to Home Page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 31,
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
  "duration": 5736860190,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4128904185,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 252621544,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4189466629,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3368776,
  "status": "passed"
});
formatter.match({
  "location": "CartContinueShoppingSteps.user_clicks_Wroc_do_zakupow_hyperlink()"
});
formatter.result({
  "duration": 3390397744,
  "status": "passed"
});
formatter.match({
  "location": "CartContinueShoppingSteps.user_comes_back_to_Home_Page()"
});
formatter.result({
  "duration": 5866472,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 23840449,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 247089607,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "(ID: Cart-A-3) Promo code",
  "description": "Description: User can use promo code in the shopping cart before checkout",
  "id": "shopping-cart-(additional);(id:-cart-a-3)-promo-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User clicks Posiadasz link promocyjny? hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Input field for promo code is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "OK button for submitting promo code is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-3)-promo-code;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 49,
      "id": "shopping-cart-(additional);(id:-cart-a-3)-promo-code;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 50,
      "id": "shopping-cart-(additional);(id:-cart-a-3)-promo-code;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 51,
      "id": "shopping-cart-(additional);(id:-cart-a-3)-promo-code;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 50,
  "name": "(ID: Cart-A-3) Promo code",
  "description": "Description: User can use promo code in the shopping cart before checkout",
  "id": "shopping-cart-(additional);(id:-cart-a-3)-promo-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User clicks Posiadasz link promocyjny? hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Input field for promo code is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "OK button for submitting promo code is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 47,
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
  "duration": 3082345834,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5460847895,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 179038226,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4489833638,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8227863,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.user_clicks_Posiadasz_link_promocyjny_hyperlink()"
});
formatter.result({
  "duration": 108593361,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.input_field_for_promo_code_is_enabled()"
});
formatter.result({
  "duration": 38720152,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.ok_button_for_submitting_promo_code_is_enabled()"
});
formatter.result({
  "duration": 37306490,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 818728006,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "(ID: Cart-A-3) Promo code",
  "description": "Description: User can use promo code in the shopping cart before checkout",
  "id": "shopping-cart-(additional);(id:-cart-a-3)-promo-code;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "User clicks Posiadasz link promocyjny? hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "Input field for promo code is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "OK button for submitting promo code is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 47,
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
  "duration": 5736503754,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4409529384,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 246825301,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3960694976,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3044811,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.user_clicks_Posiadasz_link_promocyjny_hyperlink()"
});
formatter.result({
  "duration": 290132682,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.input_field_for_promo_code_is_enabled()"
});
formatter.result({
  "duration": 10441996,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.ok_button_for_submitting_promo_code_is_enabled()"
});
formatter.result({
  "duration": 10950597,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 257483273,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "(ID: Cart-A-4) Estimated sending date of products being displayed in the shopping cart",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-4)-estimated-sending-date-of-products-being-displayed-in-the-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Notice is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Information about sending date of products is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-4)-estimated-sending-date-of-products-being-displayed-in-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 63,
      "id": "shopping-cart-(additional);(id:-cart-a-4)-estimated-sending-date-of-products-being-displayed-in-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 64,
      "id": "shopping-cart-(additional);(id:-cart-a-4)-estimated-sending-date-of-products-being-displayed-in-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 65,
      "id": "shopping-cart-(additional);(id:-cart-a-4)-estimated-sending-date-of-products-being-displayed-in-the-shopping-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 64,
  "name": "(ID: Cart-A-4) Estimated sending date of products being displayed in the shopping cart",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-4)-estimated-sending-date-of-products-being-displayed-in-the-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Notice is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Information about sending date of products is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 61,
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
  "duration": 3090669225,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5517875806,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 184097431,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4190555572,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 10014952,
  "status": "passed"
});
formatter.match({
  "location": "CartSendingDateSteps.notice_is_displayed()"
});
formatter.result({
  "duration": 50453474,
  "status": "passed"
});
formatter.match({
  "location": "CartSendingDateSteps.information_about_sending_date_of_products_is_displayed()"
});
formatter.result({
  "duration": 18325127,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 803382368,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "(ID: Cart-A-4) Estimated sending date of products being displayed in the shopping cart",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-4)-estimated-sending-date-of-products-being-displayed-in-the-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 54,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "Notice is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "Information about sending date of products is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 61,
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
  "duration": 5721215131,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4905634260,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 262415611,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5493652112,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3663666,
  "status": "passed"
});
formatter.match({
  "location": "CartSendingDateSteps.notice_is_displayed()"
});
formatter.result({
  "duration": 33568440,
  "status": "passed"
});
formatter.match({
  "location": "CartSendingDateSteps.information_about_sending_date_of_products_is_displayed()"
});
formatter.result({
  "duration": 15012611,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 238335397,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "(ID: Cart-A-5) Adding Bookmark",
  "description": "Description: User can save a product to remember about it later",
  "id": "shopping-cart-(additional);(id:-cart-a-5)-adding-bookmark",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Dodaj do schowka hyperlink is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User clicks Dodaj do schowka hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "Produkt zostal dodany do schowka hyperlink is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User clicks Produkt zostal dodany do schowka hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "Dodaj do schowka hyperlink is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 80,
  "name": "",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-5)-adding-bookmark;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 81,
      "id": "shopping-cart-(additional);(id:-cart-a-5)-adding-bookmark;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 82,
      "id": "shopping-cart-(additional);(id:-cart-a-5)-adding-bookmark;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 83,
      "id": "shopping-cart-(additional);(id:-cart-a-5)-adding-bookmark;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 82,
  "name": "(ID: Cart-A-5) Adding Bookmark",
  "description": "Description: User can save a product to remember about it later",
  "id": "shopping-cart-(additional);(id:-cart-a-5)-adding-bookmark;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Dodaj do schowka hyperlink is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User clicks Dodaj do schowka hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "Produkt zostal dodany do schowka hyperlink is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User clicks Produkt zostal dodany do schowka hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "Dodaj do schowka hyperlink is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
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
  "duration": 3081145505,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6038872318,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 180258568,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5894848288,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8856535,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.dodaj_do_schowka_hyperlink_is_enabled()"
});
formatter.result({
  "duration": 2076215432,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.user_clicks_Dodaj_do_schowka_hyperlink()"
});
formatter.result({
  "duration": 56901798,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.produkt_zostal_dodany_do_schowka_hyperlink_is_displayed()"
});
formatter.result({
  "duration": 639966546,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.user_clicks_Produkt_zostal_dodany_do_schowka_hyperlink()"
});
formatter.result({
  "duration": 37700684,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.dodaj_do_schowka_hyperlink_is_enabled()"
});
formatter.result({
  "duration": 2057484784,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 869475239,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "(ID: Cart-A-5) Adding Bookmark",
  "description": "Description: User can save a product to remember about it later",
  "id": "shopping-cart-(additional);(id:-cart-a-5)-adding-bookmark;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 69,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 70,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "Dodaj do schowka hyperlink is enabled",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "User clicks Dodaj do schowka hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "Produkt zostal dodany do schowka hyperlink is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User clicks Produkt zostal dodany do schowka hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "Dodaj do schowka hyperlink is enabled",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
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
  "duration": 5758949419,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4865557838,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 244606259,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4054117518,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2965519,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.dodaj_do_schowka_hyperlink_is_enabled()"
});
formatter.result({
  "duration": 2031084714,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.user_clicks_Dodaj_do_schowka_hyperlink()"
});
formatter.result({
  "duration": 26526936,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.produkt_zostal_dodany_do_schowka_hyperlink_is_displayed()"
});
formatter.result({
  "duration": 458324523,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.user_clicks_Produkt_zostal_dodany_do_schowka_hyperlink()"
});
formatter.result({
  "duration": 229854556,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.dodaj_do_schowka_hyperlink_is_enabled()"
});
formatter.result({
  "duration": 2041066817,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 250331139,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "(ID: Cart-A-6) Clicking on a product\u0027s title directing to its page",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-6)-clicking-on-a-product\u0027s-title-directing-to-its-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User goes to some product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "User clicks on a product\u0027s title",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "User is directed to a product\u0027s page",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 95,
  "name": "",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-6)-clicking-on-a-product\u0027s-title-directing-to-its-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 96,
      "id": "shopping-cart-(additional);(id:-cart-a-6)-clicking-on-a-product\u0027s-title-directing-to-its-page;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 97,
      "id": "shopping-cart-(additional);(id:-cart-a-6)-clicking-on-a-product\u0027s-title-directing-to-its-page;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 98,
      "id": "shopping-cart-(additional);(id:-cart-a-6)-clicking-on-a-product\u0027s-title-directing-to-its-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 97,
  "name": "(ID: Cart-A-6) Clicking on a product\u0027s title directing to its page",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-6)-clicking-on-a-product\u0027s-title-directing-to-its-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User goes to some product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "User clicks on a product\u0027s title",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "User is directed to a product\u0027s page",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
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
  "duration": 3075005664,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5369801468,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 3103585130,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 122863648,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3848508179,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 10819577,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_clicks_on_a_product_s_title()"
});
formatter.result({
  "duration": 3084822764,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_is_directed_to_a_product_s_page()"
});
formatter.result({
  "duration": 7880865,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 865662050,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "(ID: Cart-A-6) Clicking on a product\u0027s title directing to its page",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-6)-clicking-on-a-product\u0027s-title-directing-to-its-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "User goes to some product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "User clicks on a product\u0027s title",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "User is directed to a product\u0027s page",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
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
  "duration": 5729598934,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4709710245,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2339166830,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 243728006,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3859649454,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3116929,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_clicks_on_a_product_s_title()"
});
formatter.result({
  "duration": 1878345743,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_is_directed_to_a_product_s_page()"
});
formatter.result({
  "duration": 3201507,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 264984293,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 100,
  "name": "(ID: Cart-A-7) Clicking on a product\u0027s image directing to its page",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-7)-clicking-on-a-product\u0027s-image-directing-to-its-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 101,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User goes to some product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "User clicks on a product\u0027s image",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "User is directed to a product\u0027s page",
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
  "id": "shopping-cart-(additional);(id:-cart-a-7)-clicking-on-a-product\u0027s-image-directing-to-its-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 111,
      "id": "shopping-cart-(additional);(id:-cart-a-7)-clicking-on-a-product\u0027s-image-directing-to-its-page;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 112,
      "id": "shopping-cart-(additional);(id:-cart-a-7)-clicking-on-a-product\u0027s-image-directing-to-its-page;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 113,
      "id": "shopping-cart-(additional);(id:-cart-a-7)-clicking-on-a-product\u0027s-image-directing-to-its-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 112,
  "name": "(ID: Cart-A-7) Clicking on a product\u0027s image directing to its page",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-7)-clicking-on-a-product\u0027s-image-directing-to-its-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 101,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User goes to some product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "User clicks on a product\u0027s image",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "User is directed to a product\u0027s page",
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
  "duration": 3070651402,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5580003323,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2578594191,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 116188776,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4174800260,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4863617,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteImageDirectingSteps.user_clicks_on_a_product_s_title()"
});
formatter.result({
  "duration": 1932197066,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_is_directed_to_a_product_s_page()"
});
formatter.result({
  "duration": 4842851,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 869912477,
  "status": "passed"
});
formatter.scenario({
  "line": 113,
  "name": "(ID: Cart-A-7) Clicking on a product\u0027s image directing to its page",
  "description": "",
  "id": "shopping-cart-(additional);(id:-cart-a-7)-clicking-on-a-product\u0027s-image-directing-to-its-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 101,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "User goes to some product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "User clicks on a product\u0027s image",
  "keyword": "When "
});
formatter.step({
  "line": 108,
  "name": "User is directed to a product\u0027s page",
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
  "duration": 5702268127,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4452664587,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2335599447,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 250757050,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4047623884,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2799384,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteImageDirectingSteps.user_clicks_on_a_product_s_title()"
});
formatter.result({
  "duration": 2338498134,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_is_directed_to_a_product_s_page()"
});
formatter.result({
  "duration": 4666143,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 268361752,
  "status": "passed"
});
});