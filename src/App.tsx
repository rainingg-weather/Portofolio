import { HogwartsHero } from '@/components/HogwartsHero';
import { MagicParticles } from '@/components/MagicParticles';
import { WandCursor } from '@/components/WandCursor';
import { useEffect, useState } from 'react';
import { AboutPage, CertificationsPage, ContactPage, ExperiencePage, ProjectsPage } from '@/components/PortfolioPages';

function currentPage() {
  return window.location.hash.replace('#', '').toLowerCase() || 'home';
}

export function App() {
  const [page, setPage] = useState(currentPage);
  useEffect(() => {
    const onHash = () => {
      setPage(currentPage());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const content =
    page === 'about' ? <AboutPage /> :
    page === 'experience' ? <ExperiencePage /> :
    page === 'projects' || page === 'project' ? <div className="home-stage"><HogwartsHero mode="projects" /></div> :
    page === 'certifications' ? <CertificationsPage /> :
    page === 'contact' ? <ContactPage /> :
    <div className="home-stage"><HogwartsHero /></div>;

  return (
    <div className="app-shell">
      <MagicParticles />
      <WandCursor />
      {content}
    </div>
  );
}

export default App;