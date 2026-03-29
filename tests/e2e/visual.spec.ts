import { test, expect, type Page } from "@playwright/test";

async function stabilizePage(page: Page) {
  // Prevent animation/transition flicker from causing false visual diffs.
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
    `,
  });

  await page.evaluate(async () => {
    if ("fonts" in document) {
      await (document as Document & { fonts: FontFaceSet }).fonts.ready;
    }
  });
}

test("visual: home desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("home-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});

test("visual: projects index desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/projects");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("projects-index-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});

test("visual: project detail desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/projects/internal-ops-platform");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("project-detail-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});

test("visual: essays index desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/essays");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("essays-index-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});

test("visual: essay detail desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/essays/designing-for-operational-trust");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("essay-detail-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});

test("visual: essays index mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/essays");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("essays-index-mobile.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});
