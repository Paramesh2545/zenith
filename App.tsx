import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import { PRIVACY_POLICY, TERMS_OF_SERVICE } from './constants';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/shop" element={<PageWrapper><ShopPage /></PageWrapper>} />
        <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FaqPage /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
        <Route 
          path="/privacy-policy" 
          element={<PageWrapper><LegalPage title="Privacy Policy" content={PRIVACY_POLICY} /></PageWrapper>} 
        />
        <Route 
          path="/terms-of-service" 
          element={<PageWrapper><LegalPage title="Terms of Service" content={TERMS_OF_SERVICE} /></PageWrapper>} 
        />
        <Route path="/order-confirmation" element={<PageWrapper><OrderConfirmationPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="bg-gray-50 text-gray-800 font-sans">
          <Header />
          <main className="min-h-screen relative overflow-x-hidden">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CartProvider>
  );
};

export default App;