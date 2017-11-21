package testRunners;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty:reports/cartQuantity/cartQuantity.txt", "html:reports/cartQuantity"}
		,features = {"Feature/CartQuantity"}
		,glue={"cartStepDefinition", "loginStepDefinition", "logoutStepDefinition"}
		,monochrome = true
		)

public class CartQuantityTestRunner {

}