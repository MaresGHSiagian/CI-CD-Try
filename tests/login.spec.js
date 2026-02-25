import { test, expect } from "@playwright/test";
import { LoginPage } from "../pageObject/login.page.js";
import { DashboardPage } from "../pageObject/dashboard.page.js";

test("Login berhasil dengan data valid", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.login("standard_user", "secret_sauce");
  await dashboardPage.verifyDashboard();
});

test("Login gagal dengan password salah", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("standard_user", "salah");

  await loginPage.getErrorMessage().then((errorMessage) => {
    expect(errorMessage).toBe(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
