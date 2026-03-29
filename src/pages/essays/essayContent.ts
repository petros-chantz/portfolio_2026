import type { ContentBlock } from "./blocks";
import { blocks as operationalTrustBlocks } from "./content/designing-for-operational-trust";
import { blocks as briefBlocks } from "./content/what-a-good-brief-actually-does";
import { blocks as innovationBlocks } from "./content/against-surface-level-innovation";

const registry: Record<string, ContentBlock[]> = {
  "designing-for-operational-trust": operationalTrustBlocks,
  "what-a-good-brief-actually-does": briefBlocks,
  "against-surface-level-innovation": innovationBlocks,
};

export async function getEssayBlocks(
  slug: string,
): Promise<ContentBlock[] | null> {
  return registry[slug] ?? null;
}
