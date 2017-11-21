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
  "duration": 3615833094,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 12903447312,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 200009440,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5367170486,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7392276,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 40893129,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 35671188,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 25656613,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 842820680,
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
  "duration": 5758913549,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5908535214,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 247877618,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5244739923,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3125236,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 18079699,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 17261483,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 16718144,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 235563577,
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
  "name": "Information about product\u0027s sending time is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Information about product\u0027s price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product\u0027s title is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Product\u0027s image is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 35,
      "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 36,
      "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 37,
      "id": "shopping-cart-(basic);(id:-cart-b-2)-information-about-a-product-is-displayed;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
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
  "name": "Information about product\u0027s sending time is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Information about product\u0027s price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product\u0027s title is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Product\u0027s image is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
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
  "duration": 3097165879,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5415032623,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.user_goes_to_chosen_product_s_page()"
});
formatter.result({
  "duration": 3096937443,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 94732370,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5138503799,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7588240,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_title_is_displayed()"
});
formatter.result({
  "duration": 37010844,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_author_is_displayed()"
});
formatter.result({
  "duration": 38168885,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_sending_time_is_displayed()"
});
formatter.result({
  "duration": 37900047,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_price_is_displayed()"
});
formatter.result({
  "duration": 37124496,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.product_s_title_is_linked_to_its_page()"
});
formatter.result({
  "duration": 24381145,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.product_s_image_is_linked_to_its_page()"
});
formatter.result({
  "duration": 23563305,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 841373412,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
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
  "name": "Information about product\u0027s sending time is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Information about product\u0027s price is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Product\u0027s title is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Product\u0027s image is linked to its page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
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
  "duration": 5735540167,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4878259277,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.user_goes_to_chosen_product_s_page()"
});
formatter.result({
  "duration": 2816696622,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 260234327,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4694836583,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2959855,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_title_is_displayed()"
});
formatter.result({
  "duration": 21036535,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_author_is_displayed()"
});
formatter.result({
  "duration": 13301038,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_sending_time_is_displayed()"
});
formatter.result({
  "duration": 11597393,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.information_about_product_s_price_is_displayed()"
});
formatter.result({
  "duration": 11824697,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.product_s_title_is_linked_to_its_page()"
});
formatter.result({
  "duration": 12578348,
  "status": "passed"
});
formatter.match({
  "location": "CartShowingProductInfoSteps.product_s_image_is_linked_to_its_page()"
});
formatter.result({
  "duration": 11123907,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 258935071,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "(ID: Cart-B-3) Adding a product to the shopping cart from a product\u0027s page",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User goes to some product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 51,
      "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 52,
      "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 53,
      "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "(ID: Cart-B-3) Adding a product to the shopping cart from a product\u0027s page",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User goes to some product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 49,
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
  "duration": 3085852427,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4923505158,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2768994578,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 124168568,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4624183293,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3958179,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 45183580,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 35412545,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 23284273,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 884577337,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "(ID: Cart-B-3) Adding a product to the shopping cart from a product\u0027s page",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-3)-adding-a-product-to-the-shopping-cart-from-a-product\u0027s-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 40,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User goes to some product\u0027s page",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "User clicks Do koszyka button on this page",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 49,
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
  "duration": 5706571038,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4566511607,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_goes_to_a_product_s_page()"
});
formatter.result({
  "duration": 2440960717,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 250706454,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4222778315,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3938167,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 42119890,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 33193125,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 31004667,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 251834288,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "(ID: Cart-B-4) Adding the same product to the shopping cart again",
  "description": "Description: When user adds a product that is already in the cart\r\nsystem should change quantity instead of adding a new position.",
  "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Quantity two in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 69,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 70,
      "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 71,
      "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 72,
      "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 71,
  "name": "(ID: Cart-B-4) Adding the same product to the shopping cart again",
  "description": "Description: When user adds a product that is already in the cart\r\nsystem should change quantity instead of adding a new position.",
  "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Quantity two in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 68,
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
  "duration": 3115385661,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5302186570,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 191952243,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1269263793,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 74526136,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4337165652,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8064370,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 45233798,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 34783495,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 22905560,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 835233194,
  "status": "passed"
});
formatter.scenario({
  "line": 72,
  "name": "(ID: Cart-B-4) Adding the same product to the shopping cart again",
  "description": "Description: When user adds a product that is already in the cart\r\nsystem should change quantity instead of adding a new position.",
  "id": "shopping-cart-(basic);(id:-cart-b-4)-adding-the-same-product-to-the-shopping-cart-again;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Title of the product in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "Quantity two in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 68,
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
  "duration": 5725144991,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4686121641,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 251933969,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1086891151,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 247465300,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4005440561,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2954570,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 20472806,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 17811617,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 13442253,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 225935645,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "(ID: Cart-B-5) Adding more products to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 85,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 86,
      "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 87,
      "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 88,
      "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 87,
  "name": "(ID: Cart-B-5) Adding more products to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 84,
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
  "duration": 3100408164,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4974014137,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 170778647,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1422344475,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 120557384,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4790856505,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8377762,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 51133497,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 28625153,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 811214148,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "(ID: Cart-B-5) Adding more products to the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-5)-adding-more-products-to-the-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "Quantity two of the products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 84,
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
  "duration": 5708009621,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4353306097,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 246697301,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1311459576,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 241522179,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4644203380,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3727855,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_two_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 22627282,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 15150806,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 235817689,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 90,
  "name": "(ID: Cart-B-6) Final value (sum) of products in the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "Summed value of products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 100,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 101,
      "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 102,
      "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 103,
      "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 102,
  "name": "(ID: Cart-B-6) Final value (sum) of products in the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "Summed value of products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 99,
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
  "duration": 3055049765,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4693496926,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 172677878,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1665838758,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 110932851,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4894457114,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7538400,
  "status": "passed"
});
formatter.match({
  "location": "CartSumSteps.summed_value_of_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 142266390,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 801066288,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "(ID: Cart-B-6) Final value (sum) of products in the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-6)-final-value-(sum)-of-products-in-the-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 91,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "User clicks Do koszyka button",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "Summed value of products in the cart is correct",
  "keyword": "And "
});
formatter.step({
  "line": 99,
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
  "duration": 5744392548,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4217624715,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 253195466,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 793171075,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 246180393,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4569032336,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2841673,
  "status": "passed"
});
formatter.match({
  "location": "CartSumSteps.summed_value_of_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 53493754,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 226635303,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 105,
  "name": "(ID: Cart-B-7) Removing a product from the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 106,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 116,
      "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 117,
      "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 118,
      "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 117,
  "name": "(ID: Cart-B-7) Removing a product from the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 106,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 114,
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
  "duration": 3057975638,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5407806483,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 181588407,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5747634456,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 12837746,
  "status": "passed"
});
formatter.match({
  "location": "CartProductRemovingSteps.user_clicks_Usun_hyperlink()"
});
formatter.result({
  "duration": 2104170002,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_zero_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 52560753,
  "status": "passed"
});
formatter.match({
  "location": "CartProductDisappearsAfterLogoutSteps.information_about_empty_cart_is_displayed()"
});
formatter.result({
  "duration": 32957892,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 813885155,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "(ID: Cart-B-7) Removing a product from the shopping cart",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-7)-removing-a-product-from-the-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 106,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 114,
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
  "duration": 5740755690,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4275747988,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 254311595,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 5822397336,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2916434,
  "status": "passed"
});
formatter.match({
  "location": "CartProductRemovingSteps.user_clicks_Usun_hyperlink()"
});
formatter.result({
  "duration": 2259960581,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_zero_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 33627721,
  "status": "passed"
});
formatter.match({
  "location": "CartProductDisappearsAfterLogoutSteps.information_about_empty_cart_is_displayed()"
});
formatter.result({
  "duration": 39129073,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 252802027,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 120,
  "name": "(ID: Cart-B-8) Removing a product from the shopping cart when more products are in it",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 131,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 132,
      "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 133,
      "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 134,
      "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 133,
  "name": "(ID: Cart-B-8) Removing a product from the shopping cart when more products are in it",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
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
  "duration": 3075739303,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5006270862,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 176403845,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1809397230,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 110207896,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4231971273,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8281101,
  "status": "passed"
});
formatter.match({
  "location": "CartProductRemovingSteps.user_clicks_Usun_hyperlink()"
});
formatter.result({
  "duration": 2071039932,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 88886666,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 823944284,
  "status": "passed"
});
formatter.scenario({
  "line": 134,
  "name": "(ID: Cart-B-8) Removing a product from the shopping cart when more products are in it",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-8)-removing-a-product-from-the-shopping-cart-when-more-products-are-in-it;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "User clicks Powroc do sklepu button",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "User clicks another Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "Shopping cart page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 128,
  "name": "User clicks Usun hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 129,
  "name": "Quantity one of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 130,
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
  "duration": 5722970125,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4117184833,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 255694673,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingSameProductAgainSteps.user_clicks_Powroc_do_sklepu_button()"
});
formatter.result({
  "duration": 1358993219,
  "status": "passed"
});
formatter.match({
  "location": "CartMoreProductsAddingSteps.user_clicks_another_Do_koszyka_button()"
});
formatter.result({
  "duration": 246411850,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 8046673136,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3451843,
  "status": "passed"
});
formatter.match({
  "location": "CartProductRemovingSteps.user_clicks_Usun_hyperlink()"
});
formatter.result({
  "duration": 2243885079,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 32129858,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 273241984,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 136,
  "name": "(ID: Cart-B-9) Products added to the shopping cart staying in the shopping cart after login",
  "description": "Description: When user has products in the shopping cart when they are signed out they should\r\nappear in the shopping cart after login (when user had nothing in the shopping cart on his/her account).",
  "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 139,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 144,
      "value": "#login"
    }
  ],
  "line": 145,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 151,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 152,
      "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 153,
      "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 154,
      "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 153,
  "name": "(ID: Cart-B-9) Products added to the shopping cart staying in the shopping cart after login",
  "description": "Description: When user has products in the shopping cart when they are signed out they should\r\nappear in the shopping cart after login (when user had nothing in the shopping cart on his/her account).",
  "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 139,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 144,
      "value": "#login"
    }
  ],
  "line": 145,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 150,
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
  "duration": 3097833064,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5468103487,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 178004410,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4447135673,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6327876,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 80640301,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 265871230,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 73748320,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 34427815,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 22468321,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 788328224,
  "status": "passed"
});
formatter.scenario({
  "line": 154,
  "name": "(ID: Cart-B-9) Products added to the shopping cart staying in the shopping cart after login",
  "description": "Description: When user has products in the shopping cart when they are signed out they should\r\nappear in the shopping cart after login (when user had nothing in the shopping cart on his/her account).",
  "id": "shopping-cart-(basic);(id:-cart-b-9)-products-added-to-the-shopping-cart-staying-in-the-shopping-cart-after-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 139,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 140,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 144,
      "value": "#login"
    }
  ],
  "line": 145,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 149,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 150,
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
  "duration": 5725262041,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4789414523,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 265693389,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4722016734,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2919077,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 266955642,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 145123167,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 245624972,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 13323315,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 16396445,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 248094727,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 156,
  "name": "(ID: Cart-B-10) Products disappearing from the shopping cart after logout",
  "description": "Description: When user has products in the shopping cart\r\nthey shouldn\u0027t be displayed after logout when user isn\u0027t signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 159,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 161,
      "value": "#login"
    }
  ],
  "line": 162,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 169,
      "value": "#logout"
    }
  ],
  "line": 170,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 174,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 175,
      "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 176,
      "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 177,
      "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 176,
  "name": "(ID: Cart-B-10) Products disappearing from the shopping cart after logout",
  "description": "Description: When user has products in the shopping cart\r\nthey shouldn\u0027t be displayed after logout when user isn\u0027t signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 159,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 161,
      "value": "#login"
    }
  ],
  "line": 162,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 169,
      "value": "#logout"
    }
  ],
  "line": 170,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 173,
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
  "duration": 3089908399,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4987952531,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 127398393,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 245951202,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 76552990,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.cart_is_empty()"
});
formatter.result({
  "duration": 9247237997,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 525005664,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4197676368,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5264608,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2008067768,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_zero_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 38131504,
  "status": "passed"
});
formatter.match({
  "location": "CartProductDisappearsAfterLogoutSteps.information_about_empty_cart_is_displayed()"
});
formatter.result({
  "duration": 33495190,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 823568214,
  "status": "passed"
});
formatter.scenario({
  "line": 177,
  "name": "(ID: Cart-B-10) Products disappearing from the shopping cart after logout",
  "description": "Description: When user has products in the shopping cart\r\nthey shouldn\u0027t be displayed after logout when user isn\u0027t signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-10)-products-disappearing-from-the-shopping-cart-after-logout;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 159,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 160,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 161,
      "value": "#login"
    }
  ],
  "line": 162,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 169,
      "value": "#logout"
    }
  ],
  "line": 170,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "line": 171,
  "name": "Quantity zero of the products in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 172,
  "name": "Information about empty cart is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 173,
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
  "duration": 5766737023,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4541363595,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 288452825,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 107022247,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 230241953,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.cart_is_empty()"
});
formatter.result({
  "duration": 8884316428,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 249821027,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3658639426,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2909260,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2082961668,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_zero_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 18045718,
  "status": "passed"
});
formatter.match({
  "location": "CartProductDisappearsAfterLogoutSteps.information_about_empty_cart_is_displayed()"
});
formatter.result({
  "duration": 30311806,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 317942638,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 179,
  "name": "(ID: Cart-B-11) Products reappearing in the shopping cart after login again",
  "description": "Description: When user has products in the shopping cart they should\r\nbe displayed after logout and login again when user is signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 182,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 183,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 184,
      "value": "#login"
    }
  ],
  "line": 185,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "Information about products is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 193,
      "value": "#logout"
    }
  ],
  "line": 194,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 195,
      "value": "#login"
    }
  ],
  "line": 196,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 202,
  "name": "",
  "description": "",
  "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 203,
      "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 204,
      "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 205,
      "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 204,
  "name": "(ID: Cart-B-11) Products reappearing in the shopping cart after login again",
  "description": "Description: When user has products in the shopping cart they should\r\nbe displayed after logout and login again when user is signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 182,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 183,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 184,
      "value": "#login"
    }
  ],
  "line": 185,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "Information about products is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 193,
      "value": "#logout"
    }
  ],
  "line": 194,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 195,
      "value": "#login"
    }
  ],
  "line": 196,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 201,
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
  "duration": 3074029239,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4844088218,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 121334068,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 245342919,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 73906149,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.cart_is_empty()"
});
formatter.result({
  "duration": 9134459909,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 550272991,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4471431107,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8814245,
  "status": "passed"
});
formatter.match({
  "location": "CartProductStaysAfterLoginAgainSteps.information_about_product_is_displayed()"
});
formatter.result({
  "duration": 71809443,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 1978860763,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 100825769,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 266838969,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 70499615,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 3635159943,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 13116023,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 851750842,
  "status": "passed"
});
formatter.scenario({
  "line": 205,
  "name": "(ID: Cart-B-11) Products reappearing in the shopping cart after login again",
  "description": "Description: When user has products in the shopping cart they should\r\nbe displayed after logout and login again when user is signed in.",
  "id": "shopping-cart-(basic);(id:-cart-b-11)-products-reappearing-in-the-shopping-cart-after-login-again;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 182,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 183,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 184,
      "value": "#login"
    }
  ],
  "line": 185,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "Cart is empty",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "Information about products is displayed",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 193,
      "value": "#logout"
    }
  ],
  "line": 194,
  "name": "User clicks WYLOGUJ SIE hyperlink",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 195,
      "value": "#login"
    }
  ],
  "line": 196,
  "name": "User clicks the CZESC ZALOGUJ SIE hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "User enters valid E-mail and valid password in a popup window",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "User clicks the Zaloguj sie button",
  "keyword": "And "
});
formatter.step({
  "line": 199,
  "name": "Title of the product in the cart is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 200,
  "name": "Quantity one in the input field is correct",
  "keyword": "And "
});
formatter.step({
  "line": 201,
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
  "duration": 5732326955,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4614983916,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 290351678,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 105692030,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 227849602,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.cart_is_empty()"
});
formatter.result({
  "duration": 8669649681,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 252001556,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4059997206,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2865460,
  "status": "passed"
});
formatter.match({
  "location": "CartProductStaysAfterLoginAgainSteps.information_about_product_is_displayed()"
});
formatter.result({
  "duration": 59592061,
  "status": "passed"
});
formatter.match({
  "location": "LogoutSuccessSteps.user_clicks_WYLOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 2072984474,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink()"
});
formatter.result({
  "duration": 274717948,
  "status": "passed"
});
formatter.match({
  "location": "LoginSuccessSteps.user_enters_valid()"
});
formatter.result({
  "duration": 127525638,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_clicks_button()"
});
formatter.result({
  "duration": 246156228,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.title_of_the_products_in_the_cart_is_correct()"
});
formatter.result({
  "duration": 2240241048,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.quantity_one_in_the_input_field_is_correct()"
});
formatter.result({
  "duration": 24033770,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 296207201,
  "status": "passed"
});
});