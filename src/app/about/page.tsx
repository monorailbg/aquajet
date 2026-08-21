import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Aquajet",
  description: "Learn about Aquajet's mission and team.",
};

export default function About() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-24">
      <h1 className="text-4xl font-semibold tracking-tight">About Aquajet</h1>
      <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Aquajet was founded on a simple idea: software should get out of your
        way, not add to your workload. We build tools that fit into how
        businesses already operate, so teams can focus on the work that
        actually matters.
      </p>
      <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        We work closely with every customer to understand their goals, and we
        keep iterating long after launch. No black boxes, no surprise
        pricing, no disappearing support team.
      </p>
      <div className="mt-6 grid gap-8 sm:grid-cols-3">
        <div>
          <h2 className="text-lg font-semibold">Our mission</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Make dependable software accessible to every team, regardless of
            size.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Our approach</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Ship fast, listen closely, and keep things simple.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Our team</h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            A small group of engineers and designers who care about the
            details.
          </p>
        </div>
      </div>
    </div>
  );
}
