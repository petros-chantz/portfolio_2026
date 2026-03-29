import { Seo } from "../../seo/Seo";
import { HOME } from "./Home.data";
import {
  bodyMutedClass,
  bodyTextClass,
  pageTitleClass,
} from "../../ui/typography";

const email = `${HOME.contact.emailUser}@${HOME.contact.emailDomain}`;

export function HomePage() {
  return (
    <main className="space-y-6 md:space-y-10">
      <Seo
        title={HOME.name} // short tab title, as you prefer
        description={HOME.description}
        canonical={HOME.canonical}
        ogImage={HOME.ogImage}
      />

      <header className="max-w-2xl space-y-2.5 md:space-y-3">
        <h1 className={pageTitleClass}>{HOME.name}</h1>

        <p className="text-[0.98rem] md:text-[1.05rem] italic leading-[1.33] md:leading-[1.35] tracking-[-0.015em] text-(--color-text-secondary)">
          {HOME.role}
        </p>
      </header>

      <section className="max-w-3xl space-y-4 md:space-y-5" aria-label="About">
        {HOME.about.map((paragraph, i) => (
          <p key={i} className={bodyTextClass}>
            {paragraph.map((part, j) =>
              "bold" in part && part.bold ? (
                <strong
                  key={j}
                  className="font-semibold text-(--color-text-primary)"
                >
                  {part.text}
                </strong>
              ) : (
                <span key={j}>{part.text}</span>
              ),
            )}
          </p>
        ))}

        <p className={`pt-1 text-sm ${bodyMutedClass}`}>
          <span className="font-medium text-(--color-text-primary)">Note:</span>{" "}
          {HOME.note}
        </p>

        <div className="flex items-center gap-4 pt-1 text-[0.84rem] md:text-sm">
          <a
            href={`mailto:${email}`}
            aria-label={`Email ${HOME.name}`}
            className="underline underline-offset-4 decoration-black/20 text-(--color-text-secondary) transition hover:text-(--color-text-primary) hover:decoration-black/50"
          >
            Email me
          </a>

          <a
            href={HOME.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${HOME.name} on LinkedIn`}
            className="underline underline-offset-4 decoration-black/20 text-(--color-text-secondary) transition hover:text-(--color-text-primary) hover:decoration-black/50"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
