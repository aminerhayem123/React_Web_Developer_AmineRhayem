import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ProductList from './components/ProductList';
import { products } from './data/products'; // Assuming you have a products file

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(''); // State for selected category

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  
  return (
    <div className="min-h-screen bg-black text-white">

      <header className="fixed w-full top-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">Shop</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-white/80 hover:text-white transition-colors">HOME</a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-black/90 border-t border-white/10">
            <ul className="flex flex-col space-y-4 p-4">
              <li><a href="/" className="text-white/80 hover:text-white transition-colors">HOME</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">COLLECTION</h2>

          {/* Category Dropdown */}
          <div className="mb-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-black text-white border-2 border-white py-2 px-4 rounded"
            >
              <option value="">All Categories</option>
              <option value="cat 1">Cat 1</option>
              <option value="cat 2">Cat 2</option>
            </select>
          </div>
        </div>

        {/* Product List Section */}
        <div id="product-list" className="py-16">
          <h1 className="text-2xl font-bold mb-4">Product List</h1>
          <div className="flex justify-center">
            {/* Pass filtered products to ProductList component */}
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
