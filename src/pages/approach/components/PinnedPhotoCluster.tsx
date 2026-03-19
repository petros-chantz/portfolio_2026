import { useEffect, useState } from "react";
import type { PinnedPhoto } from "../pinnedPhotos.data";

type Props = {
  photos: readonly PinnedPhoto[];
  className?: string;
};

const basePhoto =
  "absolute rounded-[6px] object-cover shadow-[0_2px_3px_rgba(0,0,0,0.08),0_14px_34px_rgba(0,0,0,0.14)]";

function PinnedPhotoItem({ p }: { p: PinnedPhoto }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const img = new Image();
    img.src = p.src;

    // decode() ensures the image is ready to paint before we show it
    const done = async () => {
      try {
        // decode might throw for some SVGs/edge cases; fallback to onload
        if (img.decode) await img.decode();
      } catch {
        // ignore
      }
      if (!cancelled) setReady(true);
    };

    if (p.priority) {
      done();
    } else {
      // for lazy images, wait until browser starts fetching it anyway
      // still ok: we'll become ready when it finishes decoding
      done();
    }

    return () => {
      cancelled = true;
    };
  }, [p.src, p.priority]);

  return (
    <div
      className={[basePhoto, p.className].join(" ")}
      style={{
        backgroundColor: p.bg ?? "rgba(0,0,0,0.03)", // instant painted placeholder
      }}
    >
      <img
        src={p.src}
        alt={p.alt ?? ""}
        draggable={false}
        loading={p.priority ? "eager" : "lazy"}
        decoding="async"
        className={[
          "h-full w-full rounded-md object-cover transition-opacity duration-300",
          ready ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onLoad={(e) => {
          // safety fallback if decode wasn't supported
          if (!ready && e.currentTarget.complete) setReady(true);
        }}
      />
    </div>
  );
}

export function PinnedPhotoCluster({ photos, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute left-1/2 top-[24px] z-0",
        "h-[260px] w-[min(980px,95vw)] -translate-x-1/2",
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
