import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '@/data/portfolioData';
import heroHighRes from '@/assets/Hero.png';
import heroesImg from '@/assets/Heroes.png';
import { Sparkles, ArrowDown, ExternalLink } from 'lucide-react';

export const AsterHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { label: 'The Codex Home', subtitle: 'Halaman Utama', href: '#hero' },
    { label: 'The Scholar\'s Chronicle', subtitle: 'Profil & Filosofi', href: '#about' },
    { label: 'Arcana of Mastery', subtitle: 'Keahlian Teknis & Matriks', href: '#skills' },
    { label: 'The Vault of Relics', subtitle: 'Riset & Proyek Unggulan', href: '#projects' },
    { label: 'The Arithmancy Chamber', subtitle: 'Laboratorium Interaktif', href: '#playground' },
    { label: 'The Scholastic Annals', subtitle: 'Pendidikan & Riwayat Karir', href: '#experience' },
    { label: 'The Owl Post', subtitle: 'Inisiasi Kontak & Kolaborasi', href: '#contact' },
  ];

  return (
    <div className="home page relative w-full min-h-screen lg:min-h-[760px] bg-[#07080c] text-[#e8e1d1] overflow-hidden select-none flex flex-col justify-between">
      {/* ================= Header ================= */}
      <header className="fixed left-0 top-5 sm:top-8 w-full z-50 px-6 sm:px-12 lg:px-16 pointer-events-auto">
        <div className="flex items-center justify-between">
          {/* Logo with Heraldic Seal */}
          <div className="logo-image">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#1b2233] to-[#0a0d14] border border-[#d4af37]/70 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:border-[#d4af37] transition-all">
                <span className="font-cinzel text-lg font-bold text-[#f5e6be] group-hover:scale-110 transition-transform">
                  M
                </span>
                <div className="absolute inset-0 rounded-full border border-[#38bdf8]/40 animate-ping opacity-25" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg sm:text-xl font-bold tracking-[0.16em] text-[#f5e6be] group-hover:text-gold-gradient transition-colors">
                  ISA<span className="text-[#d4af37]">.</span>
                </span>
                <span className="text-[10px] font-mono text-[#38bdf8] tracking-widest uppercase">
                  Modern Arithmancy
                </span>
              </div>
            </a>
          </div>

          {/* Menu Trigger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative px-4 py-2 rounded-lg bg-[#0e131f]/80 border border-[#c5a059]/35 hover:border-[#d4af37] transition-all flex items-center gap-3 cursor-pointer group shadow-lg shadow-black/60"
            aria-label="Toggle Grimoire Menu"
          >
            <span className="font-cinzel text-xs font-bold tracking-widest text-[#f5e6be] uppercase hidden sm:inline">
              {menuOpen ? 'Close Archive' : 'Open Archive'}
            </span>
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-[2px] w-full bg-[#d4af37] transition-transform duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-[#38bdf8] transition-opacity duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-80'
                }`}
              />
              <span
                className={`block h-[2px] w-full bg-[#d4af37] transition-transform duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ================= Fullscreen Grimoire Menu Overlay ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#07080c]/98 backdrop-blur-2xl flex flex-col justify-between p-8 sm:p-14 lg:p-20 overflow-y-auto"
          >
            <div className="w-full flex justify-between items-center opacity-0 pointer-events-none">
              <span>Spacer</span>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-center justify-center my-auto space-y-4 sm:space-y-6 py-10">
              <div className="filigree-divider max-w-xs mb-2">
                <span>❖</span>
              </div>

              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="text-center group"
                >
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="inline-block py-1"
                  >
                    <span className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.14em] text-[#a8a092] group-hover:text-gold-gradient transition-all block">
                      {item.label}
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-[#38bdf8]/80 group-hover:text-[#38bdf8] block mt-1 tracking-widest">
                      {item.subtitle}
                    </span>
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mt-2 mx-auto" />
                  </a>
                </motion.div>
              ))}

              <div className="filigree-divider max-w-xs mt-2">
                <span>❖</span>
              </div>
            </div>

            {/* Menu Social Links */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#c5a059]/20 text-xs font-mono text-[#a8a092]">
              <div className="flex items-center gap-6">
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f5e6be] transition-colors uppercase tracking-widest flex items-center gap-1"
                >
                  <span>LinkedIn Codex</span>
                  <ExternalLink className="w-3 h-3 text-[#38bdf8]" />
                </a>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f5e6be] transition-colors uppercase tracking-widest flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-[#38bdf8]" />
                </a>
              </div>
              <div className="text-[#38bdf8]/90 tracking-wider">
                Institut Teknologi Sepuluh Nopember (ITS)
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= Hero Main Stage ================= */}
      <div className="relative w-full flex-grow flex items-center pt-24 sm:pt-28 pb-12 sm:pb-16">
        {/* Atmospheric Backdrops */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Deep castle vignette and gradient */}
          <div className="absolute inset-0 bg-radial from-[#121826]/40 via-[#07080c]/85 to-[#040507]" />

          {/* Ancient Magic energy pulses (Cyan glow on right/center) */}
          <div className="absolute top-1/4 right-[8%] w-[580px] h-[580px] bg-[#38bdf8]/10 rounded-full blur-[140px] animate-magic-pulse" />
          
          {/* Warm Candlelight / Golden Amber ambience on upper left */}
          <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[130px]" />

          {/* Architectural runic grid lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40" />

          {/* Bottom ground shadow for seamless transition into next section */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#07080c] via-[#07080c]/80 to-transparent z-10" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Titles & Narratives */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-6 sm:pt-0">
            {/* Top Ornamental Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0e1422] border border-[#c5a059]/40 mb-6 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-[#f5e6be]">
                The Arithmancer's Codex · Vol. MMXXVI
              </span>
            </div>

            {/* Cinematic Main Title */}
            <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
              <span className="text-gold-gradient block drop-shadow-[0_4px_20px_rgba(212,175,55,0.25)]">
                MERISA
              </span>
              <span className="font-aster-serif italic font-light text-[#e8e1d1] block text-4xl sm:text-6xl md:text-7xl mt-1">
                Anggi Anggraini
              </span>
            </h1>

            {/* Dual Tagline: Magical metaphor + Clear layman technical role */}
            <div className="space-y-2 mb-8 max-w-xl">
              <p className="font-cinzel text-sm sm:text-base tracking-[0.14em] text-[#38bdf8] font-semibold">
                APPLIED MATHEMATICIAN & COMPUTER VISION SPECIALIST
              </p>
              <p className="text-sm sm:text-base text-[#a8a092] leading-relaxed font-normal">
                Menjembatani ketelitian matematika murni dengan kecerdasan buatan modern. Mengembangkan arsitektur <strong className="text-[#f5e6be]">RCDNet (Image Deraining)</strong>, dekomposisi matriks, dan *interpretable deep learning* di Institut Teknologi Sepuluh Nopember (ITS).
              </p>
            </div>

            {/* Filigree line */}
            <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-[#d4af37]/60 via-[#c5a059]/30 to-transparent mb-8" />

            {/* Hogwarts Legacy Chamfered CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="hogwarts-btn">
                <span>Explore The Vault (Riset & Proyek)</span>
              </a>
              <a href="#playground" className="hogwarts-btn-cyan">
                <span>The Arithmancy Lab (Lab Interaktif)</span>
              </a>
            </div>

            {/* Quick Micro-Credentials */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-xs font-mono text-[#a8a092]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>ITS Surabaya Mathematics Graduate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
                <span>RCDNet High-Frequency Deraining Thesis</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Character Portrait */}
          <div className="lg:col-span-5 relative flex items-end justify-center lg:justify-end mt-8 lg:mt-0">
            {/* Halo backlight aura behind portrait */}
            <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full bg-gradient-to-tr from-[#38bdf8]/20 via-[#d4af37]/15 to-transparent blur-[70px] pointer-events-none" />

            {/* Fine circular runic frame motif */}
            <div className="absolute w-[340px] sm:w-[420px] h-[340px] sm:h-[420px] rounded-full border border-[#c5a059]/25 pointer-events-none flex items-center justify-center opacity-60 animate-spin" style={{ animationDuration: '60s' }}>
              <div className="w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-dashed border-[#38bdf8]/20" />
            </div>

            {/* Merisa's Portrait */}
            <div className="relative z-10 w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] flex items-end justify-center">
              <img
                src={heroHighRes}
                alt="Merisa Anggi Anggraini"
                className="w-full h-auto max-h-[70vh] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)] filter contrast-[1.05]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = heroesImg;
                }}
              />
              {/* Bottom vignette overlay to blend photo base smoothly into dark section */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07080c] via-[#07080c]/80 to-transparent pointer-events-none" />
            </div>

            {/* Plaque / Seal floating label */}
            <div className="absolute bottom-4 left-0 sm:left-4 z-20 px-3.5 py-2 rounded-xl bg-[#0d121c]/90 border border-[#c5a059]/40 backdrop-blur-md shadow-xl flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
              <div>
                <span className="font-cinzel text-[11px] font-bold text-[#f5e6be] tracking-wider block">
                  ALUMNI ITS SURABAYA
                </span>
                <span className="text-[9px] font-mono text-[#8a95a5] block">
                  Matematika Terapan & AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-20 pb-4 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1.5 text-xs font-mono text-[#a8a092] hover:text-[#d4af37] transition-colors"
        >
          <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE ARCHIVE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#d4af37]" />
        </a>
      </div>
    </div>
  );
};

export default AsterHero;
