package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty:reports/logout/logout.txt", "html:reports/logout"}
		,features = {"Feature/Logout"}
		,glue={"loginStepDefinition", "logoutStepDefinition"}
		,monochrome = true
		)

public class LogoutTestRunner {

}