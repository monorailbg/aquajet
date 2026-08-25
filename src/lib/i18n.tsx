"use client";

import {
  createContext,
  useContext,
  useState,
  useMemo,
  type ReactNode,
} from "react";

export type Lang = "de" | "en";

interface Dictionary {
  nav: {
    services: string;
    materials: string;
    machines: string;
    team: string;
    request: string;
  };
  hero: {
    title: string;
    subtitle: string;
    body: string;
    cta: string;
  };
  finder: {
    eyebrow: string;
    title: string;
    body: string;
    quality: string;
    maxThickness: string;
    materialsList: { name: string; thickness: string; quality: string }[];
    disclaimer: string;
  };
  advantages: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  machinePark: {
    eyebrow: string;
    title: string;
    specs: { label: string; value: string }[];
    disclaimer: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    dropzone: string;
    dropzoneHint: string;
    fileSelected: string;
    name: string;
    email: string;
    material: string;
    materialPlaceholder: string;
    quantity: string;
    deliveryDate: string;
    message: string;
    submit: string;
    success: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    body: string;
    members: { name: string; role: string; bio: string }[];
  };
  footer: {
    company: string;
    legalLinks: { imprint: string; privacy: string };
    certifications: string;
    contact: string;
    rights: string;
  };
}

const dictionaries: Record<Lang, Dictionary> = {
  de: {
    nav: {
      services: "Leistungen",
      materials: "Materialien",
      machines: "Maschinenpark",
      team: "Team",
      request: "Express-Anfrage",
    },
    hero: {
      title: "Präzision in jedem Schnitt.",
      subtitle: "Wasserstrahlschneiden auf Höchstniveau.",
      body: "AQUAJET Dr. Höhne GmbH fertigt Präzisionsbauteile aus Metall und Spezialwerkstoffen — kalt, sauber und auf den Mikrometer genau.",
      cta: "DXF/DWG hochladen & Angebot anfragen",
    },
    finder: {
      eyebrow: "Material- & Dicken-Finder",
      title: "Ihr Werkstoff. Unsere Präzision.",
      body: "Wählen Sie eine Materialgruppe und sehen Sie maximale Schnittstärke und erreichbare Schnittqualität.",
      quality: "Schnittqualität",
      maxThickness: "max. Schnittstärke",
      materialsList: [
        {
          name: "Edelstahl",
          thickness: "bis 200 mm",
          quality: "Q3–Q5 nach DIN 2310",
        },
        {
          name: "Aluminium",
          thickness: "bis 250 mm",
          quality: "Q3–Q5 nach DIN 2310",
        },
        {
          name: "Buntmetalle",
          thickness: "bis 150 mm",
          quality: "Q3–Q4 nach DIN 2310",
        },
        {
          name: "Kunststoffe",
          thickness: "bis 180 mm",
          quality: "Q4–Q5 nach DIN 2310",
        },
        {
          name: "Stein & Glas",
          thickness: "bis 100 mm",
          quality: "Q3–Q4 nach DIN 2310",
        },
      ],
      disclaimer:
        "Richtwerte je nach Bauteilgeometrie und Anforderung — exakte Werte erhalten Sie mit Ihrer Anfrage.",
    },
    advantages: {
      eyebrow: "Vorteile des Wasserstrahlschneidens",
      title: "Kalt geschnitten. Präzise gefertigt.",
      items: [
        {
          title: "Keine Wärmeeinflusszone",
          body: "Kein thermischer Verzug, keine Gefügeveränderung — auch bei sensiblen Werkstoffen.",
        },
        {
          title: "Kühle Schnittkante",
          body: "Der Werkstoff bleibt kalt, Materialeigenschaften bleiben vollständig erhalten.",
        },
        {
          title: "Bis 200 mm+ Materialstärke",
          body: "Vom Feinblech bis zum massiven Block — eine Technologie für alle Dicken.",
        },
        {
          title: "Universeller Werkstoffeinsatz",
          body: "Metall, Verbundwerkstoffe, Stein, Glas und Kunststoffe aus einem Prozess.",
        },
      ],
    },
    machinePark: {
      eyebrow: "Maschinenpark",
      title: "Ausgestattet für höchste Ansprüche",
      specs: [
        { label: "Schnittbereich", value: "bis 4.000 × 2.000 mm" },
        { label: "Pumpendruck", value: "bis 6.200 bar" },
        { label: "Positioniergenauigkeit", value: "±0,02 mm" },
        { label: "Schneidachsen", value: "3- und 5-Achs-Technik" },
      ],
      disclaimer:
        "Beispielhafte Kennwerte unseres Maschinenparks — konkrete technische Daten stellen wir auf Anfrage zur Verfügung.",
    },
    process: {
      eyebrow: "So einfach geht's",
      title: "Vom Datensatz zum Bauteil",
      steps: [
        {
          title: "Datei hochladen",
          body: "DXF, DWG oder STEP hochladen — inklusive Material, Menge und Wunschtermin.",
        },
        {
          title: "Angebot erhalten",
          body: "Unser Team kalkuliert Ihre Anfrage und meldet sich in der Regel binnen 24 Stunden.",
        },
        {
          title: "Präzisionslieferung",
          body: "Fertigung nach Freigabe und termingerechte Lieferung Ihrer Bauteile.",
        },
      ],
    },
    contact: {
      eyebrow: "Express-Anfrage",
      title: "Jetzt Angebot anfragen",
      body: "Laden Sie Ihre CAD-Daten hoch und erhalten Sie schnellstmöglich ein unverbindliches Angebot.",
      dropzone: "CAD-Datei hierher ziehen oder klicken zum Auswählen",
      dropzoneHint: ".dxf, .dwg, .step",
      fileSelected: "Ausgewählte Datei",
      name: "Name",
      email: "E-Mail",
      material: "Material",
      materialPlaceholder: "Material auswählen",
      quantity: "Stückzahl",
      deliveryDate: "Wunschtermin",
      message: "Nachricht",
      submit: "Anfrage senden",
      success:
        "Vielen Dank für Ihre Anfrage — wir melden uns innerhalb eines Werktages bei Ihnen.",
    },
    faq: {
      eyebrow: "Häufige Fragen",
      title: "Was Kunden uns am häufigsten fragen",
      items: [
        {
          question:
            "Können Sie mein Material und meine Wunschdicke schneiden?",
          answer:
            "In den meisten Fällen ja — Wasserstrahlschneiden verarbeitet nahezu jedes Material von wenigen Millimetern bis über 200 mm Stärke. Nutzen Sie den Material-Finder für eine erste Einschätzung und schicken Sie uns Ihre genauen Anforderungen für ein verbindliches Angebot.",
        },
        {
          question: "Wie sende ich meine DXF-/DWG-Datei für ein Angebot?",
          answer:
            "Laden Sie Ihre Datei einfach im Anfrageformular hoch (DXF, DWG oder STEP) und ergänzen Sie Material, Stückzahl und Wunschtermin. Sie erhalten Ihr Angebot in der Regel innerhalb eines Werktages.",
        },
        {
          question: "Welche Präzision und Toleranzen erreichen Sie?",
          answer:
            "Je nach Material und Bauteilgeometrie erreichen wir Positioniergenauigkeiten im Bereich weniger Hundertstel Millimeter. Die exakt erreichbare Toleranz für Ihr Bauteil besprechen wir gerne im Rahmen Ihrer Anfrage.",
        },
        {
          question: "Wie schnell können Sie liefern?",
          answer:
            "Die Lieferzeit hängt von Material, Menge und Komplexität ab. Nach Angebotsfreigabe nennen wir Ihnen einen verbindlichen Liefertermin — Express-Anfragen sind auf Wunsch möglich.",
        },
      ],
    },
    team: {
      eyebrow: "Unser Team",
      title: "Die Menschen hinter jedem Schnitt",
      body: "Erfahrene Ingenieure, Programmierer und Fertigungsspezialisten sorgen dafür, dass jedes Bauteil unsere Präzisionsansprüche erfüllt.",
      members: [
        {
          name: "Dr. Höhne",
          role: "Gründer & Geschäftsführer",
          bio: "Verantwortet Strategie und technische Ausrichtung von AQUAJET und steht Kunden bei komplexen Anfragen persönlich zur Seite.",
        },
        {
          name: "[Name einfügen]",
          role: "Leitung Fertigung",
          bio: "Verantwortet Produktionsplanung, Maschinenbelegung und die Einhaltung unserer Qualitätsstandards in der Fertigung.",
        },
        {
          name: "[Name einfügen]",
          role: "Qualitätssicherung",
          bio: "Prüft Bauteile gegen Zeichnung und Toleranzvorgabe und begleitet unsere Zertifizierungsprozesse.",
        },
        {
          name: "[Name einfügen]",
          role: "Anwendungstechnik & CAD",
          bio: "Bereitet Kundendaten für die Fertigung auf und berät zu Schnittstrategie, Materialwahl und Bauteilgeometrie.",
        },
        {
          name: "[Name einfügen]",
          role: "Vertrieb & Kundenservice",
          bio: "Erster Ansprechpartner für Angebote, Terminfragen und den reibungslosen Ablauf Ihrer Aufträge.",
        },
        {
          name: "[Name einfügen]",
          role: "Logistik & Versand",
          bio: "Koordiniert Verpackung, Versand und termingerechte Zustellung Ihrer Präzisionsbauteile.",
        },
      ],
    },
    footer: {
      company: "AQUAJET Dr. Höhne GmbH",
      legalLinks: {
        imprint: "Impressum",
        privacy: "Datenschutz",
      },
      certifications: "Zertifizierungen: [hier ergänzen, z. B. ISO 9001]",
      contact: "Kontakt",
      rights: "Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      services: "Services",
      materials: "Materials",
      machines: "Machine Park",
      team: "Team",
      request: "Express Request",
    },
    hero: {
      title: "Precision in every cut.",
      subtitle: "Waterjet cutting at the highest level.",
      body: "AQUAJET Dr. Höhne GmbH manufactures precision components from metal and specialty materials — cold, clean, and accurate to the micron.",
      cta: "Upload DXF/DWG & Request a Quote",
    },
    finder: {
      eyebrow: "Material & Thickness Finder",
      title: "Your material. Our precision.",
      body: "Choose a material group to see maximum cutting thickness and achievable cut quality.",
      quality: "Cut quality",
      maxThickness: "max. thickness",
      materialsList: [
        {
          name: "Stainless Steel",
          thickness: "up to 200 mm",
          quality: "Q3–Q5 per DIN 2310",
        },
        {
          name: "Aluminum",
          thickness: "up to 250 mm",
          quality: "Q3–Q5 per DIN 2310",
        },
        {
          name: "Non-Ferrous Metals",
          thickness: "up to 150 mm",
          quality: "Q3–Q4 per DIN 2310",
        },
        {
          name: "Plastics",
          thickness: "up to 180 mm",
          quality: "Q4–Q5 per DIN 2310",
        },
        {
          name: "Stone & Glass",
          thickness: "up to 100 mm",
          quality: "Q3–Q4 per DIN 2310",
        },
      ],
      disclaimer:
        "Indicative values depending on part geometry and requirements — exact figures are provided with your quote.",
    },
    advantages: {
      eyebrow: "Advantages of Waterjet Cutting",
      title: "Cut cold. Machined precisely.",
      items: [
        {
          title: "No heat-affected zone",
          body: "No thermal distortion, no structural change — even for sensitive materials.",
        },
        {
          title: "Cool cutting edge",
          body: "The material stays cold, so its properties are fully preserved.",
        },
        {
          title: "Up to 200mm+ material thickness",
          body: "From thin sheet to solid block — one technology for every thickness.",
        },
        {
          title: "Universal material range",
          body: "Metal, composites, stone, glass, and plastics from a single process.",
        },
      ],
    },
    machinePark: {
      eyebrow: "Machine Park",
      title: "Equipped for the highest demands",
      specs: [
        { label: "Cutting area", value: "up to 4,000 × 2,000 mm" },
        { label: "Pump pressure", value: "up to 6,200 bar" },
        { label: "Positioning accuracy", value: "±0.02 mm" },
        { label: "Cutting axes", value: "3- and 5-axis technology" },
      ],
      disclaimer:
        "Sample figures for our machine park — we're happy to share exact technical data on request.",
    },
    process: {
      eyebrow: "It's that simple",
      title: "From file to finished part",
      steps: [
        {
          title: "Upload your file",
          body: "Upload DXF, DWG, or STEP — including material, quantity, and desired date.",
        },
        {
          title: "Receive a quote",
          body: "Our team calculates your request and typically responds within 24 hours.",
        },
        {
          title: "Precision delivery",
          body: "Manufacturing upon approval and on-time delivery of your parts.",
        },
      ],
    },
    contact: {
      eyebrow: "Express Request",
      title: "Request a quote now",
      body: "Upload your CAD data and receive a non-binding quote as quickly as possible.",
      dropzone: "Drag CAD file here or click to select",
      dropzoneHint: ".dxf, .dwg, .step",
      fileSelected: "Selected file",
      name: "Name",
      email: "Email",
      material: "Material",
      materialPlaceholder: "Select material",
      quantity: "Quantity",
      deliveryDate: "Desired delivery date",
      message: "Message",
      submit: "Send request",
      success:
        "Thank you for your request — we'll get back to you within one business day.",
    },
    faq: {
      eyebrow: "Frequently Asked Questions",
      title: "What customers ask us most",
      items: [
        {
          question: "Can you cut my material at my required thickness?",
          answer:
            "In most cases, yes — waterjet cutting handles nearly any material from a few millimeters up to 200mm+ thickness. Use the Material Finder for a first estimate, then send us your exact requirements for a binding quote.",
        },
        {
          question: "How do I send my DXF/DWG file for a quote?",
          answer:
            "Simply upload your file (DXF, DWG, or STEP) in the request form along with material, quantity, and desired date. You'll typically receive your quote within one business day.",
        },
        {
          question: "What precision and tolerances can you achieve?",
          answer:
            "Depending on material and part geometry, we achieve positioning accuracy within a few hundredths of a millimeter. We'll discuss the exact achievable tolerance for your part as part of your request.",
        },
        {
          question: "How fast can you deliver?",
          answer:
            "Lead time depends on material, quantity, and complexity. Once your quote is approved, we confirm a binding delivery date — express requests are available on request.",
        },
      ],
    },
    team: {
      eyebrow: "Our Team",
      title: "The people behind every cut",
      body: "Experienced engineers, programmers, and manufacturing specialists make sure every part meets our precision standards.",
      members: [
        {
          name: "Dr. Höhne",
          role: "Founder & Managing Director",
          bio: "Responsible for AQUAJET's strategy and technical direction, and personally supports customers with complex requests.",
        },
        {
          name: "[Add name]",
          role: "Head of Manufacturing",
          bio: "Oversees production planning, machine scheduling, and quality standards on the shop floor.",
        },
        {
          name: "[Add name]",
          role: "Quality Assurance",
          bio: "Inspects parts against drawings and tolerances, and manages our certification processes.",
        },
        {
          name: "[Add name]",
          role: "Applications Engineering & CAD",
          bio: "Prepares customer files for production and advises on cutting strategy, material choice, and part geometry.",
        },
        {
          name: "[Add name]",
          role: "Sales & Customer Service",
          bio: "First point of contact for quotes, scheduling, and making sure your order runs smoothly.",
        },
        {
          name: "[Add name]",
          role: "Logistics & Shipping",
          bio: "Coordinates packaging, shipping, and on-time delivery of your precision parts.",
        },
      ],
    },
    footer: {
      company: "AQUAJET Dr. Höhne GmbH",
      legalLinks: {
        imprint: "Imprint",
        privacy: "Privacy Policy",
      },
      certifications: "Certifications: [add here, e.g. ISO 9001]",
      contact: "Contact",
      rights: "All rights reserved.",
    },
  },
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dictionary;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("de");
  const value = useMemo(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang],
  );
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
