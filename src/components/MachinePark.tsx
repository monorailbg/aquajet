"use client";

import { Gauge, Target, Move3d, Maximize } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";
import MachineIllustration from "@/components/illustrations/MachineIllustration";

const icons = [Maximize, Gauge, Target, Move3d];

export default function MachinePark() {
  const { t } = useLanguage();

  return (
    <section id="maschinenpark" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {t.machinePark.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight break-words sm:text-4xl">
            {t.machinePark.title}
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-border bg-background-elevated p-6 sm:p-8">
            <MachineIllustration />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.machinePark.specs.map((spec, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={spec.label}>
                <div className="card-hover h-full rounded-2xl border border-border bg-background-elevated p-6">
                  <Icon className="h-5 w-5 text-accent" strokeWidth={2} />
                  <p className="mt-4 text-xl font-semibold">{spec.value}</p>
                  <p className="mt-1 text-sm text-muted">{spec.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-muted/80">
          {t.machinePark.disclaimer}
        </p>
      </div>
    </section>
  );
}
