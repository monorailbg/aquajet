import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function Datenschutz() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-semibold tracking-tight break-words">
          Datenschutzerklärung
        </h1>
        <p className="mt-4 text-sm text-muted">
          Platzhalter — diese Seite muss vor Veröffentlichung von einem
          Datenschutzbeauftragten oder Rechtsberater geprüft und
          vervollständigt werden.
        </p>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-6 text-muted">
          <section>
            <h2 className="text-base font-semibold text-foreground">
              1. Verantwortlicher
            </h2>
            <p className="mt-2">
              AQUAJET Dr. Höhne GmbH, [Anschrift einfügen], E-Mail:
              info@aquajet-hoehne.de
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">
              2. Erhebung und Verarbeitung von Daten
            </h2>
            <p className="mt-2">
              Beim Ausfüllen des Anfrageformulars sowie beim Hochladen von
              CAD-Dateien (DXF, DWG, STEP) werden die von Ihnen angegebenen
              Daten (Name, E-Mail-Adresse, Material- und Auftragsdetails)
              ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.
              [Rechtsgrundlage, Speicherdauer und Empfänger hier ergänzen.]
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-foreground">
              3. Ihre Rechte
            </h2>
            <p className="mt-2">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              sowie ein Beschwerderecht bei einer Aufsichtsbehörde.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
