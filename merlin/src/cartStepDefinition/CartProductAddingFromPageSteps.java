package cartStepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;


public class CartProductAddingFromPageSteps {

	static String productUrl;
	
	@When("^User goes to some product's page$")
	public void user_goes_to_a_product_s_page() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for a product and clicks it to get to its site
		_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='b-products-list__title product-link']")).click();
		productUrl = _LoginCommonSteps.driver.getCurrentUrl();
	}
	
	@When("^User clicks Do koszyka button on this page$")
	public void user_clicks_Do_koszyka_button_on_this_page() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_CartCommonSteps.title = _LoginCommonSteps.driver.findElement(By.id("product-name")).getText();
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.id("add-cart-btn")).click();
	}
}
