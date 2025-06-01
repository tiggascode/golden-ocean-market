
import React from 'react';

const Hero = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
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
      
      {/* Premium texture overlay with 3D depth */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
      
      {/* Luxury gradient borders with 3D effect */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-premium-gold-500 to-transparent shadow-lg shadow-premium-gold-500/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-premium-gold-500 to-transparent shadow-lg shadow-premium-gold-500/50"></div>
      
      {/* 3D Geometric patterns with depth */}
      <div className="absolute top-20 left-20 w-32 h-32 opacity-10 transform rotate-45" style={{ 
        background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.2), transparent)',
        borderRadius: '20%',
        boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)',
        animation: 'float 8s ease-in-out infinite'
      }}>
        <div className="w-full h-full border border-premium-gold-500/20 transform rotate-12"></div>
      </div>
      <div className="absolute bottom-20 right-20 w-24 h-24 opacity-15 transform -rotate-12" style={{
        background: 'linear-gradient(-45deg, rgba(212, 175, 55, 0.15), transparent)',
        borderRadius: '30%',
        boxShadow: '0 15px 30px rgba(212, 175, 55, 0.08)',
        animation: 'float 6s ease-in-out infinite reverse'
      }}>
        <div className="w-full h-full border border-premium-gold-500/30 transform rotate-45"></div>
      </div>
      
      {/* Main content with enhanced 3D styling */}
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Premium badge with 3D effect */}
          <div className="inline-flex items-center px-8 py-3 bg-black/60 border-2 border-premium-gold-500/30 rounded-full mb-8 backdrop-blur-xl shadow-2xl shadow-premium-gold-500/20">
            <span className="text-premium-gold-400 text-sm font-medium tracking-wider uppercase">
              Premium Seafood Collection
            </span>
          </div>
          
          {/* Enhanced 3D title */}
          <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-8 leading-tight tracking-tight relative">
            <span className="bg-gradient-to-r from-premium-gold-300 via-premium-gold-400 to-premium-gold-500 bg-clip-text text-transparent drop-shadow-2xl" style={{
              textShadow: '0 0 30px rgba(212, 175, 55, 0.3), 0 0 60px rgba(212, 175, 55, 0.1)'
            }}>
              Krivetka
            </span>
            <span className="text-white drop-shadow-xl">.am</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Indulge in the world's finest seafood, meticulously sourced from pristine waters and delivered with uncompromising excellence.
          </p>
          
          {/* Premium CTA buttons with enhanced 3D effects */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-premium-gold-400 via-premium-gold-500 to-premium-gold-600 text-black font-semibold rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 shadow-2xl shadow-premium-gold-500/30 hover:shadow-premium-gold-500/50">
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold-500 via-premium-gold-600 to-premium-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            
            <button className="px-10 py-5 border-2 border-premium-gold-500/50 text-premium-gold-400 font-semibold rounded-2xl hover:border-premium-gold-400 hover:bg-premium-gold-500/10 hover:text-premium-gold-300 transition-all duration-500 backdrop-blur-xl bg-black/20 shadow-xl hover:shadow-2xl hover:shadow-premium-gold-500/20">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced 3D floating elements */}
      <div className="absolute top-32 left-16 text-6xl opacity-15 animate-float transform rotate-12" style={{
        filter: 'drop-shadow(0 10px 20px rgba(212, 175, 55, 0.2))'
      }}>🐟</div>
      <div className="absolute top-48 right-20 text-4xl opacity-20 animate-float transform -rotate-6" style={{ 
        animationDelay: '1s',
        filter: 'drop-shadow(0 8px 16px rgba(212, 175, 55, 0.15))'
      }}>🦐</div>
      <div className="absolute bottom-32 left-24 text-5xl opacity-15 animate-float transform rotate-45" style={{ 
        animationDelay: '2s',
        filter: 'drop-shadow(0 12px 24px rgba(212, 175, 55, 0.1))'
      }}>🦀</div>
      
      {/* Premium 3D sparkle effects */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-premium-gold-400 rounded-full opacity-80 animate-pulse shadow-lg shadow-premium-gold-400/50"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-premium-gold-300 rounded-full opacity-90 animate-pulse shadow-md shadow-premium-gold-300/50" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-premium-gold-500 rounded-full opacity-70 animate-pulse shadow-lg shadow-premium-gold-500/40" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-premium-gold-200 rounded-full opacity-100 animate-pulse shadow-sm shadow-premium-gold-200/60" style={{ animationDelay: '2.5s' }}></div>
    </section>
  );
};

export default Hero;
