import { parseFrontmatter } from "../../lib/frontmatter";
import type { ContentBlock } from "./blocks";

export type ProjectMeta = {
  slug: string;
  title: string;
  subtitle: string;
  topics: string[];
  summary: string;
  coverBg: string;
  role?: string;
  teamSize?: string;
  timeframe?: string;
  scope?: string;
  heroImage?: string;
  heroAlt?: string;
};

type ProjectContent = ProjectMeta & {
  order: number;
  blocks: ContentBlock[];
};

const rawProjectFiles = import.meta.glob("./content/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const PROJECT_CONTENT: ProjectContent[] = Object.entries(rawProjectFiles)
  .map(([path, raw]) => parseProjectMarkdown(path, raw))
  .sort((a, b) => a.order - b.order);

export const PROJECT_LIST: readonly ProjectMeta[] = PROJECT_CONTENT.map(
  ({ blocks: _blocks, order: _order, ...meta }) => meta,
);

function parseProjectMarkdown(path: string, raw: string): ProjectContent {
  const { data, content } = parseFrontmatter(raw);
  const fallbackSlug = path.split("/").pop()?.replace(/\.md$/, "") || "";
  return {
    slug: data.slug || fallbackSlug,
    title: data.title || "Untitled project",
    subtitle: data.subtitle || "",
    topics: parseTopics(data.topics),
    summary: data.summary || "",
    coverBg: data.coverBg || "#ece8e3",
    role: emptyToUndefined(data.role),
    teamSize: emptyToUndefined(data.teamSize),
    timeframe: emptyToUndefined(data.timeframe),
    scope: emptyToUndefined(data.scope),
    heroImage: emptyToUndefined(data.heroImage),
    heroAlt: emptyToUndefined(data.heroAlt),
    order: Number(data.order || 999),
    blocks: parseBlocks(content),
  };
}

function emptyToUndefined(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

function parseTopics(raw: string | undefined): string[] {
  if (!raw) return [];
  return raw
    .split(",")
    .map((topic) => topic.trim())
    .filter(Boolean);
}

function parseBlocks(markdown: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  const fencePattern = /```block\s*([\s\S]*?)```/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = fencePattern.exec(markdown))) {
    const before = markdown.slice(lastIndex, match.index);
    blocks.push(...textToBlocks(before));

    const parsed = parseBlockJson(match[1]);
    if (parsed) blocks.push(parsed);

    lastIndex = fencePattern.lastIndex;
  }

  blocks.push(...textToBlocks(markdown.slice(lastIndex)));
  return blocks;
}

function textToBlocks(raw: string): ContentBlock[] {
  const text = raw.trim();
  if (!text) return [];

  const headingPattern = /^##\s+(.+)$/gm;
  const headings = Array.from(text.matchAll(headingPattern));

  if (!headings.length) {
    return [{ type: "text", body: text }];
  }

  const blocks: ContentBlock[] = [];
  for (let i = 0; i < headings.length; i++) {
    const current = headings[i];
    const next = headings[i + 1];
    const heading = current[1].trim();
    const start = (current.index || 0) + current[0].length;
    const end = next ? next.index || text.length : text.length;
    const body = text.slice(start, end).trim();

    if (!body) continue;
    blocks.push({ type: "text", heading, body });
  }

  return blocks;
}

function parseBlockJson(raw: string): ContentBlock | null {
  try {
    const parsed = JSON.parse(raw) as ContentBlock;
    if (!parsed || typeof parsed !== "object") return null;
    if (!("type" in parsed) || typeof parsed.type !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function getProjectBySlug(slug: string): ProjectMeta | null {
  const project = PROJECT_CONTENT.find((entry) => entry.slug === slug);
  if (!project) return null;
  const { blocks: _blocks, order: _order, ...meta } = project;
  return meta;
}

export function getProjectBlocks(slug: string): ContentBlock[] | null {
  const project = PROJECT_CONTENT.find((entry) => entry.slug === slug);
  return project ? project.blocks : null;
}

export function getProjectSiblings(slug: string): {
  previous: ProjectMeta | null;
  next: ProjectMeta | null;
} {
  const index = PROJECT_CONTENT.findIndex((entry) => entry.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? getProjectBySlug(PROJECT_CONTENT[index - 1].slug) : null,
    next: index < PROJECT_CONTENT.length - 1 ? getProjectBySlug(PROJECT_CONTENT[index + 1].slug) : null,
  };
}
