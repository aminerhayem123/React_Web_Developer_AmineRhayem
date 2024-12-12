// ProductList.tsx
import { ProductCard } from './ProductCard';
import useProducts from './useProducts';

const ProductList = () => {
  const { products, loading } = useProducts(); // Use the hook to get products

  if (loading) {
    return <div>Loading...</div>;
  }

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
