package loginStepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.And;

public class LoginNullEmailSteps {

	private String userPassT = "haslo123";


	@And("^User enters no E-mail and valid password in a popup window$")
	public void user_enters_invalid_pass () throws Throwable {
		WebElement loginName = _LoginCommonSteps.driver.findElement(By.id("login_login"));
		loginName.clear();
				
		WebElement loginPass = _LoginCommonSteps.driver.findElement(By.id("login_password"));
		loginPass.clear();
		loginPass.sendKeys(userPassT);
	}
	
	//@Then("^Message Ta wartosc nie powinna byc pusta is displayed in a popup window$") - in LoginNullPassSteps java file
	
	//@And("^TWOJE KONTO feature is not enabled$") - in LoginWrongEmailSteps java file
	
}
