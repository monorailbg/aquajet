import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Aquajet",
  description: "Get in touch with the Aquajet team.",
};

export default function Contact() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Get in touch
        </h1>
        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Have a question or want to work together? Send us a message.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
