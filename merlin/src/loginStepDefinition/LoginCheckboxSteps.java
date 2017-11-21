package loginStepDefinition;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.When;

public class LoginCheckboxSteps {
	
	//@And("^User enters valid E-mail and valid password in a popup window$") - in LoginSuccessSteps java file
	
    @When ("^User selects a checkbox that he wants to login with old username and saw the agreement$")
    public void user_selects_checkbox () throws Throwable {
		
    	//selects checkbox
		WebElement checkbox = _LoginCommonSteps.driver.findElement(By.id("login_is_merlin"));
		checkbox.click();
    	
		//checks if checkbox was selected
    	assertTrue("Checkbox was not selected", checkbox.isSelected());
    }
    
	//@Then("^Message Jestes zalogowany is displayed in a popup window$") - in LoginSuccessSteps java file
	
	//@And("^TWOJE KONTO feature is enabled$") - in LoginSuccessSteps java file

}
