import {test, expect} from "@playwright/test"
const packg = require("./../package.json")

test("Login test", async ({page}) => {
    const data = JSON.parse(JSON.stringify(packg))
    console.log(data)
    console.log(data.name)
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole('button', {name: "Login"}).click()
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()

});

import {ch}