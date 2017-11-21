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
public class CartProductSiteTitleDirectingTest {
	
	private String sBrowser;
	private WebDriver driver; //web browser driver
	private static String baseUrl; //address of our tested site
	private static String productUrl;

	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartProductSiteTitleDirectingTest(String browser){
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

		driver.get(baseUrl);
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
				
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for a product and clicks it to get to its site
		driver.findElement(By.xpath("//a[@class='b-products-list__title product-link']")).click();
				
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//gets address of product's site
		productUrl = driver.getCurrentUrl();		
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for "add to the cart" button and clicks it
		driver.findElement(By.id("add-cart-btn")).click();
		
		Thread.sleep(2000);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		//goes to shopping cart
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
	}
	
	@Test
	public void testNameDirecting() throws Exception {
		
		//checks if there clicking on the product's name directs user to its site
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[@class='title']")).click();
		assertEquals("Page address was incorrect", productUrl, driver.getCurrentUrl());
	}
	
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}	
}