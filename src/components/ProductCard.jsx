import React from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product, index }) => {
  const { addToCart, cartItems, updateQuantity } = useCart();
  const cartItem = cartItems.find(item => item.id === product.id);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    updateQuantity(product.id, newQuantity);
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in overflow-hidden group"
      style={{ animationDelay: `${index * 100}ms` }}
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
      </div>

      <div className="p-6">
        <h4 className="text-2xl font-playfair font-bold text-golden-600 mb-4 group-hover:text-golden-700 transition-colors">
          {product.name}
        </h4>

        <div className="flex items-center justify-between">
          <div className="text-1xl font-bold text-ocean-blue-800">
            ֏{formatPrice(product.price)}
            <span className="text-sm font-normal text-ocean-blue-500 ml-1">/kg</span>
          </div>

          {cartItem ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(cartItem.quantity - 1)}
                className="p-1 rounded-full bg-golden-100 hover:bg-golden-200 text-golden-600 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-medium text-golden-600">{cartItem.quantity}</span>
              <button
                onClick={() => handleQuantityChange(cartItem.quantity + 1)}
                className="p-1 rounded-full bg-golden-100 hover:bg-golden-200 text-golden-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCart}
              className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-300 ${product.inStock
                ? 'bg-gradient-to-r from-golden-500 to-golden-600 text-white hover:from-golden-600 hover:to-golden-700 transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-3 h-2 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Unavailable'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
