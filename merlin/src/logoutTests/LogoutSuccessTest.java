package logoutTests;

import static org.junit.Assert.assertEquals;
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
public class LogoutSuccessTest {
	
	private String browser;
	private WebDriver driver; //web browser driver
	private String baseUrl; //address of our tested site 
	private String userNameT;
	private String userPassT;
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public LogoutSuccessTest(String browser){
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
		
		driver.get(baseUrl);
		
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
				
		//login
		driver.findElement(By.partialLinkText("ZALOGUJ")).click();
		WebElement loginName = driver.findElement(By.id("login_login"));
		loginName.clear();
		loginName.sendKeys(userNameT);
		WebElement loginPass = driver.findElement(By.id("login_password"));
		loginPass.clear();
		loginPass.sendKeys(userPassT);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[@class='button button--large button--secondary auth-button']")).click();
	}
	
	@Test
	public void testSuccessfulLogout() throws Exception {
			
		//logout
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@href='/auth/logout/']")).click();
		
		//checks if there still is "Account" tab
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		List<WebElement> account = driver.findElements(By.partialLinkText("KONTO"));
		assertEquals("The was an Account option although there shouldn't be", 0,account.size());
		
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