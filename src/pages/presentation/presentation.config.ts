// src/presentation/presentation.config.ts

export const SLIDE_COUNT = 12;
export const HINT_MS = 1800;

export function getAllowedKeys(): Set<string> {
  const raw = import.meta.env.VITE_PRESENTATION_KEYS as string | undefined;
  const keys =
    raw
      ?.split(",")
      .map((s) => s.trim())
      .filter(Boolean) ?? [];
  return new Set(keys);
}

export function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function slideUrl(index0: number) {
  return `/private/slides/Portfolio${pad2(index0 + 1)}.png`;
}

export function preload(url: string) {
  const img = new Image();
  img.src = url;
}
