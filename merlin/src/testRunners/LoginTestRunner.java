package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty:reports/login/login.txt", "html:reports/login"}
		,features = {"Feature/Login"}
		,glue={"loginStepDefinition"}
		,monochrome = true
		)

public class LoginTestRunner {

}