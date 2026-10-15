export const formatPrice = (price: number): string => 
  new Intl.NumberFormat('id-ID').format(price);
