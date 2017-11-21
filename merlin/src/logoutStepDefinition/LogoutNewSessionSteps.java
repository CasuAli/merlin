package logoutStepDefinition;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class LogoutNewSessionSteps {

	// Login steps - in _LoginCommonSteps and LoginSuccesSteps java files
		
	@When("^User runs a new session$")
	public void user_runs_a_new_session() throws Throwable {
		
		if(_LoginCommonSteps.sBrowser.equalsIgnoreCase("Firefox")) {
			_LoginCommonSteps.driver = new FirefoxDriver();
		} else if(_LoginCommonSteps.sBrowser.equalsIgnoreCase("Chrome")){
			_LoginCommonSteps.driver = new ChromeDriver();
		}

		
		_LoginCommonSteps.driver.get(_LoginCommonSteps.baseUrl);
	}
}
