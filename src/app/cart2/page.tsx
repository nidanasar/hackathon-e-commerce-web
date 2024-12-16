import React from "react";
import Image from "next/image";
import Link from "next/link";

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
     {/* Header Section */}
     <div className="flex items-center justify-center bg-[url('/image/shop-bg.png')] bg-cover bg-center w-full h-[316px]">
        <div className="flex flex-col items-center">
          <Image src="/image/logo.png" alt="logo" width={77} height={77} />
          <h1 className="text-[48px] font-medium text-center">Cart</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Cart</span>
          </div>
        </div>
      </div>

      <div className="py-10 max-w-6xl mx-auto">
        {/* Cart Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Table */}
          <div className="col-span-2 p-6 ">
            <table className="w-full border-collapse  ">
              <thead>
                <tr className=" bg-[#FFF9E5]">
                  <th className="p-4 text-left text-gray-700">Product</th>
                  <th className="p-4 text-left text-gray-700">Price</th>
                  <th className="p-4 text-left text-gray-700">Quantity</th>
                  <th className="p-4 text-left text-gray-700">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 flex items-center">
                    <img
                      src="/image/big sofa.png"
                      alt="Product"
                      className="w-16 h-16 mr-4 rounded"
                    />
                    <span>Asgard Sofa</span>
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                  <td className="p-4">
                    <input
                      type="number"
                      className="w-16 border border-gray-300 rounded text-center"
                      defaultValue={1}
                    />
                  </td>
                  <td className="p-4">Rs. 250,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Cart Totals */}
          <div className=" bg-[#FFF9E5] shadow rounded-lg p-6 w-[393px] h-[390px]">
            <h2 className="text-2xl font-bold mb-4 text-center">Cart Totals</h2>
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">Subtotal</span>
                <span className="text-[#a19f9b]">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Total</span>
                <span className="text-[#e4b965] font-bold">Rs. 250,000.00</span>
              </div>
            </div>
            <button
              className="w-full bg-[#FFF9E5] text-black py-2 px-4 rounded hover:bg-white focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Check Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 text-center bg-[#f0e8e8] p-6">
          <div className=" p-6 ">
            <h3 className="text-lg font-bold mb-2 ">Free Delivery</h3>
            <p className="text-gray-600">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">90 Days Return</h3>
            <p className="text-gray-600">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
