package loginTests;

import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.Collection;
import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;

@RunWith(Parameterized.class)
public class LoginSuccessTest {
	
	private String browser;
	private WebDriver driver;
	private String baseUrl; //address of our tested site 
	private String userNameT;
	private String userPassT;
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public LoginSuccessTest(String browser){
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
		userPassT = "haslo123";
	}
	
	@Test
	public void testLoginCorrect() throws Exception {
		
		//opens web site
		driver.get(baseUrl);
		//searches for the hyperlink and clicks it
		driver.findElement(By.partialLinkText("ZALOGUJ")).click();
		
		//to save some time it's better to put in in a variable
		//using developers tool in the browser we can get a name of the element (field's name)
		WebElement loginName = driver.findElement(By.id("login_login"));
		//clears the username field
		loginName.clear();
		//uses input from a variable (valid username)
		loginName.sendKeys(userNameT);
		
		//searches for element by its it (developers tool in the browser)
		WebElement loginPass = driver.findElement(By.id("login_password"));
		loginPass.clear();
		//uses input from a variable (valid password)
		loginPass.sendKeys(userPassT);
		
		//searches for a button (type input, value from tool) and clicks it
		driver.findElement(By.xpath("//button[@class='button button--large button--secondary auth-button']")).click();
	
		//tests if we get an error trying to login with wrong login or password
		//when Internet connection is bad, it waits 3 seconds for a page to load
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if the message about login was correct
		//String logSuccess = driver.findElement(By.xpath("//p[@class='g-popup__content-text']")).getText();
		//assertEquals("Message was incorrect", "Jesteœ zalogowany ..", logSuccess);
		
		//waits amount of time until throwing exception
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		//checks if it's logged
		WebElement account = driver.findElement(By.partialLinkText("KONTO"));
		assertTrue(account.isEnabled());
	}
	
	//to be done after all test methods
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
			
}
