import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Props = {
  to?: string;
  label?: string;
};

export function BackLink({ to = "/", label = "Back to all work" }: Props) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
    >
      <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </Link>
  );
}
