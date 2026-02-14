import { NavLink, useLocation } from "react-router-dom";
import { ArrowTurnUpLeftIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

const itemBase =
  "inline-flex items-center gap-1 rounded-md px-2 py-2 text-sm transition";

const itemIdle =
  "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]";

const itemActive = "text-[var(--color-text-primary)] font-medium";

export function MobileBottomNav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav
      aria-label="Primary"
      className="
        fixed inset-x-0 bottom-0 z-40 md:hidden
        bg-[var(--color-bg)]/80 backdrop-blur-md
        border-t border-black/10
        shadow-[0_-8px_24px_rgba(0,0,0,0.08)]
      "
    >
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-2">
        {/* Home slot: reserved space + fade in/out like desktop Nav */}
        <div className="relative">
          {/* Placeholder keeps spacing stable */}
          <div className={`${itemBase} invisible flex items-center gap-1`}>
            <ArrowTurnUpLeftIcon className="h-4 w-4" aria-hidden="true" />
            Home
          </div>

          <AnimatePresence initial={false}>
            {!isHome && (
              <motion.div
                key="home-link"
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `group ${itemBase} ${isActive ? itemActive : itemIdle}`
                  }
                >
                  <span className="flex items-center gap-1">
                    <ArrowTurnUpLeftIcon
                      className="
                        h-4 w-4
                        text-[var(--color-text-secondary)]
                        transition-transform duration-200 ease-out
                        group-hover:-translate-x-1
                      "
                      aria-hidden="true"
                    />
                    Home
                  </span>
                </NavLink>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Chapters */}
        <div className="flex items-center gap-1">
          <NavLink
            to="/approach"
            className={({ isActive }) =>
              `${itemBase} ${isActive ? itemActive : itemIdle}`
            }
          >
            Approach
          </NavLink>

          <NavLink
            to="/vision"
            className={({ isActive }) =>
              `${itemBase} ${isActive ? itemActive : itemIdle}`
            }
          >
            Vision
          </NavLink>

          <NavLink
            to="/essays"
            className={({ isActive }) =>
              `${itemBase} ${isActive ? itemActive : itemIdle}`
            }
          >
            Essays
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
