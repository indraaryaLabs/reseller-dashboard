import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'nox-01',
    name: 'Nox Aurum',
    price: 1250000,
    stock: 3,
    category: 'Woody',
    isBestSeller: true,
    image: '/images/products/nox-aurum.png',
    notes: { top: 'Bergamot, Saffron', middle: 'Oud, Taif Rose', base: 'Amber, Patchouli' },
    desc: {
      id: 'Simbol dominasi absolut. Nox Aurum diracik untuk menegaskan presensi Anda di setiap ruangan. Dengan sentuhan Oud dan Amber yang maskulin namun elegan.',
      en: 'A symbol of absolute dominance. Nox Aurum is crafted to assert your presence in every room. With masculine yet elegant touches of Oud and Amber.'
    }
  },
  {
    id: 'luna-02',
    name: 'Luna Velvet',
    price: 980000,
    stock: 5,
    category: 'Gourmand',
    isBestSeller: true,
    image: '/images/products/luna-velvet.png',
    notes: { top: 'Pear, Pink Pepper', middle: 'Jasmine, Coffee', base: 'Vanilla, Cedarwood' },
    desc: {
      id: 'Misterius dan memikat. Sentuhan kopi dan vanilla memberikan adiksi instan bagi siapapun yang menciumnya. Cocok untuk malam yang panjang.',
      en: 'Mysterious and captivating. Touches of coffee and vanilla provide instant addiction for anyone who smells it. Perfect for long nights.'
    }
  },
  {
    id: 'sol-03',
    name: 'Solstice Edge',
    price: 1100000,
    stock: 2,
    category: 'Fresh',
    isBestSeller: false,
    image: '/images/products/solstice-edge.png',
    notes: { top: 'Sea Salt, Grapefruit', middle: 'Sage, Ambrette', base: 'Seaweed, Vetiver' },
    desc: {
      id: 'Kesegaran laut yang bertabrakan dengan karakter kayu yang keras. Solstice Edge adalah representasi kebebasan tanpa batas.',
      en: 'Oceanic freshness colliding with hard woody characters. Solstice Edge is the representation of limitless freedom.'
    }
  },
  {
    id: 'umbra-04',
    name: 'Umbra Noir',
    price: 1450000,
    stock: 1,
    category: 'Floral',
    isBestSeller: true,
    image: '/images/products/umbra-noir.png',
    notes: { top: 'Black Cherry, Almond', middle: 'Plum, Turkish Rose', base: 'Tonka Bean, Sandalwood' },
    desc: {
      id: 'Eksklusivitas tertinggi. Hanya diproduksi 50 botol setiap tahunnya. Keharuman cherry gelap yang intens dan mewah.',
      en: 'Ultimate exclusivity. Only 50 bottles produced annually. An intense and luxurious dark cherry fragrance.'
    }
  },
  {
    id: 'aero-05',
    name: 'Aero Blanc',
    price: 850000,
    stock: 12,
    category: 'Fresh',
    isBestSeller: false,
    image: '/images/products/aero-blanc.png',
    notes: { top: 'Lemon, Bergamot', middle: 'Lily of the Valley', base: 'White Musk, Cedar' },
    desc: {
      id: 'Sedingin udara pagi pegunungan. Ringan, bersih, dan menenangkan.',
      en: 'As cold as mountain morning air. Light, clean, and soothing.'
    }
  },
  {
    id: 'ignis-06',
    name: 'Ignis Rouge',
    price: 1350000,
    stock: 0,
    category: 'Spicy',
    isBestSeller: false,
    image: '/images/products/ignis-rouge.png',
    notes: { top: 'Pink Pepper, Cardamom', middle: 'Cinnamon, Leather', base: 'Tobacco, Amber' },
    desc: {
      id: 'Gairah yang menyala. Perpaduan rempah eksotis dan tembakau untuk pribadi yang berani tampil beda.',
      en: 'Ignited passion. A blend of exotic spices and tobacco for those bold enough to stand out.'
    }
  }
];

export const CATEGORIES = Array.from(new Set(PRODUCTS.map(p => p.category)));
