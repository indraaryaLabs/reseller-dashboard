import { Product } from '../types';
import { PRODUCTS } from '../data/products';

export const fetchProducts = async (): Promise<Product[]> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(PRODUCTS);
    }, 500); // 500ms delay to simulate network latency
  });
};
