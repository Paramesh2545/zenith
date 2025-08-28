
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import BlogPage from './pages/BlogPage';
import LegalPage from './pages/LegalPage';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="bg-gray-50 text-gray-800 font-sans">
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route 
                path="/privacy-policy" 
                element={<LegalPage title="Privacy Policy" content={PRIVACY_POLICY} />} 
              />
              <Route 
                path="/terms-of-service" 
                element={<LegalPage title="Terms of Service" content={TERMS_OF_SERVICE} />} 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CartProvider>
  );
};

export default App;
