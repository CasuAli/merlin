package loginStepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.And;

public class LoginNonExistingEmailSteps {

	private String userNameNE = "sfddsfd@wp.pl";
	private String userPassT = "haslo123";

	
	@And("^User enters non-existing E-mail and valid password in a popup window$")
	public void user_enters_invalid_email () throws Throwable {
		WebElement loginName = _LoginCommonSteps.driver.findElement(By.id("login_login"));
		loginName.clear();
		loginName.sendKeys(userNameNE);
				
		WebElement loginPass = _LoginCommonSteps.driver.findElement(By.id("login_password"));
		loginPass.clear();
		loginPass.sendKeys(userPassT);
	}
	
	// @Then("^Message Wprowadzono bledne dane is displayed in a popup window$") - in LoginWrongPassSteps java file
	
	//@And("^TWOJE KONTO feature is not enabled$") - in LoginWrongEmailSteps java file
	
}
