package loginTests;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.Collection;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

@RunWith(Parameterized.class)
public class LoginForgotPassTest {
	
	private WebDriver driver;
	private String browser; //web browser driver
	private String baseUrl; //address of our tested site 
	private String userNameT;
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public LoginForgotPassTest(String browser){
		this.browser = browser;
	}
	   
	@Before
	public void classSetup() {
		System.out.println("Browser:"+ browser);
		if(browser.equalsIgnoreCase("Firefox")) {
			System.setProperty("webdriver.gecko.driver", "browsers//geckodriver.exe");
			driver = new FirefoxDriver();
		} else if(browser.equalsIgnoreCase("Chrome")){
			System.setProperty("webdriver.chrome.driver", "browsers//chromedriver.exe");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
	
		//there can be random pages also
		baseUrl = "https://merlin.pl/";
		userNameT = "a-melia@wp.pl";
	}
	
	@Test
	public void testForgotPass() throws Exception {
		//opens web site
		driver.get(baseUrl);
		//searches for the hyperlink and clicks it
		driver.findElement(By.partialLinkText("ZALOGUJ")).click();
		
		driver.findElement(By.partialLinkText("Zapomnia³eœ has³a?")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//using developers tool in the browser we can get a name of the element (field's name)
		WebElement remindLogin = driver.findElement(By.id("remind_login"));
		//clears the username field
		remindLogin.clear();
		remindLogin.sendKeys(userNameT);
		//searches for a button (type input, value from tool) and clicks it
		driver.findElement(By.xpath("//button[@class='button button--large button--secondary auth-button']")).click();

		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if notice is correct
		assertEquals("The notice didn't contain the correct message", "Na wskazany adres email zosta³ wys³ana wiadomoœæ o mo¿liwoœci resetowania has³a. Wykonaj link resetuj¹cy has³o.",driver.findElement(By.xpath("//p[@class='g-popup__content-text']")).getText());
		assertTrue("There was no Close button", driver.findElement(By.xpath("//button[@class='g-form__button--default g-popup__content-button ng-close-popup']")).isEnabled());
	}
	
	//to be done after all test methods
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
			
}
