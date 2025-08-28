import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link to={`/product/${product.id}`} className="group block bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
        <div className="overflow-hidden">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-96 object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 group-hover:text-gray-900">{product.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;