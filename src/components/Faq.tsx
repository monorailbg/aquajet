"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {t.faq.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight break-words sm:text-4xl">
            {t.faq.title}
          </h2>
        </Reveal>

        <div className="mt-10 flex flex-col divide-y divide-border border-t border-border">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-medium sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-accent transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    strokeWidth={2}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-6 text-muted sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
