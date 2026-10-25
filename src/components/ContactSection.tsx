import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Copy, Check, Send, MapPin, ArrowUpRight, Github } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="relative w-full">
      {/* Page Header (Consistent with About, Experience, and Certifications) */}
      <div className="page-intro">
        <span className="eyebrow">
          <Mail size={14} /> The Owl Post · Kontak &amp; Kolaborasi
        </span>
        <h1>Initiate an Inquiry</h1>
        <div className="filigree-divider"><span>✦</span></div>
        <p>
          Terbuka untuk kolaborasi riset kecerdasan buatan, rekayasa model computer vision, konsultasi analitika data, maupun peluang karir profesional.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mt-6">
        {/* Left Column: Direct Inquiries & Profile */}
        <div className="lg:col-span-5 space-y-6">
          <div className="hogwarts-card p-6 sm:p-8 rounded-2xl relative overflow-hidden backdrop-blur-xl bg-[#0b0f19]/85 border border-[#c5a059]/35 shadow-[0_16px_45px_rgba(0,0,0,0.8)] space-y-6">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#38bdf8] block mb-1">
                Direct Communication
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#f5e6be]">
                Inquiry Dispatch
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#b8b1a3] leading-relaxed">
              Lulusan Departemen Matematika <strong className="text-[#f5e6be]">Institut Teknologi Sepuluh Nopember (ITS)</strong>. Siap berkontribusi pada peran <strong className="text-[#38bdf8]">AI/ML Engineer</strong>, <strong className="text-[#f5e6be]">Computer Vision Specialist</strong>, dan <strong className="text-[#d4af37]">Data Scientist</strong>.
            </p>

            {/* Direct Email Box */}
            <div className="p-4 rounded-xl bg-[#070b13] border border-[#c5a059]/25 space-y-2">
              <div className="text-[11px] font-mono text-[#8a95a5] flex items-center justify-between">
                <span>Official Electronic Mail</span>
                <span className="text-[10px] text-[#d4af37]">{copied ? 'Tersalin!' : 'Klik Salin'}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-mono text-[#f5e6be] truncate select-all">
                  {portfolioData.personal.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#141b2c] hover:bg-[#d4af37] hover:text-[#07080c] text-[#f5e6be] border border-[#c5a059]/30 transition-all shrink-0 cursor-pointer"
                  aria-label="Salin alamat email"
                  title="Salin email"
                >
                  {copied ? <Check className="w-4 h-4 text-[#38bdf8]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & Academic Meta */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#a8a092] pt-1">
              <MapPin size={14} className="text-[#d4af37] shrink-0" />
              <span>Surabaya, Jawa Timur, Indonesia</span>
            </div>

            {/* Royal Social Links (Minimalist royal font, no button background) */}
            <div className="pt-4 border-t border-[#c5a059]/20 flex flex-col gap-3">
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="royal-github-link group !text-xs !justify-start !w-fit"
              >
                <Linkedin size={15} className="royal-github-icon" />
                <span className="royal-github-text">Connect on LinkedIn</span>
                <ArrowUpRight size={13} className="royal-github-arrow" />
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="royal-github-link group !text-xs !justify-start !w-fit"
              >
                <Github size={15} className="royal-github-icon" />
                <span className="royal-github-text">Explore GitHub Archive</span>
                <ArrowUpRight size={13} className="royal-github-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Dispatch Form */}
        <div className="lg:col-span-7">
          <div className="hogwarts-card p-6 sm:p-9 rounded-2xl relative overflow-hidden backdrop-blur-xl bg-[#0b0f19]/85 border border-[#c5a059]/35 shadow-[0_16px_45px_rgba(0,0,0,0.8)]">
            <div className="mb-6">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#38bdf8] block mb-1">
                Direct Message
              </span>
              <h3 className="font-cinzel text-xl font-bold text-[#f5e6be]">
                Send an Inquiry
              </h3>
              <p className="text-xs text-[#8a95a5] mt-1">
                Sampaikan pesan Anda terkait proyek, peran tim, konsultasi teknis, atau peluang kolaborasi.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl bg-[#091524] border border-[#38bdf8]/40 text-center space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#112438] text-[#38bdf8] flex items-center justify-center mx-auto border border-[#38bdf8]/40 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-cinzel text-lg font-bold text-[#f5e6be]">
                  Pesan Berhasil Terkirim
                </h4>
                <p className="text-xs text-[#a8a092] max-w-sm mx-auto">
                  Terima kasih telah menghubungi. Saya akan membaca pesan Anda dan memberikan tanggapan sesegera mungkin.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-cinzel text-[#d4af37] mb-1.5 uppercase tracking-wider">
                    Nama Lengkap / Instansi
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Dr. Hendra / Tech Recruiter / AI Team Lead"
                    className="w-full px-4 py-3 rounded-xl bg-[#07080c] border border-[#c5a059]/30 text-xs sm:text-sm text-[#f5e6be] placeholder:text-[#8a95a5]/40 focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-[#d4af37] mb-1.5 uppercase tracking-wider">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#07080c] border border-[#c5a059]/30 text-xs sm:text-sm text-[#f5e6be] placeholder:text-[#8a95a5]/40 focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-cinzel text-[#d4af37] mb-1.5 uppercase tracking-wider">
                    Detail Pesan / Kerjasama
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan tentang proyek, tantangan teknis, atau peran yang ingin didiskusikan..."
                    className="w-full px-4 py-3 rounded-xl bg-[#07080c] border border-[#c5a059]/30 text-xs sm:text-sm text-[#f5e6be] placeholder:text-[#8a95a5]/40 focus:outline-none focus:border-[#d4af37] focus:shadow-[0_0_12px_rgba(212,175,55,0.3)] transition-all resize-none font-mono"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="hogwarts-btn w-full !py-3 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Royal Clean Footer */}
      <div className="mt-20 pt-8 border-t border-[#c5a059]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8a95a5]">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} {portfolioData.personal.fullName}, S.Mat.</span>
          <span className="hidden sm:inline">· Departemen Matematika ITS Surabaya</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[#38bdf8]">Surabaya, Indonesia</span>
          <a href="#home" className="hover:text-[#d4af37] transition-colors">
            Kembali ke Beranda ↑
          </a>
        </div>
      </div>
    </section>
  );
};
