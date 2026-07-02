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
      className="ui-link-external"
    >
      <span className="ui-link-external-label">
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
