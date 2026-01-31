export type Frontmatter = Record<string, string>;

export function parseFrontmatter(raw: string): {
  data: Frontmatter;
  content: string;
} {
  // Supports:
  // ---
  // key: "value"
  // key: value
  // ---
  // content...
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, content: raw };
  }

  const fmBlock = raw.slice(3, end).trim();
  const content = raw.slice(end + "\n---".length).replace(/^\s+/, "");

  const data: Frontmatter = {};
  for (const line of fmBlock.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const idx = trimmed.indexOf(":");
    if (idx === -1) continue;

    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();

    // remove wrapping quotes
    value = value.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");

    data[key] = value;
  }

  return { data, content };
}
