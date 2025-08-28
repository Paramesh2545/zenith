
import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';

const ShopPage: React.FC = () => {
  const [products] = useState(PRODUCTS);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [sizeFilter, setSizeFilter] = useState<string>('All');
  const [colorFilter, setColorFilter] = useState<string>('All');
  
  const categories = useMemo(() => ['All', ...new Set(PRODUCTS.map(p => p.category))], []);
  const sizes = useMemo(() => ['All', ...new Set(PRODUCTS.flatMap(p => p.sizes))], []);
  const colors = useMemo(() => ['All', ...new Set(PRODUCTS.flatMap(p => p.colors))], []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter;
      const sizeMatch = sizeFilter === 'All' || product.sizes.includes(sizeFilter);
      const colorMatch = colorFilter === 'All' || product.colors.includes(colorFilter);
      return categoryMatch && sizeMatch && colorMatch;
    });
  }, [products, categoryFilter, sizeFilter, colorFilter]);
  
  const FilterDropdown: React.FC<{
    label: string;
    options: string[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }> = ({ label, options, value, onChange }) => (
    <div>
      <label htmlFor={`${label}-filter`} className="block text-sm font-medium text-gray-700">{label}</label>
      <select
        id={`${label}-filter`}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md text-white"
      >
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-serif">All Products</h1>
        <p className="mt-2 text-lg text-gray-600">Find your next favorite tee.</p>
      </div>
      
      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 p-6 bg-white rounded-lg shadow-sm border">
        <FilterDropdown label="Category" options={categories} value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} />
        <FilterDropdown label="Size" options={sizes} value={sizeFilter} onChange={e => setSizeFilter(e.target.value)} />
        <FilterDropdown label="Color" options={colors} value={colorFilter} onChange={e => setColorFilter(e.target.value)} />
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-700">No products found</h2>
            <p className="mt-2 text-gray-500">Try adjusting your filters.</p>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
