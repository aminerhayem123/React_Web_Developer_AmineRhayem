// types.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  category: string; // Added category field
  stock: number; // Added stock field (optional)
}
