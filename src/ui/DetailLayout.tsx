import { Outlet, useLocation, ScrollRestoration, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorBoundary } from "./ErrorBoundary";
import { ExternalLink } from "./ExternalLink";
import { SITE_CONFIG } from "../lib/config";

export function DetailLayout() {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-(--color-bg)">
      <ScrollRestoration />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-10 bg-(--color-bg)">
        <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 py-4 lg:px-10">
          <Link
            to="/"
            className="font-semibold text-[1.05rem] tracking-[-0.02em] text-(--color-text-primary) transition hover:opacity-70"
          >
            {SITE_CONFIG.name}
          </Link>

          <div className="flex items-center gap-5">
            <ExternalLink href={`mailto:${SITE_CONFIG.email}`} label="Email" />
            <ExternalLink href={SITE_CONFIG.linkedin} label="LinkedIn" external />
          </div>
        </div>
      </header>

      <main id="main-content" className="mx-auto w-full max-w-[1320px] px-5 py-8 lg:px-10 lg:py-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            className="transform-gpu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
