package cartStepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import cucumber.api.java.en.Then;
import loginStepDefinition._LoginCommonSteps;

public class CartProductDisappearsAfterLogoutSteps {

	@Then("^Information about empty cart is displayed$")
	public void information_about_empty_cart_is_displayed() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertTrue("Information about empty cart wasn't displayed", _LoginCommonSteps.driver.findElement(By.xpath("//h2[@class='cart__text-empty']")).isDisplayed());
	}
}
