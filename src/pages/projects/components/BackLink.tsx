import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Props = {
  to?: string;
  label?: string;
  className?: string;
};

export function BackLink({ to = "/", label = "Back to all work", className = "" }: Props) {
  return (
    <Link
      to={to}
      className={["ui-link-inline", className].filter(Boolean).join(" ")}
    >
      <ArrowLeftIcon
        aria-hidden="true"
        className="ui-link-inline-arrow-left h-3.5 w-3.5"
      />
      {label}
    </Link>
  );
}
