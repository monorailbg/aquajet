import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AQUAJET Dr. Höhne GmbH — Präzisions-Wasserstrahlschneiden",
    template: "%s | AQUAJET Dr. Höhne GmbH",
  },
  description:
    "AQUAJET Dr. Höhne GmbH fertigt Präzisionsbauteile aus Metall und Spezialwerkstoffen per Wasserstrahlschneiden — kalt, sauber und auf den Mikrometer genau. Jetzt DXF/DWG hochladen und Angebot anfragen.",
  keywords: [
    "Wasserstrahlschneiden",
    "Waterjet Cutting",
    "Präzisionsschneiden",
    "Metallbearbeitung",
    "CNC Wasserstrahl",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
