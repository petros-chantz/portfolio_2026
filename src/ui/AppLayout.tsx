import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./Nav";
import { PageNavbar } from "./PageNavbar";
import { MobileBottomNav } from "./MobileBottomNav";
import { MobileTopBar } from "./MobileTopBar";

export function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-dvh">
      {/* Mobile top bar (only on non-home pages) */}
      {!isHome && <MobileTopBar />}

      {/* Desktop top navbar only */}
      {!isHome && (
        <div className="fixed left-0 right-0 top-0 z-20 w-full hidden md:block">
          <div className="bg-(--color-bg)">
            <div className="px-5">
              <PageNavbar />
            </div>
          </div>
        </div>
      )}

      {/* Left nav, vertically centered (desktop only) */}
      <aside className="fixed left-0 top-1/2 z-30 -translate-y-1/2 px-4 hidden md:block">
        <div className="w-45">
          <Nav />
        </div>
      </aside>

      {/* Content area */}
      <main className="md:pl-55">
        <div
          className={`mx-auto w-full max-w-3xl px-4 ${
            isHome ? "py-10" : "pt-20 pb-10"
          } pb-24 md:pb-10`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={location.pathname}
              className="transform-gpu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <MobileBottomNav />
    </div>
  );
}
