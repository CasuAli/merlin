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
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

@RunWith(Parameterized.class)
public class CartOverQuantityTest {
	
	private String sBrowser;
	private WebDriver driver; //web browser driver
	private String baseUrl; //address of our tested site ; 
	private String quantityValue;
	private String newQuantity;
	private static WebElement quantity;

	
	@SuppressWarnings("rawtypes")
	@Parameters
	public static Collection getBrowser(){
		return Arrays.asList(new Object[][] {{"Chrome"},{"Firefox"}});
	}
	
	public CartOverQuantityTest(String browser){
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
		driver.get(baseUrl + "auta-3-dvd-brian-fee/7734872/");
		//closes a notice that's messing
		driver.findElement(By.xpath("//button[@class='merlin-legal-note__close']")).click();
		
		//searches for "Add to cart" button and clicks it
		driver.findElement(By.xpath("//button[@id='add-cart-btn']")).click();
				
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//searches for "Go to the cart" button and clicks it
		driver.findElement(By.xpath("//button[@class='minicart-btn button button--secondary button--large button-auto-width ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only']")).click();
	
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
	}
	
	@Test
	public void testOverQuantity() throws Exception {
		
		quantity = driver.findElement(By.name("quantity"));
		//clears input field
		quantity.clear();
		//sets new value of quantity
		newQuantity = "100";
		quantity.sendKeys(newQuantity);
		
		((JavascriptExecutor)driver).executeScript("window.scrollBy(0,200)", "");
		//clicks "recalculate" button
		driver.findElement(By.xpath("//button[@class='button button--link button-auto-width button--small cart__button-recalculate']")).click();
		
		Thread.sleep(2000);
		//checks if quantity was changed to the number of pieces available in the store
		quantityValue = driver.findElement(By.name("quantity")).getAttribute("value");
		assertTrue("Quantity wasn't changed by system", quantityValue != newQuantity);
				
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		//checks if a warning is displayed and contains the whole message
		WebElement notice = driver.findElement(By.xpath("//div[@class='b_msgs grid__row']/div[@class='b_msg yellow']"));
		assertTrue("Notice wasn't displayed", notice.isDisplayed());
		assertTrue("Notice didn't contain all pieces of information (1st string)", notice.getText().contains("Zmieni³eœ iloœæ produktów "));
		assertTrue("Notice didn't contain all pieces of information (quantity set by user)", notice.getText().contains(newQuantity));
		assertTrue("Notice didn't contain all pieces of information (2nd string)", notice.getText().contains(". Niestety, iloœæ produktów nie mo¿e byæ wiêksza ni¿ "));
		assertTrue("Notice didn't contain all pieces of information (quantity set by system)", notice.getText().contains(quantityValue));
		assertTrue("Notice didn't contain all pieces of information (3d string)", notice.getText().contains(" ( i taka iloœc zosta³a wykazana w zamówieniu)"));
	}

	//to be done after all test methods
	@After
	public void tearDown() {
		//quits the browser after everything is done
		driver.quit();
	}
}
