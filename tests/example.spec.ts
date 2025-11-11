import { expect, test } from "@playwright/test";

test.describe("Portfolio Website Testing", () => {
  test.beforeEach(async ({ page }) => {
    // Kunjungi website sebelum setiap test
    await page.goto("http://localhost:3000");
    // Tunggu page load
    await page.waitForTimeout(2000);
  });

  test.describe("Navigation & Layout Tests", () => {
    test("should display navigation menu correctly", async ({ page }) => {
      await page.waitForTimeout(1000);

      // Verifikasi navbar visible
      const nav = page.locator("nav");
      await expect(nav).toBeVisible();

      // Verifikasi semua menu items
      const menuItems = ["Home", "About", "Projects", "Contact"];
      for (const item of menuItems) {
        await page.waitForTimeout(500);
        const menuItem = nav.getByRole("link", { name: item });
        await expect(menuItem).toBeVisible();
      }
    });

    test("should navigate to different sections smoothly", async ({ page }) => {
      // Test navigasi ke About
      await page.getByRole("link", { name: "About" }).click();
      await page.waitForTimeout(1000);
      await expect(page.locator("#about")).toBeVisible();
      await page.waitForTimeout(1500);

      // Test navigasi ke Projects
      await page.getByRole("link", { name: "Projects", exact: true }).click();
      await page.waitForTimeout(1000);
      await expect(page.locator("#projects")).toBeVisible();
      await page.waitForTimeout(1500);

      // Test navigasi ke Contact
      await page.getByRole("link", { name: "Contact" }).click();
      await page.waitForTimeout(1000);
      await expect(page.locator("#contact")).toBeVisible();
      await page.waitForTimeout(1500);
    });
  });

  test.describe("Contact Form Tests", () => {
    test.beforeEach(async ({ page }) => {
      // Navigasi ke section contact
      await page.getByRole("link", { name: "Contact" }).click();
      await page.waitForTimeout(2000);
    });

    test("should display contact form with all fields", async ({ page }) => {
      await page.waitForTimeout(1000);

      const form = page.locator("form");
      await expect(form).toBeVisible();

      // Verifikasi semua form fields
      const fields = [
        { name: "name", type: "input" },
        { name: "email", type: "input" },
        { name: "subject", type: "input" },
        { name: "message", type: "textarea" },
      ];

      for (const field of fields) {
        await page.waitForTimeout(500);
        const element = form.locator(`${field.type}[name="${field.name}"]`);
        await expect(element).toBeVisible();
      }

      await page.waitForTimeout(500);
      await expect(form.locator('button[type="submit"]')).toBeVisible();
    });

    test("should validate form inputs", async ({ page }) => {
      await page.waitForTimeout(1000);

      const form = page.locator("form");

      // Submit form kosong
      await form.locator('button[type="submit"]').click();
      await page.waitForTimeout(1500);

      // Verifikasi required fields
      const nameInput = form.locator('input[name="name"]');
      const emailInput = form.locator('input[name="email"]');

      await expect(nameInput).toHaveAttribute("required", "");
      await page.waitForTimeout(500);
      await expect(emailInput).toHaveAttribute("required", "");
      await page.waitForTimeout(1500);
    });

    test("should submit form with valid data", async ({ page }) => {
      await page.waitForTimeout(1000);

      const form = page.locator("form");

      // Isi form dengan data valid
      await form
        .locator('input[name="name"]')
        .fill("Test User", { timeout: 1000 });
      await page.waitForTimeout(1000);

      await form
        .locator('input[name="email"]')
        .fill("test@example.com", { timeout: 1000 });
      await page.waitForTimeout(1000);

      await form
        .locator('input[name="subject"]')
        .fill("Test Subject", { timeout: 1000 });
      await page.waitForTimeout(1000);

      await form
        .locator('textarea[name="message"]')
        .fill("This is a test message", { timeout: 1000 });
      await page.waitForTimeout(1500);

      // Submit form
      await form.locator('button[type="submit"]').click();
      await page.waitForTimeout(2000);

      // Uncomment jika ada success message yang perlu diverifikasi
      // await expect(page.locator('.success-message')).toBeVisible();
    });
  });
});
