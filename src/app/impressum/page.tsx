import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | AQUAJET Dr. Höhne GmbH",
};

export default function Impressum() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>
        <p className="mt-4 text-sm text-muted">
          Platzhalter gemäß § 5 TMG — bitte durch die tatsächlichen
          Unternehmensangaben ersetzen.
        </p>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-6 text-muted">
          <div>
            <p className="font-semibold text-foreground">
              AQUAJET Dr. Höhne GmbH
            </p>
            <p>[Straße und Hausnummer]</p>
            <p>[PLZ und Ort]</p>
            <p>Deutschland</p>
          </div>

          <div>
            <p className="font-semibold text-foreground">Vertreten durch</p>
            <p>Dr. [Vorname] Höhne, Geschäftsführer</p>
          </div>

          <div>
            <p className="font-semibold text-foreground">Kontakt</p>
            <p>Telefon: [Telefonnummer]</p>
            <p>E-Mail: info@aquajet-hoehne.de</p>
          </div>

          <div>
            <p className="font-semibold text-foreground">Registereintrag</p>
            <p>Eintragung im Handelsregister.</p>
            <p>Registergericht: [Registergericht]</p>
            <p>Registernummer: [HRB-Nummer]</p>
          </div>

          <div>
            <p className="font-semibold text-foreground">Umsatzsteuer-ID</p>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
              [USt-IdNr.]
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
