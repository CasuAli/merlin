package cartTests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ CartBookmarkTest.class, CartChangeQuantityTest.class, CartCheckoutTest.class,
		CartContinueShoppingTest.class, CartMoreProductsAddingTest.class, CartOverQuantityTest.class,
		CartProductRemovingTest.class, CartProductAddingSameProductAgainTest.class,
		CartProductDisappearsAfterLogoutTest.class, CartProductSiteTitleDirectingTest.class,
		CartProductStaysAfterLoginTest.class, CartPromoCodeTest.class,
		CartSendingDateTest.class, CartShowingProductInfoTest.class, CartSumTest.class })
public class _CartAllTests {

}
