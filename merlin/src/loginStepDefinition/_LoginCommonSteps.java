package loginStepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;


public class _LoginCommonSteps {
	
	public static String sBrowser;
	public static WebDriver driver;
	public static String baseUrl = "https://merlin.pl/";

	
	@Given("^The \"(.*)\" is turned on$")
	public static void classSetup(String browser) throws Exception {
		sBrowser = browser;
		System.out.println("Browser:"+ sBrowser);
		if(browser.equalsIgnoreCase("Firefox")) {
			System.setProperty("webdriver.gecko.driver", "browsers//geckodriver.exe");
			driver = new FirefoxDriver();
		} else if(sBrowser.equalsIgnoreCase("Chrome")){
			System.setProperty("webdriver.chrome.driver", "browsers//chromedriver.exe");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
	}
	
	@And("^User is on Home Page$")
	public void user_is_on_Home_Page() throws Throwable {
		
		driver.get(baseUrl);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
	}

	@When("^User clicks the CZESC ZALOGUJ SIE hyperlink$")
	public void user_clicks_the_CZESC_ZALOGUJ_SIE_hyperlink() throws Throwable {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.findElement(By.partialLinkText("ZALOGUJ")).click();
	}

	@And("^User clicks the Zaloguj sie button$")
	public void user_clicks_button () throws Throwable {
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//button[@class='button button--large button--secondary auth-button']")).click();
	}
	
	@And("^Browser can be turned off$")
	public void browser_is_turned_off () throws Throwable {
		driver.manage().deleteAllCookies();
		driver.quit();
	}
	
}
