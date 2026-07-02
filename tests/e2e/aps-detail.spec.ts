import { test, expect } from "@playwright/test";

test.describe("APS Allocations detail page", () => {
  test("renders APS-specific content and accessible structure", async ({ page }) => {
    const pageErrors: string[] = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));

    await page.goto("/projects/APS-allocations");

    await expect(page.getByRole("heading", { level: 1, name: "APS Allocations" })).toBeVisible();
    await expect(
      page.getByText("Helping Albert Heijn campaign planners allocate in-store marketing campaigns."),
    ).toBeVisible();

    await expect(page.getByRole("link", { name: "Back to all work" }).first()).toBeVisible();

    const metadata = page.locator("dl").first();
    await expect(metadata.getByText("Client", { exact: true })).toBeVisible();
    await expect(metadata.getByText("Albert Heijn", { exact: true })).toBeVisible();
    await expect(metadata.getByText("Product", { exact: true })).toBeVisible();
    await expect(metadata.getByText("Campaign Allocation Tool", { exact: true })).toBeVisible();
    await expect(metadata.getByText("Users", { exact: true })).toBeVisible();
    await expect(metadata.getByText("Marketing Teams", { exact: true })).toBeVisible();

    await expect(page.getByText("Campaign planning", { exact: true })).toBeVisible();
    await expect(page.getByText("Allocation review", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3, name: "Campaigns" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 3, name: "Stores" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: "Allocation Overview" })).toBeVisible();

    await expect(page.getByText("Conversations with Albert Heijn campaign managers")).toBeVisible();

    const captions = await page.locator("figcaption").allTextContents();
    expect(captions.filter((caption) => caption.trim() === "Campaign planning")).toHaveLength(1);
    expect(captions.filter((caption) => caption.trim() === "Allocation review")).toHaveLength(1);

    const figureCount = await page.locator("figure").count();
    expect(figureCount).toBeGreaterThanOrEqual(3);
    expect(pageErrors).toEqual([]);
  });

  test("keeps the APS detail page usable on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/projects/APS-allocations");

    await expect(page.getByRole("heading", { level: 1, name: "APS Allocations" })).toBeVisible();
    await expect(page.getByText("Allocation Overview")).toBeVisible();
    await expect(page.getByRole("link", { name: "Back to all work" }).first()).toBeVisible();
  });
});