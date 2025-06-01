
import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-premium-onyx-900 via-premium-sapphire-900 to-premium-onyx-800">
      {/* Premium texture overlay */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      
      {/* Luxury gradient borders */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-premium-gold-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-premium-gold-500 to-transparent"></div>
      
      {/* Elegant geometric patterns */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-5">
        <div className="w-full h-full border border-premium-gold-500/20 rotate-45 transform"></div>
      </div>
      <div className="absolute bottom-20 right-20 w-24 h-24 opacity-5">
        <div className="w-full h-full border border-premium-gold-500/20 rotate-12 transform"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Premium badge */}
          <div className="inline-flex items-center px-6 py-2 bg-premium-gold-500/10 border border-premium-gold-500/20 rounded-full mb-8">
            <span className="text-premium-gold-400 text-sm font-medium tracking-wider uppercase">
              Premium Seafood Collection
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-premium-gold-400 via-premium-gold-300 to-premium-gold-500 bg-clip-text text-transparent">
              Krivetka
            </span>
            <span className="text-premium-pearl-50">.am</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-premium-pearl-200 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Indulge in the world's finest seafood, meticulously sourced from pristine waters and delivered with uncompromising excellence.
          </p>
          
          {/* Premium CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-premium-gold-500 to-premium-gold-600 text-premium-onyx-900 font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold-600 to-premium-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-premium-gold-500/50 text-premium-gold-400 font-semibold rounded-lg hover:border-premium-gold-500 hover:bg-premium-gold-500/10 transition-all duration-300 backdrop-blur-sm">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Premium floating elements */}
      <div className="absolute top-32 left-16 text-6xl opacity-10 animate-float">🐟</div>
      <div className="absolute top-48 right-20 text-4xl opacity-10 animate-float" style={{ animationDelay: '1s' }}>🦐</div>
      <div className="absolute bottom-32 left-24 text-5xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>🦀</div>
      
      {/* Luxury sparkle effects */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-premium-gold-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-premium-gold-300 rounded-full opacity-80 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-premium-gold-500 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </section>
  );
};

export default Hero;
