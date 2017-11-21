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
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

@RunWith(Parameterized.class)
public class CartProductAddingTest {
	
	private String sBrowser;
	private WebDriver driver; //web browser driver
	private String baseUrl; //address of our tested site
	private String title;
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartProductAddingTest(String browser){
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
		//opens web site
		driver.get(baseUrl);
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
	}
	
	@Test
	public void testProductAdding() throws Exception {
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//gets the title of the product
		title = driver.findElement(By.xpath("//a[@class='b-products-list__title product-link']")).getText();
		
		//searches for "Add to cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for "Go to the cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		assertEquals("Page address was incorrect", baseUrl + "cart/", driver.getCurrentUrl());
		assertEquals("Quantity of products in the cart was incorrect", "1 produkt", driver.findElement(By.xpath("//span[@id='header-cart-item-count-text']")).getText());
		assertEquals("The title of the product was incorrect", title, driver.findElement(By.className("title")).getText());
	}
	
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
			
}
