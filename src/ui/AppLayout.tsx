import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./Nav";

export function AppLayout() {
  const location = useLocation();

  return (
    <div className="min-h-dvh">
      {/* Left nav, vertically centered */}
      <aside className="fixed left-0 top-1/2 z-10 -translate-y-1/2 px-4">
        <div className="w-[180px]">
          <Nav />
        </div>
      </aside>

      {/* Content area */}
      <main className="pl-[220px]">
        <div className="mx-auto w-full max-w-3xl px-4 py-10">
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
    </div>
  );
}
