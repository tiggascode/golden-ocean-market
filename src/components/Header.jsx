
import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-premium-onyx-900/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-premium-gold-500/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Premium Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-br from-premium-gold-400 via-premium-gold-500 to-premium-gold-600 rounded-full flex items-center justify-center shadow-2xl ring-4 ring-premium-gold-500/20">
                <span className="text-premium-onyx-900 font-bold text-2xl">🌊</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-premium-gold-300 rounded-full opacity-80 animate-pulse"></div>
            </div>
            <a href="/" className="text-3xl font-playfair font-bold tracking-wide">
              <span className="bg-gradient-to-r from-premium-gold-400 via-premium-gold-300 to-premium-gold-500 bg-clip-text text-transparent">
                Krivetka
              </span>
              <span className="text-premium-pearl-50">.am</span>
            </a>
          </div>

          {/* Premium Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('products')}
              className="text-premium-pearl-300 hover:text-premium-gold-400 font-medium transition-colors duration-300 relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-premium-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-premium-pearl-300 hover:text-premium-gold-400 font-medium transition-colors duration-300 relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-premium-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-premium-pearl-300 hover:text-premium-gold-400 font-medium transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-premium-gold-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Premium Search & Cart */}
          <div className="flex items-center space-x-4">
            {/* Luxury Search Bar */}
            <div className={`relative hidden md:block transition-all duration-300 ${isSearchFocused ? 'scale-105' : ''}`}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search luxury seafood..."
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="bg-premium-onyx-800/80 border-2 border-premium-gold-500/20 rounded-full px-6 py-3 pl-12 text-premium-pearl-50 placeholder-premium-pearl-300/60 focus:outline-none focus:border-premium-gold-500/60 focus:bg-premium-onyx-800 w-64 transition-all duration-300 backdrop-blur-sm"
                />
                <Search className="w-5 h-5 text-premium-gold-400/70 absolute left-4 top-1/2 transform -translate-y-1/2" />
                {isSearchFocused && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-premium-onyx-800/95 backdrop-blur-md border border-premium-gold-500/20 rounded-xl shadow-2xl p-4 animate-fade-in">
                    <p className="text-premium-pearl-300 text-sm">Popular: Salmon, Lobster, Caviar</p>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-premium-gold-400 hover:text-premium-gold-300 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Premium Cart Button */}
            <a
              href="/cart"
              className="group relative p-3 bg-gradient-to-r from-premium-gold-500 to-premium-gold-600 text-premium-onyx-900 rounded-full hover:from-premium-gold-600 hover:to-premium-gold-700 transition-all duration-300 transform hover:scale-110 shadow-2xl ring-4 ring-premium-gold-500/20 hover:ring-premium-gold-500/40"
            >
              <ShoppingCart className="w-6 h-6" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-premium-onyx-900 text-premium-gold-400 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center border-2 border-premium-gold-500/50 shadow-lg animate-pulse">
                  {getTotalItems()}
                </span>
              )}
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold-600 to-premium-gold-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-premium-onyx-800/95 backdrop-blur-md rounded-xl border border-premium-gold-500/20 p-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('products')}
                className="text-premium-pearl-300 hover:text-premium-gold-400 font-medium transition-colors duration-300 text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-premium-pearl-300 hover:text-premium-gold-400 font-medium transition-colors duration-300 text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-premium-pearl-300 hover:text-premium-gold-400 font-medium transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
