import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroJpg from '@/assets/Hero.JPG';
import { portfolioData, Project } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { X, Copy, Check, Send, Sliders, ArrowUpRight, GraduationCap, Briefcase, CheckCircle2, Github, BookOpen, Sparkles, ExternalLink, Award, MapPin } from 'lucide-react';

export const HogwartsHero: React.FC<{ mode?: 'home' | 'projects' | 'about' | 'experience' | 'certifications' | 'contact'; navOnly?: boolean }> = ({ mode = 'home', navOnly = false }) => {
  const [activeModal, setActiveModal] = useState<'about' | 'experience' | 'project' | 'certifications' | 'contact' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const projectSlides = portfolioData.projects;
  const [projectSlide, setProjectSlide] = useState(0);
  const [selectedProjectModal, setSelectedProjectModal] = useState<Project | null>(null);
  const currentProject = projectSlides[projectSlide];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(pos);
  };

  const centerTitle =
    mode === 'about'
      ? 'About'
      : mode === 'experience'
      ? 'Experience'
      : mode === 'projects'
      ? 'Project'
      : mode === 'certifications'
      ? 'Certifications'
      : mode === 'contact'
      ? 'Contact'
      : 'Home';

  const centerHref =
    mode === 'about'
      ? '#about'
      : mode === 'experience'
      ? '#experience'
      : mode === 'projects'
      ? '#projects'
      : mode === 'certifications'
      ? '#certifications'
      : mode === 'contact'
      ? '#contact'
      : '#home';

  return (
    <div id="Hero" className={`relative w-screen h-screen h-[100dvh] overflow-hidden bg-black flex flex-col ${mode === 'projects' ? 'project-mode justify-center' : 'justify-between'} items-center ${navOnly ? 'about-nav-only' : ''}`}>
      {/* ================= HERO BACKGROUND IMAGE (Asset/Hero.JPG) ================= */}
      <div className={`absolute inset-0 z-0 overflow-hidden ${mode === 'projects' ? 'project-background' : ''}`}>
        <img
          src={heroJpg}
          alt="Merisa Anggi Anggraini"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
        />
        {/* Cinematic dark scrim for optimal contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/75 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/80 pointer-events-none" />
      </div>

      {/* ================= TOP NAVIGATION BAR (Hogwarts Legacy Navigation Elements) ================= */}
      <div className="navs">
        {/* Primary Nav (Left: About, Experience, Project) */}
        <nav className="top primary d-none d-lg-flex">
          <picture>
            <source srcSet="https://cdn-hogwartslegacy.warnerbrosgames.com/static/nav-bar-bg-left.webp" type="image/webp" />
            <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/nav-bar-bg-left.png" alt="" className="deco-mesh img-fluid" />
          </picture>

          {/* Media -> About */}
          <a
            href={mode === 'about' ? '#home' : '#about'}
            onClick={(e) => { e.preventDefault(); window.location.hash = mode === 'about' ? 'home' : 'about'; }}
            className={mode === 'about' ? 'nav-item-active' : ''}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.33 573.34">
                <g>
                  <rect width="644.33" height="573.34" style={{ opacity: 0 }}></rect>
                  <g>
                    <g>
                      <polygon points="96.61 264.09 79.44 328.16 120.06 287.54 96.61 264.09"></polygon>
                      <path d="M72.2,340.71l22.47-83.86,30.69,30.69Zm26.35-69.37L86.69,315.61l28.07-28.07Z"></path>
                    </g>
                    <path d="M120.06,292.85,94,266.74a3.75,3.75,0,0,1,5.3-5.3l20.8,20.8L213,189.32H348.14a3.75,3.75,0,0,1,0,7.5h-132Z"></path>
                    <g>
                      <polygon points="141.74 309.22 124.57 373.29 165.19 332.67 141.74 309.22"></polygon>
                      <path d="M117.33,385.83,139.8,302l30.69,30.7Zm26.35-69.37-11.87,44.28,28.07-28.07Z"></path>
                    </g>
                    <polygon points="165.19 337.97 139.09 311.87 144.39 306.57 165.19 327.37 258.11 234.45 393.26 234.45 393.26 241.95 261.21 241.95 165.19 337.97"></polygon>
                    <g>
                      <polygon points="321.73 489.21 257.67 506.38 298.28 465.76 321.73 489.21"></polygon>
                      <path d="M245.12,513.63l53.16-53.17,30.7,30.7Zm53.16-42.56-28.07,28.07,44.28-11.87Z"></path>
                    </g>
                    <polygon points="319.08 491.87 292.98 465.76 389 369.74 389 237.69 396.5 237.69 396.5 372.85 303.58 465.76 324.38 486.56 319.08 491.87"></polygon>
                    <path d="M506,345a3.75,3.75,0,0,1-2.65-6.4c61.8-61.8,61.8-162.36,0-224.16s-162.36-61.8-224.16,0a3.75,3.75,0,0,1-5.3-5.3c64.72-64.72,170-64.72,234.76,0s64.72,170,0,234.76A3.7,3.7,0,0,1,506,345Z"></path>
                    <path d="M320.93,314.67a3.75,3.75,0,0,1-2.65-6.4L565.73,60.82a3.75,3.75,0,1,1,5.3,5.3L323.58,313.57A3.74,3.74,0,0,1,320.93,314.67Z"></path>
                    <circle cx="444.66" cy="187.19" r="13.74"></circle>
                  </g>
                </g>
              </svg>
              {mode === 'about' ? (
                <span className="about-nav-home-label">
                  <span className="about-nav-home-text">Home</span>
                  <span className="about-nav-home-width" aria-hidden="true">About</span>
                </span>
              ) : (
                <span>About</span>
              )}
              <svg data-v-051e9a7a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" role="img" aria-hidden="true" focusable="false" className="fa-angle-right svg-inline--fa fa-fw">
                <path data-v-051e9a7a="" d="M219.9 266.7L75.89 426.7c-5.906 6.562-16.03 7.094-22.59 1.188c-6.918-6.271-6.783-16.39-1.188-22.62L186.5 256L52.11 106.7C46.23 100.1 46.75 90.04 53.29 84.1C59.86 78.2 69.98 78.73 75.89 85.29l144 159.1C225.4 251.4 225.4 260.6 219.9 266.7z" style={{ fill: 'currentColor' }}></path>
              </svg>
            </div>
          </a>

          {/* FAQ -> Experience */}
          <a
            href={mode === 'experience' ? '#home' : '#experience'}
            onClick={(e) => { e.preventDefault(); window.location.hash = mode === 'experience' ? 'home' : 'experience'; }}
            className={mode === 'experience' ? 'nav-item-active' : ''}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.33 573.34">
                <g>
                  <rect width="644.33" height="573.34" style={{ opacity: 0 }}></rect>
                  <g>
                    <polygon points="517.2 455.29 235.98 130.57 235.98 452.83 228.48 452.83 228.48 110.45 522.87 450.38 517.2 455.29"></polygon>
                    <polygon points="409.27 455.29 128.05 130.57 128.05 452.83 120.55 452.83 120.55 110.45 414.94 450.38 409.27 455.29"></polygon>
                    <polygon points="336.4 359.69 336.4 456.58 420.31 456.58 336.4 359.69"></polygon>
                    <circle cx="520.03" cy="452.83" r="13.96"></circle>
                    <circle cx="124.3" cy="120.51" r="13.96"></circle>
                  </g>
                </g>
              </svg>
              {mode === 'experience' ? (
                <span className="experience-nav-home-label">
                  <span className="experience-nav-home-text">Home</span>
                  <span className="experience-nav-home-width" aria-hidden="true">Experience</span>
                </span>
              ) : (
                <span>Experience</span>
              )}
              <svg data-v-051e9a7a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" role="img" aria-hidden="true" focusable="false" className="fa-angle-right svg-inline--fa fa-fw">
                <path data-v-051e9a7a="" d="M219.9 266.7L75.89 426.7c-5.906 6.562-16.03 7.094-22.59 1.188c-6.918-6.271-6.783-16.39-1.188-22.62L186.5 256L52.11 106.7C46.23 100.1 46.75 90.04 53.29 84.1C59.86 78.2 69.98 78.73 75.89 85.29l144 159.1C225.4 251.4 225.4 260.6 219.9 266.7z" style={{ fill: 'currentColor' }}></path>
              </svg>
            </div>
          </a>

          {/* Community -> Project */}
          <a
            href={mode === 'projects' ? '#home' : '#projects'}
            onClick={(e) => { e.preventDefault(); window.location.hash = mode === 'projects' ? 'home' : 'projects'; }}
            className={mode === 'projects' ? 'nav-item-active' : ''}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.33 573.34">
                <g>
                  <rect width="644.33" height="573.34" style={{ opacity: 0 }}></rect>
                  <g>
                    <path d="M524.27,428a3.75,3.75,0,0,1-3.75-3.75c0-56.05-54.06-107-99.4-139.8C376.34,252,331,230.31,322.17,226.22c-8.82,4.09-54.18,25.75-99,58.18-45.34,32.84-99.4,83.75-99.4,139.8a3.75,3.75,0,0,1-7.5,0c0-26.32,10.9-53.57,32.38-81,17-21.67,40.61-43.53,70.23-65,50.25-36.38,101.2-59.35,101.71-59.58l1.54-.69,1.53.69c.51.23,51.46,23.2,101.72,59.58,29.61,21.44,53.24,43.3,70.22,65,21.49,27.41,32.38,54.66,32.38,81A3.75,3.75,0,0,1,524.27,428Z"></path>
                    <path d="M221.11,414.8l-1.53-.68c-.51-.23-51.46-23.2-101.72-59.58-29.62-21.44-53.24-43.3-70.22-65-21.49-27.42-32.38-54.66-32.38-81a3.75,3.75,0,1,1,7.5,0c0,56.08,54.11,107,99.5,139.87,44.78,32.41,90.05,54,98.85,58.11,8.82-4.1,54.17-25.75,98.95-58.18,45.35-32.84,99.41-83.75,99.41-139.8a3.75,3.75,0,0,1,7.5,0c0,26.32-10.9,53.56-32.38,81-17,21.67-40.61,43.53-70.23,65-50.25,36.38-101.2,59.35-101.71,59.58Z"></path>
                    <path d="M423.22,414.8l-1.54-.68c-.5-.23-51.46-23.2-101.71-59.58-29.62-21.44-53.25-43.3-70.23-65-21.48-27.42-32.38-54.66-32.38-81a3.75,3.75,0,0,1,7.5,0c0,56,54.06,107,99.41,139.8,44.77,32.43,90.13,54.08,99,58.18,8.82-4.1,54.17-25.75,98.95-58.18,45.34-32.84,99.4-83.75,99.4-139.8a3.75,3.75,0,0,1,7.5,0c0,26.32-10.89,53.56-32.38,81-17,21.67-40.6,43.53-70.22,65-50.26,36.38-101.21,59.35-101.72,59.58Z"></path>
                    <circle cx="322.17" cy="162.65" r="20.13"></circle>
                    <circle cx="221.11" cy="420.76" r="10.07"></circle>
                    <circle cx="19.01" cy="198.52" r="10.07"></circle>
                    <circle cx="423.22" cy="420.76" r="10.07"></circle>
                    <circle cx="625.32" cy="198.52" r="10.07"></circle>
                  </g>
                </g>
              </svg>
              {mode === 'projects' ? (
                <span className="projects-nav-home-label">
                  <span className="projects-nav-home-text">Home</span>
                  <span className="projects-nav-home-width" aria-hidden="true">Project</span>
                </span>
              ) : (
                <span>Project</span>
              )}
              <svg data-v-051e9a7a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" role="img" aria-hidden="true" focusable="false" className="fa-angle-right svg-inline--fa fa-fw">
                <path data-v-051e9a7a="" d="M219.9 266.7L75.89 426.7c-5.906 6.562-16.03 7.094-22.59 1.188c-6.918-6.271-6.783-16.39-1.188-22.62L186.5 256L52.11 106.7C46.23 100.1 46.75 90.04 53.29 84.1C59.86 78.2 69.98 78.73 75.89 85.29l144 159.1C225.4 251.4 225.4 260.6 219.9 266.7z" style={{ fill: 'currentColor' }}></path>
              </svg>
            </div>
          </a>
        </nav>

        {/* Secondary Nav (Right: Certifications, Contact, LinkedIn) */}
        <nav className="top secondary d-none d-lg-flex">
          <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/nav-glow.jpg" alt="" className="glow" />
          <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/nav-glow.jpg" alt="" className="glow two" />
          <picture className="lazy-hidden">
            <source srcSet="https://cdn-hogwartslegacy.warnerbrosgames.com/static/nav-bar-bg-right.webp" type="image/webp" />
            <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/nav-bar-bg-right.png" alt="" className="deco-mesh img-fluid" />
          </picture>

          {/* Stay Connected -> Certifications */}
          <a
            href={mode === 'certifications' ? '#home' : '#certifications'}
            onClick={(e) => { e.preventDefault(); window.location.hash = mode === 'certifications' ? 'home' : 'certifications'; }}
            className={mode === 'certifications' ? 'nav-item-active' : ''}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.33 573.34">
                <g>
                  <rect width="644.33" height="573.34" style={{ opacity: 0 }}></rect>
                  <g>
                    <path d="M322.16,322.11a3.66,3.66,0,0,1-1.87-.51,3.74,3.74,0,0,1-1.37-5.12l83-143.75a3.75,3.75,0,0,1,6.5,3.75l-83,143.75A3.75,3.75,0,0,1,322.16,322.11Z"></path>
                    <g>
                      <path d="M417,440.67a3.7,3.7,0,0,1-2.65-1.1l-187.06-187-187,187a3.75,3.75,0,0,1-5.3-5.3L227.31,241.91,419.67,434.27a3.75,3.75,0,0,1,0,5.3A3.7,3.7,0,0,1,417,440.67Z"></path>
                      <path d="M606.72,440.67a3.7,3.7,0,0,1-2.65-1.1L417,252.52,230,439.57a3.75,3.75,0,0,1-5.3-5.3L417,241.91,609.37,434.27a3.75,3.75,0,0,1-2.65,6.4Z"></path>
                    </g>
                    <path d="M322.17,322.11a3.74,3.74,0,0,1-3.75-3.75v-166a3.75,3.75,0,0,1,7.5,0v166A3.75,3.75,0,0,1,322.17,322.11Z"></path>
                    <path d="M322.17,322.11a3.76,3.76,0,0,1-2.66-6.41L378.2,257a3.75,3.75,0,1,1,5.3,5.3L324.82,321A3.74,3.74,0,0,1,322.17,322.11Z"></path>
                    <path d="M322.17,322.11a3.76,3.76,0,0,1-3.63-4.72L340,237.22a3.75,3.75,0,0,1,7.25,1.94l-21.48,80.17A3.76,3.76,0,0,1,322.17,322.11Z"></path>
                    <path d="M322.16,322.11a3.76,3.76,0,0,1-3.62-2.78l-21.48-80.17a3.75,3.75,0,0,1,7.25-1.94l21.48,80.17a3.76,3.76,0,0,1-3.63,4.72Z"></path>
                    <path d="M322.17,322.11a3.78,3.78,0,0,1-2.66-1.1l-58.68-58.69a3.75,3.75,0,0,1,5.3-5.3l58.69,58.68a3.76,3.76,0,0,1-2.65,6.41Z"></path>
                    <path d="M322.17,322.11a3.75,3.75,0,0,1-3.25-1.88l-83-143.75a3.75,3.75,0,0,1,6.5-3.75l83,143.75A3.74,3.74,0,0,1,324,321.6,3.63,3.63,0,0,1,322.17,322.11Z"></path>
                    <path d="M322.17,156.11a11.72,11.72,0,1,1,11.72-11.72A11.73,11.73,0,0,1,322.17,156.11Zm0-15.94a4.22,4.22,0,1,0,4.22,4.22A4.23,4.23,0,0,0,322.17,140.17Z"></path>
                    <circle cx="343.65" cy="238.19" r="3.99"></circle>
                    <circle cx="300.68" cy="238.19" r="3.99"></circle>
                  </g>
                </g>
              </svg>
              {mode === 'certifications' ? (
                <span className="cert-nav-home-label">
                  <span className="cert-nav-home-text">Home</span>
                  <span className="cert-nav-home-width" aria-hidden="true">Certifications</span>
                </span>
              ) : (
                <span>Certifications</span>
              )}
              <svg data-v-051e9a7a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" role="img" aria-hidden="true" focusable="false" className="fa-angle-right svg-inline--fa fa-fw">
                <path data-v-051e9a7a="" d="M219.9 266.7L75.89 426.7c-5.906 6.562-16.03 7.094-22.59 1.188c-6.918-6.271-6.783-16.39-1.188-22.62L186.5 256L52.11 106.7C46.23 100.1 46.75 90.04 53.29 84.1C59.86 78.2 69.98 78.73 75.89 85.29l144 159.1C225.4 251.4 225.4 260.6 219.9 266.7z" style={{ fill: 'currentColor' }}></path>
              </svg>
            </div>
          </a>

          {/* Contact (Matching all other nav items) */}
          <a
            href={mode === 'contact' ? '#home' : '#contact'}
            className={`d-none d-lg-flex ${mode === 'contact' ? 'nav-item-active' : ''}`}
            onClick={(e) => { e.preventDefault(); window.location.hash = mode === 'contact' ? 'home' : 'contact'; }}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644.33 573.34">
                <g>
                  <rect width="644.33" height="573.34" style={{ opacity: 0 }}></rect>
                  <path d="M545.35,347.17a6,6,0,0,1-6-6C539.35,221.41,441.92,124,322.17,124S105,221.41,105,341.17a6,6,0,0,1-12,0,229.19,229.19,0,0,1,458.37,0A6,6,0,0,1,545.35,347.17Z"></path>
                  <path d="M439.76,347.17H204.57v-6a117.6,117.6,0,1,1,235.19,0Zm-223-12H427.59a105.6,105.6,0,0,0-210.85,0Z"></path>
                  <path d="M322.17,570.35a6,6,0,0,1-6-6V341.17a6,6,0,0,1,12,0V564.35A6,6,0,0,1,322.17,570.35Z"></path>
                  <path d="M351,455a6,6,0,0,1-5.79-4.45L316.37,342.72A6,6,0,1,1,328,339.61L356.84,447.4A6,6,0,0,1,351,455Z"></path>
                  <path d="M433.76,540.45a6,6,0,0,1-5.2-3L317,344.17a6,6,0,1,1,10.39-6L439,531.45a6,6,0,0,1-5.19,9Z"></path>
                  <path d="M401.07,426.07a6,6,0,0,1-4.24-1.75l-78.91-78.91a6,6,0,0,1,8.49-8.49l78.91,78.91a6,6,0,0,1-4.25,10.24Z"></path>
                  <path d="M515.44,458.76a5.93,5.93,0,0,1-3-.81L319.17,346.36a6,6,0,1,1,6-10.39L518.45,447.56a6,6,0,0,1-3,11.2Z"></path>
                  <path d="M430,376.05a6,6,0,0,1-1.56-.21L320.61,347a6,6,0,1,1,3.11-11.59l107.79,28.88a6,6,0,0,1-1.55,11.8Z"></path>
                  <path d="M293.29,455a6,6,0,0,1-5.8-7.56l28.88-107.79A6,6,0,0,1,328,342.72L299.08,450.51A6,6,0,0,1,293.29,455Z"></path>
                  <path d="M210.57,540.45a6,6,0,0,1-5.19-9L317,338.17a6,6,0,1,1,10.39,6L215.77,537.45A6,6,0,0,1,210.57,540.45Z"></path>
                  <path d="M243.26,426.07A6,6,0,0,1,239,415.83l78.91-78.91a6,6,0,0,1,8.49,8.49L247.5,424.32A6,6,0,0,1,243.26,426.07Z"></path>
                  <path d="M128.89,458.76a6,6,0,0,1-3-11.2L319.17,336a6,6,0,0,1,6,10.39L131.88,458A5.93,5.93,0,0,1,128.89,458.76Z"></path>
                  <path d="M214.37,376.05a6,6,0,0,1-1.55-11.8l107.79-28.88A6,6,0,0,1,323.72,347L215.93,375.84A6,6,0,0,1,214.37,376.05Z"></path>
                  <path d="M322.17,175.52a6,6,0,0,1-6-6V9a6,6,0,0,1,12,0V169.52A6,6,0,0,1,322.17,175.52Z"></path>
                  <circle cx="322.17" cy="202.41" r="9"></circle>
                </g>
              </svg>
              {mode === 'contact' ? (
                <span className="contact-nav-home-label">
                  <span className="contact-nav-home-text">Home</span>
                  <span className="contact-nav-home-width" aria-hidden="true">Contact</span>
                </span>
              ) : (
                <span>Contact</span>
              )}
              <svg data-v-051e9a7a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" role="img" aria-hidden="true" focusable="false" className="fa-angle-right svg-inline--fa fa-fw">
                <path data-v-051e9a7a="" d="M219.9 266.7L75.89 426.7c-5.906 6.562-16.03 7.094-22.59 1.188c-6.918-6.271-6.783-16.39-1.188-22.62L186.5 256L52.11 106.7C46.23 100.1 46.75 90.04 53.29 84.1C59.86 78.2 69.98 78.73 75.89 85.29l144 159.1C225.4 251.4 225.4 260.6 219.9 266.7z" style={{ fill: 'currentColor' }}></path>
              </svg>
            </div>
          </a>
        </nav>

        {/* Center Brand / Active Page Display */}
        <a
          href={centerHref}
          onClick={(e) => { e.preventDefault(); window.location.hash = centerHref.replace('#', ''); }}
          className="project-nav-brand group"
          aria-label={centerTitle}
        >
          <span className="nav-brand-title">{centerTitle}</span>
        </a>

        {/* Decorative side bars */}
        <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/bar-left.png" alt="" className="nav-bar left" />
        <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/bar-right.png" alt="" className="nav-bar right" />
      </div>

      {/* Decorative corner ornaments */}
      <picture>
        <source srcSet="https://cdn-hogwartslegacy.warnerbrosgames.com/static/corner-left.webp" type="image/webp" />
        <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/corner-left.png" alt="" className="nav-bar-corner left img-fluid" />
      </picture>
      <picture>
        <source srcSet="https://cdn-hogwartslegacy.warnerbrosgames.com/static/corner-right.webp" type="image/webp" />
        <img src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/corner-right.png" alt="" className="nav-bar-corner right img-fluid" />
      </picture>

      {/* Mobile Menu Toggle Button (Top Right for Small Screens) */}
      <div className="absolute top-4 right-4 z-40 lg:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2.5 rounded-lg bg-[#0d121c]/90 border border-[#c5a059]/40 text-[#f5e6be] shadow-xl flex items-center gap-2"
        >
          <span className="font-cinzel text-xs font-bold uppercase tracking-wider">Archive</span>
          <span className="text-sm">☰</span>
        </button>
      </div>

      {/* ================= HERO TITLE & SUBTITLE (Bottom Center, Home Only) ================= */}
      {mode === 'home' && (
        <div className="logo absolute bottom-8 sm:bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center text-center px-4 w-full max-w-5xl pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="enter flex flex-col items-center justify-center w-full"
          >
            {/* Main Name Wordmark */}
            <h1 className="font-cinzel font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.14em] text-gold-gradient drop-shadow-[0_4px_30px_rgba(0,0,0,0.98)] leading-[1.08] text-center">
              MERISA ANGGI ANGGRAINI
            </h1>

            {/* Hogwarts Legacy Ornamental Divider Rule */}
            <div className="my-2.5 sm:my-3.5 flex items-center justify-center w-full max-w-lg">
              <img
                src="https://cdn-hogwartslegacy.warnerbrosgames.com/static/rule-a.png"
                alt=""
                className="h-[4px] w-full max-w-[280px] sm:max-w-[420px] opacity-90 drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
              />
            </div>

            {/* Expertise & Specialization: Unified Subtitle */}
            <div className="font-cinzel text-xs sm:text-sm md:text-base font-bold tracking-[0.24em] text-[#f5e6be] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span>AUTOMATION SOFTWARE DEVELOPMENT</span>
              <span className="hidden sm:inline text-[#c5a059] opacity-70">◆</span>
              <span className="text-[#dfcaa0] font-medium tracking-[0.2em]">APPLIED MATHEMATICS &amp; AI</span>
            </div>
          </motion.div>
        </div>
      )}

      {/* ================= PROJECT FOREGROUND SHOWCASE (mode === 'projects') ================= */}
      {mode === 'projects' && (
        <section className="project-home-content">
          <div className="page-wrap project-content-wrap">
            <section className="about-feature project-feature">
              {/* Left Side: Portrait Frame + Minimalist Royal Controls (Di bawah tengah figure) */}
              <div className="project-figure-column">
                <div className="portrait-frame project-portrait-frame">
                  <div className="portrait-inner project-portrait-inner">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.img
                        key={currentProject.id}
                        src={currentProject.image}
                        alt={currentProject.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="project-display-img"
                      />
                    </AnimatePresence>
                  </div>
                  <span className="frame-label">
                    0{projectSlide + 1} / 0{projectSlides.length} · {currentProject.category}
                  </span>
                </div>

                {/* Minimalist Royal GitHub Link & Arrow Controls (Under center of figure) */}
                <div className="project-figure-nav">
                  <button
                    onClick={() => setProjectSlide((projectSlide - 1 + projectSlides.length) % projectSlides.length)}
                    className="royal-arrow-btn"
                    aria-label="Previous project"
                    title="Previous Project"
                  >
                    ‹
                  </button>

                  <a
                    href={currentProject.githubUrl || portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="royal-github-link group"
                  >
                    <Github size={14} className="royal-github-icon" />
                    <span className="royal-github-text">View on GitHub</span>
                    <ArrowUpRight size={13} className="royal-github-arrow" />
                  </a>

                  <button
                    onClick={() => setProjectSlide((projectSlide + 1) % projectSlides.length)}
                    className="royal-arrow-btn"
                    aria-label="Next project"
                    title="Next Project"
                  >
                    ›
                  </button>
                </div>
              </div>

              {/* Right Side: Copy with safe boundaries & responsive title */}
              <div className="about-copy project-copy">
                <span className="section-kicker">{currentProject.subtitle}</span>
                <h2>{currentProject.title}</h2>
                <p>{currentProject.description}</p>
                <div className="about-meta">
                  <span><MapPin size={15} /> ITS Surabaya</span>
                  <span><Award size={15} /> {currentProject.category}</span>
                  {currentProject.tags.slice(0, 3).map((tag) => (
                    <span key={tag}>✦ {tag}</span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>
      )}

      {/* ================= MOBILE DRAWER FOR 5 NAV ITEMS ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl p-6 flex flex-col justify-between lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-[#c5a059]/25 pb-4">
              <span className="font-cinzel text-sm font-bold text-[#f5e6be] tracking-widest uppercase">
                Merisa Anggi Archive
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#f5e6be] border border-[#c5a059]/40 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-3 my-auto">
              {[
                { key: 'home', label: 'Home', sub: 'Kembali ke Beranda Utama' },
                { key: 'about', label: 'About', sub: 'Profil & Filosofi' },
                { key: 'experience', label: 'Experience', sub: 'Riwayat Karir & Studi' },
                { key: 'projects', label: 'Project', sub: 'Riset RCDNet & Karya' },
                { key: 'certifications', label: 'Certifications', sub: 'Keahlian & Perkakas' },
                { key: 'contact', label: 'Contact', sub: 'Inisiasi Kolaborasi' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.location.hash = item.key;
                  }}
                  className={`p-4 rounded-xl border text-left flex items-center justify-between transition-colors ${
                    item.key === mode || (mode === 'home' && item.key === 'home')
                      ? 'bg-[#151d2f] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
                      : 'bg-[#0e1422] border-[#c5a059]/25 hover:border-[#d4af37]'
                  }`}
                >
                  <span className={`font-cinzel text-base font-bold ${
                    item.key === mode || (mode === 'home' && item.key === 'home')
                      ? 'text-[#fff4d2]'
                      : 'text-[#f5e6be]'
                  }`}>
                    {item.label}
                  </span>
                  <span className="text-xs font-mono text-[#38bdf8]">
                    {item.sub}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-center text-[10px] font-mono text-[#8a95a5] pt-4 border-t border-[#c5a059]/20">
              ITS Mathematics · Surabaya, Indonesia
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= INTERACTIVE GRIMOIRE MODALS ================= */}

      {/* 1. ABOUT MODAL */}
      <AnimatePresence>
        {activeModal === 'about' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="grimoire-modal relative w-full max-w-3xl max-h-[88vh] rounded-3xl p-6 sm:p-10 overflow-y-auto text-[#e8e1d1] my-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#07080c] border border-[#c5a059]/40 text-[#f5e6be] hover:border-[#d4af37]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel text-xs font-bold text-[#d4af37] tracking-widest uppercase">
                  THE SCHOLAR'S CHRONICLE
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient mb-4">
                About Merisa Anggi Anggraini
              </h2>
              <div className="filigree-divider my-2"><span>❖</span></div>

              <div className="space-y-4 text-sm sm:text-base text-[#c9c2ad] leading-relaxed my-6">
                <p>
                  Saya adalah lulusan Departemen Matematika dari <strong className="text-[#f5e6be]">Institut Teknologi Sepuluh Nopember (ITS)</strong>, dengan spesialisasi pada rekayasa kecerdasan buatan (*Artificial Intelligence*), visi komputer (*Computer Vision*), serta pengembangan otomasi perangkat lunak (*Automation Software Development*).
                </p>
                <p>
                  Pada penelitian sarjana saya, saya merancang dan meneliti model <strong className="text-[#38bdf8]">Rain Convolutional Dictionary Network (RCDNet)</strong> berpandukan *frequency hint* untuk memecahkan persoalan restorasi citra digital berderau hujan lebat.
                </p>
                <p>
                  Kombinasi latar belakang matematika analitis yang kokoh dengan keterampilan pemrograman modern (Python, PyTorch, OpenCV, Linux) memungkinkan saya membangun arsitektur perangkat lunak cerdas yang efisien, terukur, dan memiliki kejelasan interpretasi algoritma (*explainable AI*).
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6">
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#c5a059]/25">
                  <h4 className="font-cinzel text-sm font-bold text-[#f5e6be]">Mathematical Modeling</h4>
                  <p className="text-xs text-[#8a95a5] mt-1">Aljabar Linier, SVD, NMF, Optimasi Konveks, dan Metode Numerik.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#38bdf8]/25">
                  <h4 className="font-cinzel text-sm font-bold text-[#38bdf8]">Computer Vision &amp; CNNs</h4>
                  <p className="text-xs text-[#8a95a5] mt-1">RCDNet, Image Restoration, Feature Extraction, dan Deep Learning.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#38bdf8]/25">
                  <h4 className="font-cinzel text-sm font-bold text-[#38bdf8]">Software Automation</h4>
                  <p className="text-xs text-[#8a95a5] mt-1">Automasi pipeline data, scripting Python, pengolahan citra otomatis.</p>
                </div>
                <div className="p-4 rounded-xl bg-[#090d16] border border-[#c5a059]/25">
                  <h4 className="font-cinzel text-sm font-bold text-[#f5e6be]">Statistical Data Science</h4>
                  <p className="text-xs text-[#8a95a5] mt-1">Analisis multivariat, hypothesis testing, EDA, dan visualisasi.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#c5a059]/20 flex justify-between items-center text-xs font-mono text-[#8a95a5]">
                <span>Departemen Matematika ITS · Surabaya</span>
                <button
                  onClick={() => setActiveModal(null)}
                  className="hogwarts-btn !py-2 !px-4 !text-[11px]"
                >
                  Close Chronicle
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. EXPERIENCE MODAL */}
      <AnimatePresence>
        {activeModal === 'experience' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="grimoire-modal relative w-full max-w-3xl max-h-[88vh] rounded-3xl p-6 sm:p-10 overflow-y-auto text-[#e8e1d1] my-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#07080c] border border-[#c5a059]/40 text-[#f5e6be] hover:border-[#d4af37]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel text-xs font-bold text-[#d4af37] tracking-widest uppercase">
                  THE SCHOLASTIC ANNALS
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
                Education &amp; Experience Track
              </h2>
              <div className="filigree-divider my-2"><span>❖</span></div>

              {/* Education section */}
              <div className="my-6 space-y-4">
                <h3 className="font-cinzel text-sm font-bold text-[#38bdf8] uppercase tracking-wider flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" /> Formal Education
                </h3>
                <div className="p-5 rounded-2xl bg-[#090d16] border border-[#c5a059]/30">
                  <div className="flex justify-between items-center text-xs font-mono text-[#8a95a5]">
                    <span className="text-[#d4af37] font-bold">2022 — 2026</span>
                    <span>Surabaya, Indonesia</span>
                  </div>
                  <h4 className="font-cinzel text-lg font-bold text-[#f5e6be] mt-1">
                    Bachelor of Science (S.Mat) in Mathematics
                  </h4>
                  <p className="text-xs font-mono text-[#38bdf8]">Institut Teknologi Sepuluh Nopember (ITS)</p>
                  <p className="text-xs text-[#a8a092] mt-2">
                    Skripsi: <em>"Rain Convolutional Dictionary Network (RCDNet) Dengan Frequency Hint Untuk Menghilangkan Noise Hujan Pada Citra Digital"</em>
                  </p>
                </div>
              </div>

              {/* Experience list */}
              <div className="my-6 space-y-4">
                <h3 className="font-cinzel text-sm font-bold text-[#d4af37] uppercase tracking-wider flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Professional &amp; Research Track
                </h3>
                {portfolioData.experiences.map((exp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#090d16] border border-[#c5a059]/20 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono text-[#8a95a5]">
                      <span className="text-[#38bdf8] font-bold">{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                    <h4 className="font-cinzel text-base font-bold text-[#f5e6be]">{exp.role}</h4>
                    <p className="text-xs font-mono text-[#a8a092]">{exp.organization}</p>
                    <ul className="space-y-1.5 pt-1 text-xs text-[#c9c2ad]">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-1.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#c5a059]/20 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="hogwarts-btn !py-2 !px-4 !text-[11px]"
                >
                  Close Annals
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. PROJECT MODAL */}
      <AnimatePresence>
        {activeModal === 'project' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="grimoire-modal relative w-full max-w-4xl max-h-[88vh] rounded-3xl p-6 sm:p-10 overflow-y-auto text-[#e8e1d1] my-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#07080c] border border-[#c5a059]/40 text-[#f5e6be] hover:border-[#d4af37]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel text-xs font-bold text-[#38bdf8] tracking-widest uppercase">
                  THE VAULT OF RELICS &amp; RESEARCH
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
                Featured Research: RCDNet Image Deraining
              </h2>
              <div className="filigree-divider my-2"><span>❖</span></div>

              {/* Flagship Interactive Slider */}
              <div className="my-6 p-4 rounded-2xl bg-[#090d16] border border-[#c5a059]/35">
                <div className="flex items-center justify-between text-xs font-mono text-[#a8a092] mb-2">
                  <span className="text-[#d4af37]">Citra Derau Hujan (Input I)</span>
                  <span className="text-[10px] text-[#38bdf8] uppercase">◄ Geser Bilah Lensa ►</span>
                  <span className="text-[#38bdf8]">Restorasi RCDNet (Output B)</span>
                </div>

                <div
                  className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden cursor-ew-resize select-none border border-[#c5a059]/40"
                  onMouseMove={handleSliderMove}
                  onTouchMove={handleSliderMove}
                >
                  {/* Clean Image */}
                  <img
                    src="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=900&q=80"
                    alt="Restored"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1 rounded bg-black/80 border border-[#38bdf8]/50 text-[10px] font-mono text-[#38bdf8]">
                    RCDNet + Frequency Hint (+3.8 dB PSNR)
                  </div>

                  {/* Degraded Image */}
                  <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
                    <img
                      src="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=900&q=80"
                      alt="Degraded"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%', height: '100%' }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-3 left-3 z-10 px-2.5 py-1 rounded bg-black/80 border border-[#d4af37]/50 text-[10px] font-mono text-[#d4af37]">
                      Input I = B + R (Rain Noise)
                    </div>
                  </div>

                  {/* Divider Blade */}
                  <div
                    className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#38bdf8] via-white to-[#38bdf8] shadow-[0_0_12px_#38bdf8] z-20 pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#0a121f] border-2 border-[#38bdf8] flex items-center justify-center text-[#38bdf8] text-[10px]">
                      <Sliders className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Metrics */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-[#090d16] border border-[#38bdf8]/30 text-center">
                  <div className="text-xl font-bold font-mono text-[#38bdf8]">+3.8 dB</div>
                  <div className="text-[10px] font-cinzel text-[#8a95a5]">PSNR Improvement</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#090d16] border border-[#d4af37]/30 text-center">
                  <div className="text-xl font-bold font-mono text-[#d4af37]">0.942</div>
                  <div className="text-[10px] font-cinzel text-[#8a95a5]">SSIM Structural Index</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#090d16] border border-[#c5a059]/30 text-center">
                  <div className="text-xl font-bold font-mono text-[#f5e6be]">32ms</div>
                  <div className="text-[10px] font-cinzel text-[#8a95a5]">Inference / 1080p Frame</div>
                </div>
              </div>

              {/* Other projects */}
              <div className="space-y-3 mb-6">
                <h3 className="font-cinzel text-sm font-bold text-[#f5e6be] uppercase tracking-wider">
                  Additional Research &amp; Applied Systems
                </h3>
                {portfolioData.projects.filter(p => p.id !== 'rcdnet-deraining').map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-[#090d16] border border-[#c5a059]/20 flex justify-between items-center">
                    <div>
                      <h4 className="font-cinzel text-sm font-bold text-[#f5e6be]">{proj.title}</h4>
                      <p className="text-xs text-[#8a95a5] mt-0.5">{proj.subtitle}</p>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-[#131b29] border border-[#38bdf8]/30 text-[#38bdf8]">
                      {proj.category}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#c5a059]/20 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="hogwarts-btn !py-2 !px-4 !text-[11px]"
                >
                  Close Vault
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. CERTIFICATIONS & SKILLS MODAL */}
      <AnimatePresence>
        {activeModal === 'certifications' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="grimoire-modal relative w-full max-w-3xl max-h-[88vh] rounded-3xl p-6 sm:p-10 overflow-y-auto text-[#e8e1d1] my-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#07080c] border border-[#c5a059]/40 text-[#f5e6be] hover:border-[#d4af37]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel text-xs font-bold text-[#d4af37] tracking-widest uppercase">
                  ARCANA OF COMPETENCIES
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
                Certifications, Skills &amp; Toolsets
              </h2>
              <div className="filigree-divider my-2"><span>❖</span></div>

              <div className="my-6 space-y-6">
                {portfolioData.skillCategories.map((cat, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#090d16] border border-[#c5a059]/25 space-y-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-cinzel text-base font-bold text-[#f5e6be]">{cat.title}</h4>
                      <span className="text-[10px] font-mono text-[#38bdf8]">{cat.skills.length} spesialisasi</span>
                    </div>
                    <p className="text-xs text-[#8a95a5]">{cat.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {cat.skills.map((s) => (
                        <div key={s.name} className="p-2.5 rounded-lg bg-[#07080c] border border-[#c5a059]/15 flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#c9c2ad] flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                            {s.name}
                          </span>
                          <span className="text-[11px] font-mono font-bold text-[#d4af37]">{s.level}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#c5a059]/20 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="hogwarts-btn !py-2 !px-4 !text-[11px]"
                >
                  Close Archive
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. CONTACT MODAL */}
      <AnimatePresence>
        {activeModal === 'contact' && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="grimoire-modal relative w-full max-w-2xl max-h-[88vh] rounded-3xl p-6 sm:p-10 overflow-y-auto text-[#e8e1d1] my-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#07080c] border border-[#c5a059]/40 text-[#f5e6be] hover:border-[#d4af37]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-cinzel text-xs font-bold text-[#38bdf8] tracking-widest uppercase">
                  THE OWL POST DISPATCH
                </span>
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient mb-2">
                Initiate Collaboration
              </h2>
              <div className="filigree-divider my-2"><span>❖</span></div>

              {/* Status and copy email */}
              <div className="my-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#091524] border border-[#38bdf8]/40 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-ping" />
                    <span className="text-xs font-mono font-bold text-[#38bdf8]">
                      {portfolioData.personal.status}
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#090d16] border border-[#c5a059]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#8a95a5] uppercase block">Direct Email</span>
                    <span className="text-sm font-mono text-[#f5e6be] select-all">{portfolioData.personal.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-[#141b2c] border border-[#c5a059]/40 text-[#f5e6be] hover:border-[#d4af37]"
                  >
                    {copied ? <Check className="w-4 h-4 text-[#00e5ff]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex gap-3">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hogwarts-btn flex-1 !py-3 flex items-center justify-center gap-2"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hogwarts-btn-cyan flex-1 !py-3 flex items-center justify-center gap-2"
                  >
                    <span>GitHub Archive</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Quick message form */}
              <div className="my-6 pt-4 border-t border-[#c5a059]/20">
                <h4 className="font-cinzel text-sm font-bold text-[#f5e6be] mb-3">Send a Direct Message</h4>
                {formSubmitted ? (
                  <div className="p-4 rounded-xl bg-[#091524] border border-[#38bdf8]/50 text-center text-xs text-[#38bdf8]">
                    Pesan Anda berhasil dikirim! Saya akan membalas segera.
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nama Lengkap / Instansi"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07080c] border border-[#c5a059]/30 text-xs text-[#f5e6be] font-mono focus:border-[#d4af37] focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Alamat Email"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07080c] border border-[#c5a059]/30 text-xs text-[#f5e6be] font-mono focus:border-[#d4af37] focus:outline-none"
                    />
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tulis pesan atau tawaran kolaborasi..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#07080c] border border-[#c5a059]/30 text-xs text-[#f5e6be] font-mono focus:border-[#d4af37] focus:outline-none resize-none"
                    />
                    <button
                      type="submit"
                      className="hogwarts-btn w-full !py-3 flex items-center justify-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Missive</span>
                    </button>
                  </form>
                )}
              </div>

              <div className="pt-4 border-t border-[#c5a059]/20 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="hogwarts-btn-cyan !py-2 !px-4 !text-[11px]"
                >
                  Close Post
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Case Study Artifact Modal */}
      <ProjectModal
        project={selectedProjectModal}
        isOpen={!!selectedProjectModal}
        onClose={() => setSelectedProjectModal(null)}
      />
    </div>
  );
};

export default HogwartsHero;
