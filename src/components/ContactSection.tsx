"use client";

import { useState, useRef, type DragEvent } from "react";
import { UploadCloud, FileCode2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function ContactSection() {
  const { t } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files?.[0];
    if (dropped) setFile(dropped);
  }

  return (
    <section id="anfrage" className="border-b border-border">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <p className="text-sm font-semibold tracking-widest text-accent uppercase">
          {t.contact.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.contact.title}
        </h2>
        <p className="mt-4 max-w-xl text-muted">{t.contact.body}</p>

        {submitted ? (
          <div className="mt-10 flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/5 p-6">
            <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" strokeWidth={2} />
            <p className="text-foreground">{t.contact.success}</p>
          </div>
        ) : (
          <form
            className="mt-10 flex flex-col gap-6"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              className={`flex cursor-pointer flex-col items-center gap-3 rounded-2xl border-2 border-dashed p-10 text-center transition-colors ${
                isDragging
                  ? "border-accent bg-accent/5"
                  : "border-border hover:border-steel"
              }`}
            >
              <input
                ref={inputRef}
                type="file"
                accept=".dxf,.dwg,.step"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              />
              {file ? (
                <>
                  <FileCode2 className="h-8 w-8 text-accent" strokeWidth={1.75} />
                  <p className="text-sm font-medium">{t.contact.fileSelected}</p>
                  <p className="text-sm text-muted">{file.name}</p>
                </>
              ) : (
                <>
                  <UploadCloud className="h-8 w-8 text-muted" strokeWidth={1.75} />
                  <p className="text-sm font-medium">{t.contact.dropzone}</p>
                  <p className="text-xs text-muted">{t.contact.dropzoneHint}</p>
                </>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <Field label={t.contact.name} id="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-lg border border-border bg-background-elevated px-4 py-2.5 outline-none focus:border-accent"
                />
              </Field>
              <Field label={t.contact.email} id="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-lg border border-border bg-background-elevated px-4 py-2.5 outline-none focus:border-accent"
                />
              </Field>
              <Field label={t.contact.material} id="material">
                <select
                  id="material"
                  name="material"
                  defaultValue=""
                  required
                  className="rounded-lg border border-border bg-background-elevated px-4 py-2.5 outline-none focus:border-accent"
                >
                  <option value="" disabled>
                    {t.contact.materialPlaceholder}
                  </option>
                  {t.finder.materialsList.map((m) => (
                    <option key={m.name} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label={t.contact.quantity} id="quantity">
                <input
                  id="quantity"
                  name="quantity"
                  type="number"
                  min={1}
                  required
                  className="rounded-lg border border-border bg-background-elevated px-4 py-2.5 outline-none focus:border-accent"
                />
              </Field>
              <Field label={t.contact.deliveryDate} id="deliveryDate">
                <input
                  id="deliveryDate"
                  name="deliveryDate"
                  type="date"
                  className="rounded-lg border border-border bg-background-elevated px-4 py-2.5 outline-none focus:border-accent"
                />
              </Field>
            </div>

            <Field label={t.contact.message} id="message">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="rounded-lg border border-border bg-background-elevated px-4 py-2.5 outline-none focus:border-accent"
              />
            </Field>

            <button
              type="submit"
              className="glow-on-hover flex h-13 w-full items-center justify-center rounded-full bg-accent text-base font-semibold text-background sm:w-fit sm:px-8"
            >
              {t.contact.submit}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
