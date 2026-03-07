import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import { NotFound } from "./NotFound";
import { PageNavbar } from "../ui/PageNavbar";

// ===== Config =====
const SLIDE_COUNT = 12;

function getAllowedKeys(): Set<string> {
  const raw = import.meta.env.VITE_PRESENTATION_KEYS as string | undefined;
  const keys = raw
    ?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) ?? ["sample-token"];
  return new Set(keys);
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function slideUrl(index0: number) {
  return `/private/slides/${pad2(index0 + 1)}.png`;
}

function preload(url: string) {
  const img = new Image();
  img.src = url;
}

export function Presentation() {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key") ?? "";

  // ✅ Determine validity without early returns (hooks must run consistently)
  const allowed = useMemo(() => getAllowedKeys(), []);
  const isValid = allowed.has(key);

  // Slides list (safe even if invalid)
  const slides = useMemo(
    () => Array.from({ length: SLIDE_COUNT }, (_, idx) => slideUrl(idx)),
    [],
  );

  const [i, setI] = useState(0);
  const [showHint, setShowHint] = useState(true);

  const canPrev = i > 0;
  const isLast = i === slides.length - 1;

  const prev = () => setI((v) => Math.max(0, v - 1));
  const next = () => setI((v) => Math.min(slides.length - 1, v + 1));
  const restart = () => setI(0);

  // Robots noindex + title (only when valid)
  useEffect(() => {
    if (!isValid) return;

    const prevTitle = document.title;
    document.title = "Presentation";

    let meta = document.querySelector(
      'meta[name="robots"]',
    ) as HTMLMetaElement | null;
    const created = !meta;

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "robots";
      document.head.appendChild(meta);
    }

    const prevContent = meta.content;
    meta.content = "noindex,nofollow";

    return () => {
      document.title = prevTitle;
      if (meta) meta.content = prevContent;
      if (created && meta?.parentNode) meta.parentNode.removeChild(meta);
    };
  }, [isValid]);

  // Hint: show briefly, then fade out (only when valid)
  useEffect(() => {
    if (!isValid) return;

    setShowHint(true);
    const t = window.setTimeout(() => setShowHint(false), 1800);
    return () => window.clearTimeout(t);
  }, [isValid]);

  // Keyboard navigation (+ restart shortcut) (only when valid)
  useEffect(() => {
    if (!isValid) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "r" || e.key === "R") restart();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isValid]);

  // Preload neighbors (only when valid)
  useEffect(() => {
    if (!isValid) return;

    preload(slides[i]);
    if (i > 0) preload(slides[i - 1]);
    if (i < slides.length - 1) preload(slides[i + 1]);
  }, [isValid, i, slides]);

  // Click navigation: left half = prev, right half = next
  const onClickSlide = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) prev();
    else next();
  };

  // ✅ Now render-gate without breaking hooks
  if (!isValid) return <NotFound />;

  return (
    <div className="h-dvh w-full bg-(--color-bg) text-(--color-text-primary)">
      {/* Top navbar wrapper — match your normal pages */}
      <div className="fixed left-0 right-0 top-0 z-20 w-full">
        <div className="bg-(--color-bg)">
          <div className="px-5">
            <PageNavbar />
          </div>
        </div>
      </div>

      {/* Viewport area (no scrolling) */}
      <main className="h-dvh px-6 pb-8 pt-20">
        <div className="mx-auto flex h-full w-full max-w-6xl flex-col">
          {/* Slide card area centered */}
          <div className="min-h-0 flex flex-1 items-center justify-center">
            <div
              className="mx-auto w-full max-w-360 cursor-pointer select-none"
              onClick={onClickSlide}
              role="presentation"
            >
              <div
                className="
                  relative
                  w-full
                  aspect-video
                  max-h-[68dvh]
                  overflow-hidden
                  rounded-xl
                  bg-white
                  border border-black/5
                  shadow-[0_1px_2px_rgba(0,0,0,0.06),0_10px_24px_rgba(0,0,0,0.08)]
                "
              >
                <img
                  src={slides[i]}
                  alt={`Slide ${i + 1}`}
                  className="h-full w-full object-contain"
                  draggable={false}
                />

                {/* Hint overlay (brief fade in/out) */}
                <AnimatePresence>
                  {showHint && (
                    <motion.div
                      className="
                        pointer-events-none
                        absolute left-1/2 top-6 -translate-x-1/2
                        rounded-full
                        bg-white/80
                        px-3 py-2
                        text-sm
                        text-(--color-text-secondary)
                        backdrop-blur-md
                        shadow-[0_6px_20px_rgba(0,0,0,0.12)]
                      "
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <span className="inline-flex items-center gap-2">
                        Use
                        <span className="inline-flex items-center gap-1 rounded-md border border-black/10 bg-white px-2 py-1 text-(--color-text-primary)">
                          <ArrowLeftIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                          <ArrowRightIcon
                            className="h-4 w-4"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Controls BELOW the slide */}
          <div className="mt-6">
            <div className="relative mx-auto w-full max-w-[1440px]">
              {/* Center arrow nav + counter (always centered) */}
              <div className="flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  disabled={!canPrev}
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-black/10 bg-white
                    p-2
                    transition
                    hover:bg-black/[0.02]
                    disabled:opacity-40
                  "
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </button>

                <div className="text-sm tabular-nums text-[var(--color-text-secondary)]">
                  {pad2(i + 1)} / {pad2(slides.length)}
                </div>

                <button
                  type="button"
                  onClick={next}
                  disabled={isLast}
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-black/10 bg-white
                    p-2
                    transition
                    hover:bg-black/[0.02]
                    disabled:opacity-40
                  "
                  aria-label="Next slide"
                >
                  <ChevronRightIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </button>
              </div>

              {/* Restart appears only on last slide (smaller + micro-interaction) */}
              <AnimatePresence initial={false}>
                {isLast && (
                  <motion.button
                    key="restart"
                    type="button"
                    onClick={restart}
                    className="
                      group
                      absolute right-0 top-1/2 -translate-y-1/2
                      inline-flex items-center gap-2
                      rounded-full border border-black/10 bg-white
                      px-3 py-1.5
                      text-xs
                      text-[var(--color-text-primary)]
                      transition
                      hover:bg-black/[0.02]
                    "
                    aria-label="Restart presentation"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <ArrowUturnLeftIcon
                      className="
                        h-4 w-4
                        text-black
                        transition-transform duration-200 ease-out
                        group-hover:-translate-x-1
                      "
                      aria-hidden="true"
                    />
                    Restart{" "}
                    <span className="text-[10px] text-[var(--color-text-secondary)]">
                      R
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
