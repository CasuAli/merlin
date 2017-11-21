package logoutTests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ LogoutNewSessionTest.class, LogoutPreviousPageTest.class, LogoutSuccessTest.class,
		LogoutWhenNotLoggedTest.class })
public class _AllLogoutTests {

}
