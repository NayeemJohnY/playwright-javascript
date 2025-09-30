import { test, expect } from "@playwright/test";

test("Verify Application Title", async ({page}) => {
    await page.goto("https://google.com")
    expect(page).toHaveTitle("Googless")
});

test()

