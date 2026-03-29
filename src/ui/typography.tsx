import type { PropsWithChildren } from "react";

export const pageTitleClass =
  "text-[1.8rem] md:text-[clamp(2rem,3.2vw,2.75rem)] font-semibold leading-[1.04] md:leading-[1.02] tracking-[-0.03em] md:tracking-[-0.035em] text-(--color-text-primary)";

export const sectionTitleClass =
  "text-[1.625rem] font-semibold leading-[1.08] tracking-[-0.025em] text-(--color-text-primary)";

export const subsectionTitleClass =
  "text-[1.125rem] font-medium leading-[1.2] tracking-[-0.015em] text-(--color-text-primary)";

export const introTextClass =
  "max-w-2xl text-[1rem] md:text-[1.0625rem] leading-[1.62] md:leading-[1.68] text-(--color-text-secondary)";

export const bodyTextClass =
  "text-[0.98rem] leading-[1.72] text-(--color-text-primary)";

export const bodyMutedClass =
  "text-[0.98rem] leading-[1.72] text-(--color-text-secondary)";

export const metaTextClass =
  "text-[0.8125rem] tracking-[0.03em] text-(--color-text-secondary)";

export const cardTitleClass =
  "text-[1.02rem] font-medium leading-[1.28] tracking-[-0.015em] text-(--color-text-primary)";

export const cardSummaryClass =
  "text-[0.92rem] leading-[1.62] text-(--color-text-secondary)";

export const captionTextClass =
  "text-center text-sm leading-[1.5] text-(--color-text-secondary)";

export const quoteTextClass =
  "text-[1.25rem] font-medium leading-[1.5] tracking-[-0.02em] text-(--color-text-primary)";

export const controlPillBaseClass =
  "rounded-md px-3 py-1.5 text-sm font-medium transition";

export const navDesktopItemClass =
  "block rounded-md px-7 py-1.5 text-[0.95rem] leading-[1.2] tracking-[-0.01em] transition";

export const navMobileItemClass =
  "inline-flex items-center gap-1 rounded-md px-2 py-1.5 text-[0.84rem] leading-[1.15] tracking-[-0.01em] transition";

export const navBrandClass =
  "font-medium text-[1.06rem] leading-[1.2] tracking-[-0.015em] text-(--color-text-primary) transition hover:opacity-80";

export const navUtilityLinkClass =
  "text-[0.84rem] leading-[1.2] underline underline-offset-4 decoration-black/20 text-(--color-text-secondary) transition hover:text-(--color-text-primary) hover:decoration-black/50";

export function H1({ children }: PropsWithChildren) {
  return <h1 className={pageTitleClass}>{children}</h1>;
}
export function H2({ children }: PropsWithChildren) {
  return <h2 className={`mt-8 ${sectionTitleClass}`}>{children}</h2>;
}
export function H3({ children }: PropsWithChildren) {
  return <h3 className={`mt-6 ${subsectionTitleClass}`}>{children}</h3>;
}
export function P({ children }: PropsWithChildren) {
  return <p className={`mt-4 ${bodyTextClass}`}>{children}</p>;
}

export function InlineLink({
  children,
  href,
}: PropsWithChildren<{ href?: string }>) {
  return (
    <a
      href={href}
      className="underline underline-offset-4 decoration-black/20 transition hover:decoration-black/50"
    >
      {children}
    </a>
  );
}
