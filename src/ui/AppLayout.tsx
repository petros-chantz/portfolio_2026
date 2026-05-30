import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ErrorBoundary } from "./ErrorBoundary";

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-dvh bg-(--color-bg)">
      <ScrollRestoration />
      <div className="mx-auto w-full max-w-[1320px] md:grid md:grid-cols-[minmax(280px,340px)_minmax(0,1fr)]">
        <aside className="border-b border-black/10 px-5 py-8 md:sticky md:top-0 md:h-dvh md:border-b-0 md:px-8 md:py-10">
          <div className="flex h-full flex-col gap-10">
            <div className="space-y-5">
              <div className="space-y-2">
                <h1 className="font-semibold text-[1.4rem] leading-[1.14] tracking-[-0.02em] text-(--color-text-primary) transition hover:opacity-80">
                  Petros Chantzopoulos
                </h1>
                <p className="text-[0.95rem] font-medium leading-[1.38] text-(--color-text-primary)">
                  Strategic Digital Product Designer
                </p>
                <p className="max-w-2xl text-[1rem] leading-[1.68] text-(--color-text-secondary)">
                  I design complex product ecosystems that make operational
                  trust visible, actionable, and scalable.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="mailto:petros.chantz@gmail.com"
                  className="group inline-flex items-center gap-1.5 text-[0.84rem] font-medium leading-[1.2] text-(--color-text-secondary) transition hover:text-(--color-text-primary)"
                >
                  <span className="border-b border-black/20 pb-0.5 group-hover:border-black/50">
                    Email
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-block transform-gpu no-underline transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/petroschantz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[0.84rem] font-medium leading-[1.2] text-(--color-text-secondary) transition hover:text-(--color-text-primary)"
                >
                  <span className="border-b border-black/20 pb-0.5 group-hover:border-black/50">
                    LinkedIn
                  </span>
                  <span
                    aria-hidden="true"
                    className="inline-block transform-gpu no-underline transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </aside>

        <main className="px-5 py-8 md:px-10 md:py-10">
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
