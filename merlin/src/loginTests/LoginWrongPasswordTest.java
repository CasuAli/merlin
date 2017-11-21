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
public class LoginWrongPasswordTest {
	
	private WebDriver driver;
	private String browser; //web browser driver
	private String baseUrl; //address of our tested site 
	private String userPassF;
	private String userNameT;

	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public LoginWrongPasswordTest(String browser){
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


		baseUrl = "https://merlin.pl/";
		userPassF = "pass";
		userNameT = "a-melia@wp.pl";
	}
	
	@Test
	public void testLoginWrongPass() throws Exception {
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
		//uses input from a variable (wrong password)
		loginPass.sendKeys(userPassF);
		
		//searches for a button (type input, value from tool) and clicks it
		driver.findElement(By.xpath("//button[@class='button button--large button--secondary auth-button']")).click();
	
		//tests if we get an error trying to login with wrong login or password
		//when internet connection is bad, it waits 3 secs for a page to load
		driver.manage().timeouts().implicitlyWait(3 , TimeUnit.SECONDS);
		//another ways to do it:
		//String message = driver.findElement(By.cssSelector("p.g-popup__content-error.ng-binding.ng-scope")).getText();
		String message = driver.findElement(By.xpath("html/body/div[4]/div/div[2]/form/div[2]/p")).getText();
		assertEquals("Error message was incorrect", "Taki u¿ytkownik nie istnieje albo has³o nieprawid³owe", message);

		//waits amount of time until throwing exception
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if it's logged by showing there is no Account element
		List<WebElement> account = driver.findElements(By.partialLinkText("KONTO"));
		assertEquals("The was an Account option although there shouldn't be", 0, account.size());
	}

	//to be done after all test methods
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
			
}
