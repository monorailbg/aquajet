"use client";

import { useLanguage } from "@/lib/i18n";

export default function CutComparison() {
  const { lang } = useLanguage();
  const labels =
    lang === "de"
      ? { thermal: "Thermisches Schneiden", waterjet: "Wasserstrahlschneiden", haz: "Wärmeeinflusszone" }
      : { thermal: "Thermal Cutting", waterjet: "Waterjet Cutting", haz: "Heat-affected zone" };

  return (
    <svg viewBox="0 0 640 220" fill="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="hazGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id="metalFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef0f4" />
          <stop offset="100%" stopColor="#dbdfe6" />
        </linearGradient>
      </defs>

      {/* Thermal cutting sample */}
      <g>
        <rect x="24" y="40" width="260" height="110" rx="4" fill="url(#metalFace)" stroke="var(--border)" />
        <rect x="256" y="40" width="28" height="110" fill="url(#hazGradient)" />
        <path
          d="M284 40 C 278 62, 290 78, 282 96 C 276 112, 290 128, 282 150"
          stroke="#dc2626"
          strokeWidth="2"
          fill="none"
          opacity="0.7"
        />
        <text x="24" y="176" fill="var(--foreground)" fontSize="14" fontWeight="600">
          {labels.thermal}
        </text>
        <text x="24" y="196" fill="var(--muted)" fontSize="11">
          {labels.haz}
        </text>
      </g>

      {/* Waterjet cutting sample */}
      <g>
        <rect x="356" y="40" width="260" height="110" rx="4" fill="url(#metalFace)" stroke="var(--border)" />
        <rect x="588" y="40" width="3" height="110" fill="var(--accent)" />
        <text x="356" y="176" fill="var(--foreground)" fontSize="14" fontWeight="600">
          {labels.waterjet}
        </text>
        <g fill="var(--accent)" opacity="0.7">
          <circle cx="600" cy="60" r="2" />
          <circle cx="608" cy="76" r="1.6" />
          <circle cx="598" cy="96" r="1.8" />
          <circle cx="606" cy="116" r="1.4" />
        </g>
      </g>
    </svg>
  );
}
