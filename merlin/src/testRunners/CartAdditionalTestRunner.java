package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty:reports/cartAdditional/cartAdditional.txt", "html:reports/cartAdditional"}
		,features = {"Feature/CartAdditional"}
		,glue={"cartStepDefinition", "loginStepDefinition", "logoutStepDefinition"}
		,monochrome = true
		)

public class CartAdditionalTestRunner {

}