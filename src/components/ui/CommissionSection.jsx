import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle,
  ShieldCheck,
  X
} from 'lucide-react';
import { COMMISSION_TIERS } from '../../data/artworksData';

export default function CommissionSection({
  prefilledArtwork = null,
  onClearPrefilledArtwork,
  theme = 'atelier',
}) {
  const isLight = theme === 'light';
  const [selectedTier, setSelectedTier] = useState('portrait');
  const [selectedSize, setSelectedSize] = useState('medium');
  const [framedOption, setFramedOption] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderReference, setOrderReference] = useState('');

  // Pre-fill if opened from an artwork modal
  useEffect(() => {
    if (prefilledArtwork) {
      setFormData((prev) => ({
        ...prev,
        details: `I am inquiring regarding the artwork "${prefilledArtwork.title}" (${prefilledArtwork.year}, ${prefilledArtwork.dimensions}). Please provide information regarding exhibition prints or custom commissioned versions.`,
      }));
    }
  }, [prefilledArtwork]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const ref = 'AVATAR-' + Math.floor(100000 + Math.random() * 900000);
      setOrderReference(ref);

      // Trigger gold luxury confetti explosion
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c5a059', '#e5c07b', '#f59e0b', '#fef08a'],
      });
    }, 1000);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClearPrefilledArtwork?.();
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      details: '',
    });
  };

  return (
    <section id="commission-section" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span
          className={`text-xs font-mono-tech tracking-[0.25em] uppercase ${
            isLight ? 'text-amber-800 font-bold' : 'text-amber-400'
          }`}
        >
          Private Commissions & Inquiries
        </span>
        <h2
          className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 ${
            isLight ? 'text-zinc-900' : 'text-zinc-100'
          }`}
        >
          Commission a Custom Drawing
        </h2>
        <p
          className={`text-sm sm:text-base font-serif-elegant mt-3 ${
            isLight ? 'text-zinc-600' : 'text-zinc-400'
          }`}
        >
          Request a bespoke hand-drawn portrait, wildlife study, or anime illustration tailored to your personal collection.
        </p>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-4" />
      </div>

      {/* Commission Tiers Cards */}
      {!prefilledArtwork && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {COMMISSION_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all border flex flex-col justify-between ${
                  isSelected
                    ? isLight
                      ? 'bg-amber-50/95 border-amber-500/80 shadow-[0_4px_24px_rgba(212,175,55,0.22)]'
                      : 'bg-amber-500/10 border-amber-500/60 shadow-[0_0_25px_rgba(245,158,11,0.2)]'
                    : isLight
                    ? 'bg-white border-zinc-200/90 hover:border-zinc-300 shadow-xs'
                    : 'bg-zinc-950/60 border-white/5 hover:border-white/20'
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-2.5 right-4 text-[10px] uppercase font-mono-tech font-bold px-2 py-0.5 rounded-full bg-amber-500 text-black">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3
                    className={`font-display text-lg font-bold ${
                      isLight ? 'text-zinc-900' : 'text-zinc-100'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      isLight ? 'text-zinc-600' : 'text-zinc-400'
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <div
                  className={`mt-6 pt-4 border-t flex items-center justify-between ${
                    isLight ? 'border-zinc-200' : 'border-white/5'
                  }`}
                >
                  <span
                    className={`text-[10px] uppercase font-mono-tech font-medium ${
                      isLight ? 'text-amber-800' : 'text-amber-400/90'
                    }`}
                  >
                    {tier.leadTime}
                  </span>
                  <span
                    className={`text-xs font-mono-tech ${
                      isLight ? 'text-zinc-500' : 'text-zinc-400'
                    }`}
                  >
                    Bespoke Original
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Main Form Card */}
      <div
        className={`max-w-4xl mx-auto rounded-3xl overflow-hidden border transition-all ${
          isLight
            ? 'bg-white border-zinc-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.06)]'
            : 'bg-zinc-950/90 border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)]'
        }`}
      >
        {/* If prefilled artwork banner */}
        {prefilledArtwork && (
          <div className="p-4 sm:p-6 bg-gradient-to-r from-amber-950/40 via-zinc-900/60 to-zinc-950 border-b border-amber-500/30 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={prefilledArtwork.image}
                alt={prefilledArtwork.title}
                className="w-14 h-14 object-cover rounded-lg border border-amber-500/40"
              />
              <div>
                <span className="text-[10px] uppercase font-mono-tech tracking-wider text-amber-400 block">
                  Artwork Inquiry
                </span>
                <h4 className="font-display text-base font-bold text-zinc-100">
                  {prefilledArtwork.title} ({prefilledArtwork.year})
                </h4>
                <p className="text-xs text-zinc-400 font-mono-tech">
                  {prefilledArtwork.medium} • {prefilledArtwork.dimensions}
                </p>
              </div>
            </div>
            <button
              onClick={onClearPrefilledArtwork}
              className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white"
              title="Switch to custom commission"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="commission-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Configuration Options */}
                {!prefilledArtwork && (
                  <div className="space-y-6">
                    {/* Dimension Selection */}
                    <div>
                      <label className="text-xs font-mono-tech text-zinc-400 uppercase tracking-wider block mb-3">
                        1. Select Preferred Drawing Scale
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          { id: 'small', label: 'Studio Study', size: '30 × 40 cm' },
                          { id: 'medium', label: 'Gallery Standard', size: '50 × 70 cm' },
                          { id: 'large', label: 'Master Salon', size: '75 × 105 cm' },
                          { id: 'monumental', label: 'Monumental', size: '100 × 140 cm' },
                        ].map((s) => (
                          <button
                            type="button"
                            key={s.id}
                            onClick={() => setSelectedSize(s.id)}
                            className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                              selectedSize === s.id
                                ? isLight
                                  ? 'bg-amber-100/80 border-amber-500 text-amber-950 font-semibold'
                                  : 'bg-amber-500/15 border-amber-500/60 text-white'
                                : isLight
                                ? 'bg-zinc-50 border-zinc-200 text-zinc-600 hover:border-zinc-300'
                                : 'bg-zinc-900/60 border-white/5 text-zinc-400 hover:border-white/20'
                            }`}
                          >
                            <span
                              className={`text-xs font-bold block ${
                                isLight ? 'text-zinc-900' : 'text-zinc-200'
                              }`}
                            >
                              {s.label}
                            </span>
                            <span
                              className={`text-[11px] font-mono-tech ${
                                isLight ? 'text-amber-800' : 'text-amber-400/90'
                              }`}
                            >
                              {s.size}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Framing Option */}
                    <div
                      className={`flex items-center justify-between p-4 rounded-xl border ${
                        isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-zinc-900/40 border-white/5'
                      }`}
                    >
                      <div>
                        <span
                          className={`text-xs font-semibold block ${
                            isLight ? 'text-zinc-900' : 'text-zinc-200'
                          }`}
                        >
                          Include Custom Framing & Archival Matting
                        </span>
                        <span className={`text-[11px] ${isLight ? 'text-zinc-600' : 'text-zinc-500'}`}>
                          Handcrafted black oak frame with 100% cotton rag matting and protective UV glass.
                        </span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer ml-4">
                        <input
                          type="checkbox"
                          checked={framedOption}
                          onChange={(e) => setFramedOption(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                      </label>
                    </div>
                  </div>
                )}

                {/* Client Contact Inputs */}
                <div
                  className={`space-y-4 pt-4 border-t ${
                    isLight ? 'border-zinc-200' : 'border-white/10'
                  }`}
                >
                  <label
                    className={`text-xs font-mono-tech uppercase tracking-wider block ${
                      isLight ? 'text-zinc-600' : 'text-zinc-400'
                    }`}
                  >
                    {prefilledArtwork ? 'Your Contact Information' : '2. Your Details & Vision'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={`text-xs block mb-1 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Liam Foster"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                          isLight
                            ? 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-amber-600'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:border-amber-500/80'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`text-xs block mb-1 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="liam@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors focus:outline-none ${
                          isLight
                            ? 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-amber-600'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:border-amber-500/80'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`text-xs block mb-1 ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                      Subject, Reference Photos, or Special Vision
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Describe the subject, reference photo, anime/character preference, or specific aesthetic mood you'd like created..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm resize-none transition-colors focus:outline-none ${
                        isLight
                          ? 'bg-zinc-50 border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-amber-600'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:border-amber-500/80'
                      }`}
                    />
                  </div>
                </div>

                {/* Summary & Submit */}
                <div
                  className={`p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6 ${
                    isLight ? 'bg-amber-50/70 border-amber-200' : 'bg-zinc-900/60 border-white/5'
                  }`}
                >
                  <div>
                    <span
                      className={`text-[10px] uppercase font-mono-tech tracking-wider block ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      Commission Scope
                    </span>
                    <div
                      className={`font-display text-lg font-bold ${
                        isLight ? 'text-amber-950' : 'text-amber-300'
                      }`}
                    >
                      Original Custom Draftsmanship
                    </div>
                    <span
                      className={`text-[11px] flex items-center gap-1 mt-0.5 ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      Includes Certificate of Authenticity & White-Glove Packaging
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        Sending Request...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-black" />
                        <span>Send Commission Request</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              /* Success Screen */
              <motion.div
                key="commission-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 px-6 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="max-w-md mx-auto">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-zinc-100">
                    Request Received
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    Thank you, <span className="text-zinc-200 font-semibold">{formData.name}</span>. Your custom drawing inquiry has been submitted. AVATAR will reach out to you within 24 to 48 hours.
                  </p>
                </div>

                <div className="max-w-sm mx-auto p-4 rounded-xl bg-zinc-900 border border-white/10 text-left font-mono-tech text-xs space-y-2">
                  <div className="flex justify-between text-zinc-400">
                    <span>Reference ID:</span>
                    <span className="text-amber-400 font-bold">{orderReference}</span>
                  </div>
                  <div className="flex justify-between text-zinc-400">
                    <span>Contact Email:</span>
                    <span className="text-zinc-200 truncate">{formData.email}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
