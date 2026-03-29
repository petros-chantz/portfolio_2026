import type { Principle } from "../approach.data";
import { bodyTextClass, subsectionTitleClass } from "../../../ui/typography";

function formatIndex(i: number) {
  return String(i + 1).padStart(2, "0");
}

type PrincipleCardProps = {
  item: Principle;
  index: number;
};

export function PrincipleCard({ item, index }: PrincipleCardProps) {
  return (
    <div className="space-y-2">
      <span className="mr-2 font-light text-3xl text-orange-500 tabular-nums">
        {formatIndex(index)}.
      </span>

      <div className="grid gap-3">
        <h3 className={subsectionTitleClass}>{item.title}</h3>

        <p className={bodyTextClass}>{item.body}</p>
      </div>
    </div>
  );
}
