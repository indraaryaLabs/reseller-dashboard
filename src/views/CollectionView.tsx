import React, { useState } from 'react';
import { Search, SlidersHorizontal, X, Frown } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { useProductContext } from '../contexts/ProductContext';
import { useProductsFilter } from '../hooks/useProductsFilter';
import ProductCard from '../components/ProductCard';
import Filters from '../components/Filters';
import Button from '../components/ui/Button';

const CollectionView: React.FC = () => {
  const { t } = useAppContext();
  const { products, isLoading } = useProductContext();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const {
    searchQuery, setSearchQuery,
    priceRange, setPriceRange,
    stockFilter, setStockFilter,
    selectedCategories, toggleCategory,
    sortBy, setSortBy,
    filteredProducts,
    resetFilters
  } = useProductsFilter(products);

  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 min-h-screen relative z-20 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">{t('coll_title')}</h1>
          
          <div className="relative mt-6 max-w-2xl flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder={t('coll_search_ph')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-6 py-3.5 text-white focus:outline-none focus:border-[#FF6A00] transition-colors shadow-inner placeholder-gray-500"
              />
            </div>
            <button 
              onClick={() => setIsMobileFilterOpen(true)}
              className="md:hidden glass-card px-4 rounded-full flex items-center justify-center border border-white/10 hover:border-[#FF6A00] transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5 text-[#FF6A00]" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <aside className="hidden md:block w-64 shrink-0 glass-card p-6 rounded-2xl sticky top-28 border border-white/5">
            <Filters 
              sortBy={sortBy} setSortBy={setSortBy}
              selectedCategories={selectedCategories} toggleCategory={toggleCategory}
              stockFilter={stockFilter} setStockFilter={setStockFilter}
              priceRange={priceRange} setPriceRange={setPriceRange}
              resetFilters={resetFilters}
            />
          </aside>

          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 md:hidden flex">
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
              <div className="relative w-4/5 max-w-sm bg-[#111] h-full ml-auto p-6 overflow-y-auto border-l border-white/10 shadow-2xl animate-[slideInRight_0.3s_ease-out]">
                <button onClick={() => setIsMobileFilterOpen(false)} className="absolute top-4 right-4 p-2 bg-white/5 rounded-full text-white">
                  <X className="w-5 h-5" />
                </button>
                <Filters 
                  sortBy={sortBy} setSortBy={setSortBy}
                  selectedCategories={selectedCategories} toggleCategory={toggleCategory}
                  stockFilter={stockFilter} setStockFilter={setStockFilter}
                  priceRange={priceRange} setPriceRange={setPriceRange}
                  resetFilters={resetFilters}
                />
              </div>
            </div>
          )}

          <div className="flex-1 w-full">
            {isLoading ? (
              <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-2 border-[#FF6A00] border-t-transparent rounded-full animate-spin" />
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="glass-card rounded-2xl py-20 px-6 text-center border border-white/5 flex flex-col items-center justify-center">
                <Frown className="w-12 h-12 text-gray-500 mb-4" />
                <h3 className="text-xl font-heading font-bold mb-2">{t('empty_title')}</h3>
                <p className="text-gray-400 text-sm">{t('empty_desc')}</p>
                <Button onClick={resetFilters} variant="ghost" className="mt-6">
                  {t('filter_reset')}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionView;
