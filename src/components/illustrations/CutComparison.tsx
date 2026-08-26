"use client";

import { useLanguage } from "@/lib/i18n";

export default function CutComparison() {
  const { lang } = useLanguage();
  const labels =
    lang === "de"
      ? {
          thermal: "Thermisches Schneiden",
          waterjet: "Wasserstrahlschneiden",
          haz: "Wärmeeinflusszone & Verzug",
          clean: "Kalte, saubere Kante",
        }
      : {
          thermal: "Thermal Cutting",
          waterjet: "Waterjet Cutting",
          haz: "Heat-affected zone & warping",
          clean: "Cold, clean edge",
        };

  return (
    <svg viewBox="0 0 640 260" fill="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="metalFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f2f4f7" />
          <stop offset="100%" stopColor="#dde1e8" />
        </linearGradient>
        <linearGradient id="metalTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fcfdfe" />
          <stop offset="100%" stopColor="#e7eaef" />
        </linearGradient>
        <radialGradient id="scorchBloom" cx="100%" cy="50%" r="75%">
          <stop offset="0%" stopColor="#7c2d12" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#c2410c" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cleanEdge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.5" />
        </linearGradient>
        <filter id="cardShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Thermal cutting sample */}
      <g filter="url(#cardShadow)">
        <path d="M24 40 L266 40 L266 44 L24 44 Z" fill="url(#metalTop)" />
        <rect x="24" y="44" width="242" height="106" fill="url(#metalFace)" />
        <rect x="24" y="44" width="242" height="106" fill="url(#scorchBloom)" />

        {/* Jagged burnt kerf edge */}
        <path
          d="M266 44
             C 260 52, 272 60, 262 68
             C 254 76, 274 86, 258 96
             C 248 104, 270 112, 260 122
             C 252 130, 272 138, 262 150"
          stroke="#7c2d12"
          strokeWidth="2.5"
          fill="none"
          opacity="0.85"
        />
        {/* Scorch speckles */}
        <g fill="#9a3412">
          <circle cx="248" cy="58" r="1.4" opacity="0.6" />
          <circle cx="252" cy="82" r="1.8" opacity="0.5" />
          <circle cx="244" cy="104" r="1.3" opacity="0.55" />
          <circle cx="250" cy="130" r="1.6" opacity="0.5" />
        </g>
      </g>

      <g>
        <rect x="24" y="168" width="14" height="14" rx="3" fill="#fee2e2" />
        <path d="M28 172 L34 178 M34 172 L28 178" stroke="#b91c1c" strokeWidth="1.6" strokeLinecap="round" />
        <text x="44" y="179" fill="var(--foreground)" fontSize="14" fontWeight="600">
          {labels.thermal}
        </text>
        <text x="24" y="200" fill="var(--muted)" fontSize="11.5">
          {labels.haz}
        </text>
      </g>

      {/* Waterjet cutting sample */}
      <g filter="url(#cardShadow)">
        <path d="M356 40 L598 40 L598 44 L356 44 Z" fill="url(#metalTop)" />
        <rect x="356" y="44" width="242" height="106" fill="url(#metalFace)" />
        <rect x="592" y="44" width="6" height="106" fill="url(#cleanEdge)" />
        <rect x="595" y="44" width="2.5" height="106" fill="var(--accent)" />

        {/* Gloss highlight on the clean edge */}
        <rect x="597.5" y="50" width="1" height="30" fill="#ffffff" opacity="0.7" />

        {/* Fine spray droplets trailing off the clean cut */}
        <g fill="var(--accent)">
          <circle cx="610" cy="58" r="2" opacity="0.6" />
          <circle cx="618" cy="76" r="1.6" opacity="0.5" />
          <circle cx="608" cy="98" r="1.8" opacity="0.55" />
          <circle cx="616" cy="120" r="1.4" opacity="0.45" />
        </g>
      </g>

      <g>
        <rect x="356" y="168" width="14" height="14" rx="3" fill="#cffafe" />
        <path d="M359.5 175 L363 178.5 L369 171" stroke="var(--accent-dim)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="376" y="179" fill="var(--foreground)" fontSize="14" fontWeight="600">
          {labels.waterjet}
        </text>
        <text x="356" y="200" fill="var(--muted)" fontSize="11.5">
          {labels.clean}
        </text>
      </g>
    </svg>
  );
}
