 const {test} = require("@playwright/test")

 test('Open a Page and Input String', async ({page}) => {

    await page.goto("https://google.com");
    await page.locator("[name='q']").fill("Searching Playwright")
 });