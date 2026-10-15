import React from 'react';
import { MessageCircle } from 'lucide-react';
import { AppProvider, useAppContext } from './contexts/AppContext';
import { ProductProvider } from './contexts/ProductContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Modal from './components/Modal';
import HomeView from './views/HomeView';
import CollectionView from './views/CollectionView';
import { useWhatsApp } from './hooks/useWhatsApp';

const AppContent = () => {
  const { currentPage, t } = useAppContext();
  const { handleWhatsAppClick } = useWhatsApp();

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-gray-100 font-sans selection:bg-[#FF6A00] selection:text-white">
      <Navbar />

      <main>
        {currentPage === 'home' ? <HomeView /> : <CollectionView />}
      </main>

      <Footer />
      <Modal />

      {/* Floating WhatsApp CTA */}
      <button 
        onClick={() => handleWhatsAppClick()}
        className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-gradient-to-r from-[#25D366] to-[#1DA851] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] hover:scale-105 transition-all duration-300 animate-[bounce_3s_infinite]"
        aria-label="Contact via WhatsApp"
      >
        <span className="hidden md:block font-bold text-sm pl-2 max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out">
          {t('float_wa')}
        </span>
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

const App = () => {
  return (
    <AppProvider>
      <ProductProvider>
        <AppContent />
      </ProductProvider>
    </AppProvider>
  );
};

export default App;
