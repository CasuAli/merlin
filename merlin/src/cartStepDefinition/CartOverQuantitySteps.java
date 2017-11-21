package cartStepDefinition;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartOverQuantitySteps {
	
	String stockQuantity;
	String userQuantity;
	WebElement inputQuantity;
	WebElement infoNotice;
	
	@Given("^User is on a specific product's page$")
	public void user_is_on_specific_product_s_page() throws Throwable {
		_LoginCommonSteps.driver.get("https://merlin.pl/auta-3-dvd-brian-fee/7734872/");
		_LoginCommonSteps.driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
	}
	
	@When("^User changes quantity of a product$")
	public void user_changes_quantity_of_a_product() throws Throwable {
		inputQuantity = _LoginCommonSteps.driver.findElement(By.name("quantity"));
		inputQuantity.clear();
		userQuantity = "100";
		inputQuantity.sendKeys(userQuantity);
	}
	
	@Then("^Quantity in the input field is changed to stock level$")
	public void quantity_in_the_input_field_is_changed_to_stock_level() throws Throwable {
		Thread.sleep(2000);
		stockQuantity = _LoginCommonSteps.driver.findElement(By.name("quantity")).getAttribute("value");
		assertTrue("Quantity wasn't changed by system", stockQuantity != userQuantity);
	}

	@Then("^Notice contains a message about stock level$")
	public void notice_contains_a_message_about_stock_level() throws Throwable {
		infoNotice = _LoginCommonSteps.driver.findElement(By.xpath("//div[@class='b_msgs grid__row']/div[@class='b_msg yellow']"));
		assertTrue("Notice didn't contain all pieces of information (1st string)", infoNotice.getText().contains("Zmieni³eœ iloœæ produktów "));
		assertTrue("Notice didn't contain all pieces of information (quantity set by user)", infoNotice.getText().contains(userQuantity));
		assertTrue("Notice didn't contain all pieces of information (2nd string)", infoNotice.getText().contains(". Niestety, iloœæ produktów nie mo¿e byæ wiêksza ni¿ "));
		assertTrue("Notice didn't contain all pieces of information (quantity set by system)", infoNotice.getText().contains(stockQuantity));
		assertTrue("Notice didn't contain all pieces of information (3d string)", infoNotice.getText().contains(" ( i taka iloœc zosta³a wykazana w zamówieniu)"));
	}
}
