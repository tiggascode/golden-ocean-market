
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-playfair font-bold text-ocean-blue-800 mb-6 leading-tight">
            <span className="text-golden-600">Krivetka.am</span>
          </h2>
          <p className="text-xl md:text-2xl text-ocean-blue-600 mb-8 max-w-3xl mx-auto font-inter">
            Dive into the finest selection of ocean treasures, delivered fresh to your doorstep with uncompromising quality
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">

          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float">🐟</div>
      <div className="absolute top-40 right-16 text-4xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🦐</div>
      <div className="absolute bottom-20 left-20 text-5xl opacity-20 animate-float" style={{ animationDelay: '2s' }}>🦀</div>
    </section>
  );
};

export default Hero;
