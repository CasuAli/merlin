package cartStepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;

import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartProductRemovingSteps {

	@When("^User clicks Usun hyperlink$")
	public void user_clicks_Usun_hyperlink() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='btn_action delete button--link-green']")).click();
		Thread.sleep(2000);
	}
}
