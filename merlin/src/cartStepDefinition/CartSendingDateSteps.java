package cartStepDefinition;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Then;
import loginStepDefinition._LoginCommonSteps;

public class CartSendingDateSteps {
	
	WebElement notice;
	
	@Then("^Information about sending date of products is displayed$")
	public void information_about_sending_date_of_products_is_displayed() throws Throwable {
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertTrue("Notice didn't contain a correct message", notice.getText().contains("Twoje zamówienie zostanie wys³ane"));
	}
	
	@Then("^Notice is displayed$")
	public void notice_is_displayed() throws Throwable {
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		notice = _LoginCommonSteps.driver.findElement(By.xpath("//div[@class='b_msgs grid__row']/div[@class='b_msg green']"));
		assertTrue("Notice wasn't displayed", notice.isDisplayed());
	}
}
