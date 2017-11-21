package cartStepDefinition;

import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import loginStepDefinition._LoginCommonSteps;

public class CartBookmarkSteps {
	
	WebElement bookmarkAdd;
	WebElement bookmarkIs;

	@Then("^Dodaj do schowka hyperlink is enabled$")
	public void dodaj_do_schowka_hyperlink_is_enabled() throws Throwable {
		Thread.sleep(2000);
		bookmarkAdd = _LoginCommonSteps.driver.findElement(By.partialLinkText("Dodaj do schowka"));
		assertTrue("Element wasn't enabled (Dodaj do schowka)", bookmarkAdd.isDisplayed());
	}

	@When("^User clicks Dodaj do schowka hyperlink$")
	public void user_clicks_Dodaj_do_schowka_hyperlink() throws Throwable {
		bookmarkAdd.click();
	}

	@Then("^Produkt zostal dodany do schowka hyperlink is displayed$")
	public void produkt_zostal_dodany_do_schowka_hyperlink_is_displayed() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		bookmarkIs = _LoginCommonSteps.driver.findElement(By.partialLinkText("Produkt zosta³ dodany do schowka"));
		assertTrue("Element wasn't enabled (Produkt zosta³ dodany do schowka", bookmarkIs.isDisplayed());
	}

	@When("^User clicks Produkt zostal dodany do schowka hyperlink$")
	public void user_clicks_Produkt_zostal_dodany_do_schowka_hyperlink() throws Throwable {
		bookmarkIs.click();
	}
}
