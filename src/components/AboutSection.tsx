import React from 'react';
import { motion } from 'framer-motion';
import { Binary, Eye, Brain, Code2, GraduationCap, Award, Compass, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const AboutSection = () => {
  const pillars = [
    {
      icon: Binary,
      title: "Mathematical Foundations",
      subtitle: "Aljabar Linier & Dekomposisi Matriks",
      description: "Fondasi teoritis mendalam: aljabar linier, Singular Value Decomposition (SVD), Non-negative Matrix Factorization (NMF), dan optimasi numerik dari Departemen Matematika ITS.",
      accent: 'gold',
    },
    {
      icon: Eye,
      title: "Computer Vision & Restoration",
      subtitle: "Restorasi Citra & Filter Konvolusi",
      description: "Mengembangkan arsitektur mutakhir (RCDNet, CNNs) untuk pembersihan derau hujan (deraining), denoising, dan pemulihan struktur frekuensi tinggi pada citra digital.",
      accent: 'cyan',
    },
    {
      icon: Brain,
      title: "Explainable Deep Learning",
      subtitle: "Model AI yang Dapat Dijelaskan",
      description: "Mentransformasikan neural network 'black-box' menjadi algoritma optimasi berulang (*unfolded optimization*) yang terbukti secara matematis dan dapat diinterpretasikan.",
      accent: 'gold',
    },
    {
      icon: Code2,
      title: "Applied Data Engineering",
      subtitle: "Pipeline Komputasi & Statistik",
      description: "Membangun sistem komputasi yang *reproducible* menggunakan PyTorch, Python (NumPy, Pandas, SciPy), serta pemodelan statistik multivariat untuk data nyata.",
      accent: 'cyan',
    }
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#07080c] overflow-hidden border-t border-[#c5a059]/15">
      {/* Background Magic Ambiance */}
      <div className="absolute top-[-10%] left-[-5%] w-[480px] h-[480px] bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[480px] h-[480px] bg-[#38bdf8]/7 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Dual Label */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d121c] border border-[#c5a059]/40 text-[#f5e6be] text-xs font-cinzel tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>The Scholar's Chronicle · Profil & Filosofi</span>
          </div>
          
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5e6be]">
            Bridging Pure Mathematics with <span className="text-cyan-gradient">Intelligent Vision</span>
          </h2>

          <div className="filigree-divider max-w-sm">
            <span>❖</span>
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-[#a8a092] leading-relaxed">
            Setiap model kecerdasan buatan (*AI*) pada intinya adalah formulasi optimasi matematis. Fokus saya adalah merancang sistem AI yang tidak hanya akurat, namun juga memiliki fondasi teori yang kokoh dan dapat dijelaskan (*explainable*).
          </p>
        </div>

        {/* Narrative & Key Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          {/* Left Column: Illuminated Grimoire Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="hogwarts-card p-8 sm:p-10 rounded-3xl corner-clasps h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#131b2c] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#f5e6be] tracking-wide">
                      The Story of {portfolioData.personal.fullName}
                    </h3>
                    <span className="text-xs font-mono text-[#38bdf8]">
                      Applied Mathematics Graduate · ITS Surabaya
                    </span>
                  </div>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#c9c2ad] leading-relaxed">
                  <p>
                    Sebagai lulusan Matematika dari <strong className="text-[#f5e6be]">Institut Teknologi Sepuluh Nopember (ITS)</strong>, saya melatih cara berpikir analitis melalui pemodelan matematika kompleks, kalkulus variasi, aljabar matriks, dan inferensi statistika.
                  </p>
                  <p>
                    Ketertarikan saya pada kecerdasan buatan membawa saya mendalami spesialisasi <strong className="text-[#38bdf8]">Computer Vision dan Deep Learning</strong>. Pada riset skripsi unggulan saya, saya meneliti arsitektur <strong className="text-[#d4af37]">Rain Convolutional Dictionary Network (RCDNet)</strong> dengan petunjuk frekuensi (*frequency hint*) untuk memecahkan masalah invers restorasi citra digital berderau hujan.
                  </p>
                  <p>
                    Selain restorasi citra, saya juga aktif mengeksplorasi analisis data empiris—membedah tren karir dan dinamika media sosial Gen-Z menggunakan pemodelan klaster statistik multivariat.
                  </p>
                </div>
              </div>

              {/* Runic Tags */}
              <div className="mt-8 pt-6 border-t border-[#c5a059]/20 flex flex-wrap gap-2">
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-[#131b2c] border border-[#c5a059]/30 text-[#f5e6be]">
                  ITS Surabaya Alumni
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-[#0a1e2b] border border-[#38bdf8]/40 text-[#38bdf8]">
                  Computer Vision & Deep Learning
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-[#1a1710] border border-[#d4af37]/40 text-[#d4af37]">
                  RCDNet Specialist
                </span>
                <span className="px-3 py-1 text-xs font-mono rounded-md bg-[#131b2c] border border-[#c5a059]/30 text-[#e8e1d1]">
                  Data Science & Statistics
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Stats in Gilded Frames */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {portfolioData.stats.map((stat, index) => (
              <div
                key={index}
                className="hogwarts-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <span className="font-cinzel text-xs uppercase tracking-[0.16em] text-[#8a95a5]">
                  {stat.label}
                </span>
                <span className="font-cinzel text-base sm:text-lg font-bold mt-3 text-gold-gradient">
                  {stat.value}
                </span>
              </div>
            ))}

            {/* Flagship Research Plaque */}
            <div className="col-span-2 hogwarts-card p-6 rounded-2xl border-[#d4af37]/50 bg-gradient-to-r from-[#141b29] to-[#0a0d14] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#38bdf8]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#1c263b] border border-[#38bdf8]/50 text-[#38bdf8] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-cinzel text-xs font-bold text-[#d4af37] uppercase tracking-wider block">
                    Undergraduate Thesis Focus
                  </span>
                  <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#f5e6be] mt-1">
                    RCDNet with Frequency Hint Image Deraining
                  </h4>
                  <p className="text-xs text-[#a8a092] mt-1.5 leading-relaxed">
                    Menghilangkan artefak dan garis hujan pada citra digital dengan pemisahan subruang frekuensi dan optimasi unfolded dictionary.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isGold = pillar.accent === 'gold';
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="hogwarts-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 transition-transform group-hover:scale-110 ${
                    isGold
                      ? 'bg-[#181d2b] border-[#d4af37]/50 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-[#0a1e2b] border-[#38bdf8]/50 text-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h4 className="font-cinzel text-base font-bold text-[#f5e6be] mb-1">
                    {pillar.title}
                  </h4>
                  <span className="text-xs font-mono text-[#38bdf8] block mb-3">
                    {pillar.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-[#a8a092] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
