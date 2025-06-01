import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const [showQuantity, setShowQuantity] = useState(false);
  const cartItem = cartItems.find(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking the button
    if (!cartItem) {
      addToCart({ ...product, quantity: 1 });
      setShowQuantity(true);
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(product.id);
      setShowQuantity(false);
    } else {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full group relative bg-gradient-to-br from-premium-onyx-700/50 to-premium-onyx-800/50 rounded-xl overflow-hidden border border-premium-gold-500/10 hover:border-premium-gold-500/30 transition-all duration-300 cursor-pointer"
    >
      {/* Premium decorative elements */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-premium-gold-500/50 to-transparent"></div>

      {/* Image container with premium overlay */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-onyx-800/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Premium badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="px-3 py-1.5 bg-premium-gold-500 text-premium-onyx-900 text-sm font-semibold rounded-full">
              New Arrival
            </span>
          )}
          {product.discount > 0 && (
            <span className="px-3 py-1.5 bg-premium-ruby-500 text-premium-pearl-50 text-sm font-semibold rounded-full">
              -{product.discount}% OFF
            </span>
          )}
        </div>

        {/* Add to Cart Button or Quantity Selector */}
        <div className={`absolute bottom-4 right-4 ${cartItem ? 'opacity-100' : 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100'} transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-300`}>
          {!showQuantity && !cartItem ? (
            <button
              onClick={handleAddToCart}
              className="p-2.5 bg-premium-gold-500 text-premium-onyx-900 rounded-full hover:bg-premium-gold-600 transition-colors shadow-lg"
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-premium-onyx-900/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuantityChange((cartItem?.quantity || 1) - 1);
                }}
                className="p-1.5 rounded-full bg-premium-gold-500/20 hover:bg-premium-gold-500/30 text-premium-gold-400 transition-colors"
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-premium-pearl-50 font-medium min-w-[24px] text-center text-lg">
                {cartItem?.quantity || 1}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuantityChange((cartItem?.quantity || 1) + 1);
                }}
                className="p-1.5 rounded-full bg-premium-gold-500/20 hover:bg-premium-gold-500/30 text-premium-gold-400 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Content with premium styling */}
      <div className="p-6 sm:p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl sm:text-lg font-playfair font-bold text-premium-pearl-50 group-hover:text-premium-gold-400 transition-colors">
            {product.name}
          </h3>
          <div className="flex flex-col items-end">
            {product.discount > 0 ? (
              <>
                <span className="text-xl sm:text-lg text-premium-gold-400 font-bold">${product.price.toFixed(2)}</span>
                <span className="text-base sm:text-sm text-premium-pearl-400 line-through">${(product.price * (1 + product.discount / 100)).toFixed(2)}</span>
              </>
            ) : (
              <span className="text-xl sm:text-lg text-premium-gold-400 font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>

        <p className="text-base sm:text-sm text-premium-pearl-300 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-end">
          <span className="text-base sm:text-sm text-premium-pearl-400">{product.stock} in stock</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
