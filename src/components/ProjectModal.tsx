import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, BarChart3, Binary, Layers } from 'lucide-react';
import { Project, portfolioData } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#07080c]/85 backdrop-blur-xl -z-10"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#090d16] border border-[#c5a059]/40 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col my-auto corner-clasps"
          >
            {/* Header with image */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-[#090d16]/70 to-transparent" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#07080c]/80 hover:bg-[#1a2233] text-[#f5e6be] border border-[#c5a059]/40 transition-colors shadow-lg"
                aria-label="Tutup modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Badge & Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-cinzel font-bold bg-[#141d2e] border border-[#38bdf8]/50 text-[#38bdf8] tracking-wider">
                  {project.category}
                </span>
                <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#f5e6be] mt-2">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#38bdf8] font-mono mt-1">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-[#e8e1d1]">
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#101624] border border-[#c5a059]/25 text-[#a8a092]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Summary Description */}
              <div className="text-sm md:text-base leading-relaxed text-[#c9c2ad]">
                {project.description}
              </div>

              {/* Detailed Case Study */}
              {project.detailedCaseStudy && (
                <div className="space-y-6 pt-4 border-t border-[#c5a059]/20">
                  {/* Background & Problem */}
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#d4af37]" /> Problem Formulation & Background
                    </h3>
                    <p className="text-sm text-[#a8a092] leading-relaxed">
                      {project.detailedCaseStudy.background}
                    </p>
                  </div>

                  {/* Methodology */}
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#38bdf8] flex items-center gap-2">
                      <Binary className="w-4 h-4 text-[#38bdf8]" /> Methodology & Proposed Framework
                    </h3>
                    <p className="text-sm text-[#a8a092] leading-relaxed">
                      {project.detailedCaseStudy.methodology}
                    </p>
                  </div>

                  {/* Mathematical Formulation */}
                  <div className="p-4 rounded-xl bg-[#07080c] border border-[#38bdf8]/40 font-mono text-xs sm:text-sm text-[#38bdf8] overflow-x-auto shadow-inner">
                    <div className="text-[10px] text-[#d4af37] font-cinzel uppercase tracking-wider mb-1">
                      Mathematical Objective Formulation:
                    </div>
                    <code>{project.detailedCaseStudy.mathematicalModel}</code>
                  </div>

                  {/* Empirical Metrics */}
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#f5e6be] flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[#d4af37]" /> Empirical Validation & Metrics
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                      {project.detailedCaseStudy.metrics.map((m) => (
                        <div key={m.label} className="p-3.5 rounded-xl bg-[#0e1422] border border-[#c5a059]/30 text-center">
                          <div className="text-lg font-bold text-[#f5e6be] font-mono">{m.value}</div>
                          <div className="text-xs text-[#8a95a5] mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Takeaways */}
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-sm font-bold uppercase tracking-wider text-[#38bdf8] flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#38bdf8]" /> Key Findings & Scientific Takeaways
                    </h3>
                    <ul className="space-y-2 text-sm text-[#a8a092]">
                      {project.detailedCaseStudy.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-6 border-t border-[#c5a059]/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hogwarts-btn !py-2.5 !px-5 flex items-center gap-2"
                  >
                    <span>Discuss on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={onClose}
                    className="hogwarts-btn-cyan !py-2.5 !px-5"
                  >
                    Tutup Arsip
                  </button>
                </div>
                <span className="text-[11px] font-mono text-[#8a95a5]">
                  Departemen Matematika ITS · Surabaya
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
