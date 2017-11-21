package loginStepDefinition;

import static org.junit.Assert.assertEquals;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class LoginWrongPassSteps {

	private String userNameT = "a-melia@wp.pl";
	private String userPassF = "pass";


	@And("^User enters valid E-mail and invalid password in a popup window$")
	public void user_enters_invalid_pass () throws Throwable {
		WebElement loginName = _LoginCommonSteps.driver.findElement(By.id("login_login"));
		loginName.clear();
		loginName.sendKeys(userNameT);
				
		WebElement loginPass = _LoginCommonSteps.driver.findElement(By.id("login_password"));
		loginPass.clear();
		loginPass.sendKeys(userPassF);
	}
	
	@Then("^Message Taki uzytkownik nie istnieje albo haslo nieprawidlowe is displayed in a popup window$")
	public void message_displayed_invalid_pass() {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		String message = _LoginCommonSteps.driver.findElement(By.xpath("html/body/div[4]/div/div[2]/form/div[2]/p")).getText();
		assertEquals("Error message was incorrect", "Taki u¿ytkownik nie istnieje albo has³o nieprawid³owe", message);
	}
	
	//@And("^TWOJE KONTO feature is not enabled$") - in LoginWrongEmailFormatSteps java file
}
