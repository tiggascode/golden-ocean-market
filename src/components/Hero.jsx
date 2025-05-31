
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-ocean-blue-800 mb-6 leading-tight">
            Premium <span className="text-golden-600">Fresh Seafood</span>
          </h2>
          <p className="text-xl md:text-2xl text-ocean-blue-600 mb-8 max-w-3xl mx-auto font-inter">
            Dive into the finest selection of ocean treasures, delivered fresh to your doorstep with uncompromising quality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-golden-500 to-golden-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-golden-600 hover:to-golden-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center group">
              Shop Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-ocean-blue-300 text-ocean-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-ocean-blue-50 transition-colors">
              Learn More
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 text-ocean-blue-600">
            <div className="flex items-center">
              <div className="flex text-golden-500 mr-2">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ocean-blue-800">1000+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ocean-blue-800">24h</div>
              <div className="text-sm">Fresh Delivery</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🐟</div>
      <div className="absolute top-40 right-16 text-4xl opacity-20 animate-float" style={{animationDelay: '1s'}}>🦐</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-float" style={{animationDelay: '2s'}}>🦀</div>
    </section>
  );
};

export default Hero;
