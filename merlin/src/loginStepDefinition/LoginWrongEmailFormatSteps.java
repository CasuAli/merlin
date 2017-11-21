package loginStepDefinition;

import static org.junit.Assert.assertEquals;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class LoginWrongEmailFormatSteps {

	private String userNameF = "name";
	private String userPassT = "haslo123";

	
	@And("^User enters invalid E-mail format and valid password in a popup window$")
	public void user_enters_invalid_email () throws Throwable {
		WebElement loginName = _LoginCommonSteps.driver.findElement(By.id("login_login"));
		loginName.clear();
		loginName.sendKeys(userNameF);
				
		WebElement loginPass = _LoginCommonSteps.driver.findElement(By.id("login_password"));
		loginPass.clear();
		loginPass.sendKeys(userPassT);
	}
	
	@Then("^Message Wprowadzono bledne dane is displayed in a popup window$")
	public void message_displayed_invalid_email() {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		String message = _LoginCommonSteps.driver.findElement(By.xpath("//p[@class='g-popup__content-error ng-binding ng-scope']")).getText();
		assertEquals("Error message was incorrect", "Wprowadzono b³êdne dane.",message);
	}
	
	@And("^TWOJE KONTO feature is not enabled$")
	public void KONTO_feature_is_not_enabled() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		List<WebElement> account = _LoginCommonSteps.driver.findElements(By.partialLinkText("KONTO"));
		assertEquals("The was an Account option although there shouldn't be", 0,account.size());
	}	
}
