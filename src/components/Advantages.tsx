"use client";

import { Flame, Snowflake, Ruler, Shapes } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import CutComparison from "@/components/illustrations/CutComparison";

const icons = [Snowflake, Flame, Ruler, Shapes];

export default function Advantages() {
  const { t } = useLanguage();

  return (
    <section id="leistungen" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {t.advantages.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight break-words sm:text-4xl">
            {t.advantages.title}
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-background-elevated p-6 sm:p-8">
            <CutComparison />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.advantages.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={item.title}>
                <div className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
