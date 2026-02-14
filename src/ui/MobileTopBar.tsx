import { Link } from "react-router-dom";

export function MobileTopBar() {
  return (
    <div className="fixed left-0 right-0 top-0 z-20 md:hidden bg-(--color-bg)">
      <div className="mx-auto w-full max-w-3xl px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="
              font-medium text-xl tracking-wide
              text-(--color-text-primary)
              hover:opacity-80 transition
            "
          >
            Petros Chantzopoulos
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="mailto:your@email.com"
              className="
                text-sm underline underline-offset-4
                text-(--color-text-secondary)
                hover:text-(--color-text-primary)
                transition
              "
            >
              Email
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm underline underline-offset-4
                text-(--color-text-secondary)
                hover:text-(--color-text-primary)
                transition
              "
            >
              LinkedIn
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
