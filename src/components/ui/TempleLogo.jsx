import React from 'react';

/**
 * Temple V Logo Component - Luxury Metallic Gold Edition
 * Architectural Greek temple pavilion with central integrated 'V' monogram.
 */
export default function TempleLogo({
  className = 'w-10 h-auto',
  id = 'temple-v-gold'
}) {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 650"
      className={className}
    >
      <defs>
        {/* Deep Radiant Metallic Gold Gradient */}
        <linearGradient id={`${id}-goldMetal`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fae596" />
          <stop offset="25%" stopColor="#d4af37" />
          <stop offset="55%" stopColor="#aa771c" />
          <stop offset="85%" stopColor="#7a5513" />
          <stop offset="100%" stopColor="#432c07" />
        </linearGradient>

        {/* Polished Gold Highlight Gradient */}
        <linearGradient id={`${id}-goldHighlight`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fff6c4" />
          <stop offset="35%" stopColor="#f7d070" />
          <stop offset="70%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#8d6314" />
        </linearGradient>

        {/* Inner Shadow Filter */}
        <filter id={`${id}-embossShadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1e1405" floodOpacity="0.7" />
        </filter>
      </defs>

      <g fill={`url(#${id}-goldMetal)`} stroke="#d4af37" strokeWidth="2" filter={`url(#${id}-embossShadow)`}>
        {/* ROOF / PEDIMENT */}
        {/* Outer Roof Triangle & Gables */}
        <polygon points="400,60 180,180 620,180" />

        {/* Inner Pediment Recess */}
        <polygon points="400,95 220,195 580,195" fill="#181207" stroke="none" />

        {/* Dentil Blocks pattern under roof */}
        <g fill={`url(#${id}-goldHighlight)`} stroke="none">
          <rect x="230" y="172" width="14" height="18" />
          <rect x="260" y="172" width="14" height="18" />
          <rect x="290" y="172" width="14" height="18" />
          <rect x="320" y="172" width="14" height="18" />
          <rect x="350" y="172" width="14" height="18" />
          <rect x="380" y="172" width="14" height="18" />
          <rect x="410" y="172" width="14" height="18" />
          <rect x="440" y="172" width="14" height="18" />
          <rect x="470" y="172" width="14" height="18" />
          <rect x="500" y="172" width="14" height="18" />
          <rect x="530" y="172" width="14" height="18" />
          <rect x="560" y="172" width="14" height="18" />
        </g>

        {/* ARCHITRAVE & ENTABLATURE */}
        <rect x="190" y="200" width="420" height="24" rx="2" />
        <rect x="180" y="230" width="440" height="16" rx="2" />

        {/* CAPITAL TOPS / ABACUS BAR */}
        <rect x="190" y="255" width="420" height="14" rx="1" fill={`url(#${id}-goldHighlight)`} />

        {/* OUTER LEFT COLUMN */}
        <path d="M 200,275 L 245,275 L 245,510 L 200,510 Z" />
        <line x1="212" y1="280" x2="212" y2="505" stroke="#281a07" strokeWidth="3" />
        <line x1="222" y1="280" x2="222" y2="505" stroke="#281a07" strokeWidth="3" />
        <line x1="233" y1="280" x2="233" y2="505" stroke="#281a07" strokeWidth="3" />

        {/* INNER LEFT COLUMN UPPER & BASE */}
        <path d="M 270,275 L 315,275 L 315,510 L 270,510 Z" />
        <line x1="282" y1="280" x2="282" y2="505" stroke="#281a07" strokeWidth="3" />
        <line x1="292" y1="280" x2="292" y2="505" stroke="#281a07" strokeWidth="3" />
        <line x1="303" y1="280" x2="303" y2="505" stroke="#281a07" strokeWidth="3" />

        {/* INNER RIGHT COLUMN UPPER & BASE */}
        <path d="M 485,275 L 530,275 L 530,510 L 485,510 Z" />
        <line x1="497" y1="280" x2="497" y2="505" stroke="#281a07" strokeWidth="3" />
        <line x1="507" y1="280" x2="507" y2="505" stroke="#281a07" strokeWidth="3" />
        <line x1="518" y1="280" x2="518" y2="505" stroke="#281a07" strokeWidth="3" />

        {/* OUTER RIGHT COLUMN */}
        <path d="M 555,275 L 600,275 L 600,510 L 555,510 Z" />
        <line x1="567" y1="280" x2="567" y2="505" stroke="#281a07" strokeWidth="3" />
        <line x1="577" y1="280" x2="577" y2="505" stroke="#281a07" strokeWidth="3" />
        <line x1="588" y1="280" x2="588" y2="505" stroke="#281a07" strokeWidth="3" />

        {/* BOLD CENTRAL INTEGRATED 'V' */}
        {/* Left Stem of V */}
        <polygon points="315,315 400,525 435,525 330,275 285,275" fill={`url(#${id}-goldHighlight)`} stroke="#ffe484" strokeWidth="2.5" />
        {/* Right Stem of V */}
        <polygon points="485,315 400,525 365,525 470,275 515,275" fill={`url(#${id}-goldMetal)`} stroke="#d4af37" strokeWidth="2.5" />

        {/* COLUMN BASES */}
        <rect x="190" y="510" width="420" height="14" rx="1" />
        <rect x="170" y="528" width="460" height="16" rx="2" />
        <rect x="150" y="548" width="500" height="18" rx="2" />
      </g>
    </svg>
  );
}
