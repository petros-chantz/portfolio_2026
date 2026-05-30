import { test, expect } from "@playwright/test";

test("work page renders project listing", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Selected work" })).toBeVisible();
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

test("removed sections return not found", async ({ page }) => {
  await page.goto("/approach");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();

  await page.goto("/vision");
  await expect(page.getByRole("heading", { name: "404" })).toBeVisible();

  await page.goto("/essays");
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

test("mobile layout stacks profile and work content", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });

  await page.goto("/");
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Selected work" })).toBeVisible();
});
