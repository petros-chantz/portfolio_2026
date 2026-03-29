import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { bodyMutedClass, sectionTitleClass } from "../ui/typography";

export function NotFound() {
  return (
    <div className="space-y-3">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className={sectionTitleClass}>404</h1>
      <p className={bodyMutedClass}>Page not found.</p>
      <Link
        className="underline underline-offset-4 decoration-black/20 hover:decoration-black/50"
        to="/"
      >
        Go home
      </Link>
    </div>
  );
}
