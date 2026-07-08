import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, SITE_URL } from "../lib/config";

export function ComingSoonPage() {
  return (
    <>
      <Helmet>
        <title>Coming Soon — {SITE_CONFIG.name}</title>
        <meta
          name="description"
          content="Site updates are in progress. A refreshed portfolio experience is coming soon."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href={SITE_URL} />
      </Helmet>

      <main className="min-h-dvh bg-(--color-bg) px-6 py-12">
        <section className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center min-h-[80vh] space-y-8">
          <p className="text-sm tracking-[0.08em] text-(--color-text-secondary)">TEMPORARY MAINTENANCE MODE</p>
          <h1 className="text-[2.2rem] md:text-[3rem] leading-[1.05] tracking-[-0.03em] text-(--color-text-primary)">
            Coming Soon
          </h1>
          <p className="ui-text-pretty max-w-2xl text-[1.05rem] md:text-[1.125rem] leading-[1.65] text-(--color-text-secondary)">
            I am currently updating the portfolio with new project material and structure improvements.
            The live site will be back shortly.
          </p>
          <a href={`mailto:${SITE_CONFIG.email}`} className="ui-link-inline">
            Contact via email
            <span aria-hidden="true" className="ui-link-inline-arrow-right">
              ↗
            </span>
          </a>
        </section>
      </main>
    </>
  );
}