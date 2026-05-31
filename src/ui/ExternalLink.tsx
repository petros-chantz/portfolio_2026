type Props = {
  href: string;
  label: string;
  external?: boolean;
};

/**
 * Styled external/email link with animated arrow glyph.
 * Used in AppLayout sidebar and DetailLayout navbar.
 */
export function ExternalLink({ href, label, external }: Props) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group inline-flex items-center gap-1.5 text-[0.84rem] font-medium leading-[1.2] text-(--color-text-secondary) transition hover:text-(--color-text-primary)"
    >
      <span className="border-b border-black/20 pb-0.5 group-hover:border-black/50">
        {label}
      </span>
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      >
        ↗
      </span>
      {external && <span className="sr-only"> (opens in new tab)</span>}
    </a>
  );
}
