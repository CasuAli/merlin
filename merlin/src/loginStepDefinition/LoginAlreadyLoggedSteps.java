package loginStepDefinition;

import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Then;

public class LoginAlreadyLoggedSteps {

	//@And("^User enters valid E-mail and valid password in a popup window$") - in LoginSuccessSteps java file
	
	@Then("^There is no CZESC ZALOGUJ SIE hyperlink$")
	public void testNoLoginOption() throws Exception {
		Thread.sleep(5000);
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(5 , TimeUnit.SECONDS);
		List<WebElement> logOpt = _LoginCommonSteps.driver.findElements(By.partialLinkText("ZALOGUJ"));
		assertEquals("There was Login option although there shouldn't", 0,logOpt.size());
	}
	
}
