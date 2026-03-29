# portfolio_2026

Portfolio site built with React, TypeScript, Vite, Tailwind, Framer Motion, and React Router.

## Scripts

- `npm run dev`: Start local development server.
- `npm run build`: Create a production build.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint.
- `npm run typecheck`: Run TypeScript project checks (`tsc -b`).
- `npm run test:unit`: Run Vitest unit tests.
- `npm run test:e2e`: Run Playwright browser smoke tests.
- `npm run test:e2e:visual`: Run Playwright visual regression tests.
- `npm run test:e2e:visual:update`: Update Playwright baseline snapshots.

## Quality Gates

- `npm run check`: Lint + typecheck + unit tests + production build.
- `npm run check:full`: Full gate (`check`) plus Playwright e2e.

Use `check` before merging code. Use `check:full` before deploying.

## CI (GitHub Actions)

This repository includes a workflow at `.github/workflows/ci.yml`.

- Runs automatically on every pull request.
- Also runs on pushes to `main`.
- Executes `npm run check:full` (lint + typecheck + unit + build + e2e).

If e2e fails in CI, Playwright report artifacts are uploaded.

## Test Structure

- Unit tests: `src/**/*.test.ts(x)`
- E2E tests: `tests/e2e/**/*.spec.ts`
- Visual snapshots: `tests/e2e/visual.spec.ts-snapshots/`

## Notes

- Essay read times are auto-calculated from essay content blocks.
- Playwright runs against a local Vite server at `http://127.0.0.1:4173`.
- Visual snapshots are platform-rendered; CI runs on macOS to match baseline snapshots.
