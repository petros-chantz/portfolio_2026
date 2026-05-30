import { test, expect } from "@playwright/test";

test("home page renders project listing", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Petros Chantzopoulos" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Read case study:/ })).toHaveCount(3);

  expect(pageErrors).toEqual([]);
});

test("project detail route renders", async ({ page }) => {
  await page.goto("/projects/internal-ops-platform");
  await expect(
    page.getByRole("heading", { name: "Internal Ops Platform" }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "Back to all work" }).first()).toBeVisible();
});

test("project card links navigate to detail page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /Read case study:/ }).first().click();
  await expect(page.getByRole("link", { name: "Back to all work" }).first()).toBeVisible();
});

test("removed sections return 404", async ({ page }) => {
  await page.goto("/approach");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();

  await page.goto("/vision");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();

  await page.goto("/essays");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
});

test("unknown route is noindex and has safe recovery link", async ({ page }) => {
  await page.goto("/this-route-does-not-exist");

  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Go home" })).toBeVisible();

  await expect(page.locator('meta[name="robots"]').last()).toHaveAttribute(
    "content",
    "noindex",
  );
});

test("mobile: sidebar and project listing are visible", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Petros Chantzopoulos" })).toBeVisible();
  await expect(page.getByRole("link", { name: /Read case study:/ })).toHaveCount(3);
});

