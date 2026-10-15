import { useCallback } from 'react';
import { Product } from '../types';
import { useAppContext } from '../contexts/AppContext';

export const useWhatsApp = () => {
  const { lang } = useAppContext();

  const handleWhatsAppClick = useCallback((product?: Product) => {
    let text = '';
    if (lang === 'id') {
      text = product 
        ? `Halo, saya tertarik mengamankan varian *${product.name}* yang sisa ${product.stock} botol. Apakah masih tersedia?` 
        : 'Halo, saya ingin bertanya tentang koleksi parfum eksklusif.';
    } else {
      text = product 
        ? `Hello, I'm interested in securing the *${product.name}* variant (Only ${product.stock} left). Is it still available?` 
        : 'Hello, I have an inquiry about the exclusive perfume collection.';
    }
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank');
  }, [lang]);

  return { handleWhatsAppClick };
};
