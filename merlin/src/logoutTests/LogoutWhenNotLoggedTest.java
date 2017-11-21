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
public class LogoutWhenNotLoggedTest {
	
	private String browser;
	private WebDriver driver; //web browser driver
	private String baseUrl; //address of our tested site 
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public LogoutWhenNotLoggedTest(String browser){
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
		driver.get(baseUrl);
		
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
	}
	
	@Test
	public void testLogoutWhenNotLogged() throws Exception {

		//checks if there is "logout" option
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