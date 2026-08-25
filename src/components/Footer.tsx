"use client";

import Link from "next/link";
import { Droplets, ShieldCheck, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-background-elevated/40">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-accent" strokeWidth={2} />
              <span className="font-semibold tracking-tight">
                {t.footer.company}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted">
              <ShieldCheck className="h-4 w-4 text-accent" strokeWidth={2} />
              {t.footer.certifications}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">
              {t.nav.services}
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <Link href="/#leistungen" className="hover:text-foreground">
                {t.nav.services}
              </Link>
              <Link href="/#materialien" className="hover:text-foreground">
                {t.nav.materials}
              </Link>
              <Link href="/#maschinenpark" className="hover:text-foreground">
                {t.nav.machines}
              </Link>
              <Link href="/team" className="hover:text-foreground">
                {t.nav.team}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">
              {t.footer.contact}
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <a
                href="mailto:info@aquajet-hoehne.de"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4" strokeWidth={2} />
                info@aquajet-hoehne.de
              </a>
              <a
                href="tel:+4900000000"
                className="flex items-center gap-2 hover:text-foreground"
              >
                <Phone className="h-4 w-4" strokeWidth={2} />
                +49 (0) 00 00 00 00
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">
              {t.footer.legalLinks.imprint} &amp; {t.footer.legalLinks.privacy}
            </p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <Link href="/impressum" className="hover:text-foreground">
                {t.footer.legalLinks.imprint}
              </Link>
              <Link href="/datenschutz" className="hover:text-foreground">
                {t.footer.legalLinks.privacy}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {t.footer.company} —{" "}
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
