
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="overflow-hidden rounded-lg">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-96 object-cover object-center group-hover:opacity-80 transition-opacity duration-300"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-2">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
