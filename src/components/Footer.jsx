import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-ocean-blue-800 to-ocean-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-golden-500 to-golden-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌊</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold">Ocean Fresh</h3>
            </div>
            <p className="text-ocean-blue-200 mb-4 leading-relaxed max-w-md">
              Your trusted partner for premium fresh seafood. We bring the ocean's finest treasures directly to your table.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-ocean-blue-300 hover:text-golden-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-ocean-blue-300 hover:text-golden-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-playfair font-semibold text-golden-400 mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-golden-400" />
                <span className="text-ocean-blue-200">099777777</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-golden-400" />
                <span className="text-ocean-blue-200">krievtka@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
