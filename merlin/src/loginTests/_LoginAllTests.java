package loginTests;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

@RunWith(Suite.class)
@SuiteClasses({ LoginAlreadyLoggedTest.class, LoginCheckboxTest.class,
		LoginForgotPassTest.class, LoginNonExistingEmailTest.class, LoginNullEmailTest.class,
		LoginNullPasswordTest.class, LoginSuccessTest.class, LoginWrongEmailFormatTest.class,
		LoginWrongPasswordTest.class })
public class _LoginAllTests {

}
