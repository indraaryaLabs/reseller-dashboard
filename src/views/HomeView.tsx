import React from 'react';
import { ArrowRight, Sparkles, Star, ShieldCheck, Droplets, ChevronDown, Package, Clock } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { useProductContext } from '../contexts/ProductContext';
import { TESTIMONIALS } from '../data/testimonials';
import { FAQS } from '../data/faqs';
import ProductCard from '../components/ProductCard';
import Button from '../components/ui/Button';

const HomeView: React.FC = () => {
  const { lang, setCurrentPage, t } = useAppContext();
  const { products } = useProductContext();

  const navigateTo = (page: any) => setCurrentPage(page);

  return (
    <>
      <section id="home" className="relative w-full overflow-hidden bg-[#0B0B0B] pt-28 pb-12 md:pt-36 md:pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        {/* Background Image - Responsive sizing & positioning */}
        <div 
          className="absolute inset-0 bg-[url('/images/hero-perfume.png')] bg-cover bg-right md:bg-[position:right_center] lg:bg-contain lg:bg-right bg-no-repeat"
        />
        
        {/* Gradient Overlay - Top-to-bottom on mobile, Left-to-right on desktop */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/95 via-black/80 to-transparent w-full md:w-3/4 z-10" />
        
        {/* Bottom Section Blending */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent z-10" />
        
        {/* Main Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col justify-start lg:justify-center lg:py-32">
          <div className="max-w-xl md:max-w-2xl relative z-20">
            {/* Badge - Size reduced */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] md:text-xs font-medium text-gray-300 mb-6 animate-fade-in-up">
              <Sparkles className="w-3 h-3 text-[#FF6A00]" /> {t('hero_badge')}
            </div>
            
            {/* Title - Size reduced */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight mb-5 leading-[1.15]">
              {t('hero_title1')}<br/>
              {t('hero_title2')}<br/>
              <span className="text-[#FF6A00]">{t('hero_highlight')}</span>
            </h1>
            
            {/* Description - Size reduced */}
            <p className="text-base md:text-lg text-gray-400 mb-8 max-w-md font-light leading-relaxed">
              {t('hero_desc')}
            </p>
            
            {/* CTA - Size reduced */}
            <button 
              onClick={() => navigateTo('collection')}
              className="group flex items-center gap-2 px-6 py-3 bg-[#FF6A00] hover:bg-[#e65c00] text-white text-sm font-semibold rounded-lg transition-colors animate-fade-in-up"
            >
              {t('hero_cta')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            {/* Feature Badges - Small and under CTA */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 md:gap-8 animate-fade-in-up z-20" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shrink-0">
                  <ShieldCheck className="w-3 h-3 md:w-4 md:h-4 text-[#FF6A00]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm font-semibold text-gray-200 leading-none">100% Original</p>
                  <p className="text-[8px] md:text-xs text-gray-500 mt-0.5">Garansi Resmi</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shrink-0">
                  <Package className="w-3 h-3 md:w-4 md:h-4 text-[#FF6A00]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm font-semibold text-gray-200 leading-none">Safe Packaging</p>
                  <p className="text-[8px] md:text-xs text-gray-500 mt-0.5">Aman Sampai Tujuan</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm shrink-0">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#FF6A00]" />
                </div>
                <div>
                  <p className="text-[10px] md:text-sm font-semibold text-gray-200 leading-none">Fast Response</p>
                  <p className="text-[8px] md:text-xs text-gray-500 mt-0.5">via WhatsApp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bestseller" className="pb-16 mt-12 md:pb-24 md:mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">{t('sec_bestseller')}</h2>
              <p className="text-gray-400">{t('sec_bestseller_desc')}</p>
            </div>
            <button onClick={() => navigateTo('collection')} className="hidden md:flex items-center gap-2 text-[#FF6A00] hover:text-white transition-colors mt-4 md:mt-0 font-medium">
              {t('btn_view_all')} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {products.filter(p => p.isBestSeller).slice(0,3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <Button onClick={() => navigateTo('collection')} variant="outline" className="md:hidden mt-8 w-full" fullWidth>
            {t('btn_view_all')} <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <section id="testimoni" className="py-16 md:py-24 bg-[#0B0B0B] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF6A00]/[0.02] rounded-full blur-[100px] pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3 tracking-tight flex justify-center flex-wrap gap-2">
            {t('social_title').split(' ').map((word: string, idx: number) => {
              if (word.toLowerCase() === 'pelanggan' || word.toLowerCase() === 'client' || word.toLowerCase() === 'testimonials') {
                return <span key={idx} className="text-[#FF6A00]">{word}</span>;
              }
              return <span key={idx}>{word}</span>;
            })}
          </h2>
          <p className="text-gray-400 font-light tracking-wide">{t('social_desc')}</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((testi, index) => {
              return (
                <div 
                  key={testi.id} 
                  className="relative p-6 md:p-8 rounded-2xl bg-[#0F0F0F] border border-white/5 hover:border-white/10 transition-all duration-300 group overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col text-left"
                >
                  {/* Decorative Quotes at Top Right */}
                  <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  </div>
                  
                  {/* Header: Initial and Name */}
                  <div className="flex items-center gap-4 mb-6 relative z-10">
                    {/* Circular Initial */}
                    <div className="w-14 h-14 shrink-0 rounded-full border-2 border-[#FF6A00] flex items-center justify-center font-heading text-xl font-bold text-[#FF6A00] bg-[#0B0B0B] shadow-[0_0_15px_rgba(255,106,0,0.2)]">
                      {testi.name.charAt(0)}
                    </div>
                    {/* Name and Verified Label */}
                    <div>
                      <h3 className="font-semibold text-gray-100 tracking-wide text-lg">{testi.name}</h3>
                      <div className="flex items-center gap-1 text-xs mt-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#FF6A00] opacity-80" />
                        <span className="text-[#FF6A00] font-medium opacity-90">Verified Client</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-400 text-sm leading-relaxed italic mb-8 font-light relative z-10 flex-grow">
                    "{testi.text[lang]}"
                  </p>
                  
                  {/* Stars at bottom */}
                  <div className="flex text-[#FF6A00] gap-1 relative z-10 mt-auto">
                    {[...Array(testi.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 md:py-32 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6A00]/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Droplets className="w-12 h-12 text-[#FF6A00] mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8 leading-tight">
            {t('about_title1')}<br/>{t('about_title2')} <span className="text-[#FF6A00]">{t('about_highlight')}</span>
          </h2>
          <p className="text-gray-400 leading-relaxed text-lg mb-8">{t('about_desc')}</p>
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24 bg-white/[0.02] border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold font-heading mb-12 text-center">{t('faq_title')}</h2>
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const [isOpen, setIsOpen] = React.useState(false);
              return (
                <div key={index} className="glass-card rounded-2xl overflow-hidden transition-all duration-300 border border-white/5">
                  <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors">
                    <span className="font-semibold text-sm md:text-base">{faq.q[lang]}</span>
                    <ChevronDown className={`w-5 h-5 text-[#FF6A00] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 py-4 border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a[lang]}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeView;
