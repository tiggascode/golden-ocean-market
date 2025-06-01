
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Header from '../components/Header';

const ProductPage = () => {
    const { id } = useParams();
    const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // This would typically come from your data source
    const product = {
        id: id,
        name: "Premium Salmon",
        description: "Experience the finest quality salmon, carefully selected and prepared to perfection. Our premium salmon is sourced from sustainable fisheries, ensuring both exceptional taste and environmental responsibility.",
        price: 29.99,
        images: [
            "/images/salmon-1.jpg",
            "/images/salmon-2.jpg",
            "/images/salmon-3.jpg",
            "/images/salmon-4.jpg"
        ],
        stock: 15
    };

    const cartItem = cartItems.find(item => item.id === product.id);

    const handlePreviousImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? product.images.length - 1 : prev - 1
        );
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === product.images.length - 1 ? 0 : prev + 1
        );
    };

    const handleQuantityChange = (newQuantity) => {
        if (newQuantity > 0) {
            updateQuantity(product.id, newQuantity);
        }
    };

    const handleAddToCart = () => {
        if (!cartItem) {
            addToCart({ ...product, quantity: 1 });
        }
    };

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    };

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

            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="relative">
                        <div className="aspect-square rounded-xl overflow-hidden bg-premium-onyx-700/50 border border-premium-gold-500/20 backdrop-blur-md shadow-2xl">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePreviousImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-premium-onyx-900/90 text-premium-gold-400 hover:bg-premium-gold-500/20 transition-all duration-300 backdrop-blur-md border border-premium-gold-500/20 shadow-xl"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-premium-onyx-900/90 text-premium-gold-400 hover:bg-premium-gold-500/20 transition-all duration-300 backdrop-blur-md border border-premium-gold-500/20 shadow-xl"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Thumbnail Navigation */}
                        <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all backdrop-blur-md ${currentImageIndex === index
                                        ? 'border-premium-gold-500 shadow-lg shadow-premium-gold-500/30'
                                        : 'border-premium-gold-500/30 hover:border-premium-gold-500/50'
                                        }`}
                                >
                                    <img
                                        src={image}
                                        alt={`${product.name} thumbnail ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="lg:pl-8">
                        <div className="bg-gradient-to-br from-premium-onyx-800/60 to-premium-onyx-900/80 rounded-2xl p-8 border border-premium-gold-500/20 backdrop-blur-md shadow-2xl">
                            <h1 className="text-4xl font-playfair font-bold text-premium-pearl-50 mb-4">
                                {product.name}
                            </h1>

                            <div className="text-3xl font-bold bg-gradient-to-r from-premium-gold-400 to-premium-gold-500 bg-clip-text text-transparent mb-6">
                                ${product.price.toFixed(2)}
                            </div>

                            <p className="text-premium-pearl-300 mb-8 leading-relaxed">
                                {product.description}
                            </p>

                            <div className="space-y-6">
                                {/* Cart Actions */}
                                {!cartItem ? (
                                    <button
                                        onClick={handleAddToCart}
                                        className="w-full px-8 py-4 bg-gradient-to-r from-premium-gold-500 to-premium-gold-600 hover:from-premium-gold-600 hover:to-premium-gold-700 text-premium-onyx-900 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl ring-4 ring-premium-gold-500/20 hover:ring-premium-gold-500/40"
                                    >
                                        Add to Cart
                                    </button>
                                ) : (
                                    <div className="flex items-center justify-between bg-premium-gold-500/20 p-4 rounded-xl border border-premium-gold-500/30 backdrop-blur-md">
                                        <div className="flex items-center gap-4">
                                            <span className="text-premium-pearl-200 font-medium">Quantity:</span>
                                            <div className="flex items-center gap-2 bg-premium-onyx-900/70 px-4 py-2 rounded-full backdrop-blur-sm border border-premium-gold-500/30">
                                                <button
                                                    onClick={() => handleQuantityChange(cartItem.quantity - 1)}
                                                    className="p-2 rounded-full bg-premium-gold-500/20 hover:bg-premium-gold-500/40 text-premium-gold-400 transition-all duration-300"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="text-premium-pearl-50 font-bold min-w-[24px] text-center text-lg">
                                                    {cartItem.quantity}
                                                </span>
                                                <button
                                                    onClick={() => handleQuantityChange(cartItem.quantity + 1)}
                                                    className="p-2 rounded-full bg-premium-gold-500/20 hover:bg-premium-gold-500/40 text-premium-gold-400 transition-all duration-300"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleRemoveFromCart}
                                            className="flex items-center gap-2 px-4 py-2 bg-premium-ruby-700/80 hover:bg-premium-ruby-700/90 text-premium-ruby-100 font-semibold rounded-lg transition-all duration-300 border border-premium-ruby-500/30"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                            Remove
                                        </button>
                                    </div>
                                )}

                                {/* Stock Info */}
                                <div className="bg-premium-onyx-900/50 p-4 rounded-xl border border-premium-gold-500/20 backdrop-blur-md">
                                    <p className="text-premium-pearl-300 text-sm">
                                        {product.stock} items available
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
