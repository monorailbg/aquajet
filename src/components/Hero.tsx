"use client";

import { ArrowRight, UploadCloud, FileCode2, Clock, Ruler } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

const badges = [
  { icon: FileCode2, de: "DXF, DWG & STEP", en: "DXF, DWG & STEP" },
  { icon: Clock, de: "Angebot binnen 24 Std.", en: "Quote within 24 hrs" },
  { icon: Ruler, de: "Toleranzen nach DIN 2310", en: "Tolerances per DIN 2310" },
];

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="top"
      className="bg-grid relative overflow-hidden border-b border-border"
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-28 sm:py-36">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          Wasserstrahlschneiden &middot; Waterjet Cutting
        </p>
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight break-words text-foreground sm:text-6xl">
          {t.hero.title}
          <br />
          <span className="text-steel">{t.hero.subtitle}</span>
        </h1>
        <p className="max-w-xl text-lg leading-8 text-muted">{t.hero.body}</p>
        <div>
          <a
            href="#anfrage"
            className="glow-on-hover inline-flex h-13 items-center gap-2.5 rounded-full bg-accent px-7 text-base font-semibold text-background"
          >
            <UploadCloud className="h-5 w-5" strokeWidth={2} />
            {t.hero.cta}
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
          {badges.map((badge) => (
            <div
              key={badge.de}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <badge.icon className="h-4 w-4 text-accent" strokeWidth={2} />
              {lang === "de" ? badge.de : badge.en}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
