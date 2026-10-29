/**
 * Fine Art Exhibition Themes Configuration
 * Curated color systems designed for architectural, gallery, and darkroom viewings.
 */

export const THEMES = [
  {
    id: 'atelier',
    name: 'Atelier Gold',
    subtitle: 'Obsidian & Imperial Gold',
    description: 'Classic luxury atelier palette with warm golden candlelight and deep black lacquer.',
    badge: 'Default',
    primaryColor: '#d4af37',
    accentColor: '#f59e0b',
    swatches: ['#070709', '#d4af37', '#f59e0b'],
    bgClass: 'bg-[#070709] text-zinc-100',
    tagline: 'The Drawing Archive',
    heroBadge: 'Archival Collection • Master Drawings',
    bannerText: null,
    isLight: false
  },
  {
    id: 'light',
    name: 'Gallery Daylight',
    subtitle: 'Alabaster & Golden Sun',
    description: 'Bright contemporary museum aesthetic with pristine white walls and warm golden lighting.',
    badge: 'Light',
    primaryColor: '#c5a059',
    accentColor: '#b45309',
    swatches: ['#ffffff', '#e4e4e7', '#d4af37'],
    bgClass: 'bg-[#f8f8fa] text-zinc-900',
    tagline: 'The Daylight Pavilion',
    heroBadge: 'Daylight Contemporary Exhibition',
    bannerText: null,
    isLight: true
  },
  {
    id: 'darkroom',
    name: 'Darkroom B&W',
    subtitle: 'Photographic Red & Silver',
    description: 'Silver gelatin darkroom safelight mode with high-contrast chiaroscuro rendering.',
    badge: 'Key [D]',
    primaryColor: '#ef4444',
    accentColor: '#dc2626',
    swatches: ['#030304', '#ef4444', '#f43f5e'],
    bgClass: 'bg-[#030304] text-zinc-200',
    tagline: 'The B&W Darkroom Archive',
    heroBadge: 'Photographic Safelight Active',
    bannerText: 'DARKROOM SAFELIGHT ACTIVE: HIGH-CONTRAST B&W MODE',
    isLight: false
  },
  {
    id: 'midnight',
    name: 'Midnight Sapphire',
    subtitle: 'Royal Navy & Cyan Lapis',
    description: 'Deep cosmic indigo and royal navy with cool crystalline spotlight beams.',
    badge: 'Cool',
    primaryColor: '#38bdf8',
    accentColor: '#60a5fa',
    swatches: ['#050a14', '#1e3a5f', '#38bdf8'],
    bgClass: 'bg-[#050a14] text-slate-100',
    tagline: 'The Midnight Pavilion',
    heroBadge: 'Midnight Blue Exhibition',
    bannerText: null,
    isLight: false
  },
  {
    id: 'sepia',
    name: 'Warm Parchment',
    subtitle: 'Antique Sepia & Amber',
    description: 'Renaissance master sketchbook aesthetic with warm tungsten glow and aged paper tones.',
    badge: 'Warm',
    primaryColor: '#d97706',
    accentColor: '#b45309',
    swatches: ['#120f0c', '#78350f', '#d97706'],
    bgClass: 'bg-[#120f0c] text-stone-100',
    tagline: 'The Archival Salon',
    heroBadge: 'Classical Salon Exhibition',
    bannerText: null,
    isLight: false
  }
];

export const DEFAULT_THEME_ID = 'atelier';

export function getTheme(themeId) {
  return THEMES.find((t) => t.id === themeId) || THEMES[0];
}
