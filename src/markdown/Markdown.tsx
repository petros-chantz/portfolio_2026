import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { H1, H2, H3, P, InlineLink } from "../ui/Typography";
import { ButtonLink } from "../ui/Button";

function stripCta(href: string) {
  return href.replace(/\?cta=1$/, "");
}

export function Markdown({ value }: { value: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeSanitize]}
      components={{
        h1: ({ children }) => <H1>{children}</H1>,
        h2: ({ children }) => <H2>{children}</H2>,
        h3: ({ children }) => <H3>{children}</H3>,
        p: ({ children }) => <P>{children}</P>,

        // Links: internal links styled like your system.
        // Convention: add ?cta=1 to render as a "button link".
        a: ({ children, href }) => {
          const safeHref = href ?? "#";
          const isExternal =
            safeHref.startsWith("http://") || safeHref.startsWith("https://");

          // CTA convention stays the same if you want it
          const isCta = safeHref.includes("cta=1");
          if (isCta)
            return (
              <ButtonLink href={stripCta(safeHref)}>{children}</ButtonLink>
            );

          if (isExternal) {
            return (
              <a
                href={safeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:opacity-80"
              >
                {children}
              </a>
            );
          }

          return <InlineLink href={safeHref}>{children}</InlineLink>;
        },

        // Blockquote as a callout card
        blockquote: ({ children }) => (
          <div className="my-6 rounded-lg border bg-neutral-50 p-4">
            <div className="text-sm leading-relaxed">{children}</div>
          </div>
        ),

        // Code styling (basic)
        code: ({ children }) => (
          <code className="rounded bg-neutral-100 px-1 py-0.5 text-[0.95em]">
            {children}
          </code>
        ),
        pre: ({ children }) => (
          <pre className="my-6 overflow-x-auto rounded-lg border bg-neutral-50 p-4 text-sm">
            {children}
          </pre>
        ),
      }}
    >
      {value}
    </ReactMarkdown>
  );
}
