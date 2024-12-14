// components/ShoppingCart.js
import Image from 'next/image';

export default function ShoppingCart() {
  return (
    <div className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button className="text-gray-500 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h18M3 3h0M3 3v18"
            />
          </svg>
        </button>
      </div>

      {/* Cart Item */}
      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <div className="flex items-center gap-4">
          <Image
            src="/image/big sofa.png"
            alt="Asgaard Sofa"
            width={80}
            height={80}
            className="rounded-lg bg-yellow-100"
          />
          <div>
            <h3 className="text-lg font-medium">Asgaard Sofa</h3>
            <p className="text-gray-600">1 x <span className="text-yellow-600 font-bold">Rs. 250,000.00</span></p>
          </div>
        </div>
        <button className="text-purple-600 hover:text-purple-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Subtotal */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-lg font-medium">Subtotal</p>
        <p className="text-lg font-bold text-yellow-600">Rs. 250,000.00</p>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        <button className="flex-1 py-2 px-4 text-black border border-gray-300 rounded-md hover:bg-gray-100">
          View Cart
        </button>
        <button className="flex-1 py-2 px-4 text-white bg-black rounded-md hover:bg-gray-800">
          Checkout
        </button>
      </div>
    </div>
  );
}
