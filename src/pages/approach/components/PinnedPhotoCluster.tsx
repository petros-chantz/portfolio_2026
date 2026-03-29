import { useState } from "react";
import type { PinnedPhoto } from "../pinnedPhotos.data";

type Props = {
  photos: readonly PinnedPhoto[];
  className?: string;
};

const basePhoto =
  "absolute rounded-[6px] object-cover shadow-[0_2px_3px_rgba(0,0,0,0.08),0_14px_34px_rgba(0,0,0,0.14)]";

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
