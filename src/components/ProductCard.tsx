import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/formatPrice';
import { useProductContext } from '../contexts/ProductContext';
import { useAppContext } from '../contexts/AppContext';
import { useWhatsApp } from '../hooks/useWhatsApp';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => {
  const { setSelectedProduct } = useProductContext();
  const { t } = useAppContext();
  const { handleWhatsAppClick } = useWhatsApp();

  const isSoldOut = product.stock === 0;
  const isLimited = product.stock <= 3 && product.stock > 0;

  return (
    <div 
      className="group cursor-pointer flex flex-col h-full" 
      onClick={() => setSelectedProduct(product)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-card transition-all duration-500 group-hover:border-[#FF6A00]/50 group-hover:shadow-[0_0_30px_-5px_rgba(255,106,0,0.3)]">
        {/* Stock Badge */}
        <div className="absolute top-3 left-3 z-20">
          {!isSoldOut ? (
            <Badge variant={isLimited ? 'danger' : 'default'} animatePing={isLimited}>
              {isLimited ? `${t('badge_left')} ${product.stock} ${t('badge_bottle')}` : t('stock_ready')}
            </Badge>
          ) : (
            <Badge variant="ghost">
              {t('badge_soldout')}
            </Badge>
          )}
        </div>
        
        {/* Image */}
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 ${isSoldOut ? 'grayscale opacity-50 group-hover:opacity-50' : ''}`}
          loading="lazy"
        />
        
        {/* Hover Overlay Notes */}
        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center backdrop-blur-sm pointer-events-none">
          <p className="text-[#FF6A00] text-xs font-bold tracking-widest mb-2">NOTES</p>
          <div className="space-y-3 w-full">
            <div className="border-b border-white/10 pb-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Top</p>
              <p className="text-sm font-medium">{product.notes.top}</p>
            </div>
            <div className="border-b border-white/10 pb-2">
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Middle</p>
              <p className="text-sm font-medium">{product.notes.middle}</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Base</p>
              <p className="text-sm font-medium">{product.notes.base}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg md:text-xl font-heading font-bold group-hover:text-[#FF6A00] transition-colors">{product.name}</h3>
          <span className="text-[10px] border border-white/20 rounded px-2 py-0.5 text-gray-400">{product.category}</span>
        </div>
        <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">Rp {formatPrice(product.price)}</p>
        
        <Button 
          disabled={isSoldOut}
          onClick={(e) => { e.stopPropagation(); if(!isSoldOut) handleWhatsAppClick(product); }}
          variant={isSoldOut ? 'disabled' : 'outline'}
          fullWidth
        >
          {isSoldOut ? t('badge_soldout') : t('btn_secure')} {!isSoldOut && <ArrowRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
});

export default ProductCard;
