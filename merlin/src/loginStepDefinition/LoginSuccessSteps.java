package loginStepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class LoginSuccessSteps {
	
	//private WebDriver driver;
	private String userNameT = "a-melia@wp.pl";
	private String userPassT = "haslo123";

	
	@And("^User enters valid E-mail and valid password in a popup window$")
	public void user_enters_valid () throws Throwable {
		WebElement loginName = _LoginCommonSteps.driver.findElement(By.id("login_login"));
		loginName.clear();
		loginName.sendKeys(userNameT);
				
		WebElement loginPass = _LoginCommonSteps.driver.findElement(By.id("login_password"));
		loginPass.clear();
		loginPass.sendKeys(userPassT);
	}
	
	@Then("^Message Jestes zalogowany is displayed in a popup window$")
	public void message_displayed_success() throws Throwable {
		//LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if the message about login was correct
		//String logSuccess = LoginCommonSteps.driver.findElement(By.xpath("//p[@class='g-popup__content-text']")).getText();
		//assertEquals("Message was incorrect", "Jesteœ zalogowany ..", logSuccess);
	}
	
	@And("^TWOJE KONTO feature is enabled$")
	public void KONTO_feature_is_enabled() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		WebElement account = _LoginCommonSteps.driver.findElement(By.partialLinkText("KONTO"));
		assertTrue(account.isEnabled());
	}
}
