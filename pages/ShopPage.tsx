import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { SearchIcon } from '../components/Icons';

const ShopPage: React.FC = () => {
  const [products] = useState(PRODUCTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [sizeFilter, setSizeFilter] = useState<string>('All');
  const [colorFilter, setColorFilter] = useState<string>('All');
  
  const categories = useMemo(() => ['All', ...new Set(PRODUCTS.map(p => p.category))], []);
  const sizes = useMemo(() => ['All', ...new Set(PRODUCTS.flatMap(p => p.sizes))], []);
  const colors = useMemo(() => ['All', ...new Set(PRODUCTS.flatMap(p => p.colors))], []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const searchMatch = searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const categoryMatch = categoryFilter === 'All' || product.category === categoryFilter;
      const sizeMatch = sizeFilter === 'All' || product.sizes.includes(sizeFilter);
      const colorMatch = colorFilter === 'All' || product.colors.includes(colorFilter);
      return searchMatch && categoryMatch && sizeMatch && colorMatch;
    });
  }, [products, searchQuery, categoryFilter, sizeFilter, colorFilter]);
  
  const FilterDropdown: React.FC<{
    label: string;
    options: string[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  }> = ({ label, options, value, onChange }) => (
    <div>
      <label htmlFor={`${label}-filter`} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select
        id={`${label}-filter`}
        value={value}
        onChange={onChange}
        className="block w-full px-4 py-3 text-base text-gray-800 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent sm:text-sm rounded-md appearance-none"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5em 1.5em',
        }}
      >
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.075,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  return (
    <div className="container mx-auto px-6 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-serif">All Products</h1>
        <p className="mt-2 text-lg text-gray-600">Find your next favorite tee.</p>
      </div>
      
      {/* Filters & Search */}
      <div className="sticky top-[72px] z-30 bg-gray-50/90 backdrop-blur-md py-6 mb-12">
        <div className="max-w-4xl mx-auto">
           <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search by name or description..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent rounded-full shadow-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FilterDropdown label="Category" options={categories} value={categoryFilter} onChange={e => setCategoryFilter(e.target.value)} />
              <FilterDropdown label="Size" options={sizes} value={sizeFilter} onChange={e => setSizeFilter(e.target.value)} />
              <FilterDropdown label="Color" options={colors} value={colorFilter} onChange={e => setColorFilter(e.target.value)} />
            </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map(product => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-700">No products found</h2>
            <p className="mt-2 text-gray-500">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default ShopPage;