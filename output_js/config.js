"use strict";
exports.__esModule = true;
exports.config = {
    allScriptsTimeout: 5000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 36000,
        isVerbose: true
    },
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    SELENIUM_PROMISE_MANAGER: false,
    restartBrowserBetweenTests: false,
    framework: "jasmine",
    baseUrl: "https://demo-v2.grip.tools",
    capabilities: {
        browserName: "chrome"
    },
    specs: [
        "../Tests/*"
    ],
    onPrepare: function () {
        require('ts-node').register({
            project: 'tsconfig.json'
        });
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './TestResults/',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));
    }
};
