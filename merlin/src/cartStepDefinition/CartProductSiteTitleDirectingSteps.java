package cartStepDefinition;

import static org.junit.Assert.assertEquals;
import org.openqa.selenium.By;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartProductSiteTitleDirectingSteps {
	
	@When("^User clicks on a product's title$")
	public void user_clicks_on_a_product_s_title() throws Throwable {
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='title']")).click();
	}

	@Then("^User is directed to a product's page$")
	public void user_is_directed_to_a_product_s_page() throws Throwable {
		assertEquals("Page address was incorrect", CartProductAddingFromPageSteps.productUrl, _LoginCommonSteps.driver.getCurrentUrl());
	}
	
	//in CartProductAddingFromPageSteps java file:
	//@When("^User goes to some product's page$")
	//@When("^User clicks Do koszyka button on this page$")
}
