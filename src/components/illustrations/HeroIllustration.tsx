export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="jetStream" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.05" />
          <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="plateFace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3f5f8" />
          <stop offset="100%" stopColor="#dfe3ea" />
        </linearGradient>
        <linearGradient id="plateEdge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c7ccd6" />
          <stop offset="100%" stopColor="#aab0bd" />
        </linearGradient>
      </defs>

      {/* Dimension crosshair, decorative */}
      <g stroke="var(--border)" strokeWidth="1">
        <line x1="40" y1="60" x2="40" y2="420" />
        <line x1="40" y1="420" x2="440" y2="420" />
      </g>
      <g fill="var(--muted)">
        <circle cx="40" cy="60" r="2.5" />
        <circle cx="440" cy="420" r="2.5" />
      </g>

      {/* Gantry beam */}
      <rect x="70" y="46" width="300" height="22" rx="6" fill="var(--foreground)" />
      <rect x="70" y="46" width="300" height="6" rx="3" fill="var(--foreground)" opacity="0.85" />
      {[110, 170, 230, 290, 350].map((x) => (
        <rect key={x} x={x - 3} y="68" width="6" height="14" fill="var(--foreground)" />
      ))}

      {/* Cutting head carriage */}
      <rect x="196" y="80" width="52" height="34" rx="6" fill="var(--foreground)" />
      <rect x="214" y="114" width="16" height="26" rx="3" fill="var(--foreground)" />

      {/* Nozzle tip */}
      <path d="M214 140 L230 140 L224 152 L220 152 Z" fill="var(--accent-dim)" />

      {/* Water jet stream */}
      <rect x="220.5" y="152" width="3" height="140" fill="url(#jetStream)" />

      {/* Metal plate, split by the cut */}
      <g>
        <rect x="90" y="292" width="122" height="90" rx="4" fill="url(#plateFace)" stroke="var(--border)" />
        <rect x="90" y="374" width="122" height="8" fill="url(#plateEdge)" />
        <rect x="232" y="292" width="158" height="90" rx="4" fill="url(#plateFace)" stroke="var(--border)" />
        <rect x="232" y="374" width="158" height="8" fill="url(#plateEdge)" />

        {/* Clean cut edges, highlighted */}
        <rect x="209" y="292" width="3" height="90" fill="var(--accent)" />
        <rect x="232" y="292" width="3" height="90" fill="var(--accent)" />
      </g>

      {/* Kerf impact glow */}
      <circle cx="222" cy="294" r="10" fill="var(--accent)" opacity="0.18" />

      {/* Spray droplets */}
      <g fill="var(--accent)">
        <circle cx="205" cy="300" r="3" opacity="0.6" />
        <circle cx="196" cy="312" r="2" opacity="0.45" />
        <circle cx="240" cy="304" r="2.5" opacity="0.5" />
        <circle cx="250" cy="316" r="2" opacity="0.35" />
        <circle cx="188" cy="290" r="1.6" opacity="0.4" />
        <circle cx="258" cy="292" r="1.6" opacity="0.4" />
      </g>

      {/* Precision ticks along the plate top */}
      <g stroke="var(--muted)" strokeWidth="1" opacity="0.6">
        <line x1="90" y1="284" x2="90" y2="292" />
        <line x1="150" y1="284" x2="150" y2="292" />
        <line x1="212" y1="284" x2="212" y2="292" />
        <line x1="310" y1="284" x2="310" y2="292" />
        <line x1="390" y1="284" x2="390" y2="292" />
      </g>
    </svg>
  );
}
