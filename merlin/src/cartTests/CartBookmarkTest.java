package cartTests;


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
public class CartBookmarkTest {
	
	private String sBrowser;
	private WebDriver driver; //web browser driver
	private String baseUrl; //address of our tested site
	private WebElement bookmarkAdd;
	private WebElement bookmarkIs;
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartBookmarkTest(String browser){
		this.sBrowser = browser;
	}
	
	@Before
	public void Setup() {
		System.out.println("Browser:"+ sBrowser);
		if(sBrowser.equalsIgnoreCase("Firefox")) {
			System.setProperty("webdriver.gecko.driver", "browsers//geckodriver.exe");
			driver = new FirefoxDriver();
		} else if(sBrowser.equalsIgnoreCase("Chrome")){
			System.setProperty("webdriver.chrome.driver", "browsers//chromedriver.exe");
			driver = new ChromeDriver();
		}
		driver.manage().window().maximize();
		
		baseUrl = "https://merlin.pl/";
		driver.get(baseUrl);
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for "Add to cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for "Go to the cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
	}
	 
	@Test
	public void testBookmarkAdding() throws Exception {
		
		Thread.sleep(2000);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if there is an option to bookmark product (add to a clipboard) and clicks it
		bookmarkAdd = driver.findElement(By.partialLinkText("Dodaj do schowka"));
		assertTrue("Element wasn't enabled (Dodaj do schowka)", bookmarkAdd.isDisplayed());
		bookmarkAdd.click();
		
		//Thread.sleep(2000);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if product was added
		bookmarkIs = driver.findElement(By.partialLinkText("Produkt zosta� dodany do schowka"));
		assertTrue("Element wasn't enabled (Produkt zosta� dodany do schowka", bookmarkIs.isDisplayed());
				
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		//click an option to remove product from a clipboard
		bookmarkIs.click();
			
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if product was removed
		assertTrue("Element wasn't enabled (Dodaj do schowka)", bookmarkAdd.isDisplayed());
	}
		
	//to be done after all test methods
	@After
	public void tearDown() {
		
		//quits the browser after everything is done
		driver.quit();
	}
			
}