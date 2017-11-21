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
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

@RunWith(Parameterized.class)
public class CartChangeQuantityTest {
	
	private String sBrowser;
	private WebDriver driver; //web browser driver
	private String baseUrl; //address of our tested site ; 
	private String value;
	private String sNewQuantity;
	private static WebElement quantity;

	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartChangeQuantityTest(String browser){
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
		
		//searches for "Add to cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='g-buy-btn-new b-products-list__buy-btn button button--primary']")).click();
				
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for "Go to the cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
	}
	
	@Test
	public void testChangingQuantity() throws Exception {
		
		//finds an input field for quantity
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		sNewQuantity = "5";
		quantity.sendKeys(sNewQuantity);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,200)", "");
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
		
		//checks if new value was changed
		value = driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", sNewQuantity, value);
	}
	
	@Test
	public void testZeroQuantity() throws Exception {
		
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		sNewQuantity = "0";
		quantity.sendKeys(sNewQuantity);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,100)", "");
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
		
		Thread.sleep(2000);
		//checks if new value was changed to "1"
		value = driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", "1", value);
				
		//Thread.sleep(3000);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if a warning is displayed and contains message
		WebElement notice = driver.findElement(By.xpath("//div[@class='b_msgs grid__row']/div[@class='b_msg yellow']"));
		assertTrue("Notice wasn't displayed", notice.isDisplayed());
		assertTrue("Notice didn't contain correct message", notice.getText().contains("Nieprawid³owa iloœæ produktów "));
	}
	
	@Test
	public void testMinusQuantity() throws Exception {
		
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		sNewQuantity = "-1";
		quantity.sendKeys(sNewQuantity);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,100)", "");
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
		
		Thread.sleep(2000);
		//checks if new value was changed to "1"
		value = driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", "1", value);
				
		//Thread.sleep(3000);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if a warning is displayed and contains message
		WebElement notice = driver.findElement(By.xpath("//div[@class='b_msgs grid__row']/div[@class='b_msg yellow']"));
		assertTrue("Notice wasn't displayed", notice.isDisplayed());
		assertTrue("Notice didn't contain correct message", notice.getText().contains("Nieprawid³owa iloœæ produktów "));
	}
	
	@Test
	public void testCharQuantity() throws Exception {
		
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		sNewQuantity = "q";
		quantity.sendKeys(sNewQuantity);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,100)", "");
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
		
		Thread.sleep(2000);
		//checks if new value was changed to "1"
		value = driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", "1", value);
				
		//Thread.sleep(3000);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if a warning is displayed and contains message
		WebElement notice = driver.findElement(By.xpath("//div[@class='b_msgs grid__row']/div[@class='b_msg yellow']"));
		assertTrue("Notice wasn't displayed", notice.isDisplayed());
		assertTrue("Notice didn't contain correct message", notice.getText().contains("Nieprawid³owa iloœæ produktów "));
	}
	
	@Test
	public void testOverHundredQuantity() throws Exception {
		
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		sNewQuantity = "101";
		quantity.sendKeys(sNewQuantity);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,50)", "");
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
		
		Thread.sleep(2000);
		//checks if new value was changed
		value = driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", "100", value);
				
		//Thread.sleep(3000);
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if a warning is displayed and contains message
		WebElement notice = driver.findElement(By.xpath("//div[@class='b_msgs grid__row']/div[@class='b_msg yellow']"));
		assertTrue("Notice wasn't displayed", notice.isDisplayed());
		assertTrue("Notice didn't contain correct message", notice.getText().contains("Nieprawid³owa iloœæ produktów "));
	}
	
	@Test
	public void testDotQuantity() throws Exception {
		
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		sNewQuantity = "4.6";
		quantity.sendKeys(sNewQuantity);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,50)", "");
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
		
		Thread.sleep(2000);
		//checks if new value was changed
		value = driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", sNewQuantity.replace(".6", ""), value);
	}
	
	@Test
	public void testComaQuantity() throws Exception {
		
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		sNewQuantity = "3,6";
		quantity.sendKeys(sNewQuantity);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,100)", "");
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
		
		Thread.sleep(2000);
		//checks if new value was changed
		value = driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", sNewQuantity.replace(",6", ""), value);
	}

	@Test
	public void testSpaceQuantity() throws Exception {
			
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		sNewQuantity = "2 0";
		quantity.sendKeys(sNewQuantity);

		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,50)", "");	
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
			
		Thread.sleep(2000);
		//checks if new value was changed
		value = driver.findElement(By.name("quantity")).getAttribute("value");
		assertEquals("Quantity in the input field is incorrect", sNewQuantity.replace(" 0", ""), value);
	}

	//to be done after all test methods
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
}
