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

test("visual: work desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("work-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.12,
  });
});

test("visual: project detail desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/projects/internal-ops-platform");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("project-detail-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.05,
  });
});

test("visual: work mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("work-mobile.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.02,
  });
});
