import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
import TestimonialCard from '../components/TestimonialCard';
import NewsletterSignup from '../components/NewsletterSignup';
import { PRODUCTS, TESTIMONIALS } from '../constants';

const HomePage: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="space-y-24 pb-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white bg-gray-800">
        <img
          src="https://picsum.photos/id/431/1600/900"
          alt="Fashionable t-shirts"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 p-6">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold font-serif leading-tight"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          >
            Wear Your Story
          </motion.h1>
          <motion.p 
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            Premium quality t-shirts with designs that speak volumes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Link to="/shop">
              <Button className="mt-8 text-lg">Shop New Arrivals</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <motion.section 
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 font-serif">Featured Collections</motion.h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {featuredProducts.map(product => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="text-center mt-12" variants={itemVariants}>
            <Link to="/shop">
                <Button variant="secondary">View All Products</Button>
            </Link>
        </motion.div>
      </motion.section>

      {/* About Us Snippet */}
      <motion.section 
        className="bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
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
      </motion.section>


      {/* Testimonials Section */}
      <motion.section 
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold text-center mb-12 font-serif">What Our Customers Say</motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      
      {/* Newsletter Section */}
      <NewsletterSignup />

    </div>
  );
};

export default HomePage;