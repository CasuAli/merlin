package loginStepDefinition;

import static org.junit.Assert.assertEquals;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class LoginNullPassSteps {

	private String userNameT = "a-melia@wp.pl";


	@And("^User enters valid E-mail and no password in a popup window$")
	public void user_enters_invalid_pass () throws Throwable {
		WebElement loginName = _LoginCommonSteps.driver.findElement(By.id("login_login"));
		loginName.clear();
		loginName.sendKeys(userNameT);
				
		WebElement loginPass = _LoginCommonSteps.driver.findElement(By.id("login_password"));
		loginPass.clear();
	}
	
	@Then("^Message Ta wartosc nie powinna byc pusta is displayed in a popup window$")
	public void message_displayed_invalid_pass() {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		String message = _LoginCommonSteps.driver.findElement(By.xpath("//p[@class='g-popup__content-error ng-binding ng-scope']")).getText();
		assertEquals("Incorrect error message", "Ta wartoœæ nie powinna byæ pusta.", message);
	}
	
	//@And("^TWOJE KONTO feature is not enabled$") - in LoginWrongEmailSteps java file
	
}
