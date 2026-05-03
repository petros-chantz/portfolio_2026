import { NavLink, useLocation } from "react-router-dom";
import { ArrowTurnUpLeftIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import { navDesktopItemClass } from "./typography";

const itemBase = navDesktopItemClass;
const itemIdle =
  "text-(--color-text-secondary) hover:text-(--color-text-primary)";
const itemActive = "font-medium text-(--color-text-primary)";

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
                      text-(--color-text-secondary)
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
    </nav>
  );
}
