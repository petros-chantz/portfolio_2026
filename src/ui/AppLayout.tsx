import { Outlet, useLocation, ScrollRestoration, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorBoundary } from "./ErrorBoundary";
import { ExternalLink } from "./ExternalLink";
import { SITE_CONFIG } from "../lib/config";

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-(--color-bg)">
      <ScrollRestoration />
      <div className="mx-auto w-full max-w-[1320px] lg:grid lg:grid-cols-[minmax(280px,340px)_minmax(0,1fr)]">
        <aside className="px-5 py-8 lg:sticky lg:top-0 lg:h-dvh lg:px-8 lg:py-10">
          <div className="flex h-full flex-col gap-10">
            <div className="space-y-5">
              <div className="space-y-2">
                <h1 className="font-semibold text-[1.4rem] leading-[1.14] tracking-[-0.02em] text-(--color-text-primary)">
                  <Link to="/" className="transition hover:opacity-80">
                    {SITE_CONFIG.name}
                  </Link>
                </h1>
                <p className="text-[0.95rem] font-medium leading-[1.38] text-(--color-text-primary)">
                  {SITE_CONFIG.role}
                </p>
                <p className="max-w-2xl text-[1rem] leading-[1.68] text-(--color-text-secondary)">
                  {SITE_CONFIG.tagline}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <ExternalLink href={`mailto:${SITE_CONFIG.email}`} label="Email" />
                <ExternalLink href={SITE_CONFIG.linkedin} label="LinkedIn" external />
              </div>
            </div>
          </div>
        </aside>

        <main className="px-5 py-8 lg:px-10 lg:py-10">
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
    </div>
  );
}

