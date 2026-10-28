import React, { useState, useMemo, useEffect } from 'react';
import { ARTWORKS_DATA, ARTWORK_CATEGORIES } from './data/artworksData';
import { THEMES, getTheme, DEFAULT_THEME_ID } from './data/themesData';
import Navbar from './components/ui/Navbar';
import CategoryFilter from './components/ui/CategoryFilter';
import GalleryGrid from './components/ui/GalleryGrid';
import ArtworkDetailModal from './components/ui/ArtworkDetailModal';
import CommissionSection from './components/ui/CommissionSection';
import Footer from './components/ui/Footer';
import { Search } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectingArtwork, setInspectingArtwork] = useState(null);
  const [prefilledArtwork, setPrefilledArtwork] = useState(null);

  // Theme state: 'atelier', 'darkroom', 'midnight', 'sepia'
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('avatar_gallery_theme') || DEFAULT_THEME_ID;
    } catch {
      return DEFAULT_THEME_ID;
    }
  });

  const activeThemeConfig = useMemo(() => getTheme(theme), [theme]);
  const isDarkroomMode = theme === 'darkroom';

  const handleSelectTheme = (newTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('avatar_gallery_theme', newTheme);
    } catch {
      // Ignore localStorage write error
    }
  };

  // Compute artwork count per category
  const artworkCounts = useMemo(() => {
    const counts = { all: ARTWORKS_DATA.length };
    ARTWORK_CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all') {
        counts[cat.id] = ARTWORKS_DATA.filter((art) => art.category === cat.id).length;
      }
    });
    return counts;
  }, []);

  // Filter artworks dynamically by category and search query
  const filteredArtworks = useMemo(() => {
    return ARTWORKS_DATA.filter((art) => {
      const matchesCategory = selectedCategory === 'all' || art.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        art.title.toLowerCase().includes(query) ||
        art.medium.toLowerCase().includes(query) ||
        art.tags?.some((t) => t.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Keyboard shortcut listener:
  // [D] toggles Darkroom mode
  // [T] cycles through all 4 exhibition themes
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'd' || e.key === 'D') {
        e.preventDefault();
        handleSelectTheme(theme === 'darkroom' ? 'atelier' : 'darkroom');
      } else if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        const themeIds = THEMES.map((t) => t.id);
        const currentIndex = themeIds.indexOf(theme);
        const nextTheme = themeIds[(currentIndex + 1) % themeIds.length];
        handleSelectTheme(nextTheme);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme]);

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
  };

  // Inquire about artwork from modal
  const handleInquireFromModal = (artwork) => {
    setPrefilledArtwork(artwork);
    setInspectingArtwork(null);
    const commissionEl = document.getElementById('commission-section');
    if (commissionEl) {
      commissionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCommissionDirect = () => {
    setPrefilledArtwork(null);
    const commissionEl = document.getElementById('commission-section');
    if (commissionEl) {
      commissionEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 flex flex-col theme-${theme} ${
        activeThemeConfig.bgClass
      } ${
        isDarkroomMode ? 'darkroom-active' : ''
      } selection:bg-amber-500/20 selection:text-amber-200`}
    >
      {/* Top Navbar */}
      <Navbar
        currentTheme={theme}
        onSelectTheme={handleSelectTheme}
        onOpenCommission={handleOpenCommissionDirect}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-24">
        {/* Darkroom Safelight Status Banner when Active */}
        {isDarkroomMode && (
          <div className="bg-red-950/40 border-y border-red-500/30 py-2 px-4 backdrop-blur-md sticky top-20 z-30 transition-all">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-mono-tech text-red-300">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="tracking-widest uppercase font-semibold">
                  DARKROOM SAFELIGHT ACTIVE: HIGH-CONTRAST B&W MODE
                </span>
              </span>
              <button
                onClick={() => handleSelectTheme('atelier')}
                className="underline hover:text-white cursor-pointer"
              >
                Exit Darkroom [D]
              </button>
            </div>
          </div>
        )}

        {/* Exhibition Hero & Header */}
        <section id="gallery-section" className="relative pt-6 pb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100">
              {activeThemeConfig.tagline}
            </h1>

            <p className="text-xs sm:text-base text-zinc-400 max-w-2xl mx-auto font-serif-elegant italic leading-relaxed">
              Explore 26 original works in fine graphite, willow charcoal, Japanese manga ink, and devotional color.
              Move your cursor over any drawing to cast an ambient spotlight beam, or click to inspect and download in master resolution.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto pt-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search drawings by title, tag or medium..."
                  className={`w-full pl-10 pr-4 py-2.5 rounded-full text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none transition-colors shadow-inner border ${
                    theme === 'darkroom'
                      ? 'bg-black/90 border-red-900/40 focus:border-red-500/70'
                      : theme === 'midnight'
                      ? 'bg-slate-950/90 border-sky-900/40 focus:border-sky-500/70'
                      : theme === 'sepia'
                      ? 'bg-stone-950/90 border-amber-900/40 focus:border-amber-600/70'
                      : 'bg-zinc-900/80 border-white/10 focus:border-amber-500/60'
                  }`}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 text-xs"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Dynamic Category Filter Bar */}
            <div className="pt-2">
              <CategoryFilter
                selectedCategory={selectedCategory}
                onSelectCategory={handleSelectCategory}
                artworkCounts={artworkCounts}
              />
            </div>
          </div>

          {/* Clean 2D Museum Gallery Grid with Dynamic Theme & Spotlight Cursor Follow */}
          <div className="mt-4">
            {filteredArtworks.length > 0 ? (
              <GalleryGrid
                artworks={filteredArtworks}
                theme={theme}
                isDarkroomMode={isDarkroomMode}
                onInspectArtwork={(art) => setInspectingArtwork(art)}
              />
            ) : (
              <div className="py-20 text-center text-zinc-500 font-mono-tech text-sm">
                No drawings found matching "{searchQuery}". Try selecting another category or clearing your search.
              </div>
            )}
          </div>
        </section>

        {/* Custom Commission & Inquiries Section */}
        <CommissionSection
          prefilledArtwork={prefilledArtwork}
          onClearPrefilledArtwork={() => setPrefilledArtwork(null)}
        />
      </main>

      {/* High-Res Studio Zoom Detail Modal with Spotlight & Download */}
      {inspectingArtwork && (
        <ArtworkDetailModal
          artwork={inspectingArtwork}
          theme={theme}
          isDarkroomMode={isDarkroomMode}
          onClose={() => setInspectingArtwork(null)}
          onInquireArtwork={handleInquireFromModal}
        />
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
