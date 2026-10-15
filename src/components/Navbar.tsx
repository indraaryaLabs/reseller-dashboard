import React, { useState, useEffect } from 'react';
import { Droplets, Globe, X } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

import { useActiveSection } from '../hooks/useActiveSection';

const Navbar: React.FC = () => {
  const { lang, setLang, currentPage, setCurrentPage, t } = useAppContext();
  const [scrolled, setScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'bestseller', 'testimoni', 'about', 'faq'], 0.5);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileNavOpen(false);
  }, [currentPage]);

  const navigateTo = (page: any) => {
    if (currentPage === page) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage(page);
    }
    setIsMobileNavOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offset, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
    setIsMobileNavOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'glass py-3 md:py-4' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button onClick={() => navigateTo('home')} className="font-heading font-bold text-xl tracking-widest text-white flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Droplets className="w-5 h-5 text-[#FF6A00]" />
          NOIR<span className="text-[#FF6A00]">.</span>
        </button>
        
        <div className="hidden md:flex gap-4 lg:gap-8 text-[11px] lg:text-sm font-medium text-gray-400 items-center">
          <button onClick={() => navigateTo('home')} className={`hover:text-white transition-colors ${currentPage === 'home' && (activeSection === 'home' || !activeSection) ? 'text-[#FF6A00]' : ''}`}>{t('nav_home')}</button>
          {currentPage === 'home' && <a href="#bestseller" onClick={(e) => scrollToSection(e, 'bestseller')} className={`hover:text-white transition-colors ${activeSection === 'bestseller' ? 'text-[#FF6A00]' : ''}`}>{t('nav_bestseller')}</a>}
          {currentPage === 'home' && <a href="#testimoni" onClick={(e) => scrollToSection(e, 'testimoni')} className={`hover:text-white transition-colors ${activeSection === 'testimoni' ? 'text-[#FF6A00]' : ''}`}>{t('nav_testimoni')}</a>}
          {currentPage === 'home' && <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={`hover:text-white transition-colors ${activeSection === 'about' ? 'text-[#FF6A00]' : ''}`}>{t('nav_about')}</a>}
          {currentPage === 'home' && <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className={`hover:text-white transition-colors ${activeSection === 'faq' ? 'text-[#FF6A00]' : ''}`}>{t('nav_faq')}</a>}
          <button 
            onClick={() => navigateTo('collection')} 
            className={`px-3 py-1 lg:px-4 lg:py-1.5 rounded-full text-[10px] lg:text-xs font-bold transition-all border ${currentPage === 'collection' ? 'bg-[#FF6A00] border-[#FF6A00] text-white shadow-[0_0_15px_rgba(255,106,0,0.4)]' : 'border-[#FF6A00] hover:bg-[#FF6A00] text-[#FF6A00] hover:text-white'}`}
          >
            {t('nav_collection')}
          </button>
          
          <div className="flex items-center gap-1.5 lg:gap-2 bg-white/5 px-2 py-1 lg:px-3 lg:py-1.5 rounded-full ml-1 lg:ml-4 border border-white/10">
            <Globe className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400" />
            <button onClick={() => setLang('id')} className={`text-[10px] lg:text-xs font-bold transition-colors ${lang === 'id' ? 'text-[#FF6A00]' : 'text-gray-500 hover:text-white'}`}>ID</button>
            <span className="text-[10px] lg:text-xs text-gray-700">|</span>
            <button onClick={() => setLang('en')} className={`text-[10px] lg:text-xs font-bold transition-colors ${lang === 'en' ? 'text-[#FF6A00]' : 'text-gray-500 hover:text-white'}`}>EN</button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
            <button onClick={() => setLang(lang === 'id' ? 'en' : 'id')} className="text-xs font-bold text-[#FF6A00] uppercase tracking-wider flex items-center gap-1">
              <Globe className="w-3 h-3" /> {lang.toUpperCase()}
            </button>
          </div>
          <button onClick={() => setIsMobileNavOpen(!isMobileNavOpen)} className="text-white" aria-label="Toggle Menu">
             {isMobileNavOpen ? <X className="w-6 h-6"/> : <div className="space-y-1.5"><div className="w-6 h-0.5 bg-white"/><div className="w-4 h-0.5 bg-white ml-auto"/></div>}
          </button>
        </div>
      </div>

      {isMobileNavOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-b border-white/10 px-6 py-4 flex flex-col gap-4 text-sm font-medium animate-fade-in-up">
          <button onClick={() => navigateTo('home')} className={`text-left ${currentPage === 'home' && activeSection === 'home' ? 'text-[#FF6A00]' : 'text-white'}`}>{t('nav_home')}</button>
          {currentPage === 'home' && <a href="#bestseller" onClick={(e) => scrollToSection(e, 'bestseller')} className={`text-left ${activeSection === 'bestseller' ? 'text-[#FF6A00]' : 'text-white'}`}>{t('nav_bestseller')}</a>}
          {currentPage === 'home' && <a href="#testimoni" onClick={(e) => scrollToSection(e, 'testimoni')} className={`text-left ${activeSection === 'testimoni' ? 'text-[#FF6A00]' : 'text-white'}`}>{t('nav_testimoni')}</a>}
          {currentPage === 'home' && <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className={`text-left ${activeSection === 'about' ? 'text-[#FF6A00]' : 'text-white'}`}>{t('nav_about')}</a>}
          {currentPage === 'home' && <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className={`text-left ${activeSection === 'faq' ? 'text-[#FF6A00]' : 'text-white'}`}>{t('nav_faq')}</a>}
          <button onClick={() => navigateTo('collection')} className={`text-left py-2 px-4 mt-2 rounded-lg border font-bold ${currentPage === 'collection' ? 'bg-[#FF6A00] border-[#FF6A00] text-white' : 'border-[#FF6A00] text-[#FF6A00]'}`}>{t('nav_collection')}</button>
          <button onClick={() => { setLang('id'); setIsMobileNavOpen(false); }} className={`text-left ${lang === 'id' ? 'text-[#FF6A00]' : 'text-gray-400'}`}>Bahasa Indonesia</button>
          <button onClick={() => { setLang('en'); setIsMobileNavOpen(false); }} className={`text-left ${lang === 'en' ? 'text-[#FF6A00]' : 'text-gray-400'}`}>English</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
