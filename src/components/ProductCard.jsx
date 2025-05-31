
import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';

const ProductCard = ({ product, index }) => {
  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in overflow-hidden group"
      style={{animationDelay: `${index * 100}ms`}}
    >
      <div className="relative p-6 bg-gradient-to-br from-ocean-blue-50 to-white">
        <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
          {product.image}
        </div>
        
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
            Out of Stock
          </div>
        )}
        
        <button className="absolute top-4 right-4 p-2 text-ocean-blue-400 hover:text-red-500 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-6">
        <h4 className="text-2xl font-playfair font-bold text-golden-600 mb-2 group-hover:text-golden-700 transition-colors">
          {product.name}
        </h4>
        
        <p className="text-ocean-blue-600 mb-4 text-sm leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-golden-500 mr-2">
            {[1,2,3,4,5].map(i => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i <= Math.floor(product.rating) ? 'fill-current' : ''}`} 
              />
            ))}
          </div>
          <span className="text-ocean-blue-600 text-sm font-medium">({product.rating})</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-ocean-blue-800">
            ${product.price}
            <span className="text-sm font-normal text-ocean-blue-500 ml-1">/lb</span>
          </div>
          
          <button 
            className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              product.inStock 
                ? 'bg-gradient-to-r from-golden-500 to-golden-600 text-white hover:from-golden-600 hover:to-golden-700 transform hover:scale-105' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            {product.inStock ? 'Add to Cart' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
