import { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { navLinks } from './data/portfolio';

const sectionIds = navLinks.map(({ href }) => href.replace(/^\/+|\/+$/g, ''));

function sectionFromPath() {
  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  return sectionIds.includes(path) ? path : 'home';
}

function scrollToSection(sectionId, behavior = 'instant') {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const scrollMargin = Number.parseFloat(window.getComputedStyle(section).scrollMarginTop) || 0;
  const top = Math.max(0, window.scrollY + section.getBoundingClientRect().top - scrollMargin);

  if (behavior === 'instant') {
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo({ top, behavior: 'auto' });
    requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });
    return;
  }

  window.scrollTo({ top, behavior });
}

export default function App() {
  const [initialSection] = useState(sectionFromPath);
  const [activeSection, setActiveSection] = useState(initialSection);
  const [pageTurn, setPageTurn] = useState(null);
  const activeSectionRef = useRef(initialSection);
  const turningRef = useRef(false);

  const navigateTo = useCallback((sectionId, { pushHistory = true, animate = true } = {}) => {
    if (!sectionIds.includes(sectionId) || turningRef.current) return;

    const currentSection = activeSectionRef.current;
    const sectionPath = `/${sectionId}${window.location.search}`;

    if (pushHistory && window.location.pathname !== `/${sectionId}`) {
      window.history.pushState(window.history.state, '', sectionPath);
    }

    activeSectionRef.current = sectionId;
    setActiveSection(sectionId);

    if (currentSection === sectionId) {
      scrollToSection(sectionId, 'smooth');
      return;
    }

    if (!animate) {
      scrollToSection(sectionId);
      return;
    }

    turningRef.current = true;
    setPageTurn({ sectionId, phase: 'covering' });
  }, []);

  useEffect(() => {
    const route = `/${initialSection}${window.location.search}`;
    if (window.location.pathname !== `/${initialSection}`) {
      window.history.replaceState(window.history.state, '', route);
    }

    const frame = requestAnimationFrame(() => scrollToSection(initialSection));
    return () => cancelAnimationFrame(frame);
  }, [initialSection]);

  useEffect(() => {
    let frame = 0;

    const syncRouteToScroll = () => {
      if (turningRef.current) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (turningRef.current) return;
        const activeLine = window.scrollY + window.innerHeight * 0.38;
        let sectionInView = sectionIds[0];

        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          if (!section) continue;
          const sectionTop = window.scrollY + section.getBoundingClientRect().top;
          if (sectionTop <= activeLine) sectionInView = sectionId;
          else break;
        }

        if (sectionInView !== activeSectionRef.current) {
          activeSectionRef.current = sectionInView;
          setActiveSection(sectionInView);
          window.history.replaceState(
            window.history.state,
            '',
            `/${sectionInView}${window.location.search}`,
          );
        }
      });
    };

    window.addEventListener('scroll', syncRouteToScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', syncRouteToScroll);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      void navigateTo(sectionFromPath(), { pushHistory: false });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [navigateTo]);

  const handleInternalNavigation = useCallback((event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) return;

    const anchor = event.target.closest?.('a[href]');
    if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

    const targetUrl = new URL(anchor.href, window.location.href);
    if (targetUrl.origin !== window.location.origin) return;

    const sectionId = targetUrl.pathname.replace(/^\/+|\/+$/g, '');
    if (!sectionIds.includes(sectionId)) return;

    event.preventDefault();
    void navigateTo(sectionId);
  }, [navigateTo]);

  const handlePageTurnEnd = (event) => {
    if (event.target !== event.currentTarget || !pageTurn) return;

    if (pageTurn.phase === 'covering') {
      scrollToSection(pageTurn.sectionId);
      setPageTurn({ ...pageTurn, phase: 'leaving' });
      return;
    }

    turningRef.current = false;
    setPageTurn(null);
  };

  return (
    <div
      onClick={handleInternalNavigation}
      className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-[var(--transition-speed)]"
    >
      <Navbar activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />

      {pageTurn && (
        <div
          key={`${pageTurn.sectionId}-${pageTurn.phase}`}
          onAnimationEnd={handlePageTurnEnd}
          className={`section-page-sheet ${pageTurn.phase === 'covering' ? 'page-rise-in' : 'page-rise-out'}`}
          aria-hidden="true"
        >
          <div className="section-page-sheet__edge" />
        </div>
      )}
    </div>
  );
}
