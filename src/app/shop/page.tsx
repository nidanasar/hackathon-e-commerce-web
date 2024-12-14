import FilterBar from '@/components/filter bar'
import React from 'react';
import ShopHeader from '@/components/shop header';
import ShoppingCart from '@/components/shoppingcart';


const products = [
  { id: 1, img: '/image/sofa 3.png', name: 'Trenton modular sofa_3', price: 'Rs. 25,000.00'},
  { id: 2, img: '/image/dining table.png', name: 'Granite Dining Table with Dining Chair', price: 'Rs. 25,000.00' },
  { id: 3, img: '/image/bar table.png', name: 'Outdoor bar table and stool', price: 'Rs. 25,000.00' },
  { id: 4, img: '/image/mirror.png', name: 'Plain console with teak mirror', price: 'Rs. 25,000.00' },
  { id: 5, img: '/image/grain table.png', name: 'Grain coffee table', price: 'Rs. 15,000.00' },
  { id: 6, img: '/image/grain coffee.png', name: 'Kent coffee table', Price:'Rs. 225,000.00' },
  { id: 7, img: '/image/round table.png', name: 'Round coffee table_color 2', price: 'Rs. 251,000.00' },
  { id: 8, img: '/image/teak coffee.png', name: 'Reclaimed teak coffee table', price: 'Rs. 25,200.00' },
  { id: 9, img: '/image/console.png', name: 'Plain console_', price: 'Rs. 258,200.00' },
  { id: 10, img: '/image/side board.png', name: 'Reclaimed teak Sideboard', price: 'Rs. 20,000.00' },
  { id: 11, img: '/image/dining.png', name: 'SJP_0825 ', price: 'Rs. 20,000.00' },
  { id: 12, img: '/image/chair table.png', name: 'Bella chair and table ', price: 'Rs. 10,000.00' },
  { id: 13, img: '/image/table.png', name: 'Granite square side table', price: 'Rs. 258,200.00' },
  { id: 14, img: '/image/big sofa.png', name: 'Asgaard sofa', price: 'Rs. 250,000.00' },
  { id: 15, img: '/image/maya sofa.png', name: 'Maya sofa three seater', price: 'Rs. 115,000.00' },
  { id: 16, img: '/image/outdoor sofa.png', name: 'Outdoor sofa set', price: 'Rs. 244,000.00' },



];

const Shop = () => {
  return (
    <div>
  
          <ShopHeader/>    
           <FilterBar />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 ">

        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img src={product.img} alt={product.name} className="w-[287px] h-[287px] mx-auto mb-4" />
            <h3 className="w-[194px] ml-24 text-start text-sm font-bold mb-2">{product.name}</h3>
            <p className="text-gray-600 text-start ml-24 mb-2">{product.price}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-6 mb-10">
        <button className="px-4 py-2 bg-[#FBEBB5] text-yellow-800 rounded">1</button>
        <button className="px-4 py-2 bg-[#FFF9E5] text-gray-600 rounded">2</button>
        <button className="px-4 py-2 bg-[#FFF9E5] text-gray-600 rounded">3</button>
        <button className="px-4 py-2 bg-[#FFF9E5] text-gray-600 rounded">Next</button>
      </div>

    </div>




          
        
    );
}


export default Shop
