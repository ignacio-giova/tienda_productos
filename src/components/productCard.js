import React from 'react';

function ProductCard({ product }) {
  const {name, price, imageUrl, altText } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img 
        className="w-full h-48 object-cover" 
        src={imageUrl} 
        alt={altText} 
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="mt-2 text-xl font-bold text-purple-600">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;