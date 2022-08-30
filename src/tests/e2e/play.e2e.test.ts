import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test("matches title", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}`);
    // await expect(page).toHaveURL("http://localhost:3000/");
    await expect(page).toHaveTitle(/test dev/i);
  });
});
