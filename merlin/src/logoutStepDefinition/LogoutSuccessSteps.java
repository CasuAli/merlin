package logoutStepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class LogoutSuccessSteps {

	// Login - in _LoginCommonSteps and LoginSuccesSteps java files
	
	@When("^User clicks WYLOGUJ SIE hyperlink$")
	public void user_clicks_WYLOGUJ_SIE_hyperlink() throws Throwable {
		//logout
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//a[@href='/auth/logout/']")).click();
	}

	@Then("^User is signed out$")
	public void user_is_signed_out() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		List<WebElement> logout = _LoginCommonSteps.driver.findElements(By.xpath("//a[@href='/auth/logout/']"));
		assertTrue("There was an option to logout although there shoudln't be", logout.size() == 0);
	}
	
	@And("^Feature of login is enabled$")
	public void feature_of_login_is_enabled_again() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertTrue("There wasn't an option to login although there should be", _LoginCommonSteps.driver.findElement(By.partialLinkText("ZALOGUJ")).isEnabled());
	}
	
	//@And("^TWOJE KONTO feature is not enabled$") - in LoginWrongEmailSteps java file
}
