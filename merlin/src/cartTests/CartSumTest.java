package cartTests;

import static org.junit.Assert.assertEquals;

import java.util.Arrays;
import java.util.Collection;
import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
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
public class CartSumTest {
	
	private String sBrowser;
	private static WebDriver driver; //web browser driver
	private static String baseUrl; //address of our tested site ; 
	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartSumTest(String browser){
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
	public void testSumValue() throws Exception {
		
		//searches for "Add to cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		//searches for "Go back" button and clicks it
		driver.findElement(By.xpath("//div[@class='ui-dialog-buttonset']/button[1]")).click();
		
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);		
		//searches for "Add to cart" button of another product and clicks it
		driver.findElement(By.xpath("//li[@class='b-products-list__item b-tiles-half-one ']//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for "Go to the cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
		
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks prices of both products
		double price1 = Double.valueOf(driver.findElement(By.xpath("//ul[@class='b_cart-items cart-table__items']/li[1]//span[@class='value']")).getText().replace(" z³", "").replace(",","."));
		double price2 = Double.valueOf(driver.findElement(By.xpath("//ul[@class='b_cart-items cart-table__items']/li[2]//span[@class='value']")).getText().replace(" z³", "").replace(",","."));
		double sum = Double.valueOf(driver.findElement(By.xpath("//div[@class='col col2 cart-total__value']")).getText().replace(" z³", "").replace(",","."));
				
		assertEquals("Sum was different than expected value", (price1 + price2), sum, 0);
	}

	//to be done after all test methods
	@AfterClass
	public static void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
			
}
