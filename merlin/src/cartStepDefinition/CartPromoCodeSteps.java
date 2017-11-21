package cartStepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartPromoCodeSteps {
	
	@When("^User clicks Posiadasz link promocyjny\\? hyperlink$")
	public void user_clicks_Posiadasz_link_promocyjny_hyperlink() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		((JavascriptExecutor)_LoginCommonSteps.driver).executeScript("window.scrollBy(0,300)", "");
		_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='btn_call add_vaucher cart__add-voucher']")).click();
	}

	@Then("^Input field for promo code is enabled$")
	public void input_field_for_promo_code_is_enabled() throws Throwable {
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertTrue("Input field for promo code wasn't enabled", _LoginCommonSteps.driver.findElement(By.xpath("//input[@id='cart__promo-code']")).isEnabled());
	}

	@Then("^OK button for submitting promo code is enabled$")
	public void ok_button_for_submitting_promo_code_is_enabled() throws Throwable {
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertTrue("Button for submitting promo code wasn't enabled", _LoginCommonSteps.driver.findElement(By.xpath("//button[@class='button button--primary-outlined button--auto-width button--inline button--small']")).isEnabled());
	}
}
