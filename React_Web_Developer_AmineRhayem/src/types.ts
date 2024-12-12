// types.ts or at the top of ProductList.tsx
export interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  stock: number;
  category: string;
}
