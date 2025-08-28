import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { ShoppingCartIcon } from './Icons';
import CartSummary from './CartSummary';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkStyle = "text-gray-600 hover:text-gray-900 transition-colors duration-300";
  const activeLinkStyle = {
    color: '#111827',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  };

  return (
    <>
      <header className={`bg-white/80 backdrop-blur-md sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold font-serif text-gray-900">
            Zenith
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Home</NavLink>
            <NavLink to="/shop" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Shop</NavLink>
            <NavLink to="/about" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>About</NavLink>
            <NavLink to="/blog" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Blog</NavLink>
            <NavLink to="/contact" className={linkStyle} style={({ isActive }) => isActive ? activeLinkStyle : undefined}>Contact</NavLink>
          </nav>
          <div className="flex items-center">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-600 hover:text-gray-900 transition-colors duration-300"
              aria-label={`Open cart with ${cartCount} items`}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
      <CartSummary isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;