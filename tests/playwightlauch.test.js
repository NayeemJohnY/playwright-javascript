const { chromium } = require('playwright');

const  iPhone13 = devices['iPhone 13']
(async () => {
   const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({
      ...iPhone13,
      geolocation: {latitude, longitude},
      permissions : ['geolocation']
    });
    const page = await context.newPage()
    page.goto("https://google.com")
})();

(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://example.com');

  // Wait for popup when a user action triggers it
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),         // Wait for popup event
    page.click('a[target=_blank]'),     // Click that triggers popup
  ]);

  // Validate the popup title
  await popup.waitForLoadState();
  console.log('Popup title:', await popup.title());

  await popup.close();
})();

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://playwright.dev');
  console.log(await page.title());

  await page.click("button#submit") // Not retry act immeditely
  await page.locator("button#submit").click() // Retry - auto wait 
  await browser.close();
})();


import { test, expect } from '@playwright/test';

test("Verify Page Title", async ({ page }) => {
  await page.goto('https://playwright.dev');
  await expect(page.locator("button#submit")).toHaveText("Please Submit")

  await page.locator("select#country").selectOption("India")
  await page.locator("select#country").selectOption({ label: "IN" })
  await page.locator("select#country").selectOption({ value: "india" })
  await page.locator("select#country").selectOption({ index: 1 })
  await page.locator("select#colors").selectOption([{ index: 1 }, { value: "red" }, "India"])

  await page.locator("input[type='file']").setInputFiles("File/testfile.pd");

  const checkbox = page.locator('hashtag#acceptTerms');
  await expect(checkbox).not.toBeChecked();
  if (!await checkbox.isChecked())
    checkbox.check()
  await expect(checkbox).toBeChecked();


  await page.locator('#success-message').waitFor();
  await page.locator('#loader').waitFor({ timeout: 5000 });
  await expect(page.locator('text=Success')).toBeVisible({ timeout: 7000 });
  await Promise.all([
    page.waitForURL("*/target.html"),
    page.click('a#go-to-dashboard'),
  ]);
  await page.waitForLoadState('networkidle');

  await page.waitForTimeout(2000);

});


test('check retry attempt', async ({ page }, testInfo) => {
  if (testInfo.retry) {
    console.log(`Retry attempt #${testInfo.retry}`);
  }
  await page.keyboard.type('hello world'); // type like real user
  await page.keyboard.press('ArrowDown');


  await page.keyboard.down('Shift');
  await page.keyboard.press('KeyA'); // results in 'A' (uppercase)
  await page.keyboard.up('Shift');


  page.on("dialog", async dialog => {
    dialog.type() // Return Alert type
    dialog.message()
    dialog.accept()
    dialog.dismiss()
    dialog.accept("Promtp value to be typed")
  });
});
// View port
await page.screenshot({ path: 'screenshot-viewport.png' });
// Full page
await page.screenshot({ path: 'screenshot-full.png', fullPage: true });
// Specific element
await page.locator('#profile-picture').screenshot({ path: 'profile.png' });
// On Test Failure Automatic
// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    screenshot: 'only-on-failure', // or 'on' or 'off'
  },
});

test.describe('User Profile', () => {
  test('should load profile', async ({ page }) => {
    // test code
  });

  test.skip('should update profile picture', async ({ page }) => {
    // skipped test
  });

  test.only('should edit username', async ({ page }) => {
    // only this will run
  });

  test.only(condition == (1 == 0), 'should edit username', async ({ page }) => {
    // only this will run
  });

});

// ✅ 1. Basic Example: Intercept and Mock a Response
// This intercepts all requests to /api/user and returns a fake user object instead of hitting the server.
// Mock
await page.route('**/api/user', async route => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ name: 'Mocked User', age: 30 }),
  });
});

await page.goto('https://your-app.com');
await page.goto('https://app.com/api/user');

// ✅ 2. Modify Request or Add Headers
await page.route('**/api/**', async route => {
  const request = route.request();
  const headers = {
    ...request.headers(),
    Authorization: 'Bearer mocked-token'
  };
  route.continue({ headers });
});

// ✅ 5. Use route.abort() to Block Requests (e.g. ads or images)
await page.route('**/*.png', route => route.abort());

const [newPage] = await Promise.all([
  context.waitForEvent('page'), // wait for new tab
  page.click('a[target="_blank"]'), // trigger the tab
]);

await newPage.waitForLoadState();
await newPage.locator('h1').isVisible(); // work in new tab


const { chromium } = require('@playwright/test');

// ✅ 1. Create a Login Script That Saves Storage
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://your-app.com/login');
  await page.fill('#username', 'yourUser');
  await page.fill('#password', 'yourPassword');
  await page.click('button[type="submit"]');

  // Wait for navigation or confirmation element
  await page.waitForURL('**/dashboard');

  // Save the session (cookies, localStorage, etc.)
  await context.storageState({ path: 'auth.json' });

  await browser.close();
})();


// ✅ 2. Use the Stored Login in Your Tests
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    storageState: 'auth.json', // load saved session here
  },
});


// ✅ 3. Optional: Use in a Single Test
test.use({ storageState: 'auth.json' });

test('should access dashboard as logged-in user', async ({ page }) => {
  await page.goto('https://your-app.com/dashboard');
  await expect(page.locator('text=Welcome')).toBeVisible();
});

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  // ✅ 1. Get All Cookies for Current Context
  let cookies = await context.cookies();
  console.log(cookies);

  // ✅ 2. Get Cookies for a Specific URL
  cookies = await context.cookies('https://your-app.com');

  // ✅ 3. Validate a Cookie in a Test
  test('should have session_id cookie', async ({ context, page }) => {
    await page.goto('https://your-app.com/dashboard');
    const cookies = await context.cookies();
    const sessionCookie = cookies.find(c => c.name === 'session_id');

    expect(sessionCookie).toBeTruthy();
    expect(sessionCookie.value).toMatch(/^[a-z0-9]+$/);
  });

  // ✅ 4. Set a Cookie Manually (Optional)
  await context.addCookies([
    {
      name: 'session_id',
      value: 'mocked-value',
      url: 'https://your-app.com',
      path: '/',
      httpOnly: true,
      secure: true
    }
  ]);

  //  ✅ 5. Clear Cookies
  await context.clearCookies();

});


test('API call to get user details', async ({ request }) => {
  // ✅ Option 1: Use request Fixture in Your Tests
  const response = await request.get('https://api.example.com/users/1');
  expect(response.ok()).toBeTruthy();

  const data = await response.json();
  expect(data.name).toBe('John Doe');


  // ✅ Option 2: Create a Custom APIRequestContext
  const requestContext = await request.newContext({
    baseURL: 'https://api.example.com',
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  const response2 = await requestContext.get('/me');
  const user = await response2.json();

});

await expect.poll(() => someValueOrFunction()).toBe(expectedValue);


// ✅ Option 1: Use a Built-in Mobile Device Descriptor
//✅ Includes: Mobile viewport; iPhone user agent; Touch support; Device scale factor
const { test, devices } = require('@playwright/test');

test.use({
  ...devices['iPhone 12'], // emulates viewport, user agent, touch, etc.
});

test('mobile view test', async ({ page }) => {
  await page.goto('https://example.com');
  await page.screenshot({ path: 'iphone-view.png' });
});


// ✅ Option 2: Emulate Mobile Manually (Custom Settings)
const context = await browser.newContext({
  viewport: { width: 375, height: 812 },
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)...',
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 3,
});

const page = await context.newPage();
await page.goto('https://example.com');

// ✅ View Available Devices
const { devices } = require('@playwright/test');
console.log(Object.keys(devices)); // Lists all supported devices


test('should download a file', async ({ page }) => {
  // 1. Wait for the download to start
  const [download] = await Promise.all([
    page.waitForEvent('download'), // wait for the download
    page.click('text=Download Report'), // action that triggers download
  ]);

  // 2. Save the file to a specific path
  const path = await download.path(); // temporary path
  console.log('Downloaded to:', path);

  await download.saveAs('downloads/report.csv'); // save to custom folder

  // 3. Validate filename
  expect(download.suggestedFilename()).toBe('report.csv');
});

// ✅ Optional: Read File Content (Node.js)
const fs = require('fs');

const contents = fs.readFileSync('downloads/report.csv', 'utf-8');
expect(contents).toContain('User ID, Name');



// ✅ Configure Download Path (Globally)
const context3 = await browser.newContext({
  acceptDownloads: true,
  downloadsPath: 'downloads/',
});


test('should not log any console errors', async ({ page }) => {
  const errors = [];

  // Listen for console messages of type 'error'
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
    // specific error
    let found = false;
     if (msg.type() === 'error' && msg.text().includes('API key missing')) {
      found = true;
    }
  });

  await page.goto('https://your-app.com');

  // Perform some actions...
  await page.click('text=Start');

  // Assert no errors occurred
  expect(errors).toEqual([]);
  expect(found).toBe(true);

  // ✅ Capture All Console Messages (for debugging)
  page.on('console', (msg) => {
  console.log(`[${msg.type()}] ${msg.text()}`);
});

});

// ✅ 1. Define Multiple Projects in playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'staging',
      use: {
        baseURL: 'https://staging.example.com',
        storageState: 'storage/staging.json',
      },
    },
    {
      name: 'qa',
      use: {
        baseURL: 'https://qa.example.com',
        storageState: 'storage/qa.json',
      },
    },
    {
      name: 'prod',
      use: {
        baseURL: 'https://example.com',
        storageState: 'storage/prod.json',
      },
    },
  ],
});

// ✅ 2. Use --project Flag to Run a Specific Environment
// npx playwright test --project=staging
// npx playwright test tests/login.spec.ts --project=qa


// ✅ 3. Access Config in Your Tests
test('check homepage', async ({ page }) => {
  await page.goto('/'); // You can access environment-specific values like baseURL via the page.goto() method:
  await expect(page.locator('h1')).toContainText('Welcome');
});

// ✅ Optional: Use process.env for CI-driven config
const ENV = process.env.TEST_ENV || 'staging';

const baseURLs = {
  staging: 'https://staging.example.com',
  qa: 'https://qa.example.com',
  prod: 'https://example.com',
};

export default defineConfig({
  use: {
    baseURL: baseURLs[ENV],
  },
});

// TEST_ENV=qa npx playwright test
