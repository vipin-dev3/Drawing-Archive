import React from 'react';

/**
 * Temple V Logo Component
 * Architectural Greek temple pavilion with central integrated 'V' monogram.
 */
export default function TempleLogo({ className = 'w-10 h-auto', id = 'temple-v-svg' }) {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 650"
      className={className}
    >
      <defs>
        {/* Deep Metallic Navy Blue Gradient */}
        <linearGradient id={`${id}-navyMetal`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="50%" stopColor="#0f233d" />
          <stop offset="100%" stopColor="#091526" />
        </linearGradient>

        {/* Subtle Highlight Gradient */}
        <linearGradient id={`${id}-navyHighlight`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2a4d7c" />
          <stop offset="50%" stopColor="#173152" />
          <stop offset="100%" stopColor="#0b1a2e" />
        </linearGradient>

        {/* Inner Shadow Filter */}
        <filter id={`${id}-embossShadow`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      <g fill={`url(#${id}-navyMetal)`} stroke="#2b4c7e" strokeWidth="2" filter={`url(#${id}-embossShadow)`}>
        {/* ROOF / PEDIMENT */}
        {/* Outer Roof Triangle & Gables */}
        <polygon points="400,60 180,180 620,180" />

        {/* Inner Pediment Recess */}
        <polygon points="400,95 220,195 580,195" fill="#0b1726" stroke="none" />

        {/* Dentil Blocks pattern under roof */}
        <g fill={`url(#${id}-navyHighlight)`} stroke="none">
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
        <rect x="190" y="255" width="420" height="14" rx="1" fill={`url(#${id}-navyHighlight)`} />

        {/* OUTER LEFT COLUMN */}
        <path d="M 200,275 L 245,275 L 245,510 L 200,510 Z" />
        <line x1="212" y1="280" x2="212" y2="505" stroke="#0c1a2c" strokeWidth="3" />
        <line x1="222" y1="280" x2="222" y2="505" stroke="#0c1a2c" strokeWidth="3" />
        <line x1="233" y1="280" x2="233" y2="505" stroke="#0c1a2c" strokeWidth="3" />

        {/* INNER LEFT COLUMN UPPER & BASE */}
        <path d="M 270,275 L 315,275 L 315,510 L 270,510 Z" />
        <line x1="282" y1="280" x2="282" y2="505" stroke="#0c1a2c" strokeWidth="3" />
        <line x1="292" y1="280" x2="292" y2="505" stroke="#0c1a2c" strokeWidth="3" />
        <line x1="303" y1="280" x2="303" y2="505" stroke="#0c1a2c" strokeWidth="3" />

        {/* INNER RIGHT COLUMN UPPER & BASE */}
        <path d="M 485,275 L 530,275 L 530,510 L 485,510 Z" />
        <line x1="497" y1="280" x2="497" y2="505" stroke="#0c1a2c" strokeWidth="3" />
        <line x1="507" y1="280" x2="507" y2="505" stroke="#0c1a2c" strokeWidth="3" />
        <line x1="518" y1="280" x2="518" y2="505" stroke="#0c1a2c" strokeWidth="3" />

        {/* OUTER RIGHT COLUMN */}
        <path d="M 555,275 L 600,275 L 600,510 L 555,510 Z" />
        <line x1="567" y1="280" x2="567" y2="505" stroke="#0c1a2c" strokeWidth="3" />
        <line x1="577" y1="280" x2="577" y2="505" stroke="#0c1a2c" strokeWidth="3" />
        <line x1="588" y1="280" x2="588" y2="505" stroke="#0c1a2c" strokeWidth="3" />

        {/* BOLD CENTRAL INTEGRATED 'V' */}
        {/* Left Stem of V */}
        <polygon points="315,315 400,525 435,525 330,275 285,275" fill={`url(#${id}-navyHighlight)`} stroke="#3a6096" strokeWidth="2.5" />
        {/* Right Stem of V */}
        <polygon points="485,315 400,525 365,525 470,275 515,275" fill={`url(#${id}-navyMetal)`} stroke="#3a6096" strokeWidth="2.5" />

        {/* COLUMN BASES */}
        <rect x="190" y="510" width="420" height="14" rx="1" />
        <rect x="170" y="528" width="460" height="16" rx="2" />
        <rect x="150" y="548" width="500" height="18" rx="2" />
      </g>
    </svg>
  );
}
