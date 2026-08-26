export default function MachineIllustration() {
  return (
    <svg viewBox="0 0 560 280" fill="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="bedTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f2f4f7" />
          <stop offset="100%" stopColor="#dde1e8" />
        </linearGradient>
        <linearGradient id="bedFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d7dbe3" />
          <stop offset="100%" stopColor="#c2c7d1" />
        </linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a4152" />
          <stop offset="100%" stopColor="#12151e" />
        </linearGradient>
        <linearGradient id="tank" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef4f6" />
          <stop offset="100%" stopColor="#cbdae0" />
        </linearGradient>
        <filter id="machineShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0f172a" floodOpacity="0.14" />
        </filter>
      </defs>

      <g filter="url(#machineShadow)">
        {/* Water reservoir */}
        <g>
          <rect x="440" y="86" width="46" height="64" rx="6" fill="url(#tank)" stroke="var(--border)" />
          <ellipse cx="463" cy="86" rx="23" ry="6" fill="#dfeaee" stroke="var(--border)" />
          <rect x="450" y="100" width="26" height="8" rx="2" fill="var(--accent)" opacity="0.35" />
          <rect x="450" y="112" width="26" height="8" rx="2" fill="var(--accent)" opacity="0.5" />
          {/* Hose to pump */}
          <path
            d="M440 130 C 410 130, 400 110, 372 108"
            stroke="var(--muted)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Cutting bed */}
        <path d="M40 170 L520 170 L520 176 L40 176 Z" fill="url(#bedTop)" />
        <rect x="40" y="176" width="480" height="64" fill="url(#bedFace)" stroke="var(--border)" />
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={i}
            x1={64 + i * 44}
            y1="182"
            x2={64 + i * 44}
            y2="234"
            stroke="var(--border)"
            strokeWidth="1"
          />
        ))}

        {/* Workpiece mid-cut on the bed */}
        <g>
          <rect
            x="150"
            y="186"
            width="130"
            height="42"
            rx="2"
            fill="#eef1f5"
            stroke="var(--steel)"
            strokeDasharray="4 3"
            opacity="0.8"
          />
          <line x1="238" y1="186" x2="238" y2="207" stroke="var(--accent)" strokeWidth="2" />
        </g>

        {/* Side rails */}
        <rect x="30" y="70" width="14" height="100" rx="4" fill="var(--foreground)" />
        <rect x="516" y="70" width="14" height="100" rx="4" fill="var(--foreground)" />

        {/* Gantry bridge */}
        <rect x="30" y="70" width="500" height="16" rx="6" fill="url(#beam)" />
        <rect x="30" y="70" width="500" height="5" rx="2.5" fill="#5b6478" opacity="0.85" />

        {/* Carriage + head, positioned over the workpiece */}
        <g>
          <rect x="210" y="86" width="56" height="26" rx="6" fill="url(#beam)" />
          <circle cx="222" cy="99" r="2.6" fill="#0a0d14" />
          <circle cx="254" cy="99" r="2.6" fill="#0a0d14" />
          <rect x="230" y="112" width="16" height="26" rx="3" fill="url(#beam)" />
          <path d="M230 138 L246 138 L240 150 L236 150 Z" fill="var(--accent-dim)" />
          <line
            x1="238"
            y1="150"
            x2="238"
            y2="207"
            stroke="var(--accent)"
            strokeOpacity="0.85"
            strokeWidth="2.5"
            strokeDasharray="8 5"
            className="anim-jet-flow"
          />
        </g>

        {/* Rail travel indicator */}
        <line x1="46" y1="78" x2="514" y2="78" stroke="var(--accent)" strokeWidth="2" strokeDasharray="2 6" opacity="0.45" />

        {/* Control cabinet */}
        <rect x="470" y="176" width="50" height="64" rx="5" fill="var(--background-elevated)" stroke="var(--border)" />
        <rect x="478" y="184" width="34" height="20" rx="2" fill="var(--foreground)" />
        <line x1="481" y1="196" x2="491" y2="188" stroke="var(--accent)" strokeWidth="1.4" opacity="0.85" />
        <line x1="491" y1="188" x2="500" y2="198" stroke="var(--accent)" strokeWidth="1.4" opacity="0.85" />
        <line x1="500" y1="198" x2="509" y2="190" stroke="var(--accent)" strokeWidth="1.4" opacity="0.85" />
        <circle cx="487" cy="216" r="3" fill="var(--accent)" className="anim-led-blink" />
        <circle cx="499" cy="216" r="3" fill="var(--muted)" />
      </g>

      {/* Dimension ticks */}
      <g stroke="var(--muted)" strokeWidth="1" opacity="0.5">
        <line x1="40" y1="252" x2="40" y2="260" />
        <line x1="520" y1="252" x2="520" y2="260" />
        <line x1="40" y1="256" x2="520" y2="256" />
      </g>
    </svg>
  );
}
