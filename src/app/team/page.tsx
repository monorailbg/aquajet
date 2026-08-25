"use client";

import { User } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/lib/i18n";

export default function Team() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="bg-grid border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <Reveal>
              <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                {t.team.eyebrow}
              </p>
              <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                {t.team.title}
              </h1>
              <p className="mt-4 max-w-xl text-lg leading-8 text-muted">
                {t.team.body}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    <p className="text-sm leading-6 text-muted">
                      {member.bio}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
