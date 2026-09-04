"use client";

import { Wrench, ShieldCheck, Headset, GraduationCap, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

const icons = [Wrench, ShieldCheck, Headset, GraduationCap];

export default function CareersSection() {
  const { t } = useLanguage();

  return (
    <section id="karriere" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {t.careers.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight break-words sm:text-4xl">
            {t.careers.title}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{t.careers.body}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.careers.areas.map((area, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={area.title}>
                <div className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h3 className="text-base font-semibold">{area.title}</h3>
                  <p className="text-sm leading-6 text-muted">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="flex flex-col items-start gap-3">
            <a
              href="mailto:karriere@aquajet-hoehne.de"
              className="glow-on-hover inline-flex h-13 items-center gap-2.5 rounded-full bg-accent px-7 text-base font-semibold text-background"
            >
              <Mail className="h-5 w-5" strokeWidth={2} />
              {t.careers.cta}
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
            <p className="text-xs text-muted/80">{t.careers.ctaHint}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
