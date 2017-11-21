package cartStepDefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartChangeQuantitySteps {
	
	String value;
	static String sNewQuantity;
	static WebElement quantity;
	WebElement errorNotice;
	static double price;
	double sum;
	double expected;
	int iFinalQuant;
	String final_quantity;
	
	@When("^User changes \"([^\"]*)\" of a product$")
	public void user_changes_of_a_product(String sQuantity) throws Throwable {
		sNewQuantity = sQuantity;
		quantity = _LoginCommonSteps.driver.findElement(By.name("quantity"));
		quantity.clear();
		quantity.sendKeys(sNewQuantity);
	}
	
	@When("^User clicks Przelicz hyperlink$")
	public void user_changes_of_a_product() throws Throwable {
		((JavascriptExecutor)_LoginCommonSteps.driver).executeScript("window.scrollBy(0,200)", "");
		_LoginCommonSteps.driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
	}

	@Then("^Quantity \"([^\"]*)\" in the input field is correct$")
	public void quantity_in_the_input_field_is_correct(String finalQuantity) throws Throwable {
		final_quantity = finalQuantity;
		Thread.sleep(2000);
		value = _LoginCommonSteps.driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", final_quantity, value);
	}

	@Then("^Notice about error is displayed$")
	public void notice_about_error_is_displayed() throws Throwable {
		errorNotice = _LoginCommonSteps.driver.findElement(By.xpath("//div[@class='b_msgs grid__row']/div[@class='b_msg yellow']"));
		assertTrue("Notice wasn't displayed", errorNotice.isDisplayed());
	}
	
	@Then("^Notice contains a message about error$")
	public void notice_contains_a_message_about_error() throws Throwable {
		assertTrue("Notice didn't contain correct message", errorNotice.getText().contains("Nieprawid³owa iloœæ produktów"));
	}
}
