const { chromium } = require("playwright");
const { expect } = require("@playwright/test");
const path = require('path');


// Launch a browser and verify a heading is visible on a webpage.
const veifyHeading = async function () {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://playwright.dev/")
    await expect(page.locator("header div.container")).toContainText(
        "Playwright enables reliable end-to-end testing for modern web apps.", { useInnerText: true })
}



// Fill out a login form and assert successful login.
async function fillUpLoginFom(username, password) {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill(username)
    await page.getByPlaceholder("Password").fill(password)
    await page.getByRole('button', { name: "Login" }).click();
    await expect(page.getByText("Products")).toBeVisible()
    await browser.close()
}



// Capture and validate a console log from a webpage. playwright
const captureLogs = async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    page.on("console", (msg) => {
        console.log(msg.text());
        if (msg.text().includes("Login Success")) {
            console.log("Login Verified");
        }
    });

    await page.evaluate(() => console.log("Trying to Login"))
    await page.evaluate(() => console.log("Entering User name & Password"))
    await page.evaluate(() => console.log("Login Successfull"))
    await browser.close();
}

// Take a screenshot of a specific element.
(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://playwright.dev/")
    await page.locator("css=span.github-btn").screenshot({ path: "github.png" })
    await browser.close();

}) //()

// Write a test to upload a file using Playwright.
const fileUplaod = async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://filebin.net/")
    await page.locator("css=input[type='file']").setInputFiles(path.resolve(__dirname, "../github.png"))
    await browser.close();
}

// veifyHeading();
// fillUpLoginFom("standard_user", "secret_sauce")
// captureLogs()
// 4 IIF
fileUplaod()


// Downlaod
const fileDownload = async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("https://filebin.net/")
    const downloadPromise = page.waitForEvent("download");
    await page.getByText('Download file').click();
    const download = await downloadPromise;
    await download.saveAs(download.suggestedFilename())

    page.on("download", download => download.saveAs(download.suggestedFilename()))
}