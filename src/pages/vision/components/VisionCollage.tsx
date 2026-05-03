import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  VISION_COLLAGE_ITEMS,
  type ArrowDir,
  type VisionCollageItem,
} from "../visionCollage.data";

const LABEL = "Is this a product or an experience?";
const INTERVAL_MS = 3400;

function Arrow({ dir }: { dir: ArrowDir }) {
  if (dir === "left") {
    return (
      <svg width="36" height="10" viewBox="0 0 36 10" fill="none" aria-hidden>
        <line
          x1="36"
          y1="5"
          x2="6"
          y2="5"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <polyline
          points="12,1.5 5.5,5 12,8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
    );
  }
  if (dir === "right") {
    return (
      <svg width="36" height="10" viewBox="0 0 36 10" fill="none" aria-hidden>
        <line
          x1="0"
          y1="5"
          x2="30"
          y2="5"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <polyline
          points="24,1.5 30.5,5 24,8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
    );
  }
  if (dir === "up") {
    return (
      <svg width="10" height="36" viewBox="0 0 10 36" fill="none" aria-hidden>
        <line
          x1="5"
          y1="36"
          x2="5"
          y2="6"
          stroke="currentColor"
          strokeWidth="0.75"
        />
        <polyline
          points="1.5,12 5,5.5 8.5,12"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
        />
      </svg>
    );
  }
  return (
    <svg width="10" height="36" viewBox="0 0 10 36" fill="none" aria-hidden>
      <line
        x1="5"
        y1="0"
        x2="5"
        y2="30"
        stroke="currentColor"
        strokeWidth="0.75"
      />
      <polyline
        points="1.5,24 5,30.5 8.5,24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
      />
    </svg>
  );
}

function Annotation({ item }: { item: VisionCollageItem }) {
  const isHoriz = item.arrowDir === "left" || item.arrowDir === "right";
  // Arrow precedes text when it points away from the text (toward image that is "behind" in reading order)
  const arrowFirst = item.arrowDir === "left" || item.arrowDir === "up";

  return (
    <motion.div
      className={`pointer-events-none absolute z-20 ${item.labelClassName}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: "easeInOut" }}
    >
      <div
        className={`flex ${isHoriz ? "flex-row items-center gap-2" : "flex-col items-start gap-1"} text-neutral-400`}
      >
        {arrowFirst && <Arrow dir={item.arrowDir} />}
        <p className="text-[10px] leading-snug tracking-wide text-neutral-400 italic">
          {LABEL}
        </p>
        {!arrowFirst && <Arrow dir={item.arrowDir} />}
      </div>
    </motion.div>
  );
}

export function VisionCollage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveIndex((i) => (i + 1) % VISION_COLLAGE_ITEMS.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section aria-label="Vision collage">
      {/* Desktop: animated editorial collage */}
      <div className="pointer-events-none absolute left-1/2 top-3 z-0 hidden h-[500px] w-[min(1120px,98vw)] -translate-x-1/2 md:block">
        {VISION_COLLAGE_ITEMS.map((item, i) => {
          const isActive = i === activeIndex;
          return (
            <motion.div
              key={item.id}
              className={`absolute overflow-hidden ${item.desktopClassName}`}
              style={{
                zIndex: item.zIndex ?? 1,
                boxShadow: item.hasShadow
                  ? "0 4px 22px rgba(0,0,0,0.10)"
                  : "none",
              }}
              animate={{
                filter: isActive
                  ? "grayscale(0%) opacity(1)"
                  : "grayscale(100%) opacity(0.38)",
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="eager"
                decoding="async"
                draggable={false}
                className="h-full w-full"
                style={{ objectFit: item.objectFit ?? "cover" }}
              />
            </motion.div>
          );
        })}

        <AnimatePresence mode="wait">
          <Annotation
            key={VISION_COLLAGE_ITEMS[activeIndex].id}
            item={VISION_COLLAGE_ITEMS[activeIndex]}
          />
        </AnimatePresence>
      </div>

      {/* Mobile: static grid, no animation */}
      <div className="grid auto-rows-[64px] grid-cols-6 gap-2 md:hidden">
        {VISION_COLLAGE_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`overflow-hidden ${item.mobileClassName}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="eager"
              decoding="async"
              draggable={false}
              className="h-full w-full"
              style={{ objectFit: item.objectFit ?? "cover" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
