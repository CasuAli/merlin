package loginStepDefinition;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginForgotPassSteps {
	
	private String userNameT = "a-melia@wp.pl";
	
	@When ("^There is Zapomniales hasla hyperlink and user clicks it$")
	public void user_clicks_forgotten_pass_hyperlink () throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.partialLinkText("Zapomnia³eœ has³a?")).click();
	}
	
	@And ("^User enters e-mail address in input field and submits$")
	public void user_enters_email_address_in_input_field_and_submits () throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//using developers tool in the browser we can get a name of the element (field's name)
		WebElement remindLogin = _LoginCommonSteps.driver.findElement(By.id("remind_login"));
		//clears the username field
		remindLogin.clear();
		remindLogin.sendKeys(userNameT);
		//searches for a button (type input, value from tool) and clicks it
		_LoginCommonSteps.driver.findElement(By.xpath("//button[@class='button button--large button--secondary auth-button']")).click();
	}
	
	@Then("^The notice about a sent e-mail message is displayed and a button Zamknij enabled$")
	public void the_notice_about_a_sent_e_mail_message_is_displayed_and_a_button_Zamknij_enabled() throws Throwable {
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if notice is correct
		assertEquals("The notice didn't contain the correct message", "Na wskazany adres email zosta³ wys³ana wiadomoœæ o mo¿liwoœci resetowania has³a. Wykonaj link resetuj¹cy has³o.",_LoginCommonSteps.driver.findElement(By.xpath("//p[@class='g-popup__content-text']")).getText());
		assertTrue("There was no Close button", _LoginCommonSteps.driver.findElement(By.xpath("//button[@class='g-form__button--default g-popup__content-button ng-close-popup']")).isEnabled());
	}

}
