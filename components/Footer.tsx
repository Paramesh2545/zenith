
import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterIcon, InstagramIcon, FacebookIcon } from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif text-gray-900 mb-4">Zenith</h3>
            <p className="text-gray-500">Wear your story.</p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-500 hover:text-gray-900">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-500 hover:text-gray-900">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-500 hover:text-gray-900">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-900"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><InstagramIcon className="h-6 w-6" /></a>
              <a href="#" className="text-gray-500 hover:text-gray-900"><FacebookIcon className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Zenith Threads. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
