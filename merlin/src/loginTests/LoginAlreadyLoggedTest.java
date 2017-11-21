package loginTests;

import static org.junit.Assert.assertEquals;

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
public class LoginAlreadyLoggedTest {
	
	private WebDriver driver;
	private String browser; //web browser driver
	private String baseUrl; //address of our tested site 
	private String userNameT;
	private String userPassT; 
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public LoginAlreadyLoggedTest(String browser){
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
		driver.findElement(By.partialLinkText("ZALOGUJ")).click();
				
		WebElement loginName = driver.findElement(By.id("login_login"));
		loginName.clear();
		loginName.sendKeys(userNameT);
				
		WebElement loginPass = driver.findElement(By.id("login_password"));
		loginPass.clear();
		loginPass.sendKeys(userPassT);
		
		driver.findElement(By.xpath("//button[@class='button button--large button--secondary auth-button']")).click();
	}
	
	@Test
	public void testNoLoginOption() throws Exception {
		Thread.sleep(5000);
		driver.manage().timeouts().implicitlyWait(5 , TimeUnit.SECONDS);
		List<WebElement> logOpt = driver.findElements(By.partialLinkText("ZALOGUJ"));
		assertEquals("There was Login option although there shouldn't", 0,logOpt.size());
	}
	
	//to be done after all test methods
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
			
}
