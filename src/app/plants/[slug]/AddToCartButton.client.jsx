"use client";
import React, { useState } from 'react';

const AddToCartButton = () => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="flex items-center justify-center">
      <button 
        onClick={decrementQuantity} 
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
      >
        -
      </button>
      <input
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="border-2 border-gray-300 bg-gray h-8 px-5 rounded-lg text-sm focus:outline-none align-middle mx-1 w-16 text-center"
      />
      <button 
        onClick={incrementQuantity} 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
      >
        +
      </button>
      <button 
        onClick={handleAddToCart} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md ml-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;