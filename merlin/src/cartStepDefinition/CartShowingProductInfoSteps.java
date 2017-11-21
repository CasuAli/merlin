package cartStepDefinition;

import static org.junit.Assert.assertEquals;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import loginStepDefinition._LoginCommonSteps;

public class CartShowingProductInfoSteps {

	String productName;
	String productAuthor;
	String productTime;
	String productUrl;
	String productPrice;
	
	@Given("^User goes to chosen product's page$")
	public void user_goes_to_chosen_product_s_page() throws Throwable {
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		_LoginCommonSteps.driver.findElement(By.xpath("//a[@class='b-products-list__title product-link']")).click();
		
		_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		productName = _LoginCommonSteps.driver.findElement(By.id("product-name")).getText();;
		productAuthor = _LoginCommonSteps.driver.findElement(By.xpath("//span[@class='product-brand l-product-right-p_bran product-page__product-brand']")).getText();
		productTime = _LoginCommonSteps.driver.findElement(By.xpath("//div[@class='product-page__totals']/div/p[@class='info-tag'][1]")).getText();
		productUrl = _LoginCommonSteps.driver.getCurrentUrl();
		productPrice = _LoginCommonSteps.driver.findElement(By.id("product-price")).getText() + " z³";
	}

	@Then("^Information about product's title is displayed$")
	public void information_about_product_s_title_is_displayed() throws Throwable {
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		assertEquals("Title of a product in the cart wasn't correct", productName, _LoginCommonSteps.driver.findElement(By.className("title")).getText());
	}

	@Then("^Information about product's author is displayed$")
	public void information_about_product_s_author_is_displayed() throws Throwable {
		assertEquals("Author of a product in the cart wasn't correct", productAuthor, _LoginCommonSteps.driver.findElement(By.xpath("//div[@class='txt_title-holder']/h4[1]")).getText());
	}

	@Then("^Information about product's sending time is displayed$")
	public void information_about_product_s_sending_time_is_displayed() throws Throwable {
		assertEquals("Time of sending a product in the cart wasn't correct", productTime, _LoginCommonSteps.driver.findElement(By.xpath("//div[@class='txt_title-holder']/h4[2]")).getText());
	}

	@Then("^Information about product's price is displayed$")
	public void information_about_product_s_price_is_displayed() throws Throwable {
		assertEquals("Price of a product in the cart wasn't correct", productPrice, _LoginCommonSteps.driver.findElement(By.className("value")).getText());
	}

	@Then("^Product's title is linked to its page$")
	public void product_s_title_is_linked_to_its_page() throws Throwable {
		assertEquals("Link connected to a title of a product in the cart wasn't correct", productUrl, _LoginCommonSteps.driver.findElement(By.xpath("//a[@class='title']")).getAttribute("href"));
	}

	@Then("^Product's image is linked to its page$")
	public void product_s_image_is_linked_to_its_page() throws Throwable {
		assertEquals("Link connected to an image of a product in the cart wasn't correct", productUrl, _LoginCommonSteps.driver.findElement(By.xpath("//a[@class='img cart-item__image']")).getAttribute("href"));
	}
}
