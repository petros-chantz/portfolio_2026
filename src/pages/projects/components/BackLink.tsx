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
      className="group inline-flex items-center gap-1.5 text-sm text-(--color-text-secondary) hover:text-(--color-text-primary) transition"
    >
      <ArrowLeftIcon
        aria-hidden="true"
        className="h-3.5 w-3.5 transform-gpu transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
      />
      {label}
    </Link>
  );
}
