// src/presentation/PresentationViewer.tsx
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

import { NotFound } from "../NotFound";
import { PageNavbar } from "../../ui/PageNavbar";
import {
  sectionTitleClass,
  bodyMutedClass,
  navUtilityLinkClass,
} from "../../ui/typography";

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

function ClosingState() {
  return (
    <div className="text-center space-y-8 max-w-sm px-4">
      <div className="space-y-4">
        <h2 className={sectionTitleClass}>Thanks for reviewing.</h2>
        <p className={bodyMutedClass}>
          I’m happy to share more context
          <span className="block">privately on request.</span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <a
          href="mailto:petros.chantz@gmail.com"
          className={navUtilityLinkClass}
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/petroschantz/"
          target="_blank"
          rel="noopener noreferrer"
          className={navUtilityLinkClass}
        >
          LinkedIn
        </a>
      </div>
    </div>
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

  const TOTAL_STEPS = SLIDE_COUNT + 1;
  const isClosing = index === SLIDE_COUNT;
  const canPrev = index > 0;

  const prev = () => setIndex((v) => Math.max(0, v - 1));
  const next = () => setIndex((v) => Math.min(SLIDE_COUNT, v + 1));
  const restart = () => setIndex(0);

  useNoIndex(isValid);
  usePreloadNeighbors(isValid, slides, index);
  useKeyboardControls(isValid, { prev, next, restart });

  // Mobile note: show for a few seconds
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
      <main className="h-dvh px-2 pb-3 pt-20">
        <div className="flex h-full w-full flex-col">
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

          {/* Main content area */}
          <div className="min-h-0 flex flex-1 items-center justify-center">
            {isClosing ? (
              <ClosingState />
            ) : (
              <div
                className="flex justify-center cursor-pointer select-none"
                onClick={onClickSlide}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                role="presentation"
              >
                <img
                  src={slides[index]}
                  alt={`Slide ${index + 1}`}
                  className="
                    block
                    max-h-[86dvh]
                    max-w-[98vw]
                    w-auto
                    h-auto
                    rounded-xl
                    border border-black/5
                    shadow-[0_1px_2px_rgba(0,0,0,0.06),0_10px_24px_rgba(0,0,0,0.08)]
                  "
                  draggable={false}
                />
              </div>
            )}
          </div>

          {/* Controls BELOW the slide */}
          <div className="mt-6">
            {isClosing ? (
              /* Closing state: counter + restart, no chevrons */
              <div className="flex items-center justify-center gap-4">
                <div className="text-sm tabular-nums text-(--color-text-secondary)">
                  {pad2(TOTAL_STEPS)} / {pad2(TOTAL_STEPS)}
                </div>
                <RestartButton show={true} onRestart={restart} />
              </div>
            ) : (
              <div className="relative mx-auto w-full max-w-360">
                {/* Center arrow nav + counter (always centered) */}
                <div className="flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={prev}
                    disabled={!canPrev}
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-black/10 bg-white
                      p-1.5
                      transition
                      hover:bg-black/2
                      disabled:opacity-40
                    "
                    aria-label="Previous slide"
                  >
                    <ChevronLeftIcon
                      className="h-4 w-4 text-black"
                      aria-hidden="true"
                    />
                  </button>

                  <div className="text-sm tabular-nums text-(--color-text-secondary)">
                    {pad2(index + 1)} / {pad2(TOTAL_STEPS)}
                  </div>

                  <button
                    type="button"
                    onClick={next}
                    className="
                      inline-flex items-center justify-center
                      rounded-full border border-black/10 bg-white
                      p-1.5
                      transition
                      hover:bg-black/2
                    "
                    aria-label="Next slide"
                  >
                    <ChevronRightIcon
                      className="h-4 w-4 text-black"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
