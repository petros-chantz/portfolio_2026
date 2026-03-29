import type { ContentBlock } from "./blocks";

const WORDS_PER_MINUTE = 220;

function normalizeText(value: string): string {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[>#*_~|-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordsIn(value: string): number {
  const normalized = normalizeText(value);
  if (!normalized) return 0;
  return normalized.split(" ").filter(Boolean).length;
}

export function estimateReadMinutes(blocks: ContentBlock[]): number {
  let words = 0;

  for (const block of blocks) {
    switch (block.type) {
      case "text": {
        words += wordsIn(block.heading ?? "");
        words += wordsIn(block.body);
        break;
      }
      case "text-2col": {
        words += wordsIn(block.leftHeading ?? "");
        words += wordsIn(block.rightHeading ?? "");
        words += wordsIn(block.left);
        words += wordsIn(block.right);
        break;
      }
      case "quote": {
        words += wordsIn(block.text);
        words += wordsIn(block.attribution ?? "");
        break;
      }
      case "image": {
        words += wordsIn(block.caption ?? "");
        break;
      }
      case "image-2": {
        words += wordsIn(block.caption ?? "");
        break;
      }
      case "collage": {
        words += wordsIn(block.caption ?? "");
        break;
      }
      case "divider": {
        words += wordsIn(block.label ?? "");
        break;
      }
    }
  }

  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatReadTime(blocks: ContentBlock[]): string {
  const minutes = estimateReadMinutes(blocks);
  return `${minutes} min read`;
}
