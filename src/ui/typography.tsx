import type { PropsWithChildren } from "react";

export function H1({ children }: PropsWithChildren) {
  return <h1 className="text-3xl font-semibold tracking-tight">{children}</h1>;
}
export function H2({ children }: PropsWithChildren) {
  return (
    <h2 className="mt-8 text-xl font-semibold tracking-tight">{children}</h2>
  );
}
export function H3({ children }: PropsWithChildren) {
  return (
    <h3 className="mt-6 text-lg font-semibold tracking-tight">{children}</h3>
  );
}
export function P({ children }: PropsWithChildren) {
  return <p className="mt-4 leading-relaxed opacity-90">{children}</p>;
}

export function InlineLink({
  children,
  href,
}: PropsWithChildren<{ href?: string }>) {
  return (
    <a href={href} className="underline underline-offset-4 hover:opacity-80">
      {children}
    </a>
  );
}
