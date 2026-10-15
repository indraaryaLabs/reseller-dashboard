import React from 'react';
import { X, MessageCircle, Check } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { useProductContext } from '../contexts/ProductContext';
import { useWhatsApp } from '../hooks/useWhatsApp';
import { formatPrice } from '../utils/formatPrice';
import Button from './ui/Button';

const Modal: React.FC = () => {
  const { selectedProduct, setSelectedProduct } = useProductContext();
  const { lang, t } = useAppContext();
  const { handleWhatsAppClick } = useWhatsApp();

  if (!selectedProduct) return null;

  const isSoldOut = selectedProduct.stock === 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/80 transition-opacity duration-300">
      <div className="bg-[#111] w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 flex flex-col md:flex-row relative shadow-2xl animate-fade-in-up max-h-full">
        
        <button 
          onClick={() => setSelectedProduct(null)}
          className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#FF6A00] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="md:w-1/2 relative bg-black shrink-0">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-full h-48 md:h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/20 to-transparent md:bg-gradient-to-r" />
        </div>

        <div className="md:w-1/2 p-6 md:p-10 flex flex-col h-full overflow-y-auto hide-scroll">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold w-fit mb-4 
            ${selectedProduct.stock <= 3 && selectedProduct.stock > 0 ? 'bg-red-500/10 border-red-500/20 text-red-500' 
            : isSoldOut ? 'bg-gray-800 border-gray-600 text-gray-300' 
            : 'bg-[#FF6A00]/10 border-[#FF6A00]/20 text-[#FF6A00]'}`}>
            {selectedProduct.stock > 0 && selectedProduct.stock <= 3 && <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
            {isSoldOut ? t('badge_soldout') : selectedProduct.stock <= 3 ? `${t('badge_left')} ${selectedProduct.stock} ${t('badge_bottle')}` : t('stock_ready')}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-2">{selectedProduct.name}</h2>
          <p className="text-2xl text-[#FF6A00] font-semibold mb-6">Rp {formatPrice(selectedProduct.price)}</p>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            {selectedProduct.desc[lang]}
          </p>

          <div className="bg-white/5 rounded-2xl p-5 border border-white/5 mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 font-bold">{t('pyramid_title')}</p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <span className="w-16 text-xs text-gray-500 mt-0.5">TOP</span>
                <span className="text-sm font-medium text-gray-200">{selectedProduct.notes.top}</span>
              </div>
              <div className="w-full h-px bg-white/5" />
              <div className="flex gap-4 items-start">
                <span className="w-16 text-xs text-gray-500 mt-0.5">MIDDLE</span>
                <span className="text-sm font-medium text-gray-200">{selectedProduct.notes.middle}</span>
              </div>
              <div className="w-full h-px bg-white/5" />
              <div className="flex gap-4 items-start">
                <span className="w-16 text-xs text-gray-500 mt-0.5">BASE</span>
                <span className="text-sm font-medium text-gray-200">{selectedProduct.notes.base}</span>
              </div>
            </div>
          </div>

          <Button 
            disabled={isSoldOut}
            onClick={() => { if(!isSoldOut) handleWhatsAppClick(selectedProduct); }}
            variant={isSoldOut ? 'disabled' : 'primary'}
            fullWidth
            className="mt-auto"
          >
            {isSoldOut ? t('badge_soldout') : t('btn_secure_wa')} {!isSoldOut && <MessageCircle className="w-5 h-5" />}
          </Button>
          <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1 pb-4 md:pb-0">
            <Check className="w-3 h-3" /> {t('modal_safe')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
