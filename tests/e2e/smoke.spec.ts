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

test("projects pages load and render content", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
  await expect(page.getByText("Internal Ops Platform")).toBeVisible();

  await expect(page.locator('link[rel="canonical"]').last()).toHaveAttribute(
    "href",
    "https://petros.work/projects",
  );

  await page.goto("/projects/internal-ops-platform");
  await expect(
    page.getByRole("heading", { name: "Internal Ops Platform" }),
  ).toBeVisible();
  await expect(
    page.getByText("Trust is a product requirement"),
  ).not.toBeVisible();
  await expect(page.getByText("Context")).toBeVisible();

  // text-2col + quote + image-2 blocks should all appear on this page
  await expect(page.getByText("The problem")).toBeVisible();
  await expect(page.getByText("Design principles")).toBeVisible();
  await expect(
    page.getByText(
      "We don't need more data. We need to know which data matters right now.",
    ),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Role-specific views — same data model, different entry points.",
    ),
  ).toBeVisible();
});

test("essays pages load and show computed read time", async ({ page }) => {
  await page.goto("/essays");
  await expect(page.getByRole("heading", { name: "Essays" })).toBeVisible();
  await expect(page.getByText(/\d+ min read/).first()).toBeVisible();

  await expect(page.locator('link[rel="canonical"]').last()).toHaveAttribute(
    "href",
    "https://petros.work/essays",
  );

  await page.goto("/essays/designing-for-operational-trust");
  await expect(
    page.getByRole("heading", { name: "Designing for Operational Trust" }),
  ).toBeVisible();
  await expect(page.getByText("Trust is a product requirement")).toBeVisible();

  await expect(page.locator('link[rel="canonical"]').last()).toHaveAttribute(
    "href",
    "https://petros.work/essays/designing-for-operational-trust",
  );

  // quote block appears in essay detail
  await expect(
    page.getByText(
      "If a tool becomes a guessing game, people go back to whoever answers the phone.",
    ),
  ).toBeVisible();
});

test("essay collage block combination renders", async ({ page }) => {
  await page.goto("/essays/what-a-good-brief-actually-does");
  await expect(
    page.getByRole("heading", { name: "What a Good Brief Actually Does" }),
  ).toBeVisible();
  await expect(
    page.getByText(
      "Research notes, constraints, and questions arranged before the work becomes a plan.",
    ),
  ).toBeVisible();
  await expect(page.getByText("What it should contain")).toBeVisible();
  await expect(page.getByText("What it should avoid")).toBeVisible();
  await expect(
    page.getByText(
      "A team does not need every answer on day one. It needs the right questions protected from noise.",
    ),
  ).toBeVisible();
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

  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();

  await page.getByRole("link", { name: "Essays" }).click();
  await expect(page).toHaveURL(/\/essays$/);
  await expect(page.getByRole("heading", { name: "Essays" })).toBeVisible();

  await page.getByRole("link", { name: "Vision" }).click();
  await expect(page).toHaveURL(/\/vision$/);
  await expect(page.getByRole("heading", { name: "Vision" })).toBeVisible();
});
