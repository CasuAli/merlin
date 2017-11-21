package cartStepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartProductAddingSameProductAgainSteps {

	@When("^User clicks Powroc do sklepu button$")
	public void user_clicks_Powroc_do_sklepu_button() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//div[@class='ui-dialog-buttonset']/button")).click();
	}
}
