"use client";

import { FAQ_ITEMS } from "@/lib/faqs";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "../ui/GoldButton";
import { SectionShell } from "../ui/SectionShell";

function FAQItem({
  id,
  question,
  answer,
  isOpen,
  onToggle,
}: {
  id: string;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className={`odette-faq-item rounded-2xl border bg-white px-4 py-3 sm:px-6 sm:py-4 ${isOpen ? "is-open" : ""}`}>
      <button
        id={buttonId}
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="flex min-w-0 items-start gap-4 font-display text-[15px] font-semibold leading-snug text-charcoal sm:items-center sm:text-base">
          <span className="pt-0.5 text-[11px] font-semibold tracking-[0.12em] text-[#777] sm:pt-0">
            {String(Number(id.slice(-1)) + 1).padStart(2, "0")}
          </span>
          <span>{question}</span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f4f4f4]"
        >
          <Plus className="h-4 w-4 text-black" strokeWidth={1.8} aria-hidden />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="ml-8 max-w-3xl border-t border-[#ededed] pt-4 text-sm leading-relaxed text-[#4f4f4f] sm:ml-10 sm:text-[15px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <SectionShell
      id="faq"
      gradientTone={4}
      ariaLabel="Frequently asked questions about the Odette franchise"
      className="odette-faq-section"
    >
      <div className="section-fit mx-auto flex w-full max-w-3xl flex-col items-center justify-center">
        <SectionHeading
          compact
          centered
          pill="FAQs"
          title="Your Questions, Answered"
          subtitle="Clear answers about the Odette franchise opportunity."
        />

        <div className="flex w-full flex-col gap-3 sm:gap-3.5">
          {FAQ_ITEMS.map((faq, index) => {
            const id = `faq-${index}`;
            return (
              <FAQItem
                key={faq.question}
                id={id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === id}
                onToggle={() => setOpenId(openId === id ? null : id)}
              />
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
