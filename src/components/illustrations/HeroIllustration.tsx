export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 520 440"
      fill="none"
      className="h-full w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id="jetStream" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="45%" stopColor="var(--accent)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.95" />
        </linearGradient>
        <linearGradient id="jetCone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="beamTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a4152" />
          <stop offset="100%" stopColor="#12151e" />
        </linearGradient>
        <linearGradient id="carriage" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a5163" />
          <stop offset="100%" stopColor="#171b26" />
        </linearGradient>
        <linearGradient id="plateTop" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fbfcfd" />
          <stop offset="100%" stopColor="#e4e8ee" />
        </linearGradient>
        <linearGradient id="plateSide" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#dde1e8" />
          <stop offset="100%" stopColor="#c3c9d4" />
        </linearGradient>
        <radialGradient id="floorShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
        <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.14" />
        </filter>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="256" cy="392" rx="190" ry="18" fill="url(#floorShadow)" />

      {/* Dimension guide */}
      <g stroke="var(--border)" strokeWidth="1">
        <line x1="46" y1="60" x2="46" y2="360" />
        <line x1="46" y1="360" x2="470" y2="360" />
      </g>
      <g fill="var(--muted)">
        <circle cx="46" cy="60" r="2.5" />
        <circle cx="470" cy="360" r="2.5" />
      </g>

      <g filter="url(#softShadow)">
        {/* Rail supports */}
        <rect x="78" y="60" width="12" height="34" rx="3" fill="var(--foreground)" />
        <rect x="392" y="60" width="12" height="34" rx="3" fill="var(--foreground)" />

        {/* Gantry beam, beveled */}
        <rect x="70" y="44" width="342" height="24" rx="6" fill="url(#beamTop)" />
        <rect x="70" y="44" width="342" height="7" rx="3.5" fill="#5b6478" opacity="0.9" />
        {[112, 170, 228, 286, 344].map((x) => (
          <rect key={x} x={x - 3} y="68" width="6" height="16" fill="var(--foreground)" />
        ))}

        {/* Carriage */}
        <rect x="208" y="82" width="66" height="38" rx="8" fill="url(#carriage)" />
        <rect x="208" y="82" width="66" height="9" rx="4.5" fill="#5b6478" opacity="0.8" />
        <circle cx="221" cy="101" r="3" fill="#0a0d14" />
        <circle cx="261" cy="101" r="3" fill="#0a0d14" />

        {/* Vertical actuator */}
        <rect x="230" y="120" width="20" height="34" rx="4" fill="url(#carriage)" />

        {/* Drag chain detail */}
        <path
          d="M208 106 C 192 112, 186 126, 196 138"
          stroke="var(--foreground)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          opacity="0.55"
        />

        {/* Nozzle */}
        <path d="M232 154 L248 154 L242 170 L238 170 Z" fill="var(--accent-dim)" />
        <circle cx="240" cy="171" r="3" fill="var(--accent-dim)" />

        {/* Water jet spray cone + stream */}
        <path d="M236 174 L244 174 L252 296 L228 296 Z" fill="url(#jetCone)" />
        <line
          x1="240"
          y1="174"
          x2="240"
          y2="296"
          stroke="url(#jetStream)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 6"
          className="anim-jet-flow"
        />

        {/* Metal plate, split by the cut kerf */}
        <g>
          {/* left piece */}
          <path d="M96 296 L228 296 L228 300 L96 300 Z" fill="url(#plateTop)" />
          <rect x="96" y="300" width="132" height="78" fill="url(#plateSide)" stroke="var(--border)" />
          {/* right piece */}
          <path d="M252 296 L410 296 L410 300 L252 300 Z" fill="url(#plateTop)" />
          <rect x="252" y="300" width="158" height="78" fill="url(#plateSide)" stroke="var(--border)" />

          {/* Clean cut edges, highlighted */}
          <rect x="225" y="296" width="3" height="82" fill="var(--accent)" />
          <rect x="252" y="296" width="3" height="82" fill="var(--accent)" />
        </g>

        {/* Kerf impact glow */}
        <ellipse cx="240" cy="298" rx="14" ry="5" fill="var(--accent)" opacity="0.22" />

        {/* Spray droplets */}
        <g fill="var(--accent)">
          <circle cx="218" cy="286" r="3" opacity="0.65" className="anim-droplet" style={{ animationDelay: "0s" }} />
          <circle cx="204" cy="300" r="2.2" opacity="0.5" className="anim-droplet" style={{ animationDelay: "0.3s" }} />
          <circle cx="262" cy="290" r="2.6" opacity="0.55" className="anim-droplet" style={{ animationDelay: "0.6s" }} />
          <circle cx="274" cy="304" r="2" opacity="0.4" className="anim-droplet" style={{ animationDelay: "0.9s" }} />
          <circle cx="196" cy="280" r="1.6" opacity="0.4" className="anim-droplet" style={{ animationDelay: "1.1s" }} />
          <circle cx="284" cy="282" r="1.6" opacity="0.4" className="anim-droplet" style={{ animationDelay: "1.4s" }} />
        </g>
      </g>

      {/* Precision ticks along the plate top */}
      <g stroke="var(--muted)" strokeWidth="1" opacity="0.55">
        <line x1="96" y1="286" x2="96" y2="296" />
        <line x1="160" y1="286" x2="160" y2="296" />
        <line x1="228" y1="286" x2="228" y2="296" />
        <line x1="330" y1="286" x2="330" y2="296" />
        <line x1="410" y1="286" x2="410" y2="296" />
      </g>
    </svg>
  );
}
