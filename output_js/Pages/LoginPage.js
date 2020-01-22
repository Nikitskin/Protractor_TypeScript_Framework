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
var LoginPage = function () {
    var EC = protractor_1.protractor.ExpectedConditions;
    var timeout = 10000;
    var emailFieldDiv = protractor_1.element(protractor_1.By.xpath("//*[@type='email']/.."));
    var emailInput = protractor_1.element(protractor_1.By.name("email"));
    var loginButton = protractor_1.element(protractor_1.By.xpath("//button[@type='submit']"));
    var invalidEmailErrorText = protractor_1.element(protractor_1.By.xpath("//div[contains(text(),'Invalid email')]"));
    var signupButton = protractor_1.element(protractor_1.By.xpath("//button[@title='Sign up']"));
    var passwordInputField = protractor_1.element(protractor_1.By.name("password"));
    var acceptCookieButton = protractor_1.element(protractor_1.By.xpath("//button[@title='Accept']"));
    var acceptCookiesField = protractor_1.element(protractor_1.By.xpath("//div[@data-test-component='cookiesConsentBanner']/div"));
    var forgotYourPasswordLink = protractor_1.element(protractor_1.By.xpath("//a[contains(@href,'password-recovery')]/h5"));
    this.clickLoginButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(loginButton), timeout, "Login button not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, loginButton.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    this.isNotClickableLoginButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.not(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            EC.elementToBeClickable(loginButton);
                            return [2 /*return*/];
                        }); }); }), timeout, "Login button should not be clickable")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    this.getInvalidEmailErrorText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(invalidEmailErrorText), timeout, "'Invalid email' notification not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, invalidEmailErrorText.getText()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    this.clickSignupButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(signupButton), timeout, "Signup button not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, signupButton.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    this.setEmail = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(emailInput), timeout, "Email input field not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, emailInput.clear().then(function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        emailInput.sendKeys(email);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    this.clickOnEmailField = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(emailFieldDiv), timeout, "Email input field not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, emailFieldDiv.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    this.getEmailText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(emailInput), timeout, "Email input field not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, emailInput.getText()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    this.setPasswordInputField = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(passwordInputField), timeout, "Password input field not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, passwordInputField.clear().then(function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        passwordInputField.sendKeys(password);
                                        return [2 /*return*/];
                                    });
                                });
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    this.isPasswordFieldDisplayed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.not(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            passwordInputField.isPresent();
                            return [2 /*return*/];
                        }); }); }), timeout, "Password input field not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, passwordInputField.isPresent()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    this.clickAcceptCookiesButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(acceptCookieButton), timeout, "Accept cookies button not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, acceptCookieButton.click()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    this.isNotExistAcceptCookiesButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.not(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            acceptCookieButton.isPresent();
                            return [2 /*return*/];
                        }); }); }), timeout, "Accept cookies button not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, acceptCookieButton.isPresent()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    this.getAcceptCookiesText = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(acceptCookiesField), timeout, "Accept cookies text not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, acceptCookiesField.getText()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    this.clickForgotYourPasswordLink = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(EC.elementToBeClickable(forgotYourPasswordLink), timeout, "Forget your passwor link not found")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(500)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, forgotYourPasswordLink.click()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
};
module.exports = LoginPage;
