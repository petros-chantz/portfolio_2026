import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function NotFound() {
  return (
    <div className="space-y-3">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="opacity-80">Page not found.</p>
      <Link className="underline underline-offset-4" to="/">
        Go home
      </Link>
    </div>
  );
}
