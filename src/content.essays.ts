import { parseFrontmatter } from "./lib/frontmatter";

export type EssayMeta = {
  slug: string;
  title: string;
  date?: string;
  summary?: string;
};

export type Essay = EssayMeta & { content: string };

const essayFiles = import.meta.glob("./content/essays/*.md", {
  as: "raw",
  eager: true,
}) as Record<string, string>;

function slugFromPath(path: string) {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

export function getAllEssays(): EssayMeta[] {
  const metas = Object.entries(essayFiles).map(([path, raw]) => {
    const { data } = parseFrontmatter(raw);
    const slug = slugFromPath(path);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date,
      summary: data.summary,
    };
  });

  return metas.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
}

export function getEssayBySlug(slug: string): Essay | null {
  const entry = Object.entries(essayFiles).find(([path]) =>
    path.endsWith(`/${slug}.md`),
  );
  if (!entry) return null;

  const raw = entry[1];
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date,
    summary: data.summary,
    content,
  };
}
