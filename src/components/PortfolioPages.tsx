import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, Download, ExternalLink, FileText, Github, MapPin, PlayCircle, Search, Sparkles, X } from 'lucide-react';
import aboutPhoto from '../../Asset/ABOUT.JPG';
import heroBackdrop from '../../Asset/Hero.JPG';
import { portfolioData, type Project } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { EducationExperienceSection } from './EducationExperienceSection';
import { ContactSection } from './ContactSection';
import { HogwartsHero } from './HogwartsHero';

const navItems = [
  ['about', 'About', 'The Chronicle'],
  ['experience', 'Experience', 'The Annals'],
  ['projects', 'Projects', 'The Vault'],
  ['certifications', 'Certifications', 'The Honors'],
  ['contact', 'Contact', 'Owl Post'],
];

export function PageNav({ activePage, hogwartsStyle = false }: { activePage: string; hogwartsStyle?: boolean }) {
  if (hogwartsStyle) {
    const mode = (
      activePage === 'project' || activePage === 'projects'
        ? 'projects'
        : activePage === 'about'
        ? 'about'
        : activePage === 'experience'
        ? 'experience'
        : activePage === 'certifications'
        ? 'certifications'
        : activePage === 'contact'
        ? 'contact'
        : 'home'
    ) as 'home' | 'projects' | 'about' | 'experience' | 'certifications' | 'contact';

    return <HogwartsHero mode={mode} navOnly />;
  }

  return <header className={`page-nav ${hogwartsStyle ? 'hogwarts-page-nav' : ''}`}>
    <a href="#home" className="page-brand"><span><b>MERISA ANGGI</b><small>THE WIZARDING PORTFOLIO</small></span></a>
    <nav>{navItems.map(([id, label, sub]) => <a key={id} href={`#${id}`} className={id === activePage ? 'nav-item-active' : ''}><b>{label}</b><small>{sub}</small></a>)}</nav>
  </header>;
}

function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <div className="page-intro"><span className="eyebrow"><Sparkles size={14} /> {eyebrow}</span><h1>{title}</h1><div className="filigree-divider"><span>✦</span></div><p>{children}</p></div>;
}

function BackLink() { return <a href="#home" className="back-link"><ArrowLeft size={15} /> Return to the Great Hall</a>; }

export function AboutPage() {
  return <main className="archive-page about-page"><div className="about-backdrop" style={{ backgroundImage: `url(${heroBackdrop})` }} aria-hidden="true" /><HogwartsHero mode="about" navOnly /><div className="page-wrap about-content-wrap"><section className="about-feature"><div className="portrait-frame"><div className="portrait-inner"><img src={aboutPhoto} alt="Merisa Anggi Anggraini saat wisuda" /></div><span className="frame-label">M · ITS 2026</span></div><div className="about-copy"><span className="section-kicker">A portrait of the maker</span><h2>Mathematics, shaped into intelligent systems.</h2><p>Saya lulusan Matematika Institut Teknologi Sepuluh Nopember (ITS) dengan kompetensi kuat di data analytics, machine learning, dan software development.</p><p>Saya berpengalaman menjalankan proyek AI terapan, mulai dari implementasi deep learning untuk computer vision (image deraining dengan RCDNet) hingga peramalan time-series statistik (SARIMA) untuk data klaim nyata di PT TASPEN (Persero).</p><p>Di luar teknis, saya aktif di kepanitiaan dan organisasi kampus: kemitraan di Digistar Club ITS, Kepala Sub-divisi Atcom OMITS 17th, HIMATIKA ITS, UKM Robotika ITS, dan berbagai event lainnya.</p><div className="about-meta"><span><MapPin size={15} /> {portfolioData.personal.location}</span><span><Award size={15} /> Mathematics · Data · AI · Software</span></div><div className="about-actions"><a href="#projects" className="hogwarts-btn">Explore the Vault <ArrowUpRight size={15} /></a><a href={portfolioData.personal.cvUrl} download className="hogwarts-btn about-cv-btn">Download CV <Download size={15} /></a></div></div></section><AboutSkills /></div></main>;
}

function AboutSkills() {
  return <section className="skills-archive"><div className="skills-archive-head"><span className="section-kicker">The Spellbook</span><h2>Skills & Languages</h2><div className="filigree-divider"><span>✦</span></div></div><div className="skills-archive-grid">{portfolioData.skillCategories.map((cat) => <article className="skills-archive-card" key={cat.title}><h3>{cat.title}</h3><div className="skills-archive-tags">{cat.skills.map((skill) => <span key={skill.name}>✦ {skill.name}</span>)}</div></article>)}<article className="skills-archive-card"><h3>Languages</h3><div className="skills-archive-tags">{portfolioData.languages.map((lang) => <span key={lang.name}>✦ {lang.name} · {lang.level}</span>)}</div></article></div></section>;
}

export function ProjectsPage() {
  const videos = [['launch-trailer-t.jpg', 'Official Launch Trailer'], ['cinematic-trailer-t.jpg', 'Official Cinematic Trailer'], ['gameplay-showcase-i-t.jpg', 'Gameplay Showcase I'], ['gameplay-showcase-ii-t.jpg', 'Gameplay Showcase II'], ['sebastian-sallow-t.jpg', 'Sebastian Sallow’s Dark Legacy'], ['behind-the-scenes-t.jpg', 'Official Behind the Scenes'], ['gameplay-reveal-t.jpg', 'Official Gameplay Reveal'], ['announce-trailer-t.jpg', 'Official Reveal Trailer']];
  return <main className="archive-page project-page"><PageNav activePage="projects" hogwartsStyle /><section className="project-hero"><div className="project-hero-image" /><div className="project-hero-shade" /><div className="project-hero-content"><BackLink /><span className="eyebrow"><Sparkles size={14} /> The Vault · Riset & Proyek</span><h1>Project</h1><div className="hero-rule" /><p>Portfolio of experiments, research, and visual stories.</p></div></section><div className="project-page-wrap"><section id="VideoGallery" className="media-section"><div className="media-title"><span className="section-kicker">Moving portraits</span><h2>Video Gallery</h2><p>Rekaman dummy untuk memperlihatkan perjalanan setiap karya dari ide menjadi hasil.</p></div><div className="media-gallery">{videos.map(([image, title]) => <figure className="media-card video" key={image}><a href="#" onClick={(event) => event.preventDefault()}><img src={`https://cdn-hogwartslegacy.warnerbrosgames.com/media/${image}`} alt={title} /><span className="media-icon"><PlayCircle /></span></a><figcaption>{title}</figcaption></figure>)}</div></section><section id="Gallery" className="media-section screenshot-section"><div className="media-title"><span className="section-kicker">The visual archive</span><h2>Gallery</h2><p>Cuplikan visual dari project, riset, dan eksperimen yang sedang dikembangkan.</p></div><div className="media-gallery">{portfolioData.projects.map((project) => <figure className="media-card screenshot" key={project.id}><a href={project.image} target="_blank" rel="noreferrer"><img src={project.image} alt={project.title} /><span className="media-icon"><Search /></span></a><figcaption>{project.title}</figcaption></figure>)}</div></section><section className="project-ledger"><div><span className="section-kicker">Research ledger</span><h2>Selected works</h2></div>{portfolioData.projects.map((project) => <article key={project.id}><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">Read the archive <ExternalLink size={14} /></a></article>)}</section></div></main>;
}

function ProjectList() {
  const projects = portfolioData.projects;
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section className="proj-list" id="all-projects">
      {projects.map((project, index) => (
        <section className="project-stack-item" key={project.id}>
          <div className="about-feature project-feature">
            <div className="project-figure-column">
              <div className="portrait-frame project-portrait-frame">
                <div className="portrait-inner project-portrait-inner">
                  <img src={project.image} alt={project.title} className="project-display-img" loading="lazy" />
                </div>
                <span className="frame-label">0{index + 1} / 0{projects.length} · {project.category}</span>
              </div>
              <div className="project-figure-nav">
                <a href={project.githubUrl || portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="royal-github-link group">
                  <Github size={14} className="royal-github-icon" />
                  <span className="royal-github-text">View on GitHub</span>
                  <ArrowUpRight size={13} className="royal-github-arrow" />
                </a>
              </div>
            </div>

            {project.id === 'rcdnet-deraining' ? (
              <div className="about-copy project-copy">
                <span className="section-kicker">Tugas Akhir {portfolioData.thesis.code} · Jul 2026</span>
                <h2>{project.title}</h2>
                <p className="stack-thesis-title">“{portfolioData.thesis.title}”</p>
                <p className="stack-thesis-meta"><b>Pembimbing</b> {portfolioData.thesis.advisor} · <b>Selesai</b> {portfolioData.thesis.date}</p>
                {portfolioData.thesis.abstract.map((para, i) => <p key={i} className="stack-thesis-abstract">{para}</p>)}
                <div className="stack-thesis-stats">
                  {portfolioData.thesis.highlights.map((h) => (
                    <div key={h.label}><strong>{h.value}</strong><span>{h.label}</span><small>{h.note}</small></div>
                  ))}
                </div>
                <div className="about-meta">
                  <span><Award size={15} /> {project.category}</span>
                  {portfolioData.thesis.keywords.slice(0, 3).map((k) => <span key={k}>✦ {k}</span>)}
                </div>
                <div className="about-actions">
                  <button type="button" className="hogwarts-btn" onClick={() => setSelected(project)}>
                    Lihat Detail <ArrowUpRight size={15} />
                  </button>
                  <a href={portfolioData.thesis.pdfUrl} target="_blank" rel="noopener noreferrer" className="hogwarts-btn about-cv-btn">
                    Baca Skripsi (PDF) <FileText size={15} />
                  </a>
                </div>
              </div>
            ) : (
              <div className="about-copy project-copy">
                <span className="section-kicker">{project.subtitle}</span>
                <h2>{project.title}</h2>
                <ul className="project-stack-bullets">
                  {(project.cvBullets || [project.description]).map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="about-meta">
                  <span><Award size={15} /> {project.category}</span>
                  {project.tags.slice(0, 3).map((tag) => <span key={tag}>✦ {tag}</span>)}
                </div>
                <div className="about-actions">
                  <button type="button" className="hogwarts-btn" onClick={() => setSelected(project)}>
                    Lihat Detail <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      ))}

      <ProjectModal project={selected} isOpen={!!selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export function ProjectsShowcasePage() {
  return (
    <main className="archive-page experience-page projects-showcase-page">
      <div className="experience-backdrop" style={{ backgroundImage: `url(${heroBackdrop})` }} aria-hidden="true" />
      <HogwartsHero mode="projects" navOnly />
      <div className="experience-content-wrap">
        <ProjectList />
      </div>
    </main>
  );
}

export function ExperiencePage() {
  return (
    <main className="archive-page experience-page">
      <div className="experience-backdrop" style={{ backgroundImage: `url(${heroBackdrop})` }} aria-hidden="true" />
      <HogwartsHero mode="experience" navOnly />
      <div className="experience-content-wrap">
        <EducationExperienceSection />
      </div>
    </main>
  );
}

export function CertificationsPage() {
  const certs = portfolioData.certificates;
  const [preview, setPreview] = useState<string | null>(null);
  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setPreview(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [preview]);

  return (
    <main className="archive-page certifications-page">
      <div className="certifications-backdrop" style={{ backgroundImage: `url(${heroBackdrop})` }} aria-hidden="true" />
      <HogwartsHero mode="certifications" navOnly />
      <div className="page-wrap certifications-content-wrap">
        <PageIntro eyebrow="The Honors · Sertifikasi & Kompetensi" title="Marks of Mastery">
          <>Sertifikat pelatihan dan kompetensi yang saya selesaikan, lengkap dengan dokumen aslinya.</>
        </PageIntro>

        <section className="certificate-grid">
          {certs.map((cert) => (
            <article className={`certificate-card group ${cert.image ? 'certificate-card-featured' : ''}`} key={cert.id}>
              {cert.image && (
                <button type="button" className="certificate-preview" onClick={() => setPreview(cert.image!)} aria-label={`Perbesar sertifikat ${cert.title}`}>
                  <img src={cert.image} alt={`Sertifikat ${cert.title} atas nama ${portfolioData.personal.fullName}`} loading="lazy" />
                  <span className="certificate-preview-hint"><Search size={14} /> Klik untuk memperbesar</span>
                </button>
              )}

              <div className="certificate-body">
                <div className="certificate-header">
                  <span className="certificate-category">{cert.category}</span>
                  <span className="certificate-year">{cert.issuedDate || cert.year}</span>
                </div>

                <div className="certificate-main">
                  <div className="certificate-seal">
                    <Award size={24} />
                  </div>
                  <div>
                    <h2 className="certificate-title">{cert.title}</h2>
                    <p className="certificate-issuer">{cert.issuer}</p>
                    {cert.location && <p className="certificate-issuer">{cert.location}</p>}
                  </div>
                </div>

                <p className="certificate-desc">{cert.description}</p>

                {cert.signedBy && <p className="certificate-signer">Ditandatangani oleh {cert.signedBy}</p>}

                <div className="certificate-tags">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="certificate-tag">
                      ✦ {skill}
                    </span>
                  ))}
                </div>

                <div className="certificate-footer">
                  <div className="certificate-badge">
                    <CheckCircle2 size={13} className="text-[#38bdf8]" />
                    <span>{cert.badgeLabel}</span>
                  </div>
                  <div className="certificate-actions">
                    {cert.pdfUrl && (
                      <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className="certificate-link" title="Buka sertifikat (PDF)">
                        <FileText size={12} />
                        <span>PDF</span>
                      </a>
                    )}
                    {cert.credentialUrl && (
                      <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="certificate-link" title="View Credential Archive">
                        <span>Archive</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>

      {preview && (
        <div className="certificate-lightbox" role="dialog" aria-modal="true" onClick={() => setPreview(null)}>
          <button type="button" className="certificate-lightbox-close" onClick={() => setPreview(null)} aria-label="Tutup"><X size={20} /></button>
          <img src={preview} alt="Sertifikat Software Engineer Bootcamp" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}

export function ContactPage() {
  return (
    <main className="archive-page contact-page">
      <div className="contact-backdrop" style={{ backgroundImage: `url(${heroBackdrop})` }} aria-hidden="true" />
      <HogwartsHero mode="contact" navOnly />
      <div className="page-wrap contact-content-wrap">
        <ContactSection />
      </div>
    </main>
  );
}
