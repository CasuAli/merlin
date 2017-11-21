package cartTests;

import static org.junit.Assert.assertEquals;

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
public class CartProductStaysAfterLoginAgainTest {
	
	private String sBrowser;
	private WebDriver driver; //web browser driver
	private static String baseUrl; //address of our tested site 
	private static String userNameT;
	private static String userPassT;
	private static String productName;
	private static String productQuantity;
	private int deleteButtons;
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartProductStaysAfterLoginAgainTest(String browser){
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
		
		//opens web site
		driver.get(baseUrl);
						
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
		
		//checks if cart is empty
		Thread.sleep(3000);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
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
		}
		
		driver.navigate().back();
	
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for a product and clicks it to get to its site
		driver.findElement(By.xpath("//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
		
		//Thread.sleep(2000);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		//goes to shopping cart
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
		
		productName = driver.findElement(By.xpath("//a[@class='title']")).getText();
		productQuantity = driver.findElement(By.xpath("//input[@name='quantity']")).getAttribute("value");
				
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
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
		
		//checks if added product stays in the cart after login
		assertEquals("Name of a product in the cart after login was incorrect", productName, driver.findElement(By.xpath("//a[@class='title']")).getText());
		assertEquals("Quantity of a product in the cart after login was incorrect", productQuantity, driver.findElement(By.xpath("//input[@name='quantity']")).getAttribute("value"));
	}
	
	@Test
	public void testProductStaysAfterLoginAgain() throws Exception {
		
		Thread.sleep(2000);
		//logout
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@href='/auth/logout/']")).click();
				
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
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
		
		//checks if added product stays in the cart after login
		assertEquals("Title of a product in the cart after login again was incorrect", productName,driver.findElement(By.xpath("//a[@class='title']")).getText());
		assertEquals("Quantity of a product in the cart after login again was incorrect", productQuantity,driver.findElement(By.xpath("//input[@name='quantity']")).getAttribute("value"));
	}
	
	@After
	public void tearDown()  {
				
		int deleteButtons = driver.findElements(By.xpath("//a[@class='btn_action delete button--link-green']")).size();
		
		//clears the cart
		while (deleteButtons != 0) {
			System.out.println(deleteButtons);
			 
			driver.findElement(By.xpath("//a[@class='btn_action delete button--link-green']")).click();
			deleteButtons -= 1;
		}
		
		//deletes cookies from this domain
		driver.manage().deleteAllCookies();
		//quits the browser after everything is done
		driver.quit();
	}			
}
