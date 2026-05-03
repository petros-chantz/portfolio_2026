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

test("visual: approach desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/approach");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("approach-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});

test("visual: vision desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/vision");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("vision-desktop.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});

test("visual: approach mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/approach");
  await stabilizePage(page);

  await expect(page).toHaveScreenshot("approach-mobile.png", {
    fullPage: false,
    maxDiffPixelRatio: 0.01,
  });
});
