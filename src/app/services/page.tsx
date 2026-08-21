import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Aquajet",
  description: "Explore what Aquajet can do for your business.",
};

const services = [
  {
    title: "Consulting",
    description:
      "We assess your current workflow and identify where software can save you the most time.",
  },
  {
    title: "Custom development",
    description:
      "Tailored applications built to fit your exact requirements, from prototype to production.",
  },
  {
    title: "Ongoing support",
    description:
      "Continuous maintenance, monitoring, and improvements after launch — we don't disappear.",
  },
  {
    title: "Integrations",
    description:
      "Connect your existing tools so data flows smoothly across your whole stack.",
  },
];

export default function Services() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 px-6 py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Whatever stage your business is at, we have a way to help.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-black/[.08] p-6 dark:border-white/[.145]"
          >
            <h2 className="text-lg font-semibold">{service.title}</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
