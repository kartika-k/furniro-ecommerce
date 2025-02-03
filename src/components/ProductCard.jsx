import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, BarChart2, Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ 
  index, 
  image, 
  imageAlt, 
  name, 
  currency, 
  currentPrice, 
  typeName,
  onAddToCart // New prop for cart functionality
}) => {
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    const handleAddToCart = () => {
        setIsAddingToCart(true);
        
        // Create cart item object
        const cartItem = {
            id: index,
            name,
            price: currentPrice,
            currency,
            image,
            quantity: 1
        };

        // Add to cart - you can either use context, redux, or localStorage
        // Example using localStorage:
        try {
            const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
            const existingItemIndex = existingCart.findIndex(item => item.id === index);

            if (existingItemIndex !== -1) {
                // If item exists, increase quantity
                existingCart[existingItemIndex].quantity += 1;
            } else {
                // If item doesn't exist, add it
                existingCart.push(cartItem);
            }

            localStorage.setItem('cart', JSON.stringify(existingCart));

            // If you're using a cart context or Redux, dispatch the action here
            if (onAddToCart) {
                onAddToCart(cartItem);
            }

            // Optional: Show success feedback
            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Error adding to cart:', error);
            alert('Failed to add item to cart');
        } finally {
            setIsAddingToCart(false);
        }
    };

    return (
        <div className='relative group w-[90%] sm:w-[285px] h-[500px] mt-6'>
            {/* Image Container with Hover Effects */}
            <div className='relative h-[300px] overflow-hidden'>
                <img 
                    src={image} 
                    alt={imageAlt} 
                    className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105' 
                />
                
                {/* Hover Overlay */}
                <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6'>
                    {/* Top Action Buttons */}
                    <div className='flex flex-col gap-4'>
                        {/* Share Button */}
                        <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors'>
                            <Share2 size={20} />
                        </button>
                        {/* Compare Button */}
                        <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors'>
                            <BarChart2 size={20} />
                        </button>
                        {/* Like Button */}
                        <button className='w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors'>
                            <Heart size={20} />
                        </button>
                    </div>

                    {/* Add to Cart Button */}
                    <button 
                        className='w-full bg-white py-2.5 text-center text-sm font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2'
                        onClick={handleAddToCart}
                        disabled={isAddingToCart}
                    >
                        <ShoppingCart size={16} />
                        {isAddingToCart ? 'Adding...' : 'Add to cart'}
                    </button>
                </div>

                {/* Discount/New Tag */}
                {typeName === 'New' && (
                    <span className='absolute top-6 right-6 bg-gray-200 px-3 py-1 rounded-full text-sm'>
                        New
                    </span>
                )}
            </div>

            {/* Product Info */}
            <Link to={`/shop/${index}`}>
                <div className='p-4'>
                    <h1 className='text-lg font-medium text-gray-900'>{name}</h1>
                    <p className='text-base text-gray-600 mt-1'>{typeName}</p>
                    <div className='mt-2'>
                        <span className='text-lg font-medium text-gray-900'>
                            {currency} {currentPrice.toLocaleString()}
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;