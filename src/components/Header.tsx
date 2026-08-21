"use client";

import { Droplets } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-accent" strokeWidth={2} />
          <span className="text-base font-semibold tracking-tight">
            AQUAJET
          </span>
        </a>

        <div className="hidden gap-8 text-sm font-medium text-muted md:flex">
          <a href="#leistungen" className="transition-colors hover:text-foreground">
            {t.nav.services}
          </a>
          <a href="#materialien" className="transition-colors hover:text-foreground">
            {t.nav.materials}
          </a>
          <a href="#maschinenpark" className="transition-colors hover:text-foreground">
            {t.nav.machines}
          </a>
          <a
            href="#anfrage"
            className="transition-colors hover:text-foreground"
          >
            {t.nav.request}
          </a>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-border p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => setLang("de")}
            aria-pressed={lang === "de"}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              lang === "de"
                ? "bg-accent text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            DE
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              lang === "en"
                ? "bg-accent text-background"
                : "text-muted hover:text-foreground"
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
