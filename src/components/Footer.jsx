
import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-ocean-blue-800 to-ocean-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-golden-500 to-golden-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">🌊</span>
              </div>
              <h3 className="text-2xl font-playfair font-bold">Ocean Fresh</h3>
            </div>
            <p className="text-ocean-blue-200 mb-4 leading-relaxed">
              Your trusted partner for premium fresh seafood. We bring the ocean's finest treasures directly to your table.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-ocean-blue-300 hover:text-golden-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-ocean-blue-300 hover:text-golden-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-ocean-blue-300 hover:text-golden-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold text-golden-400 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Fresh Fish</a></li>
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Shellfish</a></li>
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Prepared Foods</a></li>
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Recipes</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xl font-playfair font-semibold text-golden-400 mb-6">Customer Service</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-ocean-blue-200 hover:text-golden-400 transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-playfair font-semibold text-golden-400 mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-golden-400" />
                <span className="text-ocean-blue-200">123 Harbor Street, Coastal City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-golden-400" />
                <span className="text-ocean-blue-200">(555) 123-FISH</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-golden-400" />
                <span className="text-ocean-blue-200">hello@oceanfresh.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ocean-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ocean-blue-300 text-sm mb-4 md:mb-0">
            © 2024 Ocean Fresh. All rights reserved. | Fresh from Ocean to Table
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-ocean-blue-300 hover:text-golden-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-ocean-blue-300 hover:text-golden-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-ocean-blue-300 hover:text-golden-400 transition-colors">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
