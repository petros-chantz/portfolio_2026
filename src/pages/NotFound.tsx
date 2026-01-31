import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold">404</h1>
      <p className="opacity-80">Page not found.</p>
      <Link className="underline underline-offset-4" to="/">
        Go home
      </Link>
    </div>
  );
}
