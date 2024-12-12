// useProducts.ts
import { useState } from 'react';
import { Product } from '../types';
import { products as localProducts } from '../data/products'; // Assuming products is from a static file

const useProducts = () => {
  const [products] = useState<Product[]>(localProducts); // Using local products for now
  const [loading] = useState<boolean>(false);

  return { products, loading };
};

export default useProducts;
