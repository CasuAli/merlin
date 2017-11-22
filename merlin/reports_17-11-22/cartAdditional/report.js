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
  "duration": 3651944508,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4831461158,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 179512875,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4607059870,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 13825151,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckoutSteps.user_clicks_Przejdz_do_platnosci_button()"
});
formatter.result({
  "duration": 1769483400,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckoutSteps.user_is_on_checkout_page()"
});
formatter.result({
  "duration": 6907856,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 918236588,
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
  "duration": 5767789569,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4383260447,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 249053214,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4031125941,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4417328,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckoutSteps.user_clicks_Przejdz_do_platnosci_button()"
});
formatter.result({
  "duration": 1846094711,
  "status": "passed"
});
formatter.match({
  "location": "CartCheckoutSteps.user_is_on_checkout_page()"
});
formatter.result({
  "duration": 7926194,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 269600073,
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
  "duration": 3076920550,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6185026322,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 189392675,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4049799240,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6816859,
  "status": "passed"
});
formatter.match({
  "location": "CartContinueShoppingSteps.user_clicks_Wroc_do_zakupow_hyperlink()"
});
formatter.result({
  "duration": 1765655478,
  "status": "passed"
});
formatter.match({
  "location": "CartContinueShoppingSteps.user_comes_back_to_Home_Page()"
});
formatter.result({
  "duration": 71322147,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 40460891,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 1141198534,
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
  "duration": 5743009643,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4288014729,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 258258277,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3578826582,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4008407,
  "status": "passed"
});
formatter.match({
  "location": "CartContinueShoppingSteps.user_clicks_Wroc_do_zakupow_hyperlink()"
});
formatter.result({
  "duration": 2334140477,
  "status": "passed"
});
formatter.match({
  "location": "CartContinueShoppingSteps.user_comes_back_to_Home_Page()"
});
formatter.result({
  "duration": 2669502,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 53655859,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 254232501,
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
  "duration": 3084373256,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5031980030,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 179300674,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4229528091,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 9656650,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.user_clicks_Posiadasz_link_promocyjny_hyperlink()"
});
formatter.result({
  "duration": 129421764,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.input_field_for_promo_code_is_enabled()"
});
formatter.result({
  "duration": 34928188,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.ok_button_for_submitting_promo_code_is_enabled()"
});
formatter.result({
  "duration": 30915628,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 821777700,
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
  "duration": 5728336443,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4375328213,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 248752281,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3833395509,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4071085,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.user_clicks_Posiadasz_link_promocyjny_hyperlink()"
});
formatter.result({
  "duration": 285402996,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.input_field_for_promo_code_is_enabled()"
});
formatter.result({
  "duration": 16780483,
  "status": "passed"
});
formatter.match({
  "location": "CartPromoCodeSteps.ok_button_for_submitting_promo_code_is_enabled()"
});
formatter.result({
  "duration": 17133899,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 258636613,
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
  "duration": 3094719370,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4792812658,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 174419298,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4986375722,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6882180,
  "status": "passed"
});
formatter.match({
  "location": "CartSendingDateSteps.notice_is_displayed()"
});
formatter.result({
  "duration": 41253813,
  "status": "passed"
});
formatter.match({
  "location": "CartSendingDateSteps.information_about_sending_date_of_products_is_displayed()"
});
formatter.result({
  "duration": 18414655,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 830848343,
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
  "duration": 5742944321,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4689560698,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 244392724,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4036781736,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4562319,
  "status": "passed"
});
formatter.match({
  "location": "CartSendingDateSteps.notice_is_displayed()"
});
formatter.result({
  "duration": 29570304,
  "status": "passed"
});
formatter.match({
  "location": "CartSendingDateSteps.information_about_sending_date_of_products_is_displayed()"
});
formatter.result({
  "duration": 18001204,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 229630415,
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
  "duration": 3064578162,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4670011788,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 173675085,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4001381949,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7018865,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.dodaj_do_schowka_hyperlink_is_enabled()"
});
formatter.result({
  "duration": 2083567874,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.user_clicks_Dodaj_do_schowka_hyperlink()"
});
formatter.result({
  "duration": 61572612,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.produkt_zostal_dodany_do_schowka_hyperlink_is_displayed()"
});
formatter.result({
  "duration": 441229043,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.user_clicks_Produkt_zostal_dodany_do_schowka_hyperlink()"
});
formatter.result({
  "duration": 37676604,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.dodaj_do_schowka_hyperlink_is_enabled()"
});
formatter.result({
  "duration": 2046479920,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 812138796,
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
  "duration": 5716713348,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4711381896,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 251880546,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3962531066,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3026316,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.dodaj_do_schowka_hyperlink_is_enabled()"
});
formatter.result({
  "duration": 2036019021,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.user_clicks_Dodaj_do_schowka_hyperlink()"
});
formatter.result({
  "duration": 32936445,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.produkt_zostal_dodany_do_schowka_hyperlink_is_displayed()"
});
formatter.result({
  "duration": 789946436,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.user_clicks_Produkt_zostal_dodany_do_schowka_hyperlink()"
});
formatter.result({
  "duration": 245804502,
  "status": "passed"
});
formatter.match({
  "location": "CartBookmarkSteps.dodaj_do_schowka_hyperlink_is_enabled()"
});
formatter.result({
  "duration": 2039236771,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 235735155,
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
  "duration": 3086514144,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4680865372,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 3126006160,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 127934847,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3692068973,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6605035,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_clicks_on_a_product_s_title()"
});
formatter.result({
  "duration": 1683841093,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_is_directed_to_a_product_s_page()"
});
formatter.result({
  "duration": 5286143,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 861872337,
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
  "duration": 5722780707,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4846025614,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2548728796,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 253251544,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3676141070,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2859803,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_clicks_on_a_product_s_title()"
});
formatter.result({
  "duration": 2276422218,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_is_directed_to_a_product_s_page()"
});
formatter.result({
  "duration": 3374070,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 275532635,
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
  "duration": 3076152172,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4815868169,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2593566991,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 133650301,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4023665306,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6441920,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteImageDirectingSteps.user_clicks_on_a_product_s_title()"
});
formatter.result({
  "duration": 1770785680,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_is_directed_to_a_product_s_page()"
});
formatter.result({
  "duration": 8921121,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 860108275,
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
  "duration": 5780457055,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4246549470,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2151683221,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 247049766,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3824672996,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3015367,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteImageDirectingSteps.user_clicks_on_a_product_s_title()"
});
formatter.result({
  "duration": 1999526890,
  "status": "passed"
});
formatter.match({
  "location": "CartProductSiteTitleDirectingSteps.user_is_directed_to_a_product_s_page()"
});
formatter.result({
  "duration": 3736926,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 274808434,
  "status": "passed"
});
});