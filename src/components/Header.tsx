"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplets, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";
  const anchor = (hash: string) => (onHome ? hash : `/${hash}`);

  const navItems = [
    { href: anchor("#leistungen"), label: t.nav.services },
    { href: anchor("#materialien"), label: t.nav.materials },
    { href: anchor("#maschinenpark"), label: t.nav.machines },
    { href: anchor("#team"), label: t.nav.team },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Droplets className="h-5 w-5 text-accent" strokeWidth={2} />
          <span className="text-base font-semibold tracking-tight">
            AQUAJET
          </span>
        </Link>

        <div className="hidden gap-8 text-sm font-medium text-muted md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={anchor("#anfrage")}
            className="hidden rounded-full bg-accent px-4 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent-dim sm:inline-flex"
          >
            {t.nav.request}
          </Link>

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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={2} />
            ) : (
              <Menu className="h-4 w-4" strokeWidth={2} />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-muted">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={anchor("#anfrage")}
              onClick={() => setOpen(false)}
              className="inline-flex w-fit rounded-full bg-accent px-4 py-2 text-xs font-semibold text-background"
            >
              {t.nav.request}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
