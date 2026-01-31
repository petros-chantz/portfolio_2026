import { NavLink } from "react-router-dom";

const base =
  "block rounded-md px-2 py-1.5 text-sm transition hover:bg-neutral-100";
const active = "font-semibold bg-neutral-100";
const idle = "opacity-80 hover:opacity-100";

export function Nav() {
  return (
    <nav className="flex flex-col gap-1">
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
