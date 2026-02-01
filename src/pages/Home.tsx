export function Home() {
  return (
    <main className="space-y-10 pt-10">
      {/* Identity / hero */}
      <header className="space-y-1">
        <h1 className="text-3xl font-medium tracking-wide">
          Petros Chantzopoulos
        </h1>

        <p className="font-sans text-lg italic tracking-wide text-(--color-text-secondary)">
          - Strategic Digital Product Designer
        </p>
      </header>

      {/* About */}
      <section className="space-y-4 text-lg leading-relaxed tracking-wide">
        <p>
          I design digital products by balancing clarity, systems thinking, and
          craft, focusing on user needs, business goals, and long term
          sustainability across interfaces, flows, and product ecosystems
          worldwide today professionally.
        </p>

        <p>
          My approach blends research, prototyping, and collaboration,
          translating complex problems into simple experiences while aligning
          stakeholders, validating assumptions, and iterating thoughtfully
          through constraints, ambiguity, and evolving requirements consistently
          and responsibly.
        </p>

        <p>
          I am interested in work that values rigor, ethics, and impact,
          preferring durable solutions over trends, and environments where teams
          question assumptions, learn continuously, and care about outcomes
          deeply together.
        </p>

        <p>
          Currently, I hold the position of{" "}
          <span className="font-semibold">Sr Product Designer @ APS Group</span>
          . I lead strategic initiatives for the creation of marketing
          technologies digital product propositions. Among my resposibiltities I
          oversee design operations, conduct design research, mentor other
          designs and run a design internship programme.
        </p>

        <p className="pt-6 text-(--color-text-secondary)">
          **Due to privacy and NDA restrictions, I do not showcase my
          professional portfolio in the public domain. Feel free to request it
          for private viewing.
        </p>
      </section>
    </main>
  );
}
