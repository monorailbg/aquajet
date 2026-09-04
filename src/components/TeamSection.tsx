"use client";

import { User } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import Reveal from "@/components/Reveal";

export default function TeamSection() {
  const { t } = useLanguage();

  return (
    <section id="team" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-widest text-accent uppercase">
            {t.team.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight break-words sm:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-4 max-w-xl text-muted">{t.team.body}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.team.members.map((member) => (
            <Reveal key={member.role}>
              <div className="card-hover flex h-full flex-col gap-4 rounded-2xl border border-border bg-background-elevated p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <User className="h-6 w-6" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-lg font-semibold">{member.name}</p>
                  <p className="text-sm text-accent">{member.role}</p>
                </div>
                <p className="text-sm leading-6 text-muted">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
