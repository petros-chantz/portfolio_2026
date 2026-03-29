import { test, expect } from "@playwright/test";

test("home page renders primary content", async ({ page }) => {
  const pageErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));

  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Petros Chantzopoulos" }),
  ).toBeVisible();
  await expect(page.getByText("Strategic Digital Product Designer")).toBeVisible();

  expect(pageErrors).toEqual([]);
});

test("projects pages load and render content", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
  await expect(page.getByText("Internal Ops Platform")).toBeVisible();

  await page.goto("/projects/internal-ops-platform");
  await expect(
    page.getByRole("heading", { name: "Internal Ops Platform" }),
  ).toBeVisible();
  await expect(page.getByText("Trust is a product requirement")).not.toBeVisible();
  await expect(page.getByText("Context")).toBeVisible();
});

test("essays pages load and show computed read time", async ({ page }) => {
  await page.goto("/essays");
  await expect(page.getByRole("heading", { name: "Essays" })).toBeVisible();
  await expect(page.getByText(/\d+ min read/).first()).toBeVisible();

  await page.goto("/essays/designing-for-operational-trust");
  await expect(
    page.getByRole("heading", { name: "Designing for Operational Trust" }),
  ).toBeVisible();
  await expect(page.getByText("Trust is a product requirement")).toBeVisible();
});
