package logoutStepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class LogoutPreviousPageSteps {

	// Login steps - in _LoginCommonSteps and LoginSuccesSteps java files
	
	// Logout steps - in LogoutSuccessSteps
		
	@When("^User goes to a product's page$")
	public void user_goes_to_a_product_s_page() throws Throwable {
		Thread.sleep(3000);
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='b-products-list__title product-link']")).click();
	}

	@When("^User navigates to the previous page$")
	public void user_navigates_to_the_previous_page() throws Throwable {
		_LoginCommonSteps.driver.navigate().back();
		_LoginCommonSteps.driver.navigate().back();
	}

	@When("^User goes to TWOJE KONTO page$")
	public void user_goes_to_TWOJE_KONTO_page() throws Throwable {
		((JavascriptExecutor)_LoginCommonSteps.driver).executeScript("window.scrollBy(0,-700)", "");
		Thread.sleep(3000);
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.partialLinkText("TWOJE KONTO")).click();
	}

	@Then("^There is a message about having to log in and a login button$")
	public void there_is_a_message_about_having_to_log_in_and_a_login_button() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertTrue("There was no message about having to login before seeing an account", _LoginCommonSteps.driver.findElement(By.xpath("//h2[@class='cart__text-empty']")).getText().contains("W celu uzyskania dostêpu nale¿y autoryzowaæ siê"));
		assertTrue("There wasn't a button a user can use to login", _LoginCommonSteps.driver.findElement(By.xpath("//div[@class='text_conteiner_cart_is_empty']/a")).isEnabled());
	}
}
