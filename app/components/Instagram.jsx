'use client'
import React, { useState } from 'react';
import { Search, Heart, ShoppingBag } from 'lucide-react';

const InstagramShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Clothing', 'Shoes', 'Accessories', 'Beauty', 'Home'];

  const products = [
    {
      id: 1,
      name: 'Classic White Tee',
      price: 29.99,
      image: '/api/placeholder/200/200',
      category: 'Clothing',
      seller: 'Fashion Brand Co.'
    },
    {
      id: 2,
      name: 'Leather Crossbody Bag',
      price: 89.99,
      image: '/api/placeholder/200/200',
      category: 'Accessories',
      seller: 'Luxury Goods'
    },
    {
      id: 3,
      name: 'Running Sneakers',
      price: 119.99,
      image: '/api/placeholder/200/200',
      category: 'Shoes',
      seller: 'SportStyle'
    },
    {
      id: 4,
      name: 'Gold Necklace',
      price: 199.99,
      image: '/api/placeholder/200/200',
      category: 'Accessories',
      seller: 'Jewelry Co'
    },
    {
      id: 5,
      name: 'Denim Jacket',
      price: 79.99,
      image: '/api/placeholder/200/200',
      category: 'Clothing',
      seller: 'Denim Republic'
    },
    {
      id: 6,
      name: 'Face Serum',
      price: 45.99,
      image: '/api/placeholder/200/200',
      category: 'Beauty',
      seller: 'Glow Beauty'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-xl font-semibold">Shop</h1>
          <div className="flex items-center space-x-4">
            <ShoppingBag className="w-6 h-6" />
            <button className="p-2">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="overflow-x-auto">
          <div className="flex space-x-4 py-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="relative my-4">
        <input
          type="text"
          placeholder="Search shops"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products
          .filter(
            (product) =>
              selectedCategory === 'All' || product.category === selectedCategory
          )
          .map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">{product.seller}</p>
                <p className="text-sm font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default InstagramShop;