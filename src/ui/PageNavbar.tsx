import { Link } from "react-router-dom";
import { navBrandClass, navUtilityLinkClass } from "./typography";

export function PageNavbar() {
  return (
    <nav
      className="
        flex items-center justify-between
        py-3.5
      "
    >
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
  );
}
