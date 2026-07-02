import { Link } from "react-router-dom";
import { ExternalLink } from "./ExternalLink";
import { LayoutShell } from "./LayoutShell";
import { SITE_CONFIG } from "../lib/config";

export function DetailLayout() {
  return (
    <LayoutShell
      header={
        <header className="sticky top-0 z-10 bg-(--color-bg)">
          <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between px-5 py-4 lg:px-10">
            <Link to="/" className="ui-brand-link text-[1.05rem]">
              {SITE_CONFIG.name}
            </Link>

            <div className="flex items-center gap-5">
              <ExternalLink href={`mailto:${SITE_CONFIG.email}`} label="Email" />
              <ExternalLink href={SITE_CONFIG.linkedin} label="LinkedIn" external />
            </div>
          </div>
        </header>
      }
      mainClassName="mx-auto w-full max-w-[1320px] px-5 py-8 lg:px-10 lg:py-10"
    />
  );
}
