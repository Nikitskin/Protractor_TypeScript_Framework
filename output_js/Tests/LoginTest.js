"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var protractor_1 = require("protractor");
var LoginPage = require("../Pages/LoginPage");
describe('Login page testing', function () {
    var email = "Test@email.com";
    var loginPage;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.waitForAngularEnabled(false)];
                    case 1:
                        _a.sent();
                        //Precondition: Maximize page and navigate to login page
                        return [4 /*yield*/, protractor_1.browser.manage().window().maximize()];
                    case 2:
                        //Precondition: Maximize page and navigate to login page
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.get(protractor_1.browser.baseUrl)];
                    case 3:
                        _a.sent();
                        loginPage = new LoginPage();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Check presence of accept cookies notification', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    //1. Check that accept cookies is present
                    _a = expect;
                    return [4 /*yield*/, loginPage.getAcceptCookiesText()];
                case 1:
                    //1. Check that accept cookies is present
                    _a.apply(void 0, [_c.sent()])
                        .toEqual("This website uses cookies to ensure you get the best experience on our website. ");
                    //2. Click accept cookies button
                    return [4 /*yield*/, loginPage.clickAcceptCookiesButton()];
                case 2:
                    //2. Click accept cookies button
                    _c.sent();
                    //3. Refresh browser to see that cookies not appearing again
                    protractor_1.browser.refresh();
                    //4. Check that accept cookies is not present
                    _b = expect;
                    return [4 /*yield*/, loginPage.isNotExistAcceptCookiesButton()];
                case 3:
                    //4. Check that accept cookies is not present
                    _b.apply(void 0, [_c.sent()]).toBeTrue;
                    return [2 /*return*/];
            }
        });
    }); });
    it('Check that http is not applicable', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                //1. Navigate to http url
                return [4 /*yield*/, protractor_1.browser.get('http://demo-v2.grip.tools/login')];
                case 1:
                    //1. Navigate to http url
                    _b.sent();
                    //2. Browser renavigated to https
                    _a = expect;
                    return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                case 2:
                    //2. Browser renavigated to https
                    _a.apply(void 0, [_b.sent()]).toEqual(protractor_1.browser.baseUrl + "/login");
                    return [2 /*return*/];
            }
        });
    }); });
    it('Check email field validation', function () { return __awaiter(void 0, void 0, void 0, function () {
        var values, _i, values_1, value, _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    values = [
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
                        " "
                    ];
                    _i = 0, values_1 = values;
                    _d.label = 1;
                case 1:
                    if (!(_i < values_1.length)) return [3 /*break*/, 8];
                    value = values_1[_i];
                    //1. Set email value
                    return [4 /*yield*/, loginPage.setEmail(value)];
                case 2:
                    //1. Set email value
                    _d.sent();
                    //2. Click needed to trigger event of 'Invalid email' notification
                    return [4 /*yield*/, protractor_1.browser.actions().click().perform()];
                case 3:
                    //2. Click needed to trigger event of 'Invalid email' notification
                    _d.sent();
                    //3. Validate email notification
                    _a = expect;
                    return [4 /*yield*/, loginPage.getInvalidEmailErrorText()];
                case 4:
                    //3. Validate email notification
                    _a.apply(void 0, [_d.sent()]).toBe("Invalid email address", "Invalid email address should be shown for value -" + value);
                    //4. 'Next' button should be disabled
                    _b = expect;
                    return [4 /*yield*/, loginPage.isNotClickableLoginButton()];
                case 5:
                    //4. 'Next' button should be disabled
                    _b.apply(void 0, [_d.sent()])
                        .toBe(true, "Next button should be not clickable for value - " + value);
                    //5. Password input field should not appear if email is incorrect
                    _c = expect;
                    return [4 /*yield*/, loginPage.isPasswordFieldDisplayed()];
                case 6:
                    //5. Password input field should not appear if email is incorrect
                    _c.apply(void 0, [_d.sent()])
                        .toBe(false, "Password field should not be displayed for value - " + value);
                    //6. Refresh browser so notification disappear
                    protractor_1.browser.refresh();
                    _d.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 1];
                case 8:
                    ;
                    return [2 /*return*/];
            }
        });
    }); });
    it('Check incorrect email or password error', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                //1. Input email
                return [4 /*yield*/, loginPage.setEmail(email)];
                case 1:
                    //1. Input email
                    _b.sent();
                    //2. Click 'Next' button
                    return [4 /*yield*/, loginPage.clickLoginButton()];
                case 2:
                    //2. Click 'Next' button
                    _b.sent();
                    //3. Input random password
                    return [4 /*yield*/, loginPage.setPasswordInputField("Password")];
                case 3:
                    //3. Input random password
                    _b.sent();
                    //4. Click 'Login' button
                    return [4 /*yield*/, loginPage.clickLoginButton()];
                case 4:
                    //4. Click 'Login' button
                    _b.sent();
                    //5. User should see invalid email text error
                    _a = expect;
                    return [4 /*yield*/, loginPage.getInvalidEmailErrorText()];
                case 5:
                    //5. User should see invalid email text error
                    _a.apply(void 0, [_b.sent()])
                        .toEqual("Invalid email or password");
                    return [2 /*return*/];
            }
        });
    }); });
    it('Click on email should wipe previous inputs', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                //1. Input email
                return [4 /*yield*/, loginPage.setEmail(email)];
                case 1:
                    //1. Input email
                    _b.sent();
                    //2. Click 'next' button
                    return [4 /*yield*/, loginPage.clickLoginButton()];
                case 2:
                    //2. Click 'next' button
                    _b.sent();
                    //3. Click on email field
                    return [4 /*yield*/, loginPage.clickOnEmailField()];
                case 3:
                    //3. Click on email field
                    _b.sent();
                    //4. Verify that email field wiped
                    _a = expect;
                    return [4 /*yield*/, loginPage.getEmailText()];
                case 4:
                    //4. Verify that email field wiped
                    _a.apply(void 0, [_b.sent()]).toEqual("");
                    return [2 /*return*/];
            }
        });
    }); });
    it('Forgot password should navigate to get password page', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                //1. Input email
                return [4 /*yield*/, loginPage.setEmail(email)];
                case 1:
                    //1. Input email
                    _b.sent();
                    //2. Click 'next' button
                    return [4 /*yield*/, loginPage.clickLoginButton()];
                case 2:
                    //2. Click 'next' button
                    _b.sent();
                    //3. Click 'forgot your password' link
                    return [4 /*yield*/, loginPage.clickForgotYourPasswordLink()];
                case 3:
                    //3. Click 'forgot your password' link
                    _b.sent();
                    //4. Verify url changed
                    _a = expect;
                    return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                case 4:
                    //4. Verify url changed
                    _a.apply(void 0, [_b.sent()]).toEqual(protractor_1.browser.baseUrl + "/password-recovery?email=" + email);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Signup button navigates to signup page', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: 
                //1. Click 'Signup' button
                return [4 /*yield*/, loginPage.clickSignupButton()
                    //2. Verify user renavigated
                ];
                case 1:
                    //1. Click 'Signup' button
                    _b.sent();
                    //2. Verify user renavigated
                    _a = expect;
                    return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                case 2:
                    //2. Verify user renavigated
                    _a.apply(void 0, [_b.sent()]).toEqual("https://www.grip.tools/request-a-demo/");
                    return [2 /*return*/];
            }
        });
    }); });
});
