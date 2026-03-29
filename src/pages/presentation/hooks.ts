// src/presentation/hooks.ts
import { useEffect, useState } from "react";
import { preload } from "./presentation.config";

type KeyboardHandlers = {
  prev: () => void;
  next: () => void;
  restart: () => void;
};

export function useNoIndex(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

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
  }, [enabled]);
}

export function useKeyboardControls(
  enabled: boolean,
  handlers: KeyboardHandlers,
) {
  useEffect(() => {
    if (!enabled) return;

    const onKeyDown = (e: KeyboardEvent) => {
      // Prevent browser horizontal scroll / history navigation quirks
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
      }

      if (e.key === "ArrowLeft") handlers.prev();
      if (e.key === "ArrowRight") handlers.next();
      if (e.key === "r" || e.key === "R") handlers.restart();
    };

    const handler = onKeyDown as EventListener;
    window.addEventListener("keydown", handler, { passive: false });
    return () => window.removeEventListener("keydown", handler);
  }, [enabled, handlers]);
}

export function useHint(enabled: boolean, ms: number) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (!enabled) return;
    const showTimer = window.setTimeout(() => setShow(true), 0);
    const hideTimer = window.setTimeout(() => setShow(false), ms);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [enabled, ms]);

  return show;
}

export function usePreloadNeighbors(
  enabled: boolean,
  slides: string[],
  index: number,
) {
  useEffect(() => {
    if (!enabled) return;
    if (slides.length === 0) return;

    preload(slides[index]);
    if (index > 0) preload(slides[index - 1]);
    if (index < slides.length - 1) preload(slides[index + 1]);
  }, [enabled, slides, index]);
}
