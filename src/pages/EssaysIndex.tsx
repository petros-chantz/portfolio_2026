import { Link } from "react-router-dom";
import { getAllEssays } from "../content.essays";

export function EssaysIndex() {
  const essays = getAllEssays();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Essays</h1>

      <ul className="space-y-4">
        {essays.map((e) => (
          <li key={e.slug} className="space-y-1">
            <Link
              className="text-lg font-semibold underline underline-offset-4"
              to={`/essays/${e.slug}`}
            >
              {e.title}
            </Link>
            {e.summary && <div className="text-sm opacity-80">{e.summary}</div>}
            {e.date && <div className="text-xs opacity-60">{e.date}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
