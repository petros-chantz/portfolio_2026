import { NavLink, useLocation } from "react-router-dom";
import {
  ArrowTurnUpLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

const itemBase = "block rounded-md px-8 py-1.5 text-base transition";
const itemIdle =
  "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]";
const itemActive = "font-medium text-[var(--color-text-primary)]";

export function Nav() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <nav className="flex flex-col gap-1">
      {/* Home row — reserved space + smooth fade in/out */}
      <div className="relative">
        {/* Invisible placeholder to prevent layout shift */}
        <div className={`${itemBase} invisible flex items-center gap-2`}>
          <ArrowTurnUpLeftIcon className="h-4 w-4" />
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
                <span className="flex items-center gap-2">
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

      {/* Approach — text only */}
      <NavLink
        to="/approach"
        className={({ isActive }) =>
          `${itemBase} ${isActive ? itemActive : itemIdle}`
        }
      >
        Approach
      </NavLink>

      {/* Vision — text only */}
      <NavLink
        to="/vision"
        className={({ isActive }) =>
          `${itemBase} ${isActive ? itemActive : itemIdle}`
        }
      >
        Vision
      </NavLink>

      {/* Essays — arrow only when inactive */}
      <NavLink
        to="/essays"
        className={({ isActive }) =>
          `group ${itemBase} flex items-center justify-between ${
            isActive ? itemActive : itemIdle
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span>Essays</span>

            {!isActive && (
              <ArrowLongRightIcon
                className="
                  h-4 w-4
                  text-[var(--color-text-secondary)]
                  opacity-0
                  translate-x-1
                  transition-all duration-200 ease-out
                  group-hover:opacity-100
                  group-hover:translate-x-0
                "
                aria-hidden="true"
              />
            )}
          </>
        )}
      </NavLink>
    </nav>
  );
}
