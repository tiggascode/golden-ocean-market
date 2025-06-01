
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus, Phone, Crown, Shield, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden">
      {/* Premium 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Floating 3D geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 opacity-5 animate-float">
          <div className="w-full h-full bg-gradient-to-br from-premium-gold-500/20 to-premium-gold-600/10 rounded-full blur-3xl transform rotate-45 scale-75"></div>
        </div>
        <div className="absolute top-40 right-20 w-48 h-48 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-full h-full bg-gradient-to-tl from-premium-gold-400/15 to-transparent rounded-full blur-2xl"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 opacity-15 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-full h-full bg-premium-gold-500/20 rounded-full blur-xl"></div>
        </div>
        
        {/* 3D Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: 'perspective(1000px) rotateX(60deg) rotateY(-15deg)',
            transformOrigin: 'center center'
          }}></div>
        </div>
        
        {/* Premium depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        
        {/* Luxury light rays */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-premium-gold-400/30 via-premium-gold-500/10 to-transparent"></div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-premium-gold-400/20 to-transparent"></div>
      </div>
      
      {/* Premium texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>

      <Header />

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Premium page header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-2 bg-premium-gold-500/10 border border-premium-gold-500/20 rounded-full mb-6 backdrop-blur-md">
            <Crown className="w-4 h-4 text-premium-gold-400 mr-2" />
            <span className="text-premium-gold-400 text-sm font-medium tracking-wider uppercase">
              Luxury Cart
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4">
            <span className="bg-gradient-to-r from-premium-gold-400 via-premium-gold-300 to-premium-gold-500 bg-clip-text text-transparent">
              Your Premium
            </span>
            <br />
            <span className="text-premium-pearl-50">Selection</span>
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gradient-to-br from-premium-gold-500/20 to-premium-gold-600/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-premium-gold-500/30 backdrop-blur-md">
                <Crown className="w-12 h-12 text-premium-gold-400" />
              </div>
              <h2 className="text-2xl font-playfair font-bold text-premium-pearl-50 mb-4">
                Your luxury cart awaits
              </h2>
              <p className="text-premium-pearl-300 text-lg mb-8">
                Discover our premium collection of the finest seafood
              </p>
              <a
                href="/"
                className="inline-block px-10 py-4 bg-gradient-to-r from-premium-gold-500 to-premium-gold-600 hover:from-premium-gold-600 hover:to-premium-gold-700 text-premium-onyx-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl ring-4 ring-premium-gold-500/20 hover:ring-premium-gold-500/40"
              >
                Explore Premium Collection
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Premium Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gradient-to-r from-premium-onyx-800/60 to-premium-onyx-900/80 rounded-2xl overflow-hidden border border-premium-gold-500/20 hover:border-premium-gold-500/40 transition-all duration-500 backdrop-blur-md shadow-2xl"
                >
                  {/* Premium top border */}
                  <div className="h-1 bg-gradient-to-r from-transparent via-premium-gold-500 to-transparent"></div>
                  
                  <div className="p-8 flex items-center gap-8">
                    {/* Premium Product Image */}
                    <div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 border border-premium-gold-500/20">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Premium Product Info */}
                    <div className="flex-grow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-playfair font-bold text-premium-pearl-50 mb-2">
                            {item.name}
                          </h3>
                          <p className="text-premium-pearl-300 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 bg-premium-gold-500/10 px-3 py-1 rounded-full border border-premium-gold-500/20">
                          <Award className="w-4 h-4 text-premium-gold-400" />
                          <span className="text-premium-gold-400 text-sm font-medium">Premium</span>
                        </div>
                      </div>

                      {/* Premium Price and Controls */}
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold bg-gradient-to-r from-premium-gold-400 to-premium-gold-500 bg-clip-text text-transparent">
                          ${item.price.toFixed(2)}
                        </div>
                        
                        <div className="flex items-center gap-6">
                          {/* Premium quantity controls */}
                          <div className="flex items-center gap-3 bg-premium-onyx-900/70 px-4 py-2 rounded-xl border border-premium-gold-500/30 backdrop-blur-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 rounded-full bg-gradient-to-r from-premium-gold-500/20 to-premium-gold-600/20 hover:from-premium-gold-500/40 hover:to-premium-gold-600/40 text-premium-gold-400 transition-all duration-300 border border-premium-gold-500/30"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-premium-pearl-50 font-bold min-w-[24px] text-center text-lg">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 rounded-full bg-gradient-to-r from-premium-gold-500/20 to-premium-gold-600/20 hover:from-premium-gold-500/40 hover:to-premium-gold-600/40 text-premium-gold-400 transition-all duration-300 border border-premium-gold-500/30"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                          
                          {/* Premium remove button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="p-3 text-premium-ruby-400 hover:text-premium-ruby-300 hover:bg-premium-ruby-500/10 rounded-xl transition-all duration-300 border border-premium-ruby-500/20 hover:border-premium-ruby-500/40"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-premium-onyx-800/60 to-premium-onyx-900/80 rounded-2xl p-8 border border-premium-gold-500/20 backdrop-blur-md shadow-2xl sticky top-8">
                {/* Premium header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-premium-gold-500 to-premium-gold-600 rounded-full flex items-center justify-center">
                    <Crown className="w-4 h-4 text-premium-onyx-900" />
                  </div>
                  <h2 className="text-2xl font-playfair font-bold text-premium-pearl-50">
                    Luxury Summary
                  </h2>
                </div>

                {/* Premium summary details */}
                <div className="space-y-6 mb-8">
                  <div className="flex justify-between text-premium-pearl-300">
                    <span>Subtotal</span>
                    <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-premium-pearl-300">
                    <span>Premium Packaging</span>
                    <span className="text-premium-emerald-400 font-medium">Complimentary</span>
                  </div>
                  <div className="flex justify-between text-premium-pearl-300">
                    <span>White-Glove Delivery</span>
                    <span className="text-premium-emerald-400 font-medium">Free</span>
                  </div>
                  
                  {/* Premium features */}
                  <div className="bg-premium-gold-500/10 border border-premium-gold-500/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-premium-gold-400" />
                      <span className="text-premium-gold-400 font-medium text-sm">Premium Benefits</span>
                    </div>
                    <ul className="text-premium-pearl-300 text-sm space-y-1">
                      <li>• Quality guarantee</li>
                      <li>• Temperature controlled</li>
                      <li>• Expert handling</li>
                    </ul>
                  </div>
                  
                  <div className="h-px bg-premium-gold-500/30 my-6"></div>
                  <div className="flex justify-between text-premium-pearl-50 font-bold text-xl">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-premium-gold-400 to-premium-gold-500 bg-clip-text text-transparent">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Premium contact section */}
                <div className="bg-gradient-to-r from-premium-gold-500/20 to-premium-gold-600/20 border border-premium-gold-500/30 rounded-xl p-6 backdrop-blur-md">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-premium-gold-500 to-premium-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-6 h-6 text-premium-onyx-900" />
                    </div>
                    <h3 className="text-premium-gold-400 font-bold mb-2">Luxury Concierge</h3>
                    <p className="text-premium-pearl-300 text-sm mb-4">
                      Complete your order with our premium service
                    </p>
                    <a
                      href="tel:+37494616939"
                      className="text-premium-gold-400 font-bold text-lg hover:text-premium-gold-300 transition-colors"
                    >
                      +374 94616939
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
