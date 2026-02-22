import { Link } from "react-router-dom";

export function PageNavbar() {
  return (
    <nav
      className="
        flex items-center justify-between
        py-4
      "
    >
      <Link
        to="/"
        className="
          font-medium
          text-xl
          tracking-wide
          text-(--color-text-primary)
          hover:opacity-80
          transition
        "
      >
        Petros Chantzopoulos
      </Link>

      <div className="flex items-center gap-4">
        <a
          href="mailto:petros.chantz@gmail.com"
          className="
          text-sm
            underline underline-offset-4
            text-(--color-text-secondary)
            hover:text-(--color-text-primary)
            transition
          "
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/petroschantz/"
          target="_blank"
          rel="noopener noreferrer"
          className="
          text-sm
            underline underline-offset-4
            text-(--color-text-secondary)
            hover:text-(--color-text-primary)
            transition
          "
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
}
