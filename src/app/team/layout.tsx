import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Lernen Sie das Team hinter AQUAJET Dr. Höhne GmbH kennen — Fertigung, Qualitätssicherung, Anwendungstechnik und Kundenservice.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
