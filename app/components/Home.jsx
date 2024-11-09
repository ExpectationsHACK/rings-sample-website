'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Heart, Instagram, Tag } from 'lucide-react';

const ProductCard = ({ 
  product = {
    name: "Silver Chain Ring",
    price: 79.99,
    salePrice: 63.99,
    images: ["/api/placeholder/300/300"],
    onSale: true,
    discountPercentage: 20,
    instagramLink: "https://instagram.com/example"
  }
}) => {
  const [isRotating, setIsRotating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative w-72 h-96 bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Sale Badge */}
      {product.onSale && (
        <motion.div 
          className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          {product.discountPercentage}% OFF
        </motion.div>
      )}

      {/* Product Image */}
      <motion.div 
        className="relative w-full h-48 bg-gray-100 cursor-pointer"
        animate={{ rotateY: isRotating ? 360 : 0 }}
        transition={{ duration: 1.5 }}
        onClick={() => setIsRotating(!isRotating)}
      >
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <motion.div 
          className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <p className="text-white text-sm">Click to rotate</p>
        </motion.div>
      </motion.div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <div className="flex items-center gap-2 mb-4">
          {product.onSale ? (
            <>
              <span className="text-gray-400 line-through">${product.price}</span>
              <span className="text-red-500 font-bold">${product.salePrice}</span>
            </>
          ) : (
            <span className="font-bold">${product.price}</span>
          )}
        </div>

        {/* Action Buttons */}
        <motion.div 
          className="flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.button 
            className="flex-1 bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart size={20} />
            Add to Cart
          </motion.button>
          <motion.button 
            className="p-2 border border-gray-300 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Heart size={20} />
          </motion.button>
        </motion.div>

        {/* Instagram Link */}
        <motion.a
          href={product.instagramLink}
          className="mt-4 text-sm text-gray-600 flex items-center gap-2 hover:text-black"
          whileHover={{ x: 5 }}
        >
          <Instagram size={16} />
          View on Instagram
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProductCard;