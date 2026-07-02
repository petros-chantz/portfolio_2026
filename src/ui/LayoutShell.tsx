import type { ReactNode } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";

type LayoutShellProps = {
  header?: ReactNode;
  beforeMain?: ReactNode;
  frameClassName?: string;
  mainClassName: string;
};

export function LayoutShell({ header, beforeMain, frameClassName = "", mainClassName }: LayoutShellProps) {
  const content = (
    <>
      {beforeMain}
      <main id="main-content" className={mainClassName}>
        <div className="transform-gpu">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </div>
      </main>
    </>
  );

  return (
    <div className="min-h-dvh bg-(--color-bg)">
      <ScrollRestoration />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      {header}

      {frameClassName ? <div className={frameClassName}>{content}</div> : content}
    </div>
  );
}