import React from 'react';
import { Link } from 'react-router-dom';
import HomeImage from "../assets/images/homePage.jpg";
import Living from "../assets/images/living.png";
import Bedroom from "../assets/images/bedroom.png";
import Dining from "../assets/images/dining.png";
import items from "../constants/items.json";
import CustomButton from '../components/CustomButton';
import Image from "../assets/images/image.png";
import ProductCard from '../components/ProductCard';

const Home = () => {
  const handleAddToCart = (item) => {
    console.log('Item added:', item);
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className='relative w-full h-[700px]'>
        <div className='absolute inset-0'>
          <img 
            src={HomeImage} 
            alt="Home" 
            className='w-full h-full object-cover'
          />
        </div>
        
        {/* New Collection Card */}
        <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-[#FFF9E5] p-8 md:p-12 lg:p-16 w-full max-w-[600px] min-h-[450px] mx-4 md:mr-12 lg:mr-24'>
          <span className='text-base font-medium text-gray-800'>New Arrival</span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#B88E2F] mt-4 mb-6'>
            Discover Our<br />New Collection
          </h2>
          <p className='text-gray-600 mb-8 text-base lg:text-lg max-w-[500px] leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className='bg-[#B88E2F] text-white px-8 md:px-12 py-4 text-lg hover:bg-[#A17B2A] transition-colors'>
            BUY NOW
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className='w-full px-4 md:px-8 lg:px-16'>
        <div className='text-center py-12'>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
            Browse The Range
          </h1>
          <p className='text-sm text-gray-600 mt-2'>
            Browse The Large Range Of Categories
          </p>
        </div>

        {/* Category Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
          {['Dining', 'Living', 'Bedroom'].map((category, index) => (
            <Link key={category} to='/shop' className='flex flex-col items-center'>
              <div className='w-full aspect-[4/5] bg-white'>
                <img 
                  src={[Dining, Living, Bedroom][index]} 
                  alt={category} 
                  className='w-full h-full object-cover'
                />
              </div>
              <h2 className='mt-4 text-xl font-semibold text-gray-700'>{category}</h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className='w-full px-4 md:px-8 lg:px-16 py-16'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12'>
          Our Products
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {items.slice(0, 8).map((item, index) => (
            <ProductCard
              key={index}
              index={index}
              image={item.image}
              imageAlt={item.imageAlt}
              name={item.name}
              currency={item.price.currency}
              currentPrice={item.price.currentPrice}
              typeName={item.typeName}
              discount={item.discount}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className='flex justify-center mt-12'>
          <CustomButton
            text="Show More"
            styles="border-2 border-[#B88E2F] text-[#B88E2F] px-8 py-3"
            to="/shop"
          />
        </div>
      </div>

      {/* Footer Image */}
      <div className='w-full'>
        <img src={Image} alt="Footer" className='w-full object-cover' />
      </div>
    </div>
  );
};

export default Home;