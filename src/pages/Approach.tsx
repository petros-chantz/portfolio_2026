import { getPage } from "../content.pages";
import { Markdown } from "../markdown/Markdown";

export function Approach() {
  const page = getPage("approach");
  if (!page) return <div>Missing page: approach.md</div>;

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">{page.title}</h1>
        {page.summary && <h3 className="opacity-80">{page.summary}</h3>}
      </header>

      <Markdown value={page.content} />
    </div>
  );
}
