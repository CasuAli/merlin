package cartStepDefinition;

import static org.junit.Assert.assertEquals;
import org.openqa.selenium.By;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartContinueShoppingSteps {
	
	@When("^User clicks Wroc do zakupow hyperlink$")
	public void user_clicks_Wroc_do_zakupow_hyperlink() throws Throwable {
		_LoginCommonSteps.driver.findElement(By.partialLinkText("wróæ do zakupów")).click();
	}

	@Then("^User comes back to Home Page$")
	public void user_comes_back_to_Home_Page() throws Throwable {
		assertEquals("Page address wasn't correct", _LoginCommonSteps.baseUrl, _LoginCommonSteps.driver.getCurrentUrl());
	}
}
