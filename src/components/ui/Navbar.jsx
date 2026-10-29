import React, { useState } from 'react';
import { Compass, Mail, Menu, X } from 'lucide-react';
import StudioAudio from './StudioAudio';
import TempleLogo from './TempleLogo';
import ThemeSelector from './ThemeSelector';
import { THEMES } from '../../data/themesData';

export default function Navbar({
  currentTheme = 'atelier',
  onSelectTheme,
  onOpenCommission,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLight = currentTheme === 'light';

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 backdrop-blur-md transition-all ${
        isLight
          ? 'bg-[#f8f8fa]/92 border-b border-black/8 shadow-xs'
          : 'bg-[#08080a]/90 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand / Atelier Logo */}
        <div
          className="flex items-center gap-3 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div
            className={`w-11 h-11 rounded-lg border flex items-center justify-center transition-all p-1 ${
              isLight
                ? 'bg-gradient-to-br from-amber-50 via-white to-amber-100/60 border-amber-500/30 shadow-[0_2px_15px_rgba(212,175,55,0.2)] group-hover:border-amber-500/60'
                : 'bg-gradient-to-br from-amber-950/40 via-zinc-900/90 to-black border border-amber-500/30 shadow-[0_0_20px_rgba(212,175,55,0.25)] group-hover:border-amber-400/60 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]'
            }`}
          >
            <TempleLogo
              className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-transform duration-300 group-hover:scale-105"
              id="nav-temple-logo"
            />
          </div>
          <span
            className={`font-display tracking-[0.2em] text-base sm:text-lg font-bold uppercase transition-colors ${
              isLight ? 'text-zinc-900' : 'text-zinc-100'
            }`}
          >
            AVATAR
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className={`hidden md:flex items-center gap-8 text-xs uppercase tracking-widest ${
            isLight ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          <button
            onClick={() => scrollToSection('gallery-section')}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer ${
              isLight ? 'hover:text-amber-800' : 'hover:text-amber-300'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-500" />
            <span>Exhibition Archive</span>
          </button>
          <button
            onClick={() => scrollToSection('commission-section')}
            className={`transition-colors flex items-center gap-1.5 cursor-pointer ${
              isLight ? 'hover:text-amber-800' : 'hover:text-amber-300'
            }`}
          >
            <Mail className="w-3.5 h-3.5 opacity-70" />
            <span>Custom Requests</span>
          </button>
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-3">
          {/* Studio Audio */}
          <StudioAudio isLight={isLight} />

          {/* Gallery Ambient Theme Selector */}
          <ThemeSelector
            currentTheme={currentTheme}
            onSelectTheme={onSelectTheme}
          />

          {/* Commission Request CTA button */}
          <button
            onClick={onOpenCommission}
            className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
              isLight
                ? 'text-amber-950 bg-gradient-to-r from-amber-400/90 via-amber-300 to-amber-500/90 border border-amber-500/50 hover:border-amber-600 hover:shadow-[0_2px_15px_rgba(212,175,55,0.3)] shadow-xs'
                : 'text-amber-100 bg-gradient-to-r from-amber-700/60 via-amber-600/50 to-amber-800/60 border border-amber-500/40 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]'
            }`}
          >
            <span>Request Drawing</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isLight ? 'text-zinc-700 hover:text-black' : 'text-zinc-400 hover:text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-6 py-6 space-y-4 backdrop-blur-xl border-b ${
            isLight
              ? 'bg-white/98 border-zinc-200 shadow-xl'
              : 'bg-[#0d0d12]/95 border-zinc-800'
          }`}
        >
          <button
            onClick={() => scrollToSection('gallery-section')}
            className={`block w-full text-left text-sm uppercase tracking-widest py-1 ${
              isLight ? 'text-zinc-800 hover:text-amber-700' : 'text-zinc-300 hover:text-amber-300'
            }`}
          >
            Exhibition Archive
          </button>
          <button
            onClick={() => scrollToSection('commission-section')}
            className={`block w-full text-left text-sm uppercase tracking-widest py-1 ${
              isLight ? 'text-zinc-800 hover:text-amber-700' : 'text-zinc-300 hover:text-amber-300'
            }`}
          >
            Custom Commissions
          </button>

          <div
            className={`pt-2 border-t space-y-2 ${
              isLight ? 'border-zinc-200' : 'border-white/5'
            }`}
          >
            <span
              className={`text-[10px] font-mono-tech uppercase tracking-widest block ${
                isLight ? 'text-zinc-500' : 'text-zinc-400'
              }`}
            >
              Theme Ambience
            </span>
            <div className="grid grid-cols-2 gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    onSelectTheme(t.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 p-2 rounded-lg text-xs font-mono-tech border ${
                    currentTheme === t.id
                      ? isLight
                        ? 'bg-amber-50 border-amber-300 text-amber-950 font-bold'
                        : 'bg-white/10 border-white/20 text-white'
                      : isLight
                      ? 'bg-zinc-100/70 border-zinc-200 text-zinc-700'
                      : 'bg-zinc-900/50 border-white/5 text-zinc-400'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full ring-1 ring-black/20"
                    style={{ backgroundColor: t.primaryColor }}
                  />
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
              className={`w-full py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-center ${
                isLight
                  ? 'bg-amber-500/20 text-amber-900 border border-amber-500/40 hover:bg-amber-500/30'
                  : 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
              }`}
            >
              Request Custom Drawing
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
