// src/presentation/PresentationViewer.tsx
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import { NotFound } from "../NotFound";
import { PageNavbar } from "../../ui/PageNavbar";

import {
  getAllowedKeys,
  HINT_MS,
  SLIDE_COUNT,
  pad2,
  slideUrl,
} from "./presentation.config";
import {
  useHint,
  useKeyboardControls,
  useNoIndex,
  usePreloadNeighbors,
} from "./hooks";

function KeyHint({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
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
            <span className="hidden md:inline">Use</span>
            <span className="md:hidden">Swipe</span>
            <span className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 text-(--color-text-primary)">
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function RestartButton({
  show,
  onRestart,
  className = "",
}: {
  show: boolean;
  onRestart: () => void;
  className?: string;
}) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.button
          key="restart"
          type="button"
          onClick={onRestart}
          className={`
            group
            inline-flex items-center gap-2
            rounded-full border border-black/10 bg-white
            px-3 py-1.5
            text-xs
            text-(--color-text-primary)
            transition
            hover:bg-black/2
            ${className}
          `}
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
          <span className="text-[10px] text-(--color-text-secondary)">R</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function PresentationViewer() {
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key") ?? "";

  // Gate without early returns before hooks
  const allowed = useMemo(() => getAllowedKeys(), []);
  const isValid = allowed.has(key);

  const slides = useMemo(
    () => Array.from({ length: SLIDE_COUNT }, (_, idx) => slideUrl(idx)),
    [],
  );

  const [index, setIndex] = useState(0);

  const canPrev = index > 0;
  const isLast = index === slides.length - 1;

  const prev = () => setIndex((v) => Math.max(0, v - 1));
  const next = () => setIndex((v) => Math.min(slides.length - 1, v + 1));
  const restart = () => setIndex(0);

  useNoIndex(isValid);
  const showHint = useHint(isValid, HINT_MS);
  usePreloadNeighbors(isValid, slides, index);
  useKeyboardControls(isValid, { prev, next, restart });

  // Mobile note: show longer than the swipe/use hint
  const showMobileNote = useHint(isValid, HINT_MS + 5000);

  // Click navigation: left half = prev, right half = next
  const onClickSlide = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) prev();
    else next();
  };

  // Mobile swipe navigation
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0]?.clientX ?? null);
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX;
    const dx = endX - touchStartX;

    // threshold to avoid accidental swipes
    const THRESHOLD = 40;

    if (dx > THRESHOLD) prev();
    if (dx < -THRESHOLD) next();

    setTouchStartX(null);
  };

  if (!isValid) return <NotFound />;

  return (
    <div className="h-dvh w-full bg-(--color-bg) text-(--color-text-primary)">
      {/* Top navbar wrapper — match your normal pages exactly */}
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
          {/* Mobile-only note above slides (centered) */}
          <div className="relative md:hidden mt-2 mb-3 h-8 px-4">
            <AnimatePresence>
              {showMobileNote && (
                <motion.p
                  className="
          absolute inset-x-0 top-12
          mx-auto
          max-w-[16rem]
          text-center
          italic
          text-sm
          text-(--color-text-secondary)
        "
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <span className="font-medium text-(--color-text-primary)">
                    Note:
                  </span>{" "}
                  For optimal viewing experience, please move to a desktop or
                  laptop.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Slide card area centered */}
          <div className="min-h-0 flex flex-1 items-center justify-center">
            <div
              className="mx-auto w-full max-w-270 desktop:max-w-360 cursor-pointer select-none"
              onClick={onClickSlide}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
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
                  bg-(--color-bg)
                  border border-black/5
                  shadow-[0_1px_2px_rgba(0,0,0,0.06),0_10px_24px_rgba(0,0,0,0.08)]
                "
              >
                <img
                  src={slides[index]}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-contain"
                  draggable={false}
                />

                <KeyHint show={showHint} />
              </div>
            </div>
          </div>

          {/* Controls BELOW the slide */}
          <div className="mt-6">
            <div className="relative mx-auto w-full max-w-360">
              {/* Center arrow nav + counter (always centered) */}
              <div className="flex items-center justify-center gap-3">
                {/* Mobile: show restart above arrows (only on last slide) */}
                <div className="md:hidden absolute left-1/2 -translate-x-1/2 -top-10">
                  <RestartButton show={isLast} onRestart={restart} />
                </div>

                <button
                  type="button"
                  onClick={prev}
                  disabled={!canPrev}
                  className="
                    inline-flex items-center justify-center
                    rounded-full border border-black/10 bg-white
                    p-2
                    transition
                    hover:bg-black/2
                    disabled:opacity-40
                  "
                  aria-label="Previous slide"
                >
                  <ChevronLeftIcon
                    className="h-6 w-6 text-black"
                    aria-hidden="true"
                  />
                </button>

                <div className="text-sm tabular-nums text-(--color-text-secondary)">
                  {pad2(index + 1)} / {pad2(slides.length)}
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
                    hover:bg-black/2
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

              {/* Desktop restart stays on the right */}
              <div className="hidden md:block">
                <RestartButton
                  show={isLast}
                  onRestart={restart}
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
