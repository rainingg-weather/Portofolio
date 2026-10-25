import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon, Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety, reusability, and customization
export interface MinimalistHeroProps {
  logoText: string;
  navLinks: { label: string; href: string }[];
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
  imageClassName?: string;
  circleClassName?: string;
  circleColor?: string;
}

// Helper component for navigation links with background hover style
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-foreground/75 transition-all duration-200 hover:text-emerald-300 hover:bg-white/10 uppercase"
  >
    {children}
  </a>
);

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-full bg-secondary/40 border border-white/5 text-foreground/70 transition-all duration-300 hover:text-emerald-400 hover:bg-secondary hover:border-emerald-500/30 hover:scale-110"
  >
    <Icon className="h-4 w-4" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  navLinks,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
  imageClassName,
  circleClassName,
}: MinimalistHeroProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background p-6 font-sans md:p-10 lg:p-12',
        className
      )}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Header with Background-Styled Navigation */}
      <header className="z-30 flex w-full max-w-7xl items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-wider text-foreground hover:text-emerald-400 transition-colors"
          >
            {logoText}
          </a>
        </motion.div>

        {/* Desktop Navigation with Background Pill Style */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-1 bg-secondary/40 backdrop-blur-md p-1.5 rounded-full border border-white/10 shadow-lg shadow-black/20"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </motion.nav>

        {/* Right Action: LinkedIn Connect */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-3"
        >
          <a
            href="https://www.linkedin.com/in/merisa-anggi-anggraini/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/20 hover:scale-105"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Mobile Menu Button with Toggle */}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden p-2 rounded-xl bg-secondary/50 border border-white/10 text-foreground hover:bg-secondary transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </header>

      {/* Mobile Drawer with Background Style */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-6 right-6 z-40 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/80 hover:text-emerald-400 hover:bg-white/5 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="https://www.linkedin.com/in/merisa-anggi-anggraini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative grid w-full max-w-7xl flex-grow grid-cols-1 items-center gap-8 py-8 md:grid-cols-3 md:py-0">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="z-20 order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            ITS Mathematics Alum & AI Researcher
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-foreground/80 md:text-base font-normal">
            {mainText}
          </p>
          <div className="mt-5 flex items-center gap-4">
            <a
              href={readMoreLink}
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/40 transition-colors"
            >
              Explore Research & Work
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Center Image with Perfect Responsive Pop-out Frame */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full py-4 md:py-0">
          <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] md:w-[360px] md:h-[440px] lg:w-[410px] lg:h-[490px] flex items-center justify-center">
            {/* Ambient Background Circle Badge */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className={cn(
                "absolute rounded-full aspect-square w-[230px] sm:w-[270px] md:w-[310px] lg:w-[360px] bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-300 shadow-2xl shadow-amber-500/25",
                circleClassName
              )}
            />

            {/* Cutout Portrait with Natural Bottom Anchoring */}
            <motion.img
              src={imageSrc}
              alt={imageAlt}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
              className={cn(
                "relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] select-none pointer-events-none transition-transform duration-500",
                imageClassName
              )}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = `/assets/Hero.png`;
              }}
            />
          </div>
        </div>

        {/* Right Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="z-20 order-3 flex flex-col items-center justify-center text-center md:items-start md:text-left"
        >
          <h1 className="text-5xl font-black tracking-tighter text-foreground sm:text-6xl md:text-7xl lg:text-8xl leading-none">
            {overlayText.part1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-emerald-300 to-cyan-400">
              {overlayText.part2}
            </span>
          </h1>
          <p className="mt-3 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Computer Vision · Applied Mathematics · AI
          </p>
        </motion.div>
      </div>

      {/* Footer Elements */}
      <footer className="z-30 flex w-full max-w-7xl flex-col gap-4 sm:flex-row items-center justify-between pt-4 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex items-center space-x-3"
        >
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-xs font-mono text-muted-foreground flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{locationText}</span>
        </motion.div>
      </footer>
    </div>
  );
};

export default MinimalistHero;
