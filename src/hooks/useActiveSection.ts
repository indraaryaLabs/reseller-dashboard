import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[], offsetViewport: number = 0.3) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetViewport;
      
      const sections = sectionIds.map(id => {
        const element = document.getElementById(id);
        if (!element) return null;
        return {
          id,
          top: element.getBoundingClientRect().top + window.scrollY,
          bottom: element.getBoundingClientRect().bottom + window.scrollY
        };
      }).filter(Boolean) as {id: string, top: number, bottom: number}[];

      let currentActive = '';
      for (const section of sections) {
        if (scrollPosition >= section.top && scrollPosition <= section.bottom) {
          currentActive = section.id;
          break;
        }
      }

      // If we are at the very bottom of the page, highlight the last section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        if (sections.length > 0) {
          currentActive = sections[sections.length - 1].id;
        }
      }

      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize immediately
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, activeSection, offsetViewport]);

  return activeSection;
};
