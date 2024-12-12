import { SizePicker } from './SizePicker'; // Assuming you have a SizePicker component
import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    images: string[];
    description: string;
    sizes: string[];
    colors: string[];
    stock: number;
  };
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="bg-black border-2 border-white shadow-lg rounded-lg overflow-hidden">
      {/* Image Carousel */}
      <div className="relative w-full h-60 group">
        {/* Images */}
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-in-out 
              ${index === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 group-hover:opacity-100 group-hover:z-10'}`}
          />
        ))}

        <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs py-1 px-2 rounded-full">
          {product.stock} in stock
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{product.name}</h3>
        <p className="text-gray-400 text-sm mt-2">{product.description}</p>

        <div className="mt-4">
          <div className="text-lg font-bold text-white">${product.price}</div>

          {/* Color Picker (optional) */}
          <div className="mt-2">
            <div className="font-medium text-sm text-gray-400">Color</div>
            <div className="flex space-x-2 mt-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-white cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Size Picker */}
          <div className="mt-4">
            <SizePicker
              sizes={product.sizes}
              selected={selectedSize}
              onChange={setSelectedSize}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
