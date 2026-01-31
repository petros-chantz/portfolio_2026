import type { PropsWithChildren } from "react";

export function Button({ children }: PropsWithChildren) {
  return (
    <button className="inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm hover:bg-neutral-100">
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
}: PropsWithChildren<{ href: string }>) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-md border px-3 py-1.5 text-sm hover:bg-neutral-100"
    >
      {children}
    </a>
  );
}
