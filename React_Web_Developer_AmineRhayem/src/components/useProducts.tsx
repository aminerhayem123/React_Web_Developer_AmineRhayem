// useProducts.ts
import { useState, useEffect } from 'react';
import { Product } from '../types';
import { products as localProducts } from '../data/products'; // Assuming products is from a static file

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(localProducts); // Using local products for now
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Simulate an API call (if needed, or comment out the API fetch)
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch('/api/products'); // Replace with actual endpoint if needed
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    // Uncomment the next line if you want to fetch from an API instead of using static data
    // fetchProducts();
  }, []);

  return { products, loading };
};

export default useProducts;
