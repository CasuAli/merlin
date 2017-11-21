package cartStepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartMoreProductsRemovingOneSteps {

	//in _CartCommonSteps java file
	
	@When("^User clicks other Do koszyka button$")
	public void user_clicks_other_Do_koszyka_button() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_CartCommonSteps.title = _LoginCommonSteps.driver.findElement(By.xpath("//li[@class='b-products-list__item b-tiles-half-one ']//a[@class='b-products-list__title product-link']")).getText();
		_LoginCommonSteps.driver.findElement(By.xpath("//li[@class='b-products-list__item b-tiles-half-one ']//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
	}
	
	//in CartProductAddingSameProductAgainSteps java file:
	//@And User clicks Powroc do sklepu button
}
