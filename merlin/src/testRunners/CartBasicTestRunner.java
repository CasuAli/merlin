package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty:reports/cartBasic/cartBasic.txt", "html:reports/cartBasic"}
		,features = {"Feature/CartBasic"}
		,glue={"cartStepDefinition", "loginStepDefinition", "logoutStepDefinition"}
		,monochrome = true
		)

public class CartBasicTestRunner {

}