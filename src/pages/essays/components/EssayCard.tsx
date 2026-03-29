import { Link } from "react-router-dom";
import {
  cardSummaryClass,
  cardTitleClass,
  metaTextClass,
} from "../../../ui/typography";
import type { Essay } from "../Essays.data";

type Props = {
  essay: Essay;
  view: "grid" | "list";
};

export function EssayCard({ essay, view }: Props) {
  if (view === "list") {
    return (
      <Link
        to={`/essays/${essay.slug}`}
        className="group -mx-3 flex gap-4 rounded-xl p-3 transition hover:bg-black/3"
      >
        <div
          className="h-20 w-28 shrink-0 rounded-lg"
          style={{ backgroundColor: essay.coverBg }}
        />
        <div className="space-y-1 py-0.5">
          <div className={metaTextClass}>
            {essay.category}&ensp;·&ensp;{essay.year}&ensp;·&ensp;
            {essay.readTime}
          </div>
          <h3 className={cardTitleClass}>{essay.title}</h3>
          <p className={`line-clamp-2 ${cardSummaryClass}`}>{essay.summary}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/essays/${essay.slug}`} className="group block space-y-3">
      <div
        className="w-full aspect-video rounded-xl transition-transform duration-300 ease-out group-hover:scale-[1.015]"
        style={{ backgroundColor: essay.coverBg }}
      />
      <div className="space-y-1">
        <div className={metaTextClass}>
          {essay.category}&ensp;·&ensp;{essay.year}&ensp;·&ensp;{essay.readTime}
        </div>
        <h3 className={cardTitleClass}>{essay.title}</h3>
        <p className={`line-clamp-2 ${cardSummaryClass}`}>{essay.summary}</p>
      </div>
    </Link>
  );
}
