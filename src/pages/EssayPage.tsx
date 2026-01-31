import { useParams } from "react-router-dom";
import { getEssayBySlug } from "../content.essays";
import { Markdown } from "../markdown/Markdown";

export function EssayPage() {
  const { slug } = useParams();
  const essay = slug ? getEssayBySlug(slug) : null;

  if (!essay)
    return (
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Not found</h1>
      </div>
    );

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">{essay.title}</h1>
        {essay.date && <div className="text-sm opacity-70">{essay.date}</div>}
        {essay.summary && <div className="opacity-80">{essay.summary}</div>}
      </header>

      <Markdown value={essay.content} />
    </div>
  );
}
