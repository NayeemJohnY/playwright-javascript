import {test, expect} from '@playwright/test'

test('should add, complete, and delete a todo item', async ({page})=> {
    await page.goto("https://demo.playwright.dev/todomvc");
    await page.getByPlaceholder("What needs to be done?").fill("Buy groceries");
    await page.getByPlaceholder("What needs to be done?").press("Enter");
    await expect(page.getByTestId('todo-title')).toHaveText("Buy groceries");

    await page.getByRole('checkbox').nth(0).check();
    await expect(page.getByTestId('todo-item').nth(0)).toHaveClass("completed");
    await page.getByTestId('todo-item').nth(0).hover();
    await page.getByTestId('todo-item').nth(0).getByRole('button', {name: 'Delete'}).click();
    await expect(page.getByTestId('todo-item')).not.toBeVisible();

    page.route("/api/user", async route=> {
        route.fulfill({
            headers : {Authorization :"Basis xxx"}
        });
    })
    page.context()
});