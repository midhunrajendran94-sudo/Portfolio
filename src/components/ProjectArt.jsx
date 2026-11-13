export function ScanArt() {
  return (
    <svg className="project-art" viewBox="0 0 560 720" fill="none" aria-hidden="true">
      <rect width="560" height="720" fill="url(#scanBg)" />
      <circle cx="120" cy="150" r="110" fill="#554B75" filter="url(#scanBlur)" opacity="0.55" />
      <circle cx="430" cy="560" r="130" fill="#426B70" filter="url(#scanBlur)" opacity="0.4" />
      <g>
        <ellipse cx="280" cy="350" rx="190" ry="230" stroke="#F2F3F7" strokeOpacity="0.14" />
        <ellipse cx="280" cy="350" rx="138" ry="168" stroke="#8fb0ad" strokeOpacity="0.75" />
        <ellipse cx="280" cy="350" rx="82" ry="100" stroke="#c9c3d6" strokeOpacity="0.8" />
        <path d="M70 350H490" stroke="#F2F3F7" strokeOpacity="0.28" />
        <path d="M280 110V590" stroke="#F2F3F7" strokeOpacity="0.16" />
        <path d="M150 214L280 350L412 268L356 470L188 438Z" stroke="#F2F3F7" strokeOpacity="0.4" />
        <circle cx="280" cy="350" r="7" fill="#F2F3F7" />
        <circle cx="150" cy="214" r="5" fill="#8fb0ad" />
        <circle cx="412" cy="268" r="4" fill="#c9c3d6" />
        <circle cx="356" cy="470" r="5" fill="#F2F3F7" />
        <circle cx="188" cy="438" r="4" fill="#8fb0ad" />
      </g>
      <g stroke="#F2F3F7" strokeOpacity="0.16">
        <path d="M48 48H120" />
        <path d="M48 48V120" />
        <path d="M512 672H440" />
        <path d="M512 672V600" />
      </g>
      <defs>
        <linearGradient id="scanBg" x1="40" y1="20" x2="520" y2="700">
          <stop stopColor="#1a2436" />
          <stop offset="0.48" stopColor="#2a2440" />
          <stop offset="1" stopColor="#173034" />
        </linearGradient>
        <filter id="scanBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="28" />
        </filter>
      </defs>
    </svg>
  );
}

export function BallotArt() {
  return (
    <svg className="project-art" viewBox="0 0 560 720" fill="none" aria-hidden="true">
      <rect width="560" height="720" fill="url(#ballotBg)" />
      <circle cx="460" cy="120" r="120" fill="#62516A" filter="url(#ballotBlur)" opacity="0.5" />
      <circle cx="90" cy="600" r="100" fill="#293957" filter="url(#ballotBlur)" opacity="0.7" />
      <g transform="translate(118 150)">
        <rect x="0" y="0" width="324" height="400" rx="28" fill="#151D2B" fillOpacity="0.55" stroke="#F2F3F7" strokeOpacity="0.16" />
        <rect x="36" y="42" width="168" height="14" rx="7" fill="#F2F3F7" fillOpacity="0.82" />
        <rect x="36" y="72" width="110" height="8" rx="4" fill="#A6ADBB" fillOpacity="0.7" />
        <rect x="36" y="122" width="252" height="58" rx="14" fill="#426B70" fillOpacity="0.28" stroke="#8fb0ad" strokeOpacity="0.45" />
        <rect x="36" y="198" width="252" height="58" rx="14" stroke="#F2F3F7" strokeOpacity="0.14" />
        <rect x="36" y="274" width="252" height="58" rx="14" stroke="#F2F3F7" strokeOpacity="0.14" />
        <circle cx="62" cy="151" r="8" fill="#8fb0ad" />
        <circle cx="62" cy="227" r="8" stroke="#F2F3F7" strokeOpacity="0.4" />
        <circle cx="62" cy="303" r="8" stroke="#F2F3F7" strokeOpacity="0.4" />
        <path d="M214 146l8 8 16-18" stroke="#F2F3F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <g stroke="#F2F3F7" strokeOpacity="0.16">
        <path d="M48 48H120" />
        <path d="M48 48V120" />
        <path d="M512 672H440" />
        <path d="M512 672V600" />
      </g>
      <defs>
        <linearGradient id="ballotBg" x1="80" y1="0" x2="480" y2="720">
          <stop stopColor="#1c2230" />
          <stop offset="0.55" stopColor="#2a2433" />
          <stop offset="1" stopColor="#241d31" />
        </linearGradient>
        <filter id="ballotBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
      </defs>
    </svg>
  );
}

export function SuiteArt() {
  return (
    <svg className="project-art" viewBox="0 0 560 720" fill="none" aria-hidden="true">
      <rect width="560" height="720" fill="url(#suiteBg)" />
      <circle cx="470" cy="170" r="130" fill="#426B70" filter="url(#suiteBlur)" opacity="0.45" />
      <circle cx="100" cy="560" r="120" fill="#554B75" filter="url(#suiteBlur)" opacity="0.5" />
      <g transform="translate(70 110)">
        {/* Terminal / Runner window */}
        <rect x="0" y="0" width="420" height="490" rx="24" fill="#131B2A" fillOpacity="0.8" stroke="#F2F3F7" strokeOpacity="0.16" />
        {/* Window header */}
        <rect x="0" y="0" width="420" height="48" rx="24" fill="#172235" fillOpacity="0.9" />
        <line x1="0" y1="48" x2="420" y2="48" stroke="#F2F3F7" strokeOpacity="0.1" />
        <circle cx="30" cy="24" r="5" fill="#f87171" opacity="0.8" />
        <circle cx="48" cy="24" r="5" fill="#fbbf24" opacity="0.8" />
        <circle cx="66" cy="24" r="5" fill="#4ade80" opacity="0.8" />
        <rect x="140" y="16" width="140" height="16" rx="8" fill="#F2F3F7" fillOpacity="0.1" />

        {/* Summary metric banner */}
        <rect x="24" y="68" width="372" height="64" rx="14" fill="#426B70" fillOpacity="0.22" stroke="#8fb0ad" strokeOpacity="0.4" />
        <circle cx="56" cy="100" r="14" fill="#426B70" fillOpacity="0.4" stroke="#8fb0ad" strokeWidth="1.5" />
        <path d="M51 100l4 4 7-8" stroke="#F2F3F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="84" y="88" width="130" height="12" rx="6" fill="#F2F3F7" fillOpacity="0.88" />
        <rect x="84" y="106" width="90" height="8" rx="4" fill="#A6ADBB" fillOpacity="0.75" />
        <rect x="300" y="90" width="76" height="20" rx="10" fill="#8fb0ad" fillOpacity="0.25" stroke="#8fb0ad" strokeOpacity="0.5" />

        {/* Test step items */}
        <g transform="translate(24 150)">
          {/* Row 1 */}
          <rect x="0" y="0" width="372" height="52" rx="12" fill="#172235" fillOpacity="0.5" stroke="#F2F3F7" strokeOpacity="0.1" />
          <circle cx="26" cy="26" r="9" fill="#426B70" fillOpacity="0.3" stroke="#8fb0ad" />
          <path d="M23 26l2.5 2.5 4.5-5" stroke="#8fb0ad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="48" y="18" width="190" height="9" rx="4.5" fill="#F2F3F7" fillOpacity="0.8" />
          <rect x="48" y="32" width="100" height="6" rx="3" fill="#A6ADBB" fillOpacity="0.6" />
          <rect x="310" y="21" width="44" height="11" rx="5.5" fill="#8fb0ad" fillOpacity="0.18" />

          {/* Row 2 */}
          <rect x="0" y="64" width="372" height="52" rx="12" fill="#172235" fillOpacity="0.5" stroke="#F2F3F7" strokeOpacity="0.1" />
          <circle cx="26" cy="90" r="9" fill="#426B70" fillOpacity="0.3" stroke="#8fb0ad" />
          <path d="M23 90l2.5 2.5 4.5-5" stroke="#8fb0ad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="48" y="82" width="165" height="9" rx="4.5" fill="#F2F3F7" fillOpacity="0.8" />
          <rect x="48" y="96" width="85" height="6" rx="3" fill="#A6ADBB" fillOpacity="0.6" />
          <rect x="310" y="85" width="44" height="11" rx="5.5" fill="#8fb0ad" fillOpacity="0.18" />

          {/* Row 3 */}
          <rect x="0" y="128" width="372" height="52" rx="12" fill="#172235" fillOpacity="0.5" stroke="#F2F3F7" strokeOpacity="0.1" />
          <circle cx="26" cy="154" r="9" fill="#426B70" fillOpacity="0.3" stroke="#8fb0ad" />
          <path d="M23 154l2.5 2.5 4.5-5" stroke="#8fb0ad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="48" y="146" width="180" height="9" rx="4.5" fill="#F2F3F7" fillOpacity="0.8" />
          <rect x="48" y="160" width="115" height="6" rx="3" fill="#A6ADBB" fillOpacity="0.6" />
          <rect x="310" y="149" width="44" height="11" rx="5.5" fill="#8fb0ad" fillOpacity="0.18" />

          {/* Row 4 */}
          <rect x="0" y="192" width="372" height="52" rx="12" fill="#172235" fillOpacity="0.5" stroke="#F2F3F7" strokeOpacity="0.1" />
          <circle cx="26" cy="218" r="9" fill="#426B70" fillOpacity="0.3" stroke="#8fb0ad" />
          <path d="M23 218l2.5 2.5 4.5-5" stroke="#8fb0ad" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="48" y="210" width="145" height="9" rx="4.5" fill="#F2F3F7" fillOpacity="0.8" />
          <rect x="48" y="224" width="75" height="6" rx="3" fill="#A6ADBB" fillOpacity="0.6" />
          <rect x="310" y="213" width="44" height="11" rx="5.5" fill="#8fb0ad" fillOpacity="0.18" />

          {/* Bottom pulse bar */}
          <rect x="0" y="260" width="372" height="42" rx="10" fill="#554B75" fillOpacity="0.2" stroke="#554B75" strokeOpacity="0.35" />
          <path d="M24 281h70l8-10 12 20 10-14 8 4h216" stroke="#c9c3d6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
        </g>
      </g>
      <g stroke="#F2F3F7" strokeOpacity="0.16">
        <path d="M48 48H120" />
        <path d="M48 48V120" />
        <path d="M512 672H440" />
        <path d="M512 672V600" />
      </g>
      <defs>
        <linearGradient id="suiteBg" x1="40" y1="20" x2="520" y2="700">
          <stop stopColor="#141f2d" />
          <stop offset="0.5" stopColor="#1b283d" />
          <stop offset="1" stopColor="#251e36" />
        </linearGradient>
        <filter id="suiteBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="30" />
        </filter>
      </defs>
    </svg>
  );
}
