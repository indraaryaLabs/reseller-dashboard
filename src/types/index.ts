export interface ProductDesc {
  id: string;
  en: string;
}

export interface ProductNotes {
  top: string;
  middle: string;
  base: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
  isBestSeller: boolean;
  image: string;
  notes: ProductNotes;
  desc: ProductDesc;
}

export interface TestimonialText {
  id: string;
  en: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: TestimonialText;
  rating: number;
}

export interface FAQItemText {
  id: string;
  en: string;
}

export interface FAQItem {
  q: FAQItemText;
  a: FAQItemText;
}

export type Language = 'id' | 'en';
export type Page = 'home' | 'collection';
