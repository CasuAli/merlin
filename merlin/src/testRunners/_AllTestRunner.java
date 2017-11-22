package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty:reports/all/all.txt", "html:reports/all"}
		,features = {"Feature/Login", "Feature/Logout", "Feature/CartBasic", "Feature/CartQuantity", "Feature/CartAdditional"}
		,glue={"loginStepDefinition", "logoutStepDefinition", "cartStepDefinition"}
		,monochrome = true
		)

public class _AllTestRunner {

}