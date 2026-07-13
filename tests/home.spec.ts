import { test, expect, } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the home page correctly", async ({ page }) => {
    await page.goto("/");

    // Verify page title
    await expect(page).toHaveTitle(
      "Inti Ruchulu | Homemade Telugu Pickles & Powders"
    );

    // Verify header logo
    await expect(
      page.getByRole("link", {
        name: /Inti Ruchulu/i,
      }).first()
    ).toBeVisible();

    // Verify hero heading
    await expect(
      page.getByRole("heading", {
        name: /Experience the/i,
      })
    ).toBeVisible();

    // Verify Explore Menu CTA
    await expect(
      page.getByRole("link", {
        name: /Explore Menu/i,
      })
    ).toBeVisible();
  });
});