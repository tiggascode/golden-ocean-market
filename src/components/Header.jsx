
import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-ocean-blue-500 to-ocean-blue-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌊</span>
            </div>
            <h1 className="text-2xl font-playfair font-bold text-ocean-blue-800">Ocean Fresh</h1>
          </div>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center bg-ocean-blue-50 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-ocean-blue-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search seafood..." 
                className="bg-transparent outline-none text-ocean-blue-700 placeholder-ocean-blue-400"
              />
            </div>
            <button className="relative p-2 bg-golden-500 text-white rounded-full hover:bg-golden-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
