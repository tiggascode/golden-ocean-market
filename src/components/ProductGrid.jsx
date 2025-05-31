
import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Atlantic Salmon",
      price: 15000,
      image: "🍣",
      description: "Fresh wild-caught Atlantic salmon, perfect for grilling",
      rating: 4.9,
      inStock: true
    },
    {
      id: 2,
      name: "Jumbo Shrimp",
      price: 32000,
      image: "🦐",
      description: "Premium jumbo shrimp, sustainably sourced",
      rating: 4.8,
      inStock: true
    },
    {
      id: 3,
      name: "Maine Lobster",
      price: 69999,
      image: "🦞",
      description: "Live Maine lobster, the ultimate luxury seafood",
      rating: 5.0,
      inStock: false
    },
    {
      id: 4,
      name: "Blue Crab",
      price: 45999,
      image: "🦀",
      description: "Fresh blue crab from the Chesapeake Bay",
      rating: 4.7,
      inStock: true
    },
    {
      id: 5,
      name: "Sea Scallops",
      price: 28999,
      image: "🥟",
      description: "Dry-packed sea scallops, restaurant quality",
      rating: 4.9,
      inStock: true
    },
    {
      id: 6,
      name: "Yellowfin Tuna",
      price: 56999,
      image: "🍤",
      description: "Sashimi-grade yellowfin tuna, perfect for sushi",
      rating: 4.8,
      inStock: true
    },
    {
      id: 7,
      name: "King Crab Legs",
      price: 12999,
      image: "🦀",
      description: "Alaskan king crab legs, sweet and succulent",
      rating: 5.0,
      inStock: true
    },
    {
      id: 8,
      name: "Fresh Oysters",
      price: 18999,
      image: "🦪",
      description: "Fresh oysters from the Pacific Northwest",
      rating: 4.6,
      inStock: true
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-playfair font-bold text-ocean-blue-800 mb-4">
            Our <span className="text-golden-600">Premium Selection</span>
          </h3>
          <p className="text-xl text-ocean-blue-600 max-w-2xl mx-auto">
            Handpicked from the finest waters around the world, each product meets our exceptional standards for freshness and quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
