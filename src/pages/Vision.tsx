import { getPage } from "../content.pages";
import { Markdown } from "../markdown/Markdown";

export function Vision() {
  const page = getPage("vision");
  if (!page) return <div>Missing page: vision.md</div>;

  return (
    <div className="space-y-12">
      {/* Custom “hero” */}
      <section className="space-y-4">
        <div className="text-sm uppercase tracking-wide opacity-60">Vision</div>
        <h1 className="text-4xl font-semibold tracking-tight">{page.title}</h1>
        {page.summary && (
          <p className="max-w-2xl text-lg opacity-80">{page.summary}</p>
        )}
      </section>

      {/* Custom layout */}
      <section className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <div className="text-sm opacity-70">
          A short side note / tagline / principles index.
        </div>
        <Markdown value={page.content} />
      </section>
    </div>
  );
}
