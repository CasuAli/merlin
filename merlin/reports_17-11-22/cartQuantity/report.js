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
  "duration": 3678829074,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4771253126,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 175152184,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4157820433,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8537498,
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
  "duration": 81909914,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 123605119,
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
  "duration": 2039467096,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 838418855,
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
  "duration": 5762961055,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4529169312,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 253783179,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3910954926,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5705635,
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
  "duration": 61603574,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 282179960,
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
  "duration": 2021295981,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 253076346,
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
  "duration": 3060491219,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4742078904,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 188983000,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4534715609,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8536366,
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
  "duration": 95276680,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 100623614,
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
  "duration": 2038830871,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 876934067,
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
  "duration": 5726117396,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4405182459,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 245631947,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4737683854,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3668205,
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
  "duration": 52529910,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 289126707,
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
  "duration": 2016738571,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 234540487,
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
  "duration": 3063814692,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5607726301,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 179890079,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3818214462,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8417427,
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
  "duration": 112788538,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 112703583,
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
  "duration": 2025260966,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 879081374,
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
  "duration": 5714743882,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4229370639,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 258323976,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3767735952,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2745396,
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
  "duration": 42439042,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 285956532,
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
  "duration": 2027766975,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 245736915,
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
  "duration": 3084305291,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4901155551,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 180291070,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4055194504,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5386580,
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
  "duration": 88084128,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 105335832,
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
  "duration": 2036746621,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 827189199,
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
  "duration": 5716018221,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4279865385,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 246808492,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3888000985,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3349527,
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
  "duration": 91621312,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 313021959,
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
  "duration": 2041219075,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 251404792,
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
  "duration": 3097269934,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 5545028496,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 179649181,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4383943492,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6921449,
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
  "duration": 94580798,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 115823540,
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
  "duration": 2038230894,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 870321103,
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
  "duration": 5722888318,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4718281822,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 244885091,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3559475146,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2503366,
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
  "duration": 35898573,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 325913352,
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
  "duration": 2024733107,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 263942012,
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
  "duration": 3093533387,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4472430123,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 174265622,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4119228570,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5378650,
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
  "duration": 84819935,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 117016698,
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
  "duration": 2024317767,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 42197012,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 18687647,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 811630572,
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
  "duration": 5715368780,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4303665110,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 248848565,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4211317707,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2845077,
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
  "duration": 35682218,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 283439950,
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
  "duration": 2037351129,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 34906665,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 7476116,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 255773034,
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
  "duration": 3043572919,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4934976670,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 181626198,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4064751094,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 6244445,
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
  "duration": 81837041,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 104472303,
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
  "duration": 2014064915,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 35932555,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 20412062,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 797350057,
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
  "duration": 5732989760,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4544889168,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 249244270,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4198101973,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2729538,
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
  "duration": 50446414,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 287247105,
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
  "duration": 2032577365,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 49992562,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 7656600,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 252343838,
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
  "duration": 3101055189,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4774469366,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 172127001,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4188058679,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 8744036,
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
  "duration": 96332021,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 114522393,
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
  "duration": 2031070058,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 35459445,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 19133948,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 796253182,
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
  "duration": 5740001450,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 4709144725,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_clicks_the_Do_koszyka_button()"
});
formatter.result({
  "duration": 246303287,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4401806501,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 3190942,
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
  "duration": 51126817,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 261338965,
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
  "duration": 2031950957,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 44461746,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_contains_a_message_about_error()"
});
formatter.result({
  "duration": 6728882,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 243064014,
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
  "duration": 3091127814,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.user_is_on_specific_product_s_page()"
});
formatter.result({
  "duration": 2048416158,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 117923648,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 4041336125,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 5158143,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.user_changes_quantity_of_a_product()"
});
formatter.result({
  "duration": 84666259,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 126766987,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.quantity_in_the_input_field_is_changed_to_stock_level()"
});
formatter.result({
  "duration": 2037276368,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 49744490,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.notice_contains_a_message_about_stock_level()"
});
formatter.result({
  "duration": 60073991,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 849884498,
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
  "duration": 5717634648,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.user_is_on_specific_product_s_page()"
});
formatter.result({
  "duration": 3711556338,
  "status": "passed"
});
formatter.match({
  "location": "CartProductAddingFromPageSteps.user_clicks_Do_koszyka_button_on_this_page()"
});
formatter.result({
  "duration": 256626369,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.user_click_the_Przejdz_do_koszyka_button()"
});
formatter.result({
  "duration": 3959306141,
  "status": "passed"
});
formatter.match({
  "location": "_CartCommonSteps.shopping_cart_page_is_opened()"
});
formatter.result({
  "duration": 2556227,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.user_changes_quantity_of_a_product()"
});
formatter.result({
  "duration": 45073051,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.user_changes_of_a_product()"
});
formatter.result({
  "duration": 300991076,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.quantity_in_the_input_field_is_changed_to_stock_level()"
});
formatter.result({
  "duration": 2051470039,
  "status": "passed"
});
formatter.match({
  "location": "CartChangeQuantitySteps.notice_about_error_is_displayed()"
});
formatter.result({
  "duration": 29270505,
  "status": "passed"
});
formatter.match({
  "location": "CartOverQuantitySteps.notice_contains_a_message_about_stock_level()"
});
formatter.result({
  "duration": 30569008,
  "status": "passed"
});
formatter.match({
  "location": "_LoginCommonSteps.browser_is_turned_off()"
});
formatter.result({
  "duration": 244676288,
  "status": "passed"
});
});