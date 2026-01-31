import { NavLink } from "react-router-dom";

const base = "text-sm";
const active = "font-semibold underline underline-offset-4";
const idle = "opacity-80 hover:opacity-100";

export function Nav() {
  return (
    <nav className="flex items-center gap-4">
      <NavLink
        to="/"
        className={({ isActive }) => `${base} ${isActive ? active : idle}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/approach"
        className={({ isActive }) => `${base} ${isActive ? active : idle}`}
      >
        Approach
      </NavLink>
      <NavLink
        to="/vision"
        className={({ isActive }) => `${base} ${isActive ? active : idle}`}
      >
        Vision
      </NavLink>
      <NavLink
        to="/essays"
        className={({ isActive }) => `${base} ${isActive ? active : idle}`}
      >
        Essays
      </NavLink>
    </nav>
  );
}
