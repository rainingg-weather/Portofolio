import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const Navbar = () => {
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyNav(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Chronicle', subtitle: 'Profil', href: '#about' },
    { label: 'Arcana', subtitle: 'Keahlian', href: '#skills' },
    { label: 'The Vault', subtitle: 'Riset & Proyek', href: '#projects' },
    { label: 'Arithmancy Lab', subtitle: 'Lab Interaktif', href: '#playground' },
    { label: 'Annals', subtitle: 'Pengalaman', href: '#experience' },
    { label: 'Owl Post', subtitle: 'Kontak', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {showStickyNav && (
        <motion.header
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 left-0 right-0 z-50 py-2.5 bg-[#07080c]/90 backdrop-blur-xl border-b border-[#c5a059]/25 shadow-2xl shadow-black/80"
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            {/* Crest Logo */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 rounded-full bg-gradient-to-br from-[#1a2233] to-[#0a0d14] border border-[#d4af37]/60 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.25)] group-hover:border-[#d4af37] transition-all">
                <span className="font-cinzel font-bold text-sm text-[#f5e6be] group-hover:scale-110 transition-transform">
                  M
                </span>
                <div className="absolute inset-0 rounded-full border border-[#38bdf8]/30 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel font-bold text-xs sm:text-sm tracking-[0.12em] text-[#f5e6be] group-hover:text-gold-gradient transition-colors">
                  {portfolioData.personal.fullName}
                </span>
                <span className="text-[10px] font-mono text-[#38bdf8]/90 tracking-wider">
                  Applied Mathematics · ITS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#0d121c]/80 border border-[#c5a059]/20 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full text-xs transition-all duration-300 group text-left hover:bg-[#1a2233]/70 hover:border hover:border-[#d4af37]/40"
                >
                  <span className="font-cinzel font-semibold tracking-wider text-[#e8e1d1] group-hover:text-[#f5e6be] block text-[11px]">
                    {item.label}
                  </span>
                  <span className="text-[9px] font-mono text-[#8a95a5] group-hover:text-[#38bdf8] block -mt-0.5">
                    {item.subtitle}
                  </span>
                </a>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hogwarts-btn !py-2 !px-4 !text-[11px] flex items-center gap-1.5"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg lg:hidden text-[#f5e6be] hover:bg-[#1a2233] border border-[#c5a059]/30"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-x-0 top-[60px] z-40 bg-[#07080c]/98 backdrop-blur-2xl border-b border-[#c5a059]/30 p-6 lg:hidden shadow-2xl"
              >
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl bg-[#0d121c] border border-[#c5a059]/15 hover:border-[#d4af37]/60 flex items-center justify-between"
                    >
                      <span className="font-cinzel text-sm font-bold text-[#f5e6be] tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-xs font-mono text-[#38bdf8]">
                        {item.subtitle}
                      </span>
                    </a>
                  ))}
                  <div className="pt-4 border-t border-[#c5a059]/20">
                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center py-3 rounded-xl text-xs font-cinzel font-bold text-[#07080c] bg-gradient-to-r from-[#f5e6be] to-[#c5a059] flex items-center justify-center gap-2"
                    >
                      <span>Connect on LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
