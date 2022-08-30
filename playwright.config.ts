import { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "playwright";

const config: PlaywrightTestConfig = {
  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: "src/tests/e2e",

  // Store test screenshot or videos here, relative to the testDir path
  outputDir: "../e2e-results",

  // Each test is given 30 seconds
  timeout: 30000,

  // Forbid test.only on CI
  forbidOnly: !!process.env.CI,

  // Two retries for each test
  retries: 0,

  // Limit the number of workers on CI, use default locally
  workers: process.env.CI ? 2 : undefined,

  use: {
    // Configure browser and context here
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
  },

  webServer: {
    command: "npm run dev",
    port: 3000,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  // Different config for each browser

  // projects: [
  //   {
  //     name: "Pixel 4",
  //     use: {
  //       browserName: "chromium",
  //       ...devices["Pixel 4"],
  //     },
  //   },
  // {
  //   name: 'Pixel 4',
  //   use: {
  //     browserName: 'chromium',
  //     ...devices['Pixel 4'],
  //   },
  // },
  //   {
  //     name: "Chromium",
  //     use: {
  //       // Configure the browser to use.
  //       browserName: "chromium",

  //       // Any Chromium-specific options.
  //       viewport: { width: 600, height: 800 },
  //     },
  //   },

  //   {
  //     name: "Firefox",
  //     use: { browserName: "firefox" },
  //   },

  //   {
  //     name: "WebKit",
  //     use: { browserName: "webkit" },
  //   },
  // ],
};

export default config;
