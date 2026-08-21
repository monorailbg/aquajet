import Link from "next/link";

const features = [
  {
    title: "Fast to launch",
    description:
      "Get up and running in days, not months, with a setup tailored to your team's workflow.",
  },
  {
    title: "Built to scale",
    description:
      "Our systems grow with you, from your first customer to your millionth.",
  },
  {
    title: "Real support",
    description:
      "Talk to a real person whenever you need help — no ticket queues, no bots.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Practical software for teams that ship.
        </h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Aquajet helps businesses move faster with tools built around how
          your team actually works — no bloat, no busywork.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="flex h-12 items-center justify-center rounded-full border border-black/[.08] px-6 text-base font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            See what we do
          </Link>
        </div>
      </section>

      <section className="border-t border-black/[.08] dark:border-white/[.145]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/[.08] dark:border-white/[.145]">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">
              Ready to get started?
            </h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Reach out and we&apos;ll get back to you within one business day.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
