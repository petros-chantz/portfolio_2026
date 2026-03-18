import type { PinnedPhoto } from "../pinnedPhotos.data";

type Props = {
  photos: readonly PinnedPhoto[];
  className?: string;
};

const basePhoto =
  "absolute rounded-[6px] object-cover shadow-[0_10px_24px_rgba(0,0,0,0.14)]";

export function PinnedPhotoCluster({ photos, className = "" }: Props) {
  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute left-1/2 top-[24px] z-0",
        "h-[260px] w-[min(1200px,95vw)] -translate-x-1/2",
        "hidden md:block",
        className,
      ].join(" ")}
    >
      {photos.map((p) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt ?? ""}
          className={[basePhoto, p.className].join(" ")}
          loading="lazy"
          draggable={false}
        />
      ))}
    </div>
  );
}
