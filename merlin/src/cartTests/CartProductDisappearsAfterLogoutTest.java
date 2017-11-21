package cartTests;

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
public class CartProductDisappearsAfterLogoutTest {
	
	private String sBrowser;
	private WebDriver driver; //web browser driver
	private String baseUrl; //address of our tested site 
	private String userNameT;
	private String userPassT;
	private int deleteButtons;
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartProductDisappearsAfterLogoutTest(String browser){
		this.sBrowser = browser;
	}
	
	@Before
	public void Setup() throws Exception {
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
		
		//checks if cart is empty
		Thread.sleep(3000);
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		String emptyCart = driver.findElement(By.xpath("//span[@id='header-cart-item-count-text']")).getText();
		
		//removes product from a cart if there are any
		if (emptyCart != "pusty") {
			
			//goes to shopping cart
			driver.findElement(By.xpath("//h3[@class='b-header-main__cart-title']")).click();
			
			//checks how many positions are to remove
			deleteButtons = driver.findElements(By.xpath("//a[@class='btn_action delete button--link-green']")).size();
			
			//clears the cart
			while (deleteButtons != 0) {
				driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);			 
				driver.findElement(By.xpath("//a[@class='btn_action delete button--link-green']")).click();
				deleteButtons -= 1;
			}
			driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
			driver.findElement(By.xpath("//a[@class='button button--secondary button--large cart__empty-button']")).click();
		}
	}
	
	@Test
	public void testProductDisappearAfterLogout() throws Exception {
		
		Thread.sleep(3000);
		//driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		//searches for "Add to cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
		
		//logout
		driver.manage().timeouts().implicitlyWait(4, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@href='/auth/logout/']")).click();

		//checks if the cart is empty
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("Quantity of products in the cart was incorrect", "pusty", driver.findElement(By.xpath("//span[@id='header-cart-item-count-text']")).getText());
		
		//checks if info about empty cart was displayed
		//driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertTrue("Information about empty cart wasn't displayed", driver.findElement(By.xpath("//h2[@class='cart__text-empty']")).isDisplayed());
	}
		
	@After
	public void tearDown()  {
				
		//deletes cookies from this domain
		driver.manage().deleteAllCookies();
		//quits the browser after everything is done
		driver.quit();
	}
}