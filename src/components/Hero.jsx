
import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Premium 3D Background Elements */}
      <div className="absolute inset-0">
        {/* Deep blue gradient foundation */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#153c5c] via-[#1a4a6f] to-[#153c5c]"></div>

        {/* 3D geometric grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
              linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '400px 400px, 600px 600px, 80px 80px, 80px 80px'
          }}></div>
        </div>

        {/* Premium 3D depth layers */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d2a42] via-transparent to-[#1a4a6f]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a4a6f]/20 to-[#0d2a42]"></div>

        {/* Apple-style floating orbs with 3D depth - Optimized */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-br from-[#1a4a6f]/10 to-[#0d2a42]/5 rounded-full blur-3xl animate-fast-float opacity-60 will-change-transform"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-tl from-[#1a4a6f]/8 to-transparent rounded-full blur-2xl animate-fast-float opacity-40 will-change-transform" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#1a4a6f]/5 via-[#153c5c]/10 to-[#1a4a6f]/5 rounded-full blur-3xl animate-fast-float opacity-30 will-change-transform" style={{ animationDelay: '3s' }}></div>

        {/* Premium light beams */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-[#1a4a6f]/20 via-[#153c5c]/5 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-[#1a4a6f]/15 via-[#153c5c]/3 to-transparent"></div>

        {/* Subtle noise texture for premium feel */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
      </div>

      {/* 3D Animated Lobster - Main Feature - Optimized */}
      <div className="absolute top-20 right-20 z-5">
        <div className="relative transform-gpu will-change-transform animate-lobster-float">
          {/* Lobster Shadow/Glow */}
          <div className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-br from-premium-gold-400/40 to-premium-gold-600/20 rounded-full transform scale-150"></div>

          {/* Main Lobster Body */}
          <div className="relative text-8xl transform-gpu will-change-transform animate-lobster-sway" style={{
            filter: 'drop-shadow(0 20px 40px rgba(212, 175, 55, 0.3)) drop-shadow(0 0 60px rgba(255, 69, 0, 0.2))'
          }}>
            🦐
          </div>

          {/* 3D Depth Layers */}
          <div className="absolute inset-0 text-8xl opacity-20 transform translate-x-2 translate-y-2 scale-95" style={{
            filter: 'blur(1px)',
            color: '#8B4513'
          }}>
            🦐
          </div>
          <div className="absolute inset-0 text-8xl opacity-10 transform translate-x-4 translate-y-4 scale-90" style={{
            filter: 'blur(2px)',
            color: '#654321'
          }}>
            🦐
          </div>
        </div>
      </div>

      {/* Secondary Lobster - Smaller, Different Position - Optimized */}
      <div className="absolute bottom-32 left-16 z-5">
        <div className="relative transform-gpu will-change-transform animate-lobster-float-2">
          {/* Smaller Lobster Shadow/Glow */}
          <div className="absolute inset-0 blur-xl opacity-20 bg-gradient-to-br from-premium-gold-300/30 to-premium-gold-500/15 rounded-full transform scale-125"></div>

          {/* Smaller Lobster */}
          <div className="relative text-5xl transform-gpu will-change-transform animate-lobster-sway-2" style={{
            filter: 'drop-shadow(0 15px 30px rgba(212, 175, 55, 0.25)) drop-shadow(0 0 40px rgba(255, 69, 0, 0.15))'
          }}>
            🦐
          </div>

          {/* 3D Depth for smaller lobster */}
          <div className="absolute inset-0 text-5xl opacity-15 transform translate-x-1 translate-y-1 scale-95" style={{
            filter: 'blur(0.5px)',
            color: '#8B4513'
          }}>
            🦐
          </div>
        </div>
      </div>

      {/* Floating Bubbles for Underwater Effect - Optimized */}
      <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-premium-gold-400/40 rounded-full animate-bubble-float will-change-transform"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-premium-gold-300/30 rounded-full animate-bubble-float will-change-transform" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/3 left-1/5 w-2 h-2 bg-premium-gold-500/50 rounded-full animate-bubble-float will-change-transform" style={{ animationDelay: '4s' }}></div>

      {/* Main content with enhanced 3D styling */}
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          {/* Premium badge with 3D effect */}
          <div className="hidden md:inline-flex items-center px-8 py-3 bg-black/60 border-2 border-premium-gold-500/30 rounded-full mb-8 backdrop-blur-xl shadow-2xl shadow-premium-gold-500/20">
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
            <button
              onClick={() => scrollToSection('products')}
              className="group relative px-10 py-5 bg-gradient-to-r from-premium-gold-400 via-premium-gold-500 to-premium-gold-600 text-black font-semibold rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-premium-gold-500/30 hover:shadow-premium-gold-500/50 will-change-transform"
            >
              <span className="relative z-10">Explore Collection</span>
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold-500 via-premium-gold-600 to-premium-gold-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollToSection('about')}
              className="px-10 py-5 border-2 border-premium-gold-500/50 text-premium-gold-400 font-semibold rounded-2xl hover:border-premium-gold-400 hover:bg-premium-gold-500/10 hover:text-premium-gold-300 transition-all duration-300 backdrop-blur-xl bg-black/20 shadow-xl hover:shadow-2xl hover:shadow-premium-gold-500/20 will-change-transform"
            >
              Learn Our Story
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced 3D floating elements - Optimized */}
      <div className="absolute top-32 left-16 text-6xl opacity-15 animate-fast-float transform rotate-12 will-change-transform" style={{
        filter: 'drop-shadow(0 10px 20px rgba(212, 175, 55, 0.2))'
      }}>🐟</div>
      <div className="absolute top-48 right-20 text-4xl opacity-20 animate-fast-float transform -rotate-6 will-change-transform" style={{
        animationDelay: '0.5s',
        filter: 'drop-shadow(0 8px 16px rgba(212, 175, 55, 0.15))'
      }}>🦐</div>
      <div className="absolute bottom-32 left-24 text-5xl opacity-15 animate-fast-float transform rotate-45 will-change-transform" style={{
        animationDelay: '1s',
        filter: 'drop-shadow(0 12px 24px rgba(212, 175, 55, 0.1))'
      }}>🦀</div>

      {/* Premium 3D sparkle effects - Optimized */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-premium-gold-400 rounded-full opacity-80 animate-fast-pulse shadow-lg shadow-premium-gold-400/50 will-change-transform"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-premium-gold-300 rounded-full opacity-90 animate-fast-pulse shadow-md shadow-premium-gold-300/50 will-change-transform" style={{ animationDelay: '0.25s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-premium-gold-500 rounded-full opacity-70 animate-fast-pulse shadow-lg shadow-premium-gold-500/40 will-change-transform" style={{ animationDelay: '0.75s' }}></div>
      <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-premium-gold-200 rounded-full opacity-100 animate-fast-pulse shadow-sm shadow-premium-gold-200/60 will-change-transform" style={{ animationDelay: '1.25s' }}></div>
    </section>
  );
};

export default Hero;
