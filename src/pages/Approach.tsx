import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { getPage } from "../content.pages";
import { Markdown } from "../markdown/Markdown";
import { AnimatePresence, motion } from "framer-motion";

const principles = [
  {
    title: "Products are for people",
    body: "Body copy goes here. Keep it concise and editorial—one short paragraph that explains the idea.",
  },
  {
    title: "Design beyond the screen",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
  {
    title: "Comfortable designing for the unknown",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
  {
    title: "Intentionality over urgency",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
  {
    title: "“Show me, don’t tell me”",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
  {
    title: "First observe, then propose",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
  {
    title: "The design process is inherently messy & goal driven",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
  {
    title: "Designing is not a solo project",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
  {
    title: "The tools help, but don’t dictate the process or the outcome",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
  {
    title: "Storytelling sells the promise; the product must deliver it",
    body: "Body copy goes here. This column can describe a principle, a method, or a working preference.",
  },
];

const faqs = [
  {
    question: "How do you make hard design decisions?",
    answer:
      "I usually begin by understanding the context around the work, not just the brief itself. That means looking at user needs, business goals, technical constraints, and the wider product environment before defining where design can create the most value.",
  },
  {
    question: "How do you create product visions?",
    answer:
      "Tools are important, but they should support judgment rather than replace it. A strong process is less about following software conventions and more about knowing when to explore, when to simplify, and when to align people around a shared understanding of the work.",
  },
  {
    question: "How do you lead a team of designers? ",
    answer:
      "Uncertainty is rarely something to eliminate at the start of a project. In many cases, it is a useful signal that more learning is needed. I tend to work through it by making ideas tangible early, gathering feedback, and adjusting direction as the picture becomes clearer.",
  },
  {
    question: "What is your mentoring style? ",
    answer:
      "Most design decisions are shaped through a mix of observation, discussion, and iteration. I try to avoid jumping straight into polished solutions, and instead focus on identifying what matters, what is uncertain, and what needs to be tested before moving forward with confidence.",
  },
];

function formatIndex(i: number) {
  return String(i + 1).padStart(2, "0");
}

export function Approach() {
  const page = getPage("approach");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!page) return <div>Missing page: approach.md</div>;

  return (
    <div className="space-y-6 pb-16">
      <header className="space-y-1">
        <h1 className="text-3xl font-semibold">{page.title}</h1>
      </header>

      <Markdown value={page.content} />

      <section className="space-y-6 pt-4">
        <div className="grid gap-12 md:grid-cols-2">
          {principles.map((item, i) => (
            <div key={item.title} className="space-y-2">
              <span className="mr-2 font-light text-3xl text-orange-500 tabular-nums">
                {formatIndex(i)}.
              </span>

              <div className="grid gap-4">
                <h3 className="text-xl font-medium tracking text-(--color-text-primary)">
                  {item.title}
                </h3>

                <p className="text-base leading-relaxed text-(--color-text-primary)]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 pt-12">
        <header className="space-y-1">
          <h2 className="text-3xl font-semibold text-(--color-text-primary)">
            FAQ
          </h2>
        </header>

        <div className="">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={item.question} className="py-5">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group flex w-full cursor-pointer items-start justify-between gap-6 text-left"
                >
                  <span className="text-lg font-medium text-(--color-text-primary)">
                    {item.question}
                  </span>

                  <PlusIcon
                    className={`shrink-0 h-5 w-5 text-black transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`faq-panel-${i}`}
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pt-4 pr-10">
                        <p className="text-base leading-relaxed text-(--color-text-secondary)">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
