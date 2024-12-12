// ProductList.tsx
import { ProductCard } from './ProductCard';
import { Product } from '../types'; // Assuming Product type is defined in a types file

interface ProductListProps {
  products: Product[]; // Accepting an array of products as a prop
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div>
      <div className="product-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
