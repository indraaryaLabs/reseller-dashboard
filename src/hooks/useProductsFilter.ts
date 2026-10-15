import { useState, useMemo } from 'react';
import { Product } from '../types';

export const useProductsFilter = (products: Product[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000000 });
  const [stockFilter, setStockFilter] = useState<'all' | 'ready' | 'limited'>('all');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<'popular' | 'price_asc' | 'price_desc'>('popular');

  const filteredProducts = useMemo(() => {
    let result = products;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }

    result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

    if (stockFilter === 'ready') result = result.filter(p => p.stock > 0);
    else if (stockFilter === 'limited') result = result.filter(p => p.stock > 0 && p.stock <= 3);

    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    switch(sortBy) {
      case 'price_asc': 
        result = [...result].sort((a, b) => a.price - b.price); 
        break;
      case 'price_desc': 
        result = [...result].sort((a, b) => b.price - a.price); 
        break;
      case 'popular': 
      default: 
        result = [...result].sort((a, b) => (a.isBestSeller === b.isBestSeller) ? 0 : a.isBestSeller ? -1 : 1); 
        break;
    }

    return result;
  }, [products, searchQuery, priceRange, stockFilter, selectedCategories, sortBy]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const resetFilters = () => {
    setSearchQuery('');
    setPriceRange({ min: 0, max: 2000000 });
    setStockFilter('all');
    setSelectedCategories([]);
    setSortBy('popular');
  };

  return {
    searchQuery, setSearchQuery,
    priceRange, setPriceRange,
    stockFilter, setStockFilter,
    selectedCategories, toggleCategory,
    sortBy, setSortBy,
    filteredProducts,
    resetFilters
  };
};
