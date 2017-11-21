package logoutTests;

import static org.junit.Assert.assertTrue;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
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
public class LogoutNewSessionTest {
	
	private static String sBrowser;
	private static WebDriver driver; //web browser driver
	private static String baseUrl; //address of our tested site
	private String userNameT = "a-melia@wp.pl";
	private String userPassT = "haslo123";
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public LogoutNewSessionTest(String browser){
		sBrowser = browser;
	}
	   
	@Before
	public void classSetup() throws Exception {
		System.out.println("Browser:"+ sBrowser);
		if(sBrowser.equalsIgnoreCase("Firefox")) {
			System.setProperty("webdriver.gecko.driver", "browsers//geckodriver.exe");
			driver = new FirefoxDriver();
		} else if(sBrowser.equalsIgnoreCase("Chrome")){
			System.setProperty("webdriver.chrome.driver", "browsers//chromedriver.exe");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();

		//there can be random pages also
		baseUrl = "https://merlin.pl/";
		driver.get(baseUrl);
		
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
	
		//searches for the hyperlink and clicks it
		driver.findElement(By.partialLinkText("ZALOGUJ")).click();
				
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
				
		//searches for a button "log in" (type input, value from tool) and clicks it
		driver.findElement(By.xpath("//button[@class='button button--large button--secondary auth-button']")).click();
		
		Thread.sleep(2000);
	}
	
	@Test
	public void testSuccessfulLogout() throws Exception {
		
		//closes current session
		driver.quit();
		
		//new session
		if (sBrowser == "Chrome") {
			driver = new ChromeDriver();
		} else if (sBrowser == "Firefox") {
			driver = new FirefoxDriver();
		}
		
		driver.get(baseUrl);

		//checks if user signed out and can sign in again
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		List<WebElement> logout = driver.findElements(By.xpath("//a[@href='/auth/logout/']"));
		assertTrue("There was an option to logout although there shoudln't be", logout.size() == 0);
		assertTrue("There wasn't an option to login although there should be", driver.findElement(By.partialLinkText("ZALOGUJ")).isEnabled());
	}
		
	@After
	public void tearDown()  {

		//quits the browser after everything is done
		driver.quit();
	}
}