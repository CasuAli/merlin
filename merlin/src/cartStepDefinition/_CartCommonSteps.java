package cartStepDefinition;

import static org.junit.Assert.assertEquals;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;


public class _CartCommonSteps {

	public static String title;
	public static int deleteButtons;
		
	@When("^User clicks Do koszyka button$")
	public void user_clicks_the_Do_koszyka_button() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		title = _LoginCommonSteps.driver.findElement(By.xpath("//a[@class='b-products-list__title product-link']")).getText();
		_LoginCommonSteps.driver.findElement(By.xpath("//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
	}

	@When("^User clicks Przejdz do koszyka button$")
	public void user_click_the_Przejdz_do_koszyka_button() throws Throwable {
		Thread.sleep(2000);
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
	}

	@Then("^Shopping cart page is opened$")
	public void shopping_cart_page_is_opened() throws Throwable {
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("Page address was incorrect", _LoginCommonSteps.baseUrl + "cart/", _LoginCommonSteps.driver.getCurrentUrl());
	}

	@Then("^Quantity zero of the products in the cart is correct$")
	public void quantity_zero_of_the_products_in_the_cart_is_correct() throws Throwable {
		
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("Quantity of products in the cart was incorrect", "pusty", _LoginCommonSteps.driver.findElement(By.xpath("//span[@id='header-cart-item-count-text']")).getText());
	}
	
	@Then("^Quantity one of the products in the cart is correct$")
	public void quantity_one_of_the_products_in_the_cart_is_correct() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("Quantity of products in the cart was incorrect", "1 produkt", _LoginCommonSteps.driver.findElement(By.xpath("//span[@id='header-cart-item-count-text']")).getText());
	}
	
	@Then("^Quantity two of the products in the cart is correct$")
	public void quantity_two_of_the_products_in_the_cart_is_correct() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("Quantity of products in the cart was incorrect", "2 produkty", _LoginCommonSteps.driver.findElement(By.xpath("//span[@id='header-cart-item-count-text']")).getText());
	}

	@Then("^Title of the product in the cart is correct$")
	public void title_of_the_products_in_the_cart_is_correct() throws Throwable {
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("The title of the product was incorrect", title, _LoginCommonSteps.driver.findElement(By.className("title")).getText());
	}
	
	@Then("^Quantity one in the input field is correct$")
	public void quantity_one_in_the_input_field_is_correct() throws Throwable {
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("Quantity in the input field is incorrect", "1", _LoginCommonSteps.driver.findElement(By.xpath("//input[@name='quantity']")).getAttribute("value"));
	}
	
	@Then("^Quantity two in the input field is correct$")
	public void quantity_two_in_the_input_field_is_correct() throws Throwable {
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("Quantity in the input field is incorrect", "2", _LoginCommonSteps.driver.findElement(By.xpath("//input[@name='quantity']")).getAttribute("value"));
	}

	@Given("^Cart is empty$")
	public void cart_is_empty() throws Throwable {
		Thread.sleep(3000);
		String emptyCart = _LoginCommonSteps.driver.findElement(By.xpath("//span[@id='header-cart-item-count-text']")).getText();
		
		if (emptyCart != "pusty") {
			_LoginCommonSteps.driver.findElement(By.xpath("//h3[@class='b-header-main__cart-title']")).click();
			deleteButtons = _LoginCommonSteps.driver.findElements(By.xpath("//a[@class='btn_action delete button--link-green']")).size();
			
			while (deleteButtons != 0) {
				_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);			 
				_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='btn_action delete button--link-green']")).click();
				deleteButtons -= 1;
			}
			_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
			_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='button button--secondary button--large cart__empty-button']")).click();
		}
	}
}
