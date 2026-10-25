import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Cpu, Database, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categoryIcons = [BrainCircuit, Cpu, Database, Wrench];

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-[#040507] overflow-hidden border-t border-[#c5a059]/15">
      {/* Background Magic Ambiance */}
      <div className="absolute top-[20%] right-[-5%] w-[460px] h-[460px] bg-[#38bdf8]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[460px] h-[460px] bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header with Dual Label */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d121c] border border-[#c5a059]/40 text-[#f5e6be] text-xs font-cinzel tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Arcana of Mastery · Keahlian Teknis & Matriks</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5e6be]">
            Core Competencies & <span className="text-gold-gradient">Mathematical Toolsets</span>
          </h2>

          <div className="filigree-divider max-w-sm">
            <span>❖</span>
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-[#a8a092] leading-relaxed">
            Matriks komprehensif keahlian: sintesis antara ketelitian matematika teoritis, rekayasa model *deep learning*, analisis data terapan, serta alur kerja komputasi modern.
          </p>
        </div>

        {/* Category Tab Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {portfolioData.skillCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || BrainCircuit;
            const isActive = activeCategory === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 flex items-center gap-3 border ${
                  isActive
                    ? 'bg-[#151c2b] border-[#d4af37] text-[#f5e6be] shadow-[0_0_20px_rgba(212,175,55,0.2)] scale-[1.02]'
                    : 'bg-[#0a0d14]/80 border-[#c5a059]/20 text-[#8a95a5] hover:bg-[#101522] hover:text-[#e8e1d1] hover:border-[#c5a059]/40'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${
                  isActive
                    ? 'bg-[#d4af37]/20 text-[#d4af37] border border-[#d4af37]/40'
                    : 'bg-[#131b29] text-[#8a95a5]'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-cinzel text-xs sm:text-sm font-bold tracking-wider truncate">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#38bdf8] block mt-0.5">
                    {cat.skills.length} spesialisasi
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Box */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="hogwarts-card p-8 sm:p-10 rounded-3xl corner-clasps"
        >
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#c5a059]/15 pb-6">
            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f5e6be] tracking-wide">
                {portfolioData.skillCategories[activeCategory].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#a8a092] mt-1">
                {portfolioData.skillCategories[activeCategory].description}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#141d2e] border border-[#38bdf8]/40 text-[#38bdf8] self-start sm:self-auto">
              Tingkat Kemahiran Teruji
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.skillCategories[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-[#0a0d14]/70 border border-[#c5a059]/15 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#e8e1d1] group-hover:text-[#f5e6be] transition-colors flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
                      <span>{skill.name}</span>
                    </h4>
                    <span className="text-xs font-mono font-bold text-[#d4af37] bg-[#1a1710] border border-[#d4af37]/30 px-2 py-0.5 rounded">
                      {skill.level}%
                    </span>
                  </div>
                  {skill.desc && (
                    <p className="text-xs text-[#a8a092] leading-relaxed mb-4">
                      {skill.desc}
                    </p>
                  )}
                </div>

                {/* Progress Bar styled as Gilded Runic Track */}
                <div className="w-full bg-[#111724] rounded-full h-1.5 overflow-hidden border border-[#c5a059]/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[#c5a059] via-[#d4af37] to-[#00e5ff] rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
