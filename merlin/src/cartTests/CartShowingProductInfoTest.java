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
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

@RunWith(Parameterized.class)
public class CartShowingProductInfoTest {
	
	private String sBrowser;
	private WebDriver driver; //web browser driver
	private String baseUrl; //address of our tested site
	private String productName;
	private String productAuthor;
	private String productUrl;
	private String productPrice;
		
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartShowingProductInfoTest(String browser){
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
		
		baseUrl = "https://merlin.pl/";
		//opens web site
		driver.get(baseUrl);
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for a product and clicks it to get to its page
		driver.findElement(By.xpath("//a[@class='b-products-list__title product-link']")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//gets info about this product
		productName = driver.findElement(By.id("product-name")).getText();;
		productAuthor = driver.findElement(By.xpath("//span[@class='product-brand l-product-right-p_bran product-page__product-brand']")).getText();
		productUrl = driver.getCurrentUrl();
		productPrice = driver.findElement(By.id("product-price")).getText() + " z³";
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for "add to the cart" button and clicks it
		driver.findElement(By.id("add-cart-btn")).click();
		
		Thread.sleep(2000);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		//goes to shopping cart
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
	}
	
	@Test
	public void testProductInfo() throws Exception {
		
		//checks if there are all pieces of information about the product in the cart
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		assertEquals("Title of a product in the cart wasn't correct", productName,driver.findElement(By.className("title")).getText());
		assertEquals("Author of a product in the cart wasn't correct", productAuthor,driver.findElement(By.xpath("//div[@class='txt_title-holder']/h4[1]")).getText());
		assertEquals("Link connected to an image of a product in the cart wasn't correct", productUrl,driver.findElement(By.xpath("//a[@class='img cart-item__image']")).getAttribute("href"));
		assertEquals("Link connected to a title of a product in the cart wasn't correct", productUrl,driver.findElement(By.xpath("//a[@class='title']")).getAttribute("href"));
		assertEquals("Price of a product in the cart wasn't correct", productPrice,driver.findElement(By.className("value")).getText());
		assertTrue("Image of a product in the cart wasn't displayed correctly", driver.findElement(By.className("cart-product-img")).isDisplayed());
	}
	
	//to be done after all test methods
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
			
}
