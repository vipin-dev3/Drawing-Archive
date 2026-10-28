import React, { useState } from 'react';
import { Compass, Mail, Menu, X } from 'lucide-react';
import StudioAudio from './StudioAudio';
import TempleLogo from './TempleLogo';
import ThemeSelector from './ThemeSelector';

export default function Navbar({
  currentTheme = 'atelier',
  onSelectTheme,
  onOpenCommission,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#08080a]/90 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Atelier Logo */}
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-950/40 via-zinc-900/90 to-black border border-amber-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.25)] group-hover:border-amber-400/60 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all p-1">
            <TempleLogo className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-transform duration-300 group-hover:scale-105" id="nav-temple-logo" />
          </div>
          <span className="font-display tracking-[0.2em] text-base sm:text-lg font-bold text-zinc-100 uppercase">
            AVATAR
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-zinc-400">
          <button
            onClick={() => scrollToSection('gallery-section')}
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400/80" />
            <span>Exhibition Archive</span>
          </button>
          <button
            onClick={() => scrollToSection('commission-section')}
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-zinc-500" />
            <span>Custom Requests</span>
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-3">
          {/* Studio Audio */}
          <StudioAudio />

          {/* Gallery Ambient Theme Selector */}
          <ThemeSelector
            currentTheme={currentTheme}
            onSelectTheme={onSelectTheme}
          />

          {/* Commission Request CTA button */}
          <button
            onClick={onOpenCommission}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-100 bg-gradient-to-r from-amber-700/60 via-amber-600/50 to-amber-800/60 border border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] transition-all cursor-pointer"
          >
            <span>Request Drawing</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d0d12]/95 border-b border-zinc-800 px-6 py-6 space-y-4 backdrop-blur-xl">
          <button
            onClick={() => scrollToSection('gallery-section')}
            className="block w-full text-left text-sm uppercase tracking-widest text-zinc-300 hover:text-amber-300 py-1"
          >
            Exhibition Archive
          </button>
          <button
            onClick={() => scrollToSection('commission-section')}
            className="block w-full text-left text-sm uppercase tracking-widest text-zinc-300 hover:text-amber-300 py-1"
          >
            Custom Requests
          </button>

          <div className="pt-2 border-t border-white/5 space-y-2">
            <span className="text-[10px] font-mono-tech uppercase tracking-widest text-zinc-400 block">
              Theme Ambience
            </span>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'atelier', name: 'Atelier Gold', color: '#d4af37' },
                { id: 'darkroom', name: 'Darkroom B&W', color: '#ef4444' },
                { id: 'midnight', name: 'Midnight Blue', color: '#38bdf8' },
                { id: 'sepia', name: 'Warm Sepia', color: '#d97706' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    onSelectTheme(t.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs font-mono-tech border ${
                    currentTheme === t.id
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'bg-zinc-900/50 border-white/5 text-zinc-400'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: t.color }} />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommission();
              }}
              className="w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-amber-500/20 text-amber-200 border border-amber-500/40 text-center"
            >
              Request Drawing
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
