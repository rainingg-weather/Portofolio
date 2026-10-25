import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, ExternalLink, MapPin, PlayCircle, Search, Sparkles } from 'lucide-react';
import aboutPhoto from '../../Asset/ABOUT.JPG';
import heroBackdrop from '../../Asset/Hero.JPG';
import { portfolioData } from '@/data/portfolioData';
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
  return <main className="archive-page about-page"><div className="about-backdrop" style={{ backgroundImage: `url(${heroBackdrop})` }} aria-hidden="true" /><HogwartsHero mode="about" navOnly /><div className="page-wrap about-content-wrap"><section className="about-feature"><div className="portrait-frame"><div className="portrait-inner"><img src={aboutPhoto} alt="Merisa Anggi Anggraini saat wisuda" /></div><span className="frame-label">M · ITS 2026</span></div><div className="about-copy"><span className="section-kicker">A portrait of the maker</span><h2>Mathematics, shaped into intelligent systems.</h2><p>Perjalanan saya berawal dari Matematika di Institut Teknologi Sepuluh Nopember. Di sana, saya belajar membaca pola, menguji asumsi, dan menyusun solusi dengan teliti.</p><p>Kini, saya berfokus pada Computer Vision, Deep Learning, dan pengembangan otomasi perangkat lunak. Riset skripsi saya mengeksplorasi RCDNet dengan <i>frequency hint</i> untuk memulihkan citra dari artefak hujan.</p><div className="about-meta"><span><MapPin size={15} /> Surabaya, Indonesia</span><span><Award size={15} /> Applied Mathematics · AI</span></div><a href="#projects" className="hogwarts-btn">Explore the Vault <ArrowUpRight size={15} /></a></div></section></div></main>;
}

export function ProjectsPage() {
  const videos = [['launch-trailer-t.jpg', 'Official Launch Trailer'], ['cinematic-trailer-t.jpg', 'Official Cinematic Trailer'], ['gameplay-showcase-i-t.jpg', 'Gameplay Showcase I'], ['gameplay-showcase-ii-t.jpg', 'Gameplay Showcase II'], ['sebastian-sallow-t.jpg', 'Sebastian Sallow’s Dark Legacy'], ['behind-the-scenes-t.jpg', 'Official Behind the Scenes'], ['gameplay-reveal-t.jpg', 'Official Gameplay Reveal'], ['announce-trailer-t.jpg', 'Official Reveal Trailer']];
  return <main className="archive-page project-page"><PageNav activePage="projects" hogwartsStyle /><section className="project-hero"><div className="project-hero-image" /><div className="project-hero-shade" /><div className="project-hero-content"><BackLink /><span className="eyebrow"><Sparkles size={14} /> The Vault · Riset & Proyek</span><h1>Project</h1><div className="hero-rule" /><p>Portfolio of experiments, research, and visual stories.</p></div></section><div className="project-page-wrap"><section id="VideoGallery" className="media-section"><div className="media-title"><span className="section-kicker">Moving portraits</span><h2>Video Gallery</h2><p>Rekaman dummy untuk memperlihatkan perjalanan setiap karya dari ide menjadi hasil.</p></div><div className="media-gallery">{videos.map(([image, title]) => <figure className="media-card video" key={image}><a href="#" onClick={(event) => event.preventDefault()}><img src={`https://cdn-hogwartslegacy.warnerbrosgames.com/media/${image}`} alt={title} /><span className="media-icon"><PlayCircle /></span></a><figcaption>{title}</figcaption></figure>)}</div></section><section id="Gallery" className="media-section screenshot-section"><div className="media-title"><span className="section-kicker">The visual archive</span><h2>Gallery</h2><p>Cuplikan visual dari project, riset, dan eksperimen yang sedang dikembangkan.</p></div><div className="media-gallery">{portfolioData.projects.map((project) => <figure className="media-card screenshot" key={project.id}><a href={project.image} target="_blank" rel="noreferrer"><img src={project.image} alt={project.title} /><span className="media-icon"><Search /></span></a><figcaption>{project.title}</figcaption></figure>)}</div></section><section className="project-ledger"><div><span className="section-kicker">Research ledger</span><h2>Selected works</h2></div>{portfolioData.projects.map((project) => <article key={project.id}><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer">Read the archive <ExternalLink size={14} /></a></article>)}</section></div></main>;
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
  return (
    <main className="archive-page certifications-page">
      <div className="certifications-backdrop" style={{ backgroundImage: `url(${heroBackdrop})` }} aria-hidden="true" />
      <HogwartsHero mode="certifications" navOnly />
      <div className="page-wrap certifications-content-wrap">
        <PageIntro eyebrow="The Honors · Sertifikasi & Kompetensi" title="Marks of Mastery">
          <>Koleksi lisensi kompetensi, rekognisi riset kecerdasan buatan, dan keahlian komputasi matematika terapan yang mencerminkan dedikasi akademis dan profesional.</>
        </PageIntro>

        <section className="certificate-grid">
          {certs.map((cert) => (
            <article className="certificate-card group" key={cert.id}>
              {/* Top Accent Strip & Header */}
              <div className="certificate-header">
                <span className="certificate-category">{cert.category}</span>
                <span className="certificate-year">{cert.year}</span>
              </div>

              {/* Royal Seal & Title Area */}
              <div className="certificate-main">
                <div className="certificate-seal">
                  <Award size={24} />
                </div>
                <div>
                  <h2 className="certificate-title">{cert.title}</h2>
                  <p className="certificate-issuer">{cert.issuer}</p>
                </div>
              </div>

              {/* Description */}
              <p className="certificate-desc">{cert.description}</p>

              {/* Skills Tags */}
              <div className="certificate-tags">
                {cert.skills.map((skill) => (
                  <span key={skill} className="certificate-tag">
                    ✦ {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Verification Status */}
              <div className="certificate-footer">
                <div className="certificate-badge">
                  <CheckCircle2 size={13} className="text-[#38bdf8]" />
                  <span>{cert.badgeLabel}</span>
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                    title="View Credential Archive"
                  >
                    <span>Archive</span>
                    <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </section>
      </div>
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
