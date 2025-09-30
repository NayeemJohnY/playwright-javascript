const {test, expect} = require("@playwright/test")

test("Launch MakeMy Trip", async({page}) => {
    await page.goto("https://makemytrip.com");
    await expect(page).toHaveTitle("MakeMyTrip");
});