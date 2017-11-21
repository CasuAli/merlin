package cartStepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartCheckoutSteps {
	
	@When("^User clicks Przejdz do platnosci button$")
	public void user_clicks_Przejdz_do_platnosci_button() throws Throwable {
		((JavascriptExecutor)_LoginCommonSteps.driver).executeScript("window.scrollBy(0,300)", "");
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//button[@id='checkout-submit-btn']")).click();
	}

	@Then("^User is on checkout page$")
	public void user_is_on_checkout_page() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertTrue("Page address wasn't correct", _LoginCommonSteps.driver.getCurrentUrl().contains("checkout/"));
	}
}
