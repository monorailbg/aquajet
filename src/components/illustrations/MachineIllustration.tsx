export default function MachineIllustration() {
  return (
    <svg viewBox="0 0 560 260" fill="none" className="h-full w-full" aria-hidden>
      <defs>
        <linearGradient id="bedGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef0f4" />
          <stop offset="100%" stopColor="#d7dbe3" />
        </linearGradient>
      </defs>

      {/* Cutting bed */}
      <rect x="40" y="150" width="480" height="70" rx="6" fill="url(#bedGradient)" stroke="var(--border)" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={i}
          x1={64 + i * 44}
          y1="158"
          x2={64 + i * 44}
          y2="212"
          stroke="var(--border)"
          strokeWidth="1"
        />
      ))}

      {/* Side rails */}
      <rect x="30" y="60" width="14" height="160" rx="4" fill="var(--foreground)" />
      <rect x="516" y="60" width="14" height="160" rx="4" fill="var(--foreground)" />

      {/* Gantry bridge */}
      <rect x="30" y="60" width="500" height="16" rx="6" fill="var(--foreground)" />

      {/* Carriage + head */}
      <g>
        <rect x="252" y="76" width="56" height="26" rx="5" fill="var(--foreground)" />
        <rect x="272" y="102" width="16" height="30" rx="3" fill="var(--foreground)" />
        <path d="M272 132 L288 132 L282 144 L278 144 Z" fill="var(--accent-dim)" />
        <rect x="279" y="144" width="2.5" height="30" fill="var(--accent)" opacity="0.85" />
      </g>

      {/* Rail travel indicator */}
      <line x1="46" y1="68" x2="514" y2="68" stroke="var(--accent)" strokeWidth="2" strokeDasharray="2 6" opacity="0.5" />

      {/* Control cabinet */}
      <rect x="470" y="150" width="44" height="70" rx="4" fill="var(--background-elevated)" stroke="var(--border)" />
      <rect x="478" y="160" width="28" height="16" rx="2" fill="var(--accent)" opacity="0.25" />
      <circle cx="484" cy="188" r="3" fill="var(--accent)" />
      <circle cx="496" cy="188" r="3" fill="var(--muted)" />

      {/* Dimension ticks */}
      <g stroke="var(--muted)" strokeWidth="1" opacity="0.5">
        <line x1="40" y1="232" x2="40" y2="240" />
        <line x1="520" y1="232" x2="520" y2="240" />
        <line x1="40" y1="236" x2="520" y2="236" />
      </g>
    </svg>
  );
}
