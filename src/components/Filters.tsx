import React, { memo, useState, useRef, useEffect } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { CATEGORIES } from '../data/products';
import { formatPrice } from '../utils/formatPrice';

interface FiltersProps {
  sortBy: string;
  setSortBy: (val: any) => void;
  selectedCategories: string[];
  toggleCategory: (cat: string) => void;
  stockFilter: string;
  setStockFilter: (val: any) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (val: any) => void;
  resetFilters: () => void;
}

const Filters: React.FC<FiltersProps> = memo(({
  sortBy, setSortBy, selectedCategories, toggleCategory, stockFilter, setStockFilter, priceRange, setPriceRange, resetFilters
}) => {
  const { t } = useAppContext();
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const sortOptions = [
    { id: 'popular', label: 'sort_popular' },
    { id: 'price_asc', label: 'sort_asc' },
    { id: 'price_desc', label: 'sort_desc' }
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-heading font-bold text-lg">{t('filter_title')}</h3>
        <button onClick={resetFilters} className="text-xs text-[#FF6A00] hover:text-white transition-colors underline">
          {t('filter_reset')}
        </button>
      </div>
      
      {/* Sort By */}
      <div>
         <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">Sort By</label>
         <div className="relative" ref={sortRef}>
           <button 
             onClick={() => setIsSortOpen(!isSortOpen)}
             className={`w-full flex justify-between items-center bg-white/5 border ${isSortOpen ? 'border-[#FF6A00]' : 'border-white/10'} rounded-lg px-4 py-2.5 text-sm focus:outline-none hover:border-[#FF6A00] transition-colors`}
           >
             <span className="text-gray-200">{t(sortOptions.find(o => o.id === sortBy)?.label || 'sort_popular')}</span>
             <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
           </button>
           
           {isSortOpen && (
             <div className="absolute top-full left-0 w-full mt-2 bg-[#1A1A1A] border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden animate-fade-in-up">
               {sortOptions.map(opt => (
                 <button
                   key={opt.id}
                   onClick={() => {
                     setSortBy(opt.id);
                     setIsSortOpen(false);
                   }}
                   className={`w-full text-left px-4 py-2.5 text-sm hover:bg-white/5 transition-colors flex justify-between items-center ${sortBy === opt.id ? 'text-[#FF6A00] bg-white/5 font-semibold' : 'text-gray-300'}`}
                 >
                   {t(opt.label)}
                   {sortBy === opt.id && <Check className="w-4 h-4" />}
                 </button>
               ))}
             </div>
           )}
         </div>
      </div>

      {/* Categories */}
      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">{t('filter_category')}</label>
        <div className="space-y-2">
          {CATEGORIES.map(cat => (
            <label key={cat} onClick={() => toggleCategory(cat)} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(cat) ? 'bg-[#FF6A00] border-[#FF6A00]' : 'border-gray-500 group-hover:border-[#FF6A00]'}`}>
                {selectedCategories.includes(cat) && <Check className="w-3 h-3 text-black" />}
              </div>
              <span className={`text-sm select-none ${selectedCategories.includes(cat) ? 'text-white' : 'text-gray-400 group-hover:text-white transition-colors'}`}>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Stock */}
      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">{t('filter_stock')}</label>
        <div className="space-y-2">
          {[
            { id: 'all', label: t('stock_all') },
            { id: 'ready', label: t('stock_ready') },
            { id: 'limited', label: t('stock_limited') }
          ].map(opt => (
            <label key={opt.id} onClick={() => setStockFilter(opt.id)} className="flex items-center gap-3 cursor-pointer group">
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${stockFilter === opt.id ? 'border-[#FF6A00]' : 'border-gray-500 group-hover:border-[#FF6A00]'}`}>
                {stockFilter === opt.id && <div className="w-2 h-2 rounded-full bg-[#FF6A00]" />}
              </div>
              <span className={`text-sm select-none ${stockFilter === opt.id ? 'text-white' : 'text-gray-400 group-hover:text-white transition-colors'}`}>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">{t('filter_price')}</label>
        <input 
          type="range" 
          min="0" max="2000000" step="100000"
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
          className="w-full accent-[#FF6A00] h-1 bg-white/10 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Rp 0</span>
          <span>Rp {formatPrice(priceRange.max)}</span>
        </div>
      </div>
    </div>
  );
});

export default Filters;
