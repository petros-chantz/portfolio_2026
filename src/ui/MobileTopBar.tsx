import { Link } from "react-router-dom";
import { navBrandClass, navUtilityLinkClass } from "./typography";

export function MobileTopBar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 md:hidden bg-(--color-bg)">
      <div className="mx-auto w-full max-w-3xl px-4 py-3.5">
        <nav className="flex items-center justify-between">
          <Link to="/" className={navBrandClass}>
            Petros Chantzopoulos
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="mailto:petros.chantz@gmail.com"
              className={navUtilityLinkClass}
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/petroschantz/"
              target="_blank"
              rel="noopener noreferrer"
              className={navUtilityLinkClass}
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
