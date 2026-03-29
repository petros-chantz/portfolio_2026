import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import {
  bodyTextClass,
  captionTextClass,
  quoteTextClass,
  sectionTitleClass,
  subsectionTitleClass,
} from "../../../ui/typography";
import type {
  ContentBlock,
  TextBlock,
  Text2ColBlock,
  ImageBlock,
  Image2Block,
  CollageBlock,
  QuoteBlock,
} from "../blocks";

// ─── Markdown prose helper ────────────────────────────────────────────────────
function Prose({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        p: ({ children: c }) => (
          <p className={`mt-4 first:mt-0 ${bodyTextClass}`}>{c}</p>
        ),
        strong: ({ children: c }) => (
          <strong className="font-semibold text-(--color-text-primary)">
            {c}
          </strong>
        ),
        em: ({ children: c }) => <em className="italic">{c}</em>,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

// ─── Image with fade-in ───────────────────────────────────────────────────────
function BlockImg({
  src,
  alt,
  bg = "#ece8e3",
  className = "",
}: {
  src?: string;
  alt: string;
  bg?: string;
  className?: string;
}) {
  const [ready, setReady] = useState(false);
  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ backgroundColor: bg }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className={`h-full w-full object-cover transition-opacity duration-500 ease-out ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setReady(true)}
        />
      )}
    </div>
  );
}

// ─── Block renderers ──────────────────────────────────────────────────────────

function RenderText({ block }: { block: TextBlock }) {
  return (
    <div className="space-y-2">
      {block.heading && <h2 className={sectionTitleClass}>{block.heading}</h2>}
      <Prose>{block.body}</Prose>
    </div>
  );
}

function RenderText2Col({ block }: { block: Text2ColBlock }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-2">
        {block.leftHeading && (
          <h3 className={subsectionTitleClass}>{block.leftHeading}</h3>
        )}
        <Prose>{block.left}</Prose>
      </div>
      <div className="space-y-2">
        {block.rightHeading && (
          <h3 className={subsectionTitleClass}>{block.rightHeading}</h3>
        )}
        <Prose>{block.right}</Prose>
      </div>
    </div>
  );
}

function RenderImage({ block }: { block: ImageBlock }) {
  return (
    <figure className="space-y-3">
      <BlockImg
        src={block.image.src}
        alt={block.image.alt}
        bg={block.image.bg}
        className="aspect-video w-full"
      />
      {block.caption && (
        <figcaption className={captionTextClass}>{block.caption}</figcaption>
      )}
    </figure>
  );
}

function RenderImage2({ block }: { block: Image2Block }) {
  return (
    <figure className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {block.images.map((img, i) => (
          <BlockImg
            key={i}
            src={img.src}
            alt={img.alt}
            bg={img.bg}
            className="aspect-video"
          />
        ))}
      </div>
      {block.caption && (
        <figcaption className={captionTextClass}>{block.caption}</figcaption>
      )}
    </figure>
  );
}

// ─── Collage photo (matches approach PinnedPhotoItem styling) ─────────────────
function CollagePhoto({
  src,
  alt,
  bg = "#ece8e3",
  style,
}: {
  src?: string;
  alt: string;
  bg?: string;
  style: React.CSSProperties;
}) {
  const [ready, setReady] = useState(false);
  return (
    <div
      className="absolute rounded-md shadow-[0_2px_3px_rgba(0,0,0,0.08),0_14px_34px_rgba(0,0,0,0.14)]"
      style={{ backgroundColor: bg, ...style }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          draggable={false}
          loading="lazy"
          decoding="async"
          className={[
            "h-full w-full rounded-md object-cover transition-opacity duration-500 ease-out",
            ready ? "opacity-100" : "opacity-0",
          ].join(" ")}
          onLoad={() => setReady(true)}
        />
      )}
    </div>
  );
}

function RenderCollage({ block }: { block: CollageBlock }) {
  // Predefined rotations and vertical offsets to scatter photos naturally in a line
  const rots = [-4, 3, -2.5, 5, -3, 2];
  const tops = [14, 2, 22, 8, 18, 4];
  const n = block.images.length;

  return (
    <figure className="space-y-3">
      <div className="relative w-full" style={{ height: "160px" }}>
        {block.images.map((img, i) => {
          // Distribute photos evenly from the left edge to the right edge
          const step = n > 1 ? i / (n - 1) : 0.5;
          const rot = rots[i % rots.length];
          const top = tops[i % tops.length];
          return (
            <CollagePhoto
              key={i}
              src={img.src}
              alt={img.alt}
              bg={img.bg}
              style={{
                width: "176px",
                height: "124px",
                left: `calc(${step * 100}% - ${Math.round(step * 176)}px)`,
                top: `${top}px`,
                transform: `rotate(${rot}deg)`,
              }}
            />
          );
        })}
      </div>
      {block.caption && (
        <figcaption className={captionTextClass}>{block.caption}</figcaption>
      )}
    </figure>
  );
}

function RenderQuote({ block }: { block: QuoteBlock }) {
  return (
    <blockquote className="border-l-2 border-black/20 pl-5 space-y-1">
      <p className={quoteTextClass}>"{block.text}"</p>
      {block.attribution && (
        <p className="text-sm text-(--color-text-secondary)">
          {block.attribution}
        </p>
      )}
    </blockquote>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function ProjectBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-14">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "text":
            return <RenderText key={i} block={block} />;
          case "text-2col":
            return <RenderText2Col key={i} block={block} />;
          case "image":
            return <RenderImage key={i} block={block} />;
          case "image-2":
            return <RenderImage2 key={i} block={block} />;
          case "collage":
            return <RenderCollage key={i} block={block} />;
          case "quote":
            return <RenderQuote key={i} block={block} />;
          case "divider":
            return (
              <div key={i} className="flex items-center gap-4">
                <div className="h-px flex-1 bg-black/10" />
                {block.label && (
                  <span className="text-xs text-(--color-text-secondary)">
                    {block.label}
                  </span>
                )}
                {!block.label && null}
                <div className="h-px flex-1 bg-black/10" />
              </div>
            );
        }
      })}
    </div>
  );
}
