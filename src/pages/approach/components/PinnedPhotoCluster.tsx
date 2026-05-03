import { useState } from "react";
import type { PinnedPhoto } from "../pinnedPhotos.data";

type Props = {
  photos: readonly PinnedPhoto[];
  className?: string;
};

const basePhoto =
  "absolute overflow-hidden rounded-[6px] object-cover ring-1 ring-black/10 shadow-[0_3px_6px_rgba(0,0,0,0.1),0_18px_42px_rgba(0,0,0,0.18)]";

function PinnedPhotoItem({ p }: { p: PinnedPhoto }) {
  const [ready, setReady] = useState(false);

  return (
    <div
      className={[basePhoto, p.className].join(" ")}
      style={{
        backgroundColor: p.bg ?? "#ece8e3",
      }}
    >
      <img
        src={p.src}
        alt={p.alt ?? ""}
        draggable={false}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className={[
          "h-full w-full rounded-md object-cover transition-opacity duration-500 ease-out",
          ready ? "opacity-100" : "opacity-0",
        ].join(" ")}
        style={{ filter: "contrast(1.08) saturate(1.06)" }}
        onLoad={() => setReady(true)}
      />
    </div>
  );
}

export function PinnedPhotoCluster({ photos, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute left-1/2 top-6 z-0",
        "h-65 w-[min(980px,95vw)] -translate-x-1/2",
        "hidden md:block",
        className,
      ].join(" ")}
    >
      {photos.map((p) => (
        <PinnedPhotoItem key={p.src} p={p} />
      ))}
    </div>
  );
}
