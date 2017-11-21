package cartStepDefinition;

import static org.junit.Assert.assertEquals;
import org.openqa.selenium.By;
import cucumber.api.java.en.Then;
import loginStepDefinition._LoginCommonSteps;

public class CartSumSteps {
	
	double price1;
	double price2;
	double summed;
	
	@Then("^Summed value of products in the cart is correct$")
	public void summed_value_of_products_in_the_cart_is_correct() throws Throwable {
		//_LoginCommonSteps.driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		double price1 = Double.valueOf(_LoginCommonSteps.driver.findElement(By.xpath("//ul[@class='b_cart-items cart-table__items']/li[1]//span[@class='value']")).getText().replace(" z³", "").replace(",","."));
		double price2 = Double.valueOf(_LoginCommonSteps.driver.findElement(By.xpath("//ul[@class='b_cart-items cart-table__items']/li[2]//span[@class='value']")).getText().replace(" z³", "").replace(",","."));
		double summed = Double.valueOf(_LoginCommonSteps.driver.findElement(By.xpath("//div[@class='col col2 cart-total__value']")).getText().replace(" z³", "").replace(",","."));
		assertEquals("Sum was different than expected value", (price1 + price2), summed, 0);
	}
}
