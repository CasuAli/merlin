package cartStepDefinition;

import org.openqa.selenium.By;

import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartProductSiteImageDirectingSteps {
	
	@When("^User clicks on a product's image$")
	public void user_clicks_on_a_product_s_title() throws Throwable {
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='img cart-item__image']")).click();
	}
	
	//@Then("^User is directed to a product's page$") - in CartProductSiteTitleDirectingSteps java file
	
	//in CartProductAddingFromPageSteps java file:
	//@When("^User goes to some product's page$")
	//@When("^User clicks Do koszyka button on this page$")
}
