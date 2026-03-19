import { Seo } from "../../seo/Seo";
import { HOME } from "./Home.data";

const email = `${HOME.contact.emailUser}@${HOME.contact.emailDomain}`;

export function HomePage() {
  return (
    <main className="space-y-10 pt-10">
      <Seo
        title={HOME.name} // short tab title, as you prefer
        description={HOME.description}
        canonical={HOME.canonical}
        ogImage={HOME.ogImage}
      />

      {/* Identity / hero */}
      <header className="space-y-2">
        <h1 className="text-3xl font-medium tracking-wide">{HOME.name}</h1>

        <p className="font-sans text-lg italic tracking-wide text-[var(--color-text-primary)]">
          {HOME.role}
        </p>
      </header>

      {/* About */}
      <section
        className="space-y-6 text-base leading-relaxed tracking-wide"
        aria-label="About"
      >
        <div className="space-y-4">
          {HOME.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <p className="pt-6 text-sm text-[var(--color-text-secondary)]">
            <span className="font-medium text-[var(--color-text-primary)]">
              Note:
            </span>{" "}
            {HOME.note}
          </p>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-4 pt-4 text-sm">
          <a
            href={`mailto:${email}`}
            className="underline underline-offset-4 text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-primary)]"
          >
            Email me
          </a>

          <a
            href={HOME.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-[var(--color-text-secondary)] transition hover:text-[var(--color-text-primary)]"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
