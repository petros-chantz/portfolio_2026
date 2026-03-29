import { PlusIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import type { Faq } from "../approach.data";

type FaqItemProps = {
  item: Faq;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
};

export function FaqItem({ item, index, isOpen, onToggle }: FaqItemProps) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <div className="py-5">
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(index)}
        className="group flex w-full items-start justify-between gap-6 text-left"
      >
        <span className="text-lg font-medium text-(--color-text-primary)">
          {item.question}
        </span>

        <PlusIcon
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={panelId}
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
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
}
