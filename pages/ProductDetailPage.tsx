
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import Button from '../components/Button';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find(p => p.id === id);

  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return <div className="text-center py-20">Product not found.</div>;
  }
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, selectedSize, selectedColor);
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000); // Reset after 2 seconds
    }
  };

  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-100">
              <img src={selectedImage} alt={product.name} className="h-full w-full object-cover object-center" />
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              {product.images.map(image => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${selectedImage === image ? 'ring-2 ring-indigo-500' : ''}`}
                >
                  <img src={image} alt="" className="h-24 w-full object-cover object-center"/>
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 font-serif">{product.name}</h1>
            <p className="text-2xl mt-2 text-gray-900">${product.price.toFixed(2)}</p>
            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-gray-700">{product.description}</p>
            </div>
            
            {/* Options */}
            <div className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Color</h3>
                  <div className="flex items-center space-x-3 mt-2">
                    {product.colors.map(color => (
                      <button key={color} onClick={() => setSelectedColor(color)} className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${selectedColor === color ? 'ring ring-offset-1 ring-indigo-500' : ''}`}>
                        <span style={{ backgroundColor: color.toLowerCase() }} className={`h-8 w-8 rounded-full border border-black border-opacity-10`}></span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <div className="grid grid-cols-4 gap-4 mt-2">
                    {product.sizes.map(size => (
                      <button key={size} onClick={() => setSelectedSize(size)} className={`group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 ${selectedSize === size ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button onClick={handleAddToCart} className="mt-10 w-full">
                {addedToCart ? 'Added!' : 'Add to Cart'}
              </Button>
            </div>

            {/* Details & Care */}
            <div className="mt-10">
              <div className="border-t divide-y">
                <div className="py-6">
                  <h3 className="font-medium text-gray-900">Product Details</h3>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                    {product.details.map(detail => <li key={detail}>{detail}</li>)}
                  </ul>
                </div>
                <div className="py-6">
                  <h3 className="font-medium text-gray-900">Care Instructions</h3>
                  <ul className="mt-4 list-disc list-inside space-y-2 text-gray-600">
                    {product.care.map(instruction => <li key={instruction}>{instruction}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="bg-gray-50">
            <div className="container mx-auto px-6 py-16">
                <h2 className="text-2xl font-bold text-center mb-12 font-serif">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {relatedProducts.map(relatedProduct => (
                        <ProductCard key={relatedProduct.id} product={relatedProduct} />
                    ))}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
