import {browser} from "protractor";
var LoginPage = require("../Pages/LoginPage");

describe('Login page testing', () => {
    let email = "Test@email.com";
    let loginPage;

    beforeEach(async function (){
        await browser.waitForAngularEnabled(false);
        //Precondition: Maximize page and navigate to login page
        await browser.manage().window().maximize();
        await browser.get(browser.baseUrl);
        loginPage = new LoginPage();
    });

    it('Check presence of accept cookies notification', async () => {
        //1. Check that accept cookies is present
        expect(await loginPage.getAcceptCookiesText())
            .toEqual("This website uses cookies to ensure you get the best experience on our website. ");
        //2. Click accept cookies button
        await loginPage.clickAcceptCookiesButton();
        //3. Refresh browser to see that cookies not appearing again
        browser.refresh();
        //4. Check that accept cookies is not present
        expect(await loginPage.isNotExistAcceptCookiesButton()).toBeTrue;
    });

    it('Check that http is not applicable', async () => {
        //1. Navigate to http url
        await browser.get('http://demo-v2.grip.tools/login');
        //2. Browser renavigated to https
        expect(await browser.getCurrentUrl()).toEqual(browser.baseUrl + "/login");
    });

    it('Check email field validation', async() => {
        let values: string[] = [
            "~!@#$%^&*()_+=-`[]{}:”’;,./<>?",
            "Q",
            "q.com",
            "q@com",
            "Q@.com",
            "1",
            "email@gmail.",
            "@gmail.com",
            "Test test@email.com",
            "test@email  .com",
            "Test.@test.com",   
            "'Select * from users’",
            "alert(“Hello”)",
            " "]
        for(let value of values){
            //1. Set email value
            await loginPage.setEmail(value);
            //2. Click needed to trigger event of 'Invalid email' notification
            await browser.actions().click().perform();
            //3. Validate email notification
            expect(await loginPage.getInvalidEmailErrorText()).toBe("Invalid email address",
                "Invalid email address should be shown for value -" + value);
            //4. 'Next' button should be disabled
            expect(await loginPage.isNotClickableLoginButton())
                .toBe(true, "Next button should be not clickable for value - " + value);
            //5. Password input field should not appear if email is incorrect
            expect(await loginPage.isPasswordFieldDisplayed())
                .toBe(false, "Password field should not be displayed for value - " + value);
            //6. Refresh browser so notification disappear
            browser.refresh();
        };
    });

    it('Check incorrect email or password error', async () => {
        //1. Input email
        await loginPage.setEmail(email);
        //2. Click 'Next' button
        await loginPage.clickLoginButton();
        //3. Input random password
        await loginPage.setPasswordInputField("Password");
        //4. Click 'Login' button
        await loginPage.clickLoginButton();
        //5. User should see invalid email text error
        expect(await loginPage.getInvalidEmailErrorText())
            .toEqual("Invalid email or password");
    }); 

    it('Click on email should wipe previous inputs', async () => {
        //1. Input email
        await loginPage.setEmail(email);
        //2. Click 'next' button
        await loginPage.clickLoginButton();
        //3. Click on email field
        await loginPage.clickOnEmailField();
        //4. Verify that email field wiped
        expect(await loginPage.getEmailText()).toEqual("");
    }); 

    it('Forgot password should navigate to get password page', async () => {
        //1. Input email
        await loginPage.setEmail(email);
        //2. Click 'next' button
        await loginPage.clickLoginButton();
        //3. Click 'forgot your password' link
        await loginPage.clickForgotYourPasswordLink();
        //4. Verify url changed
        expect(await browser.getCurrentUrl()).toEqual(browser.baseUrl + "/password-recovery?email=" + email);
    }); 

    it('Signup button navigates to signup page', async () => {
        //1. Click 'Signup' button
        await loginPage.clickSignupButton()
        //2. Verify user renavigated
        expect(await browser.getCurrentUrl()).toEqual("https://www.grip.tools/request-a-demo/");
    }); 
});
