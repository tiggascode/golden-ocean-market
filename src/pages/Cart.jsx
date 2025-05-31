
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import Header from '../components/Header';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ocean-blue-50 via-white to-ocean-blue-100">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <ShoppingBag className="w-24 h-24 mx-auto text-ocean-blue-300 mb-8" />
            <h2 className="text-3xl font-playfair font-bold text-ocean-blue-800 mb-4">
              Your cart is empty
            </h2>
            <p className="text-ocean-blue-600 mb-8">
              Add some delicious seafood to get started!
            </p>
            <a
              href="/"
              className="bg-gradient-to-r from-golden-500 to-golden-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-golden-600 hover:to-golden-700 transition-all duration-300 transform hover:scale-105"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-blue-50 via-white to-ocean-blue-100">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair font-bold text-ocean-blue-800 mb-8">
          Shopping Cart
        </h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center py-6 border-b border-gray-200 last:border-b-0">
                  <div className="text-4xl mr-4">{item.image}</div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ocean-blue-800 mb-2">
                      {item.name}
                    </h3>
                    <p className="text-ocean-blue-500 text-sm mb-2">Krivetka.am</p>
                    <p className="text-2xl font-bold text-ocean-blue-800">
                      ${item.price}
                      <span className="text-sm font-normal text-ocean-blue-500 ml-1">/lb</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-playfair font-bold text-ocean-blue-800 mb-6">
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-ocean-blue-600">Subtotal:</span>
                  <span className="font-semibold text-ocean-blue-800">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ocean-blue-600">Shipping:</span>
                  <span className="font-semibold text-ocean-blue-800">Free</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-ocean-blue-800">Total:</span>
                    <span className="text-golden-600">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-golden-500 to-golden-600 text-white py-4 rounded-full font-semibold text-lg hover:from-golden-600 hover:to-golden-700 transition-all duration-300 transform hover:scale-105 mb-4">
                Proceed to Checkout
              </button>
              
              <button
                onClick={clearCart}
                className="w-full border border-red-300 text-red-600 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
