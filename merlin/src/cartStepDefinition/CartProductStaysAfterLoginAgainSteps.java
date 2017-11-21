package cartStepDefinition;

import org.openqa.selenium.By;
import cucumber.api.java.en.Given;
import loginStepDefinition._LoginCommonSteps;

public class CartProductStaysAfterLoginAgainSteps {
	
	String productName;
	String productQuantity;
	
	@Given("^Information about products is displayed$")
	public void information_about_product_is_displayed() throws Throwable {
		productName = _LoginCommonSteps.driver.findElement(By.xpath("//a[@class='title']")).getText();
		productQuantity = _LoginCommonSteps.driver.findElement(By.xpath("//input[@name='quantity']")).getAttribute("value");
	}
}
