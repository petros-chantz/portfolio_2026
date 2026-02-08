export function Home() {
  return (
    <main className="space-y-10 pt-10">
      {/* Identity / hero */}
      <header className="space-y-1">
        <h1 className="text-3xl font-medium tracking-wide">
          Petros Chantzopoulos
        </h1>

        <p className="font-sans text-lg italic tracking-wide text-(--color-text-primary)">
          Strategic Digital Product Designer
        </p>
      </header>

      {/* About */}
      <section className="space-y-6 text-lg leading-relaxed tracking-wide">
        <div className="space-y-4">
          <p>
            I design digital products by balancing clarity, systems thinking,
            and craft, focusing on user needs, business goals, and long term
            sustainability across interfaces, flows, and product ecosystems
            worldwide today professionally.
          </p>

          <p>
            My approach blends research, prototyping, and collaboration,
            translating complex problems into simple experiences while aligning
            stakeholders, validating assumptions, and iterating thoughtfully
            through constraints, ambiguity, and evolving requirements
            consistently and responsibly.
          </p>

          <p>
            I am interested in work that values rigor, ethics, and impact,
            preferring durable solutions over trends, and environments where
            teams question assumptions, learn continuously, and care about
            outcomes deeply together.
          </p>

          <p>
            Currently, I hold the position of{" "}
            <span className="font-semibold">
              Sr Product Designer @ APS Group
            </span>
            . I lead strategic initiatives for the creation of marketing
            technologies digital product propositions. Among my resposibiltities
            I oversee design operations, conduct design research, mentor other
            designs and run a design internship programme.
          </p>

          <p className="pt-6 text-base text-(--color-text-secondary)">
            <span className="font-medium text-(--color-text-primary)">
              Note:
            </span>{" "}
            Due to privacy and NDA restrictions, I do not showcase my
            professional portfolio in the public domain. Feel free to request it
            for private viewing.
          </p>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-4 pt-4 text-sm">
          <a
            href="mailto:your@email.com"
            className="underline underline-offset-4 text-(--color-text-secondary) transition hover:text-(--color-text-primary)"
          >
            Email me
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 text-(--color-text-secondary) transition hover:text-(--color-text-primary)"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
