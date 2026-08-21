"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="text-lg text-zinc-600 dark:text-zinc-400">
        Thanks for reaching out — we&apos;ll get back to you within one
        business day.
      </p>
    );
  }

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-black/[.08] bg-transparent px-4 py-2.5 outline-none focus:border-zinc-400 dark:border-white/[.145]"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-black/[.08] bg-transparent px-4 py-2.5 outline-none focus:border-zinc-400 dark:border-white/[.145]"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-lg border border-black/[.08] bg-transparent px-4 py-2.5 outline-none focus:border-zinc-400 dark:border-white/[.145]"
        />
      </div>
      <button
        type="submit"
        className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-base font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Send message
      </button>
    </form>
  );
}
