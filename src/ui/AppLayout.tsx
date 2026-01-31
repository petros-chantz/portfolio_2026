import { Link, Outlet, useLocation } from "react-router-dom";
import { Nav } from "./Nav";

export function AppLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-dvh">
      {/* Left nav, vertically centered (always visible) */}
      <aside className="fixed left-0 top-1/2 z-10 -translate-y-1/2 px-4">
        <div className="w-[180px]">
          <Nav />
        </div>
      </aside>

      {/* Header (ONLY on non-home pages): top-left, name links to home */}
      {!isHome && (
        <header className="fixed left-0 top-0 z-20 px-4 py-4">
          <Link to="/" className="text-sm font-semibold hover:opacity-80">
            Your Name
          </Link>
        </header>
      )}

      {/* Content area: padded so it doesn't sit under the nav or header */}
      <main className="pl-[220px]">
        <div
          className={`mx-auto w-full max-w-3xl px-4 ${isHome ? "py-10" : "pt-16 pb-10"}`}
        >
          <Outlet />
        </div>
      </main>
    </div>
  );
}
