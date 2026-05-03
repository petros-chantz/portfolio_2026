import { test, expect } from "@playwright/test";

test("home page renders primary content", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Petros Chantzopoulos" }),
  ).toBeVisible();
  await expect(
    page.getByText("Strategic Digital Product Designer"),
  ).toBeVisible();

  expect(pageErrors).toEqual([]);
});

test("hidden pages return not found", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();

  await page.goto("/projects/internal-ops-platform");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();

  await page.goto("/essays");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();

  await page.goto("/essays/designing-for-operational-trust");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
});

test("404 route is noindex and has safe recovery", async ({ page }) => {
  await page.goto("/this-route-does-not-exist");

  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Go home" })).toBeVisible();

  await expect(page.locator('meta[name="robots"]').last()).toHaveAttribute(
    "content",
    "noindex",
  );
});

test("mobile primary nav flows between chapters", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("/approach");
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();

  await page.getByRole("link", { name: "Vision" }).click();
  await expect(page).toHaveURL(/\/vision$/);
  await expect(page.getByRole("heading", { name: "Vision" })).toBeVisible();
});
