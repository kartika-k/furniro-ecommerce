import React, { useState, useEffect } from 'react';
import Dynamic from "../assets/images/dynamic.png";
import ProductCard from '../components/ProductCard';
import items from "../constants/items.json";
import { useAuth } from "../context/AuthProvider"; // Import useAuth hook
import { db } from '../firebase/firebase'; 
import { doc, setDoc, getDoc } from "firebase/firestore";

const Shop = () => {

  const { user } = useAuth(); // Get user from AuthProvider
  const [visibleItems, setVisibleItems] = useState(16);
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  
  // Filter states
  const [selectedType, setSelectedType] = useState('All');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortOption, setSortOption] = useState('');

  const handleShowMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 16); 
  };
  
  // Firebase cart logic
  const handleAddToCart = async (item) => {
    if (!user) {
      alert("Please log in to add items to the cart!");
      return;
    }

    try {
      setLoading(true);
      const cartItemRef = doc(db, `users/${user.uid}/cart/${item.key}`);
      const cartItemSnap = await getDoc(cartItemRef);

      if (cartItemSnap.exists()) {
        const existingData = cartItemSnap.data();
        await setDoc(cartItemRef, { quantity: existingData.quantity + 1 }, { merge: true });
      } else {
        await setDoc(cartItemRef, {
          key: item.key,
          name: item.name,
          price: item.price.currentPrice,
          image: item.image,
          quantity: 1,
        });
      }

      alert(`${item.name} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error.message);
      alert("Failed to add item to cart. Check permissions.");
    } finally {
      setLoading(false);
    }
  };

  const handlePriceChange = (e, type) => {
    const value = Math.max(Number(e.target.value), 0); // Prevent negative prices
    type === "min" ? setMinPrice(value) : setMaxPrice(value);
  };


  // Get unique types from items
  const uniqueTypes = ['All', ...new Set(items.map(item => item.typeName))];

  // Filter and sort items
  const filteredAndSortedItems = items
    .filter(item => (selectedType === 'All' || item.typeName === selectedType))
    .filter(item => item.price.currentPrice >= minPrice && item.price.currentPrice <= maxPrice)
    .sort((a, b) => {
      if (sortOption === 'lowToHigh') {
        return a.price.currentPrice - b.price.currentPrice;
      } else if (sortOption === 'highToLow') {
        return b.price.currentPrice - a.price.currentPrice;
      }
      return 0;
    });

  // Calculate pagination
  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredAndSortedItems.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedType, minPrice, maxPrice, sortOption]);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to generate pagination numbers
  const getPaginationNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 4) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pageNumbers.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage, '...', totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-[316px]">
        <img src={Dynamic} alt="" className="h-[316px] opacity-70 w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold Shop">Shop</h1>
          <div className="flex Shop space-x-2 mt-2">
            <h2 className="text-lg">Home</h2>
            <span className="text-lg">&gt;</span>
            <h2 className="text-lg text-gray-600 mb-12">Shop</h2>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-6 bg-[#F9F1E7] shadow-md border-b border-gray-200 gap-4">
        {/* Type Filter */}
        <div className="flex items-center space-x-4">
          <label className="text-lg font-semibold text-gray-700">Type:</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="border px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
          >
            {uniqueTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Price Filter */}
        <div className="flex items-center space-x-4">
          <label className="text-lg font-semibold text-gray-700">Price:</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            placeholder="Min"
            className="border px-4 py-2 w-24 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
          />
          <span>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            placeholder="Max"
            className="border px-4 py-2 w-24 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-12 bg-white">
        {currentItems.map((item, index) => (
          <ProductCard
            key={index}
            index={index}
            image={item.image}
            imageAlt={item.imageAlt}
            name={item.name}
            currency={item.price.currency}
            currentPrice={item.price.currentPrice}
            typeName={item.typeName}
            onAddToCart={() => handleAddToCart(item)} // Use the Firebase-based handler
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 pb-12">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)} className="px-3 py-1 text-gray-600 hover:text-[#B88E2F]">
            Prev
          </button>
        )}
        
        {getPaginationNumbers().map((number, index) => (
          <button
            key={index}
            onClick={() => typeof number === 'number' ? handlePageChange(number) : null}
            className={`px-3 py-1 ${currentPage === number ? 'bg-[#B88E2F] text-white rounded' : 'text-gray-600 hover:text-[#B88E2F]'}`}
          >
            {number}
          </button>
        ))}
        
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)} className="px-3 py-1 text-gray-600 hover:text-[#B88E2F]">
            Next
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="text-center pb-8 text-gray-600">
        Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredAndSortedItems.length)} of {filteredAndSortedItems.length} products
      </div>
    </div>
  );
};

export default Shop;
