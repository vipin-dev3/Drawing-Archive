import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, ChevronDown } from 'lucide-react';
import { THEMES } from '../../data/themesData';

export default function ThemeSelector({ currentTheme, onSelectTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const activeTheme = THEMES.find((t) => t.id === currentTheme) || THEMES[0];

  // Close on outside click or Escape key
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border ${
          currentTheme === 'darkroom'
            ? 'bg-red-950/70 border-red-500/50 text-red-200 shadow-[0_0_15px_rgba(239,68,68,0.25)]'
            : currentTheme === 'midnight'
            ? 'bg-sky-950/70 border-sky-500/50 text-sky-200 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
            : currentTheme === 'sepia'
            ? 'bg-amber-950/70 border-amber-600/50 text-amber-200 shadow-[0_0_15px_rgba(217,119,6,0.25)]'
            : 'bg-zinc-900/90 border-amber-500/30 text-amber-200 hover:border-amber-400/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]'
        }`}
        title="Change Exhibition Gallery Theme (Shortcut: [T])"
      >
        {/* Color Dot Swatch */}
        <span
          className="w-2.5 h-2.5 rounded-full shadow-sm ring-1 ring-white/20"
          style={{ backgroundColor: activeTheme.primaryColor }}
        />
        <Palette className="w-3.5 h-3.5 opacity-80" />
        <span className="hidden sm:inline font-mono-tech tracking-wide text-[11px]">
          {activeTheme.name}
        </span>
        <ChevronDown
          className={`w-3 h-3 opacity-60 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-72 rounded-2xl bg-[#0b0b0f]/95 backdrop-blur-xl border border-white/10 shadow-2xl p-2 z-50 overflow-hidden"
          >
            <div className="px-3 py-2 border-b border-white/5 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest font-mono-tech text-zinc-400 font-semibold">
                Exhibition Ambience
              </span>
              <span className="text-[9px] font-mono-tech text-zinc-500">
                [T] to cycle
              </span>
            </div>

            <div className="space-y-1 pt-1">
              {THEMES.map((theme) => {
                const isSelected = theme.id === currentTheme;
                return (
                  <button
                    key={theme.id}
                    onClick={() => {
                      onSelectTheme(theme.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white/10 border border-white/15 shadow-sm'
                        : 'hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* 3-color Palette Preview Swatch */}
                      <div className="flex -space-x-1.5 items-center">
                        {theme.swatches.map((col, idx) => (
                          <span
                            key={idx}
                            className="w-3.5 h-3.5 rounded-full ring-1 ring-black/40 shadow-sm"
                            style={{ backgroundColor: col }}
                          />
                        ))}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-semibold ${
                              isSelected ? 'text-white' : 'text-zinc-200'
                            }`}
                          >
                            {theme.name}
                          </span>
                          {theme.badge && (
                            <span className="text-[9px] font-mono-tech px-1.5 py-0.2 rounded bg-white/5 text-zinc-400 border border-white/10">
                              {theme.badge}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-zinc-400 block font-serif-elegant italic">
                          {theme.subtitle}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <Check
                        className="w-4 h-4 ml-2 shrink-0"
                        style={{ color: theme.primaryColor }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
