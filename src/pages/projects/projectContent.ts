/**
 * Project content registry.
 *
 * To add a new project:
 *  1. Create `content/my-project-slug.ts` exporting `blocks: ContentBlock[]`
 *  2. Add one line here: `"my-project-slug": () => import("./content/my-project-slug")`
 */
import type { ContentBlock } from "./blocks";

type ContentModule = { blocks: ContentBlock[] };

const registry: Record<string, () => Promise<ContentModule>> = {
  "internal-ops-platform": () => import("./content/internal-ops-platform"),
  "b2b-ecommerce-redesign": () => import("./content/b2b-ecommerce-redesign"),
  "procurement-tool": () => import("./content/procurement-tool"),
};

export async function getProjectBlocks(
  slug: string,
): Promise<ContentBlock[] | null> {
  const loader = registry[slug];
  if (!loader) return null;
  const mod = await loader();
  return mod.blocks;
}
