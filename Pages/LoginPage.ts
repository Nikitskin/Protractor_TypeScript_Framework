import {element, protractor, browser, By} from "protractor"

var LoginPage = function() {
   
    var EC = protractor.ExpectedConditions;
    var timeout = 10000;
   
    var emailFieldDiv = element(By.xpath("//*[@type='email']/.."));
    var emailInput = element(By.name("email"));
    var loginButton = element(By.xpath("//button[@type='submit']"));
    var invalidEmailErrorText = element(By.xpath("//div[contains(text(),'Invalid email')]"));
    var signupButton = element(By.xpath("//button[@title='Sign up']"));
    var passwordInputField = element(By.name("password"));
    var acceptCookieButton = element(By.xpath("//button[@title='Accept']"));
    var acceptCookiesField = element(By.xpath("//div[@data-test-component='cookiesConsentBanner']/div"));
    var forgotYourPasswordLink = element(By.xpath("//a[contains(@href,'password-recovery')]/h5"));

    this.clickLoginButton = async function(){
        await browser.wait(EC.elementToBeClickable(loginButton), timeout, "Login button not found");
        await loginButton.click();
    }

    this.isNotClickableLoginButton = async function(){
        await browser.wait(EC.not(async () => {EC.elementToBeClickable(loginButton)}), 
            timeout, "Login button should not be clickable");
        return true;
    }

    this.getInvalidEmailErrorText = async function(){
        await browser.wait(EC.elementToBeClickable(invalidEmailErrorText), timeout, 
            "'Invalid email' notification not found");
        return await invalidEmailErrorText.getText();
    }

    this.clickSignupButton = async function(){
        await browser.wait(EC.elementToBeClickable(signupButton), timeout, "Signup button not found");
        await signupButton.click();
    }

    this.setEmail = async function(email: string){
        await browser.wait(EC.elementToBeClickable(emailInput), timeout, "Email input field not found");
        await emailInput.clear().then(async function(){
            emailInput.sendKeys(email);
        });
    }

    this.clickOnEmailField = async function(){
        await browser.wait(EC.elementToBeClickable(emailFieldDiv), timeout, "Email input field not found");
        await emailFieldDiv.click();
    }

    this.getEmailText = async function(){
        await browser.wait(EC.elementToBeClickable(emailInput), timeout, "Email input field not found");
        return await emailInput.getText();
    }

    this.setPasswordInputField = async function(password: string){
        await browser.wait(EC.elementToBeClickable(passwordInputField),
             timeout, "Password input field not found");
        await passwordInputField.clear().then(async function(){
            passwordInputField.sendKeys(password);
        });
    }

    this.isPasswordFieldDisplayed = async function(){
        await browser.wait(EC.not(async () => {passwordInputField.isPresent()}), 
            timeout, "Password input field not found");
        return await passwordInputField.isPresent();
    }

    this.clickAcceptCookiesButton = async function(){
        await browser.wait(EC.elementToBeClickable(acceptCookieButton), timeout, 
            "Accept cookies button not found");
        await acceptCookieButton.click();
    }

    this.isNotExistAcceptCookiesButton = async function(){
        await browser.wait(EC.not(async () => {acceptCookieButton.isPresent()}), 
            timeout, "Accept cookies button not found");
        return await acceptCookieButton.isPresent();
    }

    this.getAcceptCookiesText = async function(){
        await browser.wait(EC.elementToBeClickable(acceptCookiesField),
             timeout, "Accept cookies text not found");
        return await acceptCookiesField.getText();
    }

    this.clickForgotYourPasswordLink = async function(){
        await browser.wait(EC.elementToBeClickable(forgotYourPasswordLink), 
            timeout, "Forget your passwor link not found");
        await browser.sleep(500);
        await forgotYourPasswordLink.click();
    }
}
module.exports = LoginPage;