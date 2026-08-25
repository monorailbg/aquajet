"use client";

import { useState } from "react";
import { Layers } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function MaterialFinder() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const material = t.finder.materialsList[active];

  return (
    <section id="materialien" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {t.finder.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight break-words sm:text-4xl">
            {t.finder.title}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{t.finder.body}</p>
        </Reveal>

        <div className="mt-10 flex flex-wrap gap-3">
          {t.finder.materialsList.map((m, i) => (
            <button
              key={m.name}
              type="button"
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                i === active
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-steel hover:text-foreground"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        <div className="card-hover mt-8 flex flex-col gap-6 rounded-2xl border border-border bg-background-elevated p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Layers className="h-6 w-6" strokeWidth={2} />
            </div>
            <div>
              <p className="text-lg font-semibold">{material.name}</p>
              <p className="text-sm text-muted">{material.quality}</p>
            </div>
          </div>
          <div className="flex gap-10">
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">
                {t.finder.maxThickness}
              </p>
              <p className="mt-1 text-2xl font-semibold text-accent">
                {material.thickness}
              </p>
            </div>
            <div>
              <p className="text-xs tracking-wide text-muted uppercase">
                {t.finder.quality}
              </p>
              <p className="mt-1 text-2xl font-semibold">{material.quality.split(" ")[0]}</p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-muted/80">{t.finder.disclaimer}</p>
      </div>
    </section>
  );
}
