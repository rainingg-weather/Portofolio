import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight, BookOpen, Sliders, ExternalLink, ShieldCheck } from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const categories = ['All', 'Computer Vision & AI', 'Applied Mathematics', 'Data Analytics'];

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter((p) => p.category === selectedCategory);

  const flagshipProject = portfolioData.projects.find((p) => p.id === 'rcdnet-deraining');

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(pos);
  };

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-[#07080c] overflow-hidden border-t border-[#c5a059]/15">
      {/* Background Magic Ambiance */}
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-[#38bdf8]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[480px] h-[480px] bg-[#d4af37]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Dual Label */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d121c] border border-[#c5a059]/40 text-[#f5e6be] text-xs font-cinzel tracking-[0.2em] mb-4 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>The Vault of Relics · Riset & Proyek Unggulan</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f5e6be]">
            Featured Researches & <span className="text-cyan-gradient">Applied Works</span>
          </h2>

          <div className="filigree-divider max-w-sm">
            <span>❖</span>
          </div>

          <p className="max-w-2xl text-sm sm:text-base text-[#a8a092] leading-relaxed">
            Arsip riset dan implementasi nyata: dari perancangan arsitektur *deep neural network* untuk pemulihan citra berderau hingga pemodelan statistik sosial dan algoritma optimasi matriks.
          </p>
        </div>

        {/* FLAGSHIP HERO CARD: RCDNet Image Deraining with Interactive Mystic Veil Slider */}
        {flagshipProject && (
          <div className="mb-20">
            <div className="hogwarts-card rounded-3xl p-6 sm:p-8 lg:p-12 corner-clasps border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Info Column */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 text-xs font-cinzel rounded-full bg-[#182030] text-[#38bdf8] border border-[#38bdf8]/40 font-bold tracking-wider">
                        ★ FLAGSHIP UNDERGRADUATE RESEARCH (ITS)
                      </span>
                      <span className="text-xs font-mono text-[#d4af37]">
                        Undergraduate Thesis
                      </span>
                    </div>

                    <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f5e6be] tracking-tight leading-tight">
                      {flagshipProject.title}
                    </h3>
                    <p className="text-sm font-mono text-[#38bdf8] mt-2">
                      {flagshipProject.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#c9c2ad] leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-[#c5a059]/20">
                    <div className="text-center p-3 rounded-xl bg-[#0a0f1a] border border-[#38bdf8]/30">
                      <div className="text-lg sm:text-xl font-bold font-mono text-[#38bdf8]">+3.8 dB</div>
                      <div className="text-[11px] font-cinzel text-[#8a95a5] mt-0.5">PSNR Gain</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-[#0a0f1a] border border-[#d4af37]/30">
                      <div className="text-lg sm:text-xl font-bold font-mono text-[#d4af37]">0.942</div>
                      <div className="text-[11px] font-cinzel text-[#8a95a5] mt-0.5">SSIM Index</div>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-[#0a0f1a] border border-[#c5a059]/30">
                      <div className="text-lg sm:text-xl font-bold font-mono text-[#f5e6be]">32ms</div>
                      <div className="text-[11px] font-cinzel text-[#8a95a5] mt-0.5">1080p Latency</div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => setSelectedProject(flagshipProject)}
                      className="hogwarts-btn flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Buka Bedah Kasus Riset</span>
                    </button>
                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hogwarts-btn-cyan flex items-center gap-1.5"
                    >
                      <span>Diskusi di LinkedIn</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right: Interactive Deraining Before/After Mystic Slider */}
                <div className="lg:col-span-6 flex flex-col items-center">
                  <div className="w-full">
                    <div className="flex items-center justify-between text-xs font-mono text-[#a8a092] mb-2.5">
                      <span className="flex items-center gap-1 text-[#d4af37]">
                        <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                        Citra Berderau Hujan (Input I)
                      </span>
                      <span className="text-[10px] text-[#38bdf8] uppercase tracking-wider">
                        ◄ Geser Bilah Lensa ►
                      </span>
                      <span className="flex items-center gap-1 text-[#38bdf8]">
                        Restorasi RCDNet (Output B)
                        <span className="w-2 h-2 rounded-full bg-[#00e5ff]" />
                      </span>
                    </div>

                    {/* Interactive Comparison Container */}
                    <div
                      className="relative h-[290px] sm:h-[370px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#c5a059]/40 shadow-2xl group"
                      onMouseMove={handleSliderMove}
                      onTouchMove={handleSliderMove}
                    >
                      {/* After (Clean Image) - Underneath */}
                      <img
                        src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=900&q=80"
                        alt="Restored digital image"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-lg bg-[#07080c]/90 backdrop-blur-md border border-[#38bdf8]/50 text-[11px] font-mono text-[#38bdf8]">
                        ✦ RCDNet + Frequency Hint
                      </div>

                      {/* Before (Degraded Image) - Clipped on Top */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=900&q=80"
                          alt="Degraded rain noise"
                          className="absolute inset-0 w-full h-full object-cover max-w-none"
                          style={{ width: '100%', height: '100%' }}
                        />
                        <div className="absolute inset-0 bg-[#07080c]/30 backdrop-contrast-125" />
                        <div className="absolute bottom-4 left-4 z-10 px-3 py-1 rounded-lg bg-[#07080c]/90 backdrop-blur-md border border-[#d4af37]/50 text-[11px] font-mono text-[#d4af37]">
                          Derau Garis Hujan (I = B + R)
                        </div>
                      </div>

                      {/* Ancient Magic Glowing Divider Blade */}
                      <div
                        className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#38bdf8] via-[#fff] to-[#38bdf8] shadow-[0_0_15px_#00e5ff] z-20 pointer-events-none"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a121f] border-2 border-[#38bdf8] shadow-[0_0_15px_#38bdf8] flex items-center justify-center text-[#38bdf8]">
                          <Sliders className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>

                    <p className="text-center text-xs text-[#8a95a5] mt-3 font-mono">
                      Formulasi invers I = B + R dipecah melalui tahapan optimasi jaringan kamus konvolusional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-cinzel font-semibold tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#f5e6be] to-[#c5a059] text-[#07080c] shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105 font-bold'
                  : 'bg-[#0d121c]/80 text-[#a8a092] hover:text-[#f5e6be] hover:bg-[#151c2b] border border-[#c5a059]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grimoire Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hogwarts-card rounded-2xl overflow-hidden flex flex-col justify-between group corner-clasps"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-[#0d121c]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-cinzel font-bold bg-[#07080c]/90 border border-[#c5a059]/40 text-[#f5e6be] tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h4 className="font-cinzel text-lg font-bold text-[#f5e6be] group-hover:text-gold-gradient transition-colors line-clamp-1">
                    {project.title}
                  </h4>
                  <p className="text-xs font-mono text-[#38bdf8] mt-1 mb-3">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-[#a8a092] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#c5a059]/15">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#101624] border border-[#c5a059]/20 text-[#a8a092]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-xl text-xs font-cinzel font-bold text-[#f5e6be] bg-[#101524] hover:bg-gradient-to-r hover:from-[#f5e6be] hover:to-[#c5a059] hover:text-[#07080c] transition-all duration-300 flex items-center justify-center gap-1.5 border border-[#c5a059]/30"
                  >
                    <span>Inspeksi Detail Riset</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
