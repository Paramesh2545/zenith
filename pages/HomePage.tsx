
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import NewsletterSignup from '../components/NewsletterSignup';
import { PRODUCTS, TESTIMONIALS } from '../constants';

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-gray-800">
        <img
          src="https://picsum.photos/id/431/1600/900"
          alt="Fashionable t-shirts"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-7xl font-bold font-serif leading-tight">Wear Your Story</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">Premium quality t-shirts with designs that speak volumes.</p>
          <Link to="/shop">
            <Button className="mt-8 text-lg">Shop New Arrivals</Button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/shop">
                <Button variant="secondary">View All Products</Button>
            </Link>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <img src="https://picsum.photos/id/160/600/400" alt="Our brand" className="rounded-lg shadow-xl" />
            </div>
            <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold font-serif mb-4">Crafted with Purpose</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    At Zenith, we believe a t-shirt is more than just clothing; it's a canvas for self-expression. We are dedicated to creating high-quality, ethically-sourced apparel with designs that resonate. Our mission is to provide you with comfortable, durable, and meaningful pieces you'll love for years to come.
                </p>
                <Link to="/about">
                    <Button variant="secondary">Learn More About Us</Button>
                </Link>
            </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />

    </div>
  );
};

export default HomePage;
