import { parseFrontmatter } from "./lib/frontmatter";

export type Page = {
  slug: string;
  title: string;
  summary?: string;
  content: string;
};

const pageFiles = import.meta.glob("./content/pages/*.md", {
  as: "raw",
  eager: true,
}) as Record<string, string>;

export function getPage(slug: string): Page | null {
  const entry = Object.entries(pageFiles).find(([path]) =>
    path.endsWith(`/${slug}.md`),
  );
  if (!entry) return null;

  const raw = entry[1];
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: data.title ?? slug,
    summary: data.summary,
    content,
  };
}
