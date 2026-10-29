import React, { useState } from 'react';
import { CheckCircle, ArrowUp } from 'lucide-react';
import TempleLogo from './TempleLogo';

export default function Footer({ theme = 'atelier' }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const isLight = theme === 'light';

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`relative ${
        isLight ? 'bg-[#f1f2f6] border-t border-zinc-200/80 text-zinc-600' : 'bg-[#050507] border-t border-white/5 text-zinc-400'
      } pt-16 pb-12 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b ${isLight ? 'border-zinc-200/80' : 'border-white/5'}`}>
          {/* Brand & Manifesto (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-9 h-9 rounded-lg ${
                  isLight
                    ? 'bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-400/40 shadow-sm'
                    : 'bg-gradient-to-br from-amber-950/40 via-zinc-900/90 to-black border border-amber-500/30 shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                } flex items-center justify-center p-1`}
              >
                <TempleLogo className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" id="footer-temple-logo" />
              </div>
              <span className={`font-display tracking-[0.2em] text-base font-bold ${isLight ? 'text-zinc-900' : 'text-zinc-100'}`}>
                AVATAR
              </span>
            </div>
            <p className={`text-xs sm:text-sm ${isLight ? 'text-zinc-600' : 'text-zinc-400'} font-serif-elegant leading-relaxed max-w-sm`}>
              A private digital pavilion dedicated to the timeless tactile alchemy of graphite, willow charcoal, and fine art paper. Exhibited internationally and archived in permanent private collections.
            </p>
            <div className={`text-[11px] font-mono-tech ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
              AVATAR Atelier • Fine Art Archive
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className={`text-xs font-mono-tech uppercase tracking-wider ${isLight ? 'text-zinc-800 font-semibold' : 'text-zinc-300'}`}>
              Exhibition Archive
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#gallery-section" className={`transition-colors ${isLight ? 'hover:text-amber-700' : 'hover:text-amber-300'}`}>
                  Exhibition Gallery & Downloads
                </a>
              </li>
              <li>
                <a href="#commission-section" className={`transition-colors ${isLight ? 'hover:text-amber-700' : 'hover:text-amber-300'}`}>
                  Commission Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Collector's Gazette (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className={`text-xs font-mono-tech uppercase tracking-wider ${isLight ? 'text-zinc-800 font-semibold' : 'text-zinc-300'}`}>
              The Collector's Gazette
            </h4>
            <p className={`text-xs ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              Receive private invitations to new original sketchbook releases and private salon viewings.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-medium">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>You have been added to the private registry.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="collector@domain.com"
                  className={`flex-1 px-3.5 py-2.5 rounded-xl ${
                    isLight
                      ? 'bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 focus:border-amber-600/80 shadow-sm'
                      : 'bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:border-amber-500/80'
                  } text-xs focus:outline-none`}
                />
                <button
                  type="submit"
                  className={`px-4 py-2.5 rounded-xl ${
                    isLight
                      ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-sm'
                      : 'bg-amber-500/20 text-amber-200 border border-amber-500/40 hover:bg-amber-500/30'
                  } text-xs font-semibold uppercase tracking-wider cursor-pointer transition-colors`}
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech ${isLight ? 'text-zinc-500' : 'text-zinc-600'}`}>
          <div>
            © {new Date().getFullYear()} AVATAR. Fine Art & High-Resolution Drawing Archive.
          </div>
          <button
            onClick={scrollToTop}
            className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
              isLight ? 'text-zinc-600 hover:text-amber-700' : 'text-zinc-500 hover:text-amber-300'
            }`}
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
