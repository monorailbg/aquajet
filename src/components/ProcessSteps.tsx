"use client";

import { UploadCloud, FileCheck2, PackageCheck } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const icons = [UploadCloud, FileCheck2, PackageCheck];

export default function ProcessSteps() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          {t.process.eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.process.title}
        </h2>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-3">
          <div
            className="absolute top-6 right-[16.6%] left-[16.6%] hidden h-px bg-border sm:block"
            aria-hidden
          />
          {t.process.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={step.title} className="relative flex flex-col gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-background text-accent">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-muted uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
