$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CartBasic.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Aleksandra Torbe\u0027"
    }
  ],
  "line": 2,
  "name": "Shopping Cart (Basic)",
  "description": "Description: Testing basic shopping cart functionalities",
  "id": "shopping-cart-(basic)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "(ID: Cart-B-1) Adding a product to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-1)-adding-a-product-to-the-shopping-cart",
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
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
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
  "id": "shopping-cart-(basic);(id:-cart-b-1)-adding-a-product-to-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 16,
      "id": "shopping-cart-(basic);(id:-cart-b-1)-adding-a-product-to-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 17,
      "id": "shopping-cart-(basic);(id:-cart-b-1)-adding-a-product-to-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 18,
      "id": "shopping-cart-(basic);(id:-cart-b-1)-adding-a-product-to-the-shopping-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "(ID: Cart-B-1) Adding a product to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-1)-adding-a-product-to-the-shopping-cart;;2",
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
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
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
  "duration": 3621699087,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5114806335,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 173511215,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4245236241,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7429673,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 40997057,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 36569158,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 25448246,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 834035132,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "(ID: Cart-B-1) Adding a product to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-1)-adding-a-product-to-the-shopping-cart;;3",
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
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
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
  "duration": 5707065760,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4394450456,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 261658777,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3488950074,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4932349,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 46789914,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 52956199,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 31061752,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 221285107,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "(ID: Cart-B-2) Information about a product is displayed",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User goes to chosen product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Information about product\u0027s title is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Information about product\u0027s author is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Information about product\u0027s price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Product\u0027s title is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product\u0027s image is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 34,
      "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 35,
      "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 36,
      "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "(ID: Cart-B-2) Information about a product is displayed",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User goes to chosen product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Information about product\u0027s title is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Information about product\u0027s author is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Information about product\u0027s price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Product\u0027s title is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product\u0027s image is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
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
  "duration": 3049720703,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4986787286,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.user_goes_to_chosen_product_s_page()"
});
formatter.result({
  "duration": 2881016102,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 98655281,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3886338493,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 9907741,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_title_is_displayed()"
});
formatter.result({
  "duration": 37060768,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_author_is_displayed()"
});
formatter.result({
  "duration": 36932391,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_price_is_displayed()"
});
formatter.result({
  "duration": 39459922,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.product_s_title_is_linked_to_its_page()"
});
formatter.result({
  "duration": 24333625,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.product_s_image_is_linked_to_its_page()"
});
formatter.result({
  "duration": 23547500,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 845503418,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "(ID: Cart-B-2) Information about a product is displayed",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User goes to chosen product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Information about product\u0027s title is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Information about product\u0027s author is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Information about product\u0027s price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Product\u0027s title is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product\u0027s image is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
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
  "duration": 5702876870,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4255052231,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.user_goes_to_chosen_product_s_page()"
});
formatter.result({
  "duration": 2233716604,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 267554336,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4216061265,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5267264,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_title_is_displayed()"
});
formatter.result({
  "duration": 19694280,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_author_is_displayed()"
});
formatter.result({
  "duration": 13803629,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_price_is_displayed()"
});
formatter.result({
  "duration": 10035742,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.product_s_title_is_linked_to_its_page()"
});
formatter.result({
  "duration": 24861107,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.product_s_image_is_linked_to_its_page()"
});
formatter.result({
  "duration": 19160379,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 247089790,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "(ID: Cart-B-3) Adding a product to the shopping cart from a product\u0027s page",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page",
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
  "name": "User goes to some product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 49,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 50,
      "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 51,
      "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 52,
      "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 51,
  "name": "(ID: Cart-B-3) Adding a product to the shopping cart from a product\u0027s page",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;2",
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
  "name": "User goes to some product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
  "duration": 3029703591,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4929740745,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 3318814439,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 121982274,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3954035856,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4922532,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 39762365,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 36770408,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 26049356,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 874298926,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "(ID: Cart-B-3) Adding a product to the shopping cart from a product\u0027s page",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;3",
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
  "name": "User goes to some product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 48,
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
  "duration": 5701901954,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4631373484,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2190333986,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 254082979,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3901953003,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3112405,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 19351436,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 13896892,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 12602541,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 257295443,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 54,
  "name": "(ID: Cart-B-4) Adding the same product to the shopping cart again",
  "description": "Description: When user adds a product that is already in the cart\r\nsystem should change quantity instead of adding a new position.",
  "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Quantity two in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 69,
      "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 70,
      "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 71,
      "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 70,
  "name": "(ID: Cart-B-4) Adding the same product to the shopping cart again",
  "description": "Description: When user adds a product that is already in the cart\r\nsystem should change quantity instead of adding a new position.",
  "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Quantity two in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 67,
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
  "duration": 3050318037,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4940860901,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 190286788,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 728522213,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 74886896,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4126004650,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5892916,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 38411378,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 35683351,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 23078166,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 822546834,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "(ID: Cart-B-4) Adding the same product to the shopping cart again",
  "description": "Description: When user adds a product that is already in the cart\r\nsystem should change quantity instead of adding a new position.",
  "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Quantity two in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 67,
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
  "duration": 5683729329,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4005518355,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 256139666,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1729042898,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 257022451,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4194885733,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5536101,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 18994999,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 15602428,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 12665221,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 235661527,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 73,
  "name": "(ID: Cart-B-5) Adding more products to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Quantity one in the input field is correct",
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
  "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 85,
      "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 86,
      "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 87,
      "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "(ID: Cart-B-5) Adding more products to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Quantity one in the input field is correct",
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
  "duration": 3034178311,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4926500340,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 179794550,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 945139278,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 111898578,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4029120605,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7257874,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 39108016,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 22942237,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 860471886,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "(ID: Cart-B-5) Adding more products to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 74,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "Quantity one in the input field is correct",
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
  "duration": 5689906564,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4446543505,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 245407663,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1079167161,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 237591346,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4212493496,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2815627,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 20884039,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 18444862,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 227609599,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "(ID: Cart-B-6) Final value (sum) of products in the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart",
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
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Summed value of products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 99,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 100,
      "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 101,
      "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 102,
      "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 101,
  "name": "(ID: Cart-B-6) Final value (sum) of products in the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;2",
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
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Summed value of products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 98,
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
  "duration": 3037135152,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4617390503,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 161041582,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1064785455,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 114331715,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4137361550,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6252751,
  "status": "passed"
});
formatter.match({
  "location": "CartSumSteps.summed_value_of_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 117923648,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 846426605,
  "status": "passed"
});
formatter.scenario({
  "line": 102,
  "name": "(ID: Cart-B-6) Final value (sum) of products in the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;3",
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
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "Summed value of products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 98,
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
  "duration": 5697783672,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4282857341,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 261029726,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1015306782,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 249498760,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4396419167,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2885857,
  "status": "passed"
});
formatter.match({
  "location": "CartSumSteps.summed_value_of_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 45855400,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 244071780,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 104,
  "name": "(ID: Cart-B-7) Removing a product from the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 105,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 114,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 115,
      "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 116,
      "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 117,
      "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 116,
  "name": "(ID: Cart-B-7) Removing a product from the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 105,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 113,
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
  "duration": 3046911873,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5620690566,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 191490896,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4445241981,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6419643,
  "status": "passed"
});
formatter.match({
  "location": "CartProductRemovingSteps.user_clicks_Usun_hyperlink()"
});
formatter.result({
  "duration": 2072516816,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_zero_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 38734588,
  "status": "passed"
});
formatter.match({
  "location": "CartProductDisappearsAfterLogoutSteps.information_about_empty_cart_is_displayed()"
});
formatter.result({
  "duration": 33376327,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 815877987,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "(ID: Cart-B-7) Removing a product from the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 105,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 106,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 111,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 112,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 113,
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
  "duration": 5688506491,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4252536405,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 247821920,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4114841827,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2911532,
  "status": "passed"
});
formatter.match({
  "location": "CartProductRemovingSteps.user_clicks_Usun_hyperlink()"
});
formatter.result({
  "duration": 2234855768,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_zero_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 45216531,
  "status": "passed"
});
formatter.match({
  "location": "CartProductDisappearsAfterLogoutSteps.information_about_empty_cart_is_displayed()"
});
formatter.result({
  "duration": 45069275,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 241560107,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 119,
  "name": "(ID: Cart-B-8) Removing a product from the shopping cart when more products are in it",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 130,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 131,
      "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 132,
      "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 133,
      "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 132,
  "name": "(ID: Cart-B-8) Removing a product from the shopping cart when more products are in it",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
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
  "duration": 3035002194,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4691031757,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 173229539,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1129406661,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 125979353,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4040350260,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4708820,
  "status": "passed"
});
formatter.match({
  "location": "CartProductRemovingSteps.user_clicks_Usun_hyperlink()"
});
formatter.result({
  "duration": 2074926541,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 104445872,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 824547638,
  "status": "passed"
});
formatter.scenario({
  "line": 133,
  "name": "(ID: Cart-B-8) Removing a product from the shopping cart when more products are in it",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 120,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 127,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 129,
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
  "duration": 5692031593,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4478269423,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 244853751,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1398854946,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 238343867,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4552031880,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3944218,
  "status": "passed"
});
formatter.match({
  "location": "CartProductRemovingSteps.user_clicks_Usun_hyperlink()"
});
formatter.result({
  "duration": 2271322600,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 25573225,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 260884734,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 135,
  "name": "(ID: Cart-B-9) Products added to the shopping cart staying in the shopping cart after login",
  "description": "Description: When user has products in the shopping cart when he/she is signed out these products should\r\nappear in the shopping cart after login (when user had nothing in the shopping cart on his/her account before).",
  "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 143,
      "value": "#login"
    }
  ],
  "line": 144,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 150,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 151,
      "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 152,
      "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 153,
      "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 152,
  "name": "(ID: Cart-B-9) Products added to the shopping cart staying in the shopping cart after login",
  "description": "Description: When user has products in the shopping cart when he/she is signed out these products should\r\nappear in the shopping cart after login (when user had nothing in the shopping cart on his/her account before).",
  "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 143,
      "value": "#login"
    }
  ],
  "line": 144,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 3022037174,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4937183634,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 185039159,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4118362399,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5650887,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 97286548,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 240618419,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 73180226,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 35109050,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 23434981,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 795773653,
  "status": "passed"
});
formatter.scenario({
  "line": 153,
  "name": "(ID: Cart-B-9) Products added to the shopping cart staying in the shopping cart after login",
  "description": "Description: When user has products in the shopping cart when he/she is signed out these products should\r\nappear in the shopping cart after login (when user had nothing in the shopping cart on his/her account before).",
  "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 138,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 139,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 143,
      "value": "#login"
    }
  ],
  "line": 144,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 149,
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
  "duration": 5699247556,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4539092913,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 248322216,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3862937872,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2660817,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 274011737,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 149363738,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 242262031,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 11067295,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 11035578,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 245214342,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 155,
  "name": "(ID: Cart-B-10) Products disappearing from the shopping cart after logout",
  "description": "Description: When user has products in the shopping cart\r\nthese products shouldn\u0027t be displayed after logout when user isn\u0027t signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 158,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 159,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 160,
      "value": "#login"
    }
  ],
  "line": 161,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 168,
      "value": "#logout"
    }
  ],
  "line": 169,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 173,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 174,
      "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 175,
      "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 176,
      "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 175,
  "name": "(ID: Cart-B-10) Products disappearing from the shopping cart after logout",
  "description": "Description: When user has products in the shopping cart\r\nthese products shouldn\u0027t be displayed after logout when user isn\u0027t signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 158,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 159,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 160,
      "value": "#login"
    }
  ],
  "line": 161,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 168,
      "value": "#logout"
    }
  ],
  "line": 169,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 172,
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
  "duration": 3033071242,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5452659571,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 80163221,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 284584400,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 75669622,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.cart_is_empty()"
});
formatter.result({
  "duration": 10060138558,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 511772617,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3663268935,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8966053,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2265652834,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_zero_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 69010593,
  "status": "passed"
});
formatter.match({
  "location": "CartProductDisappearsAfterLogoutSteps.information_about_empty_cart_is_displayed()"
});
formatter.result({
  "duration": 38084770,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 844607417,
  "status": "passed"
});
formatter.scenario({
  "line": 176,
  "name": "(ID: Cart-B-10) Products disappearing from the shopping cart after logout",
  "description": "Description: When user has products in the shopping cart\r\nthese products shouldn\u0027t be displayed after logout when user isn\u0027t signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 158,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 159,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 160,
      "value": "#login"
    }
  ],
  "line": 161,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 168,
      "value": "#logout"
    }
  ],
  "line": 169,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 171,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 172,
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
  "duration": 5709542696,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4053642266,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 298619864,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 124988956,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 227659817,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.cart_is_empty()"
});
formatter.result({
  "duration": 7844166401,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 253449397,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3751933030,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3563238,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 1933756325,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_zero_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 44997534,
  "status": "passed"
});
formatter.match({
  "location": "CartProductDisappearsAfterLogoutSteps.information_about_empty_cart_is_displayed()"
});
formatter.result({
  "duration": 28817406,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 272777800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 178,
  "name": "(ID: Cart-B-11) Products reappearing in the shopping cart after login again",
  "description": "Description: When user has products in the shopping cart they should\r\nbe displayed after login again when user is signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 181,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 182,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 183,
      "value": "#login"
    }
  ],
  "line": 184,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Information about products is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 192,
      "value": "#logout"
    }
  ],
  "line": 193,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 194,
      "value": "#login"
    }
  ],
  "line": 195,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 199,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 201,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 202,
      "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 203,
      "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 204,
      "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 203,
  "name": "(ID: Cart-B-11) Products reappearing in the shopping cart after login again",
  "description": "Description: When user has products in the shopping cart they should\r\nbe displayed after login again when user is signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 181,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 182,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 183,
      "value": "#login"
    }
  ],
  "line": 184,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Information about products is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 192,
      "value": "#logout"
    }
  ],
  "line": 193,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 194,
      "value": "#login"
    }
  ],
  "line": 195,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 199,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 200,
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
  "duration": 3039082341,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4717543272,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 161981005,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 396691780,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 89922951,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.cart_is_empty()"
});
formatter.result({
  "duration": 8792715998,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 527182101,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3652339835,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7211432,
  "status": "passed"
});
formatter.match({
  "location": "CartProductStaysAfterLoginAgainSteps.information_about_product_is_displayed()"
});
formatter.result({
  "duration": 61168223,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2294216884,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 118115082,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 280464607,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 64738634,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 1830887612,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 14053210,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 882671798,
  "status": "passed"
});
formatter.scenario({
  "line": 204,
  "name": "(ID: Cart-B-11) Products reappearing in the shopping cart after login again",
  "description": "Description: When user has products in the shopping cart they should\r\nbe displayed after login again when user is signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 181,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 182,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 183,
      "value": "#login"
    }
  ],
  "line": 184,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Information about products is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 192,
      "value": "#logout"
    }
  ],
  "line": 193,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 194,
      "value": "#login"
    }
  ],
  "line": 195,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 199,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 200,
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
  "duration": 5736677977,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4358499777,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 304782751,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 137738377,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 230642334,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.cart_is_empty()"
});
formatter.result({
  "duration": 7628574849,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 256036208,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3860349172,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2780888,
  "status": "passed"
});
formatter.match({
  "location": "CartProductStaysAfterLoginAgainSteps.information_about_product_is_displayed()"
});
formatter.result({
  "duration": 71672920,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 1904333277,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 363722109,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 105025460,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 228752161,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 1496544373,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 23420255,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 276697474,
  "status": "passed"
});
});