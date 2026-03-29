/**
 * Project content block system.
 *
 * Each project detail page is defined as an array of ContentBlock[].
 * Drop in any combination of block types, in any order.
 *
 * USAGE EXAMPLE:
 * ──────────────────────────────────────────────
 * import type { ContentBlock } from "../blocks";
 *
 * export const blocks: ContentBlock[] = [
 *   { type: "text", body: "Single column paragraph..." },
 *   { type: "text-2col", left: "Left column...", right: "Right column..." },
 *   { type: "image", src: "/projects/my-image.webp", alt: "Description" },
 *   { type: "image-2", images: [
 *       { src: "/projects/a.webp", alt: "A" },
 *       { src: "/projects/b.webp", alt: "B" },
 *   ]},
 *   { type: "collage", images: [
 *       { src: "/projects/c.webp", alt: "C", className: "left-0 top-0 w-48 h-32 rotate-[-3deg]" },
 *       { src: "/projects/d.webp", alt: "D", className: "left-40 top-10 w-52 h-36 rotate-[2deg]" },
 *   ]},
 * ];
 * ──────────────────────────────────────────────
 */

// ─── Image helper ────────────────────────────────────────────────────────────
export type BlockImage = {
  src?: string; // omit to show a colour placeholder
  alt: string;
  bg?: string; // placeholder colour, defaults to #ece8e3
};

// ─── Block types ─────────────────────────────────────────────────────────────

/** Full-width single-column body text (markdown supported). */
export type TextBlock = {
  type: "text";
  heading?: string;
  body: string;
};

/** Two-column text. On mobile collapses to single column. */
export type Text2ColBlock = {
  type: "text-2col";
  left: string;
  right: string;
  leftHeading?: string;
  rightHeading?: string;
};

/** Single full-width image. */
export type ImageBlock = {
  type: "image";
  image: BlockImage;
  caption?: string;
};

/** Two images side by side (equal width). */
export type Image2Block = {
  type: "image-2";
  images: [BlockImage, BlockImage];
  caption?: string;
};

/**
 * Scattered collage — absolute-positioned images inside a fixed-height
 * container (like the pinned photos on Approach). You control each photo's
 * position and rotation via `className`.
 */
export type CollageBlock = {
  type: "collage";
  height?: number; // unused — renderer auto-sizes to 160 px
  caption?: string;
  images: {
    src?: string;
    alt: string;
    bg?: string;
    className?: string; // unused — renderer auto-distributes in a horizontal line
  }[];
};

/** Pull-quote / highlighted text. */
export type QuoteBlock = {
  type: "quote";
  text: string;
  attribution?: string;
};

/** Horizontal divider with optional label. */
export type DividerBlock = {
  type: "divider";
  label?: string;
};

// ─── Union ───────────────────────────────────────────────────────────────────
export type ContentBlock =
  | TextBlock
  | Text2ColBlock
  | ImageBlock
  | Image2Block
  | CollageBlock
  | QuoteBlock
  | DividerBlock;
