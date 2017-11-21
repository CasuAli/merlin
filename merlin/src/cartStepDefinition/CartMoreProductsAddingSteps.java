package cartStepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartMoreProductsAddingSteps {

	static String title2;
	
	@When("^User clicks another Do koszyka button$")
	public void user_clicks_another_Do_koszyka_button() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		title2 = _LoginCommonSteps.driver.findElement(By.xpath("//li[@class='b-products-list__item b-tiles-half-one ']//a[@class='b-products-list__title product-link']")).getText();
		_LoginCommonSteps.driver.findElement(By.xpath("//li[@class='b-products-list__item b-tiles-half-one ']//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
	}
}
