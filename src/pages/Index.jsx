
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-premium-onyx-900 via-premium-sapphire-900 to-premium-onyx-800">
      <Header />
      <Hero />

      {/* Premium Products Section */}
      <section id="products" className="py-24 px-4 relative">
        {/* Luxury background elements */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-premium-gold-500/50 to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          {/* Premium section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-2 bg-premium-gold-500/10 border border-premium-gold-500/20 rounded-full mb-6">
              <span className="text-premium-gold-400 text-sm font-medium tracking-wider uppercase">
                Curated Collection
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6">
              <span className="bg-gradient-to-r from-premium-gold-400 via-premium-gold-300 to-premium-gold-500 bg-clip-text text-transparent">
                Our Premium
              </span>
              <br />
              <span className="text-premium-pearl-50">Selection</span>
            </h2>
            
            <p className="text-xl text-premium-pearl-200 max-w-3xl mx-auto leading-relaxed">
              Each product in our exclusive collection represents the pinnacle of oceanic luxury, 
              handpicked from the world's most pristine waters.
            </p>
          </div>
          
          <ProductGrid />
        </div>
      </section>

      {/* Premium About Section */}
      <section id="about" className="py-24 px-4 bg-premium-onyx-800/50 relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-playfair font-bold mb-8">
              <span className="bg-gradient-to-r from-premium-gold-400 via-premium-gold-300 to-premium-gold-500 bg-clip-text text-transparent">
                About Krivetka.am
              </span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-premium-pearl-200 text-lg leading-relaxed">
                At Krivetka.am, we are passionate about bringing you the finest seafood from the depths of the ocean. 
                Our commitment to quality and sustainability sets us apart in the industry.
              </p>
              <p className="text-premium-pearl-200 text-lg leading-relaxed">
                Each product in our collection is carefully selected and handled with the utmost care to ensure 
                you receive nothing but the best. From our sustainable fishing practices to our premium packaging, 
                every detail matters.
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 bg-gradient-to-br from-premium-gold-500 to-premium-gold-600 rounded-full flex items-center justify-center">
                  <span className="text-premium-onyx-900 font-bold">✓</span>
                </div>
                <span className="text-premium-gold-400 font-medium">Sustainably Sourced</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-premium-onyx-700/50 to-premium-onyx-800/50 p-8 rounded-2xl border border-premium-gold-500/20">
              <h3 className="text-2xl font-playfair font-bold text-premium-gold-400 mb-4">Our Promise</h3>
              <ul className="space-y-3">
                <li className="text-premium-pearl-200 flex items-center gap-3">
                  <div className="w-2 h-2 bg-premium-gold-400 rounded-full"></div>
                  Premium Quality Guarantee
                </li>
                <li className="text-premium-pearl-200 flex items-center gap-3">
                  <div className="w-2 h-2 bg-premium-gold-400 rounded-full"></div>
                  Sustainable Sourcing
                </li>
                <li className="text-premium-pearl-200 flex items-center gap-3">
                  <div className="w-2 h-2 bg-premium-gold-400 rounded-full"></div>
                  Expert Curation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold mb-6">
              <span className="bg-gradient-to-r from-premium-gold-400 via-premium-gold-300 to-premium-gold-500 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h2>
            <p className="text-xl text-premium-pearl-200">
              Experience luxury service that matches our premium products
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-premium-onyx-800/60 to-premium-onyx-900/80 p-10 rounded-2xl border border-premium-gold-500/20 backdrop-blur-md">
              <h3 className="text-3xl font-playfair font-bold text-premium-gold-400 mb-6">Get in Touch</h3>
              <p className="text-premium-pearl-200 mb-8 text-lg leading-relaxed">
                Have questions about our products or services? Our luxury concierge team is here to assist you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-premium-gold-500 to-premium-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-premium-onyx-900 font-bold">📞</span>
                  </div>
                  <span className="text-premium-pearl-200 text-lg">+374 94616939</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-premium-onyx-800/60 to-premium-onyx-900/80 p-10 rounded-2xl border border-premium-gold-500/20 backdrop-blur-md">
              <h3 className="text-3xl font-playfair font-bold text-premium-gold-400 mb-6">Luxury Service</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-premium-emerald-500 to-premium-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">24</span>
                  </div>
                  <div>
                    <p className="text-premium-pearl-200 text-lg font-medium">Open 24/7</p>
                    <p className="text-premium-pearl-300">Luxury never sleeps</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-premium-sapphire-500 to-premium-sapphire-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">⚡</span>
                  </div>
                  <div>
                    <p className="text-premium-pearl-200 text-lg font-medium">Same-Day Delivery</p>
                    <p className="text-premium-pearl-300">Premium locations only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
