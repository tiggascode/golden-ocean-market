
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-ocean-blue-700 hover:text-golden-600 transition-colors font-medium">Home</a>
            <a href="#" className="text-ocean-blue-700 hover:text-golden-600 transition-colors font-medium">Products</a>
            <a href="#" className="text-ocean-blue-700 hover:text-golden-600 transition-colors font-medium">About</a>
            <a href="#" className="text-ocean-blue-700 hover:text-golden-600 transition-colors font-medium">Contact</a>
          </nav>

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
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-ocean-blue-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-ocean-blue-200">
            <nav className="flex flex-col space-y-2 mt-4">
              <a href="#" className="text-ocean-blue-700 hover:text-golden-600 transition-colors font-medium py-2">Home</a>
              <a href="#" className="text-ocean-blue-700 hover:text-golden-600 transition-colors font-medium py-2">Products</a>
              <a href="#" className="text-ocean-blue-700 hover:text-golden-600 transition-colors font-medium py-2">About</a>
              <a href="#" className="text-ocean-blue-700 hover:text-golden-600 transition-colors font-medium py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
