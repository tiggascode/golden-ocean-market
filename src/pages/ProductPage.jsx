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
        <div className="min-h-screen bg-gradient-to-br from-premium-onyx-800 via-premium-sapphire-800 to-premium-onyx-700">
            <Header />

            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Gallery */}
                    <div className="relative">
                        <div className="aspect-square rounded-xl overflow-hidden bg-premium-onyx-700/50 border border-premium-gold-500/10">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={handlePreviousImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-premium-onyx-900/80 text-premium-gold-400 hover:bg-premium-gold-500/20 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-premium-onyx-900/80 text-premium-gold-400 hover:bg-premium-gold-500/20 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        {/* Thumbnail Navigation */}
                        <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${currentImageIndex === index
                                        ? 'border-premium-gold-500'
                                        : 'border-transparent hover:border-premium-gold-500/50'
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
                        <h1 className="text-4xl font-playfair font-bold text-premium-pearl-50 mb-4">
                            {product.name}
                        </h1>

                        <div className="text-2xl font-bold text-premium-gold-400 mb-6">
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
                                    className="w-full px-8 py-4 bg-premium-gold-500 hover:bg-premium-gold-600 text-premium-onyx-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Add to Cart
                                </button>
                            ) : (
                                <div className="flex items-center justify-between bg-premium-gold-500/20 p-4 rounded-lg">
                                    <div className="flex items-center gap-4">
                                        <span className="text-premium-pearl-200">Quantity:</span>
                                        <div className="flex items-center gap-2 bg-premium-onyx-900/50 px-3 py-1 rounded-full">
                                            <button
                                                onClick={() => handleQuantityChange(cartItem.quantity - 1)}
                                                className="p-1 rounded-full bg-premium-gold-500/20 hover:bg-premium-gold-500/30 text-premium-gold-400 transition-colors"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="text-premium-pearl-50 font-medium min-w-[20px] text-center">
                                                {cartItem.quantity}
                                            </span>
                                            <button
                                                onClick={() => handleQuantityChange(cartItem.quantity + 1)}
                                                className="p-1 rounded-full bg-premium-gold-500/20 hover:bg-premium-gold-500/30 text-premium-gold-400 transition-colors"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleRemoveFromCart}
                                        className="flex items-center gap-2 px-4 py-2 bg-premium-ruby-700/80 hover:bg-premium-ruby-700/90 text-premium-ruby-100 font-semibold rounded-lg transition-all duration-300"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        Remove
                                    </button>
                                </div>
                            )}

                            {/* Stock Info */}
                            <p className="text-premium-pearl-300 text-sm">
                                {product.stock} items available
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage; 