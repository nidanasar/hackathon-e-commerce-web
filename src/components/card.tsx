import React from 'react';
import Image from 'next/image';

const ProductGrid = () => {
  const products = [
    { name: 'Trenton modular_sofa', price: 'Rs. 25,000.00', imgSrc: '/image/sofa 3.png' },
    { name: 'Granite dining table with dining chair', price: 'Rs. 25,000.00', imgSrc: '/image/dining table.png' },
    { name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00', imgSrc: '/image/bar table.png' },
    { name: 'Plain console with teak mirror', price: 'Rs. 25,000.00', imgSrc: '/image/mirror.png' },
  ];

  return (
    <div className="bg-[#F5F5F5] py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-6">Top Picks For You</h2>
        <p className="text-center text-black mb-10">
          Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              <div className="relative w-full h-48">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="mb-4"
                />
              </div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-black">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="px-4 py-2 text-black undreline text-lg">View More</button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;


