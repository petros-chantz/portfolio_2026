import type { ContentBlock } from "./blocks";

type ContentModule = { blocks: ContentBlock[] };

const registry: Record<string, () => Promise<ContentModule>> = {
  "designing-for-operational-trust": () =>
    import("./content/designing-for-operational-trust"),
  "what-a-good-brief-actually-does": () =>
    import("./content/what-a-good-brief-actually-does"),
  "against-surface-level-innovation": () =>
    import("./content/against-surface-level-innovation"),
};

export async function getEssayBlocks(
  slug: string,
): Promise<ContentBlock[] | null> {
  const loader = registry[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.blocks;
}
