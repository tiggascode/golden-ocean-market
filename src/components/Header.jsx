
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-ocean-blue-500 to-ocean-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌊</span>
            </div>
            <a href="/" className="text-2xl font-playfair font-bold text-ocean-blue-800">Krivetka.am</a>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">

            <a
              href="/cart"
              className="relative p-2 bg-golden-500 text-white rounded-full hover:bg-golden-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
