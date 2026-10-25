import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, BookOpen } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import itsLogo from '@/assets/institut-teknologi-sepuluh-nopember-seeklogo.png';

export const EducationExperienceSection = () => {
  return (
    <section id="experience" className="relative pt-12 pb-28 md:pt-16 md:pb-36 bg-transparent overflow-hidden">
      {/* Background Magic Ambiance */}
      <div className="absolute top-[5%] right-[-5%] w-[480px] h-[480px] bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-5%] w-[480px] h-[480px] bg-[#38bdf8]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5e6be]">
            Academic Pedigree & <span className="text-gold-gradient">Career Chronicles</span>
          </h2>

          <div className="filigree-divider max-w-sm">
            <span>❖</span>
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-[#a8a092] leading-relaxed">
            Catatan perjalanan dari Departemen Matematika ITS, riset computer vision di laboratorium, serta pengalaman asistensi mata kuliah dan kepemimpinan tim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Academic Background & Thesis */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={itsLogo}
                alt="Institut Teknologi Sepuluh Nopember"
                className="w-12 h-12 object-contain shrink-0 drop-shadow-[0_0_12px_rgba(56,189,248,0.25)]"
              />
              <div>
                <h3 className="font-cinzel text-xl font-bold text-[#f5e6be] tracking-wide">
                  Academic Background
                </h3>
                <span className="text-xs font-mono text-[#8a95a5]">Riwayat Studi & Riset Skripsi</span>
              </div>
            </div>

            {portfolioData.education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="hogwarts-card p-8 rounded-3xl space-y-6 corner-clasps"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-[#182338] border border-[#38bdf8]/40 text-[#38bdf8] font-semibold">
                    {edu.period}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#a8a092] font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-cinzel text-xl font-bold text-[#f5e6be]">{edu.degree}</h4>
                  <p className="text-sm font-semibold text-[#d4af37] mt-1">{edu.institution}</p>
                  <p className="text-xs sm:text-sm text-[#a8a092] mt-3 leading-relaxed">{edu.details}</p>
                </div>

                {/* Thesis Highlight Plaque */}
                <div className="p-5 rounded-2xl bg-[#090d16] border border-[#d4af37]/40 space-y-2.5 relative overflow-hidden">
                  <div className="flex items-center gap-2 text-xs font-cinzel font-bold text-[#d4af37] uppercase tracking-wider">
                    <BookOpen className="w-3.5 h-3.5 text-[#38bdf8]" />
                    <span>{edu.thesis}</span>
                  </div>
                  <p className="text-sm font-medium text-[#f5e6be] italic leading-relaxed">
                    "{edu.thesisTitle}"
                  </p>
                </div>

                {/* Achievements List */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-cinzel text-[#8a95a5] uppercase tracking-wider block">
                    Pencapaian & Keunggulan Khusus:
                  </span>
                  <ul className="space-y-2">
                    {edu.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#c9c2ad]">
                        <CheckCircle2 className="w-4 h-4 text-[#38bdf8] mt-0.5 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Experience Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="mb-6 flex flex-col justify-center min-h-[48px]">
              <h3 className="font-cinzel text-xl font-bold text-[#f5e6be] tracking-wide">
                Experience & Research Track
              </h3>
              <span className="text-xs font-mono text-[#8a95a5]">Peran Riset, Asistensi & Organisasi</span>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-[#d4af37] before:via-[#c5a059]/40 before:to-transparent">
              {portfolioData.experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="relative pl-10 group"
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-1.5 top-3 w-4 h-4 rounded-full bg-[#07080c] border-2 border-[#d4af37] group-hover:bg-[#d4af37] transition-all shadow-[0_0_10px_rgba(212,175,55,0.4)]" />

                  <div className="hogwarts-card p-6 rounded-2xl space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-mono text-[#38bdf8] font-bold">
                        {exp.period}
                      </span>
                      <span className="text-xs text-[#8a95a5] font-mono">
                        {exp.location}
                      </span>
                    </div>

                    <div>
                      <h4 className="font-cinzel text-base font-bold text-[#f5e6be] group-hover:text-gold-gradient transition-colors">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-mono text-[#a8a092] mt-0.5">
                        {exp.organization}
                      </p>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-[#c9c2ad]">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#090d16] border border-[#c5a059]/20 text-[#a8a092]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
