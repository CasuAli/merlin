$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CartQuantity.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Aleksandra Torbe\u0027"
    }
  ],
  "line": 2,
  "name": "Shopping Cart (Quantity)",
  "description": "Description: Testing shopping cart functionalities connected with quantity of products",
  "id": "shopping-cart-(quantity)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"\u003cquantity\u003e\" of a product",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"\u003cfinal_quantity\u003e\" in the input field is correct",
  "keyword": "Then "
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
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser",
        "quantity",
        "final_quantity"
      ],
      "line": 19,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome",
        "5",
        "5"
      ],
      "line": 20,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox",
        "5",
        "5"
      ],
      "line": 21,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;3"
    },
    {
      "cells": [
        "Chrome",
        "0",
        "1"
      ],
      "line": 22,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;4"
    },
    {
      "cells": [
        "Firefox",
        "0",
        "1"
      ],
      "line": 23,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;5"
    },
    {
      "cells": [
        "Chrome",
        "4.6",
        "4"
      ],
      "line": 24,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;6"
    },
    {
      "cells": [
        "Firefox",
        "4.6",
        "4"
      ],
      "line": 25,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;7"
    },
    {
      "cells": [
        "Chrome",
        "3,6",
        "3"
      ],
      "line": 26,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;8"
    },
    {
      "cells": [
        "Firefox",
        "3,6",
        "3"
      ],
      "line": 27,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;9"
    },
    {
      "cells": [
        "Chrome",
        "2 0",
        "2"
      ],
      "line": 28,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;10"
    },
    {
      "cells": [
        "Firefox",
        "2 0",
        "2"
      ],
      "line": 29,
      "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;11"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"5\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"5\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 3641507831,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5640013744,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 182789491,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4251491444,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 7773255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 83023591,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 105810968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2033153101,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 813025781,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"5\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"5\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 5699562762,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4457433055,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 249816874,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4278683300,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4014439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 53154687,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 309167283,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2023917099,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 261038951,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"0\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"1\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 3062423540,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 6817670025,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 181322967,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4707710200,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6318059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 87768271,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 130128679,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2036834892,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 835047047,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"0\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"1\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 5744497894,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5235820332,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 250651327,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4169463911,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3270227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 55763770,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 264558382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2032753621,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 263546087,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"4.6\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"4\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 3044574919,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4875321321,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 179925541,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4949486868,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5365045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.6",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 85280014,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 108808959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2025690973,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 833233526,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"4.6\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"4\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 5812224932,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4209660781,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 257042636,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4219965339,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4262509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.6",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 44889067,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 293595097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2054294981,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 257863874,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"3,6\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"3\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 3096413738,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5607703026,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 189964281,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4136262856,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5098850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3,6",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 88318029,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 106790035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2035898491,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 821837006,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"3,6\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"3\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 5722746221,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4848671293,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 244028560,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4369192807,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3927218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3,6",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 60181088,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 291729471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2031311262,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 295323662,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"2 0\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"2\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 3128206794,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5040123998,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 174404178,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4499287882,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 10559046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 0",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 105191358,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 110288698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2037789416,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 806597469,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "(ID: Cart-Q-1 to Cart-Q-5) Changing quantity of a product in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is incorrect\r\nsystem should change it to correct value.",
  "id": "shopping-cart-(quantity);(id:-cart-q-1-to-cart-q-5)-changing-quantity-of-a-product-in-the-shopping-cart;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User changes \"2 0\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Quantity \"2\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
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
  "duration": 5717379288,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4919256997,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 253758061,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4605359382,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2998747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 0",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 53135431,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 301294347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2029762804,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 299658667,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "(ID: Cart-Q-6 to Cart-Q-8) Changing quantity of a product to invalid in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is invalid\r\nsystem should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User changes \"\u003cquantity\u003e\" of a product",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Quantity \"\u003cfinal_quantity\u003e\" in the input field is correct",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Notice contains a message about error",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Browser can be turned off",
  "keyword": "And "
});
formatter.examples({
  "line": 46,
  "name": "",
  "description": "",
  "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;",
  "rows": [
    {
      "cells": [
        "browser",
        "quantity",
        "final_quantity"
      ],
      "line": 47,
      "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;1"
    },
    {
      "cells": [
        "Chrome",
        "-1",
        "1"
      ],
      "line": 48,
      "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;2"
    },
    {
      "cells": [
        "Firefox",
        "-1",
        "1"
      ],
      "line": 49,
      "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;3"
    },
    {
      "cells": [
        "Chrome",
        "q",
        "1"
      ],
      "line": 50,
      "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;4"
    },
    {
      "cells": [
        "Firefox",
        "q",
        "1"
      ],
      "line": 51,
      "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;5"
    },
    {
      "cells": [
        "Chrome",
        "101",
        "100"
      ],
      "line": 52,
      "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;6"
    },
    {
      "cells": [
        "Firefox",
        "101",
        "100"
      ],
      "line": 53,
      "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 48,
  "name": "(ID: Cart-Q-6 to Cart-Q-8) Changing quantity of a product to invalid in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is invalid\r\nsystem should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User changes \"-1\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Quantity \"1\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Notice contains a message about error",
  "keyword": "And "
});
formatter.step({
  "line": 45,
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
  "duration": 3063580825,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4970677455,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 184117821,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4574819138,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 9610185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 103665177,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 113703539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2041385872,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 45729184,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 19200737,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 804940645,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "(ID: Cart-Q-6 to Cart-Q-8) Changing quantity of a product to invalid in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is invalid\r\nsystem should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User changes \"-1\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Quantity \"1\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Notice contains a message about error",
  "keyword": "And "
});
formatter.step({
  "line": 45,
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
  "duration": 5709095165,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4623436061,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 249386054,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3969017233,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3455997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 64163432,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 289500990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2032572760,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 41755524,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 6552159,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 251939633,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "(ID: Cart-Q-6 to Cart-Q-8) Changing quantity of a product to invalid in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is invalid\r\nsystem should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User changes \"q\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Quantity \"1\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Notice contains a message about error",
  "keyword": "And "
});
formatter.step({
  "line": 45,
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
  "duration": 3091027925,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5042034934,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 165387549,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4145890789,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 11524142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 107503663,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 114585568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2030011629,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 39485886,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 19956276,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 816382852,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "(ID: Cart-Q-6 to Cart-Q-8) Changing quantity of a product to invalid in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is invalid\r\nsystem should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User changes \"q\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Quantity \"1\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Notice contains a message about error",
  "keyword": "And "
});
formatter.step({
  "line": 45,
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
  "duration": 5724404932,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4194254731,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 262237015,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4635518267,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2901708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "q",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 46437904,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 284411956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2028259277,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 34867695,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 6699416,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 247971259,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "(ID: Cart-Q-6 to Cart-Q-8) Changing quantity of a product to invalid in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is invalid\r\nsystem should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User changes \"101\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Quantity \"100\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Notice contains a message about error",
  "keyword": "And "
});
formatter.step({
  "line": 45,
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
  "duration": 3071274410,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5294252843,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 184262434,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4582450423,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 9732522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 103062935,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 115887844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2044803734,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 42400809,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 19045551,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 788035220,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "(ID: Cart-Q-6 to Cart-Q-8) Changing quantity of a product to invalid in the shopping cart",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is invalid\r\nsystem should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-6-to-cart-q-8)-changing-quantity-of-a-product-to-invalid-in-the-shopping-cart;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 35,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "User is on Home Page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User clicks Do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User clicks Przejdz do koszyka button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Shopping cart page is opened",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "User changes \"101\" of a product",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Quantity \"100\" in the input field is correct",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Notice contains a message about error",
  "keyword": "And "
});
formatter.step({
  "line": 45,
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
  "duration": 5716126097,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4448737370,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 243328148,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3628826782,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 4507937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101",
      "offset": 14
    }
  ],
  "location": "CartChangeQuantitySteps.user_changes_of_a_product(String)"
});
formatter.result({
  "duration": 39116989,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 299017913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 10
    }
  ],
  "location": "CartChangeQuantitySteps.quantity_in_the_input_field_is_correct(String)"
});
formatter.result({
  "duration": 2035491459,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 31977693,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 8901844,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 244897373,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "(ID: Cart-Q-9) Changing quantity of a product in the shopping cart over stock level",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is bigger than amount\r\nof a product in the stock system should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-9)-changing-quantity-of-a-product-in-the-shopping-cart-over-stock-level",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "The \"\u003cbrowser\u003e\" is turned on",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "User is on a specific product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks Do koszyka button on this page",
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
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User changes quantity of a product",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Quantity in the input field is changed to stock level",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Notice contains a message about stock level",
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
  "id": "shopping-cart-(quantity);(id:-cart-q-9)-changing-quantity-of-a-product-in-the-shopping-cart-over-stock-level;",
  "rows": [
    {
      "cells": [
        "browser"
      ],
      "line": 71,
      "id": "shopping-cart-(quantity);(id:-cart-q-9)-changing-quantity-of-a-product-in-the-shopping-cart-over-stock-level;;1"
    },
    {
      "cells": [
        "Chrome"
      ],
      "line": 72,
      "id": "shopping-cart-(quantity);(id:-cart-q-9)-changing-quantity-of-a-product-in-the-shopping-cart-over-stock-level;;2"
    },
    {
      "cells": [
        "Firefox"
      ],
      "line": 73,
      "id": "shopping-cart-(quantity);(id:-cart-q-9)-changing-quantity-of-a-product-in-the-shopping-cart-over-stock-level;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 72,
  "name": "(ID: Cart-Q-9) Changing quantity of a product in the shopping cart over stock level",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is bigger than amount\r\nof a product in the stock system should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-9)-changing-quantity-of-a-product-in-the-shopping-cart-over-stock-level;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "The \"Chrome\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "User is on a specific product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks Do koszyka button on this page",
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
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User changes quantity of a product",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Quantity in the input field is changed to stock level",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Notice contains a message about stock level",
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
  "duration": 3080844573,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.user_is_on_specific_product_s_page()"
});
formatter.result({
  "duration": 2114273686,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 147836840,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4713276117,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5438673,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.user_changes_quantity_of_a_product()"
});
formatter.result({
  "duration": 87421652,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 105650496,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.quantity_in_the_input_field_is_changed_to_stock_level()"
});
formatter.result({
  "duration": 2036023470,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 58296583,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.notice_contains_a_message_about_stock_level()"
});
formatter.result({
  "duration": 77487502,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 797777559,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "(ID: Cart-Q-9) Changing quantity of a product in the shopping cart over stock level",
  "description": "Description: User can change quantity of products in the cart entering\r\na value in the input field. When entered value is bigger than amount\r\nof a product in the stock system should change it to correct value and show a notice.",
  "id": "shopping-cart-(quantity);(id:-cart-q-9)-changing-quantity-of-a-product-in-the-shopping-cart-over-stock-level;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "The \"Firefox\" is turned on",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "User is on a specific product\u0027s page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks Do koszyka button on this page",
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
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "User changes quantity of a product",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "User clicks Przelicz hyperlink",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "Quantity in the input field is changed to stock level",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "Notice about error is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "Notice contains a message about stock level",
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
  "duration": 5698033937,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.user_is_on_specific_product_s_page()"
});
formatter.result({
  "duration": 1980203818,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 250371539,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4542675311,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3039147,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.user_changes_quantity_of_a_product()"
});
formatter.result({
  "duration": 44640996,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 296974822,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.quantity_in_the_input_field_is_changed_to_stock_level()"
});
formatter.result({
  "duration": 2022372793,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 37246455,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.notice_contains_a_message_about_stock_level()"
});
formatter.result({
  "duration": 35446527,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 254848892,
  "status": "passed"
});
});