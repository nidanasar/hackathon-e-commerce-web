import Link from "next/link";
import React from "react";
import Image from "next/image";

const Checkout: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <div className="flex items-center justify-center bg-[url('/image/shop-bg.png')] bg-cover bg-center w-full h-[316px]">
        <div className="flex flex-col items-center">
          <Image src="/image/logo.png" alt="logo" width={77} height={77} />
          <h1 className="text-[48px] font-medium text-center">Checkout</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Checkout</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start px-4 py-10 lg:py-20 max-w-7xl mx-auto space-y-10 lg:space-y-0 lg:space-x-8">
        {/* Left Section - Billing Form */}
        <div className="w-full lg:w-2/3">
          <h2 className="text-2xl font-bold mb-6">Billing details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">First Name</label>
              <input
                type="text"
                placeholder="John"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Last Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Company Name */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Company Name (Optional)</label>
              <input
                type="text"
                placeholder="Company XYZ"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Country */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Country / Region</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                <option>Pakistan</option>
                <option>India</option>
                <option>UAE</option>
                <option>Canada</option>
              </select>
            </div>
            {/* Street Address */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Street address</label>
              <input
                type="text"
                placeholder="123 Main Street"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Town / City */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Town / City</label>
              <input
                type="text"
                placeholder="Karachi"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Province */}
            <div className="col-span-2" > 
              <label className="block text-gray-700 font-medium mb-1">Province</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300">
                <option>Sindh</option>
                <option>Punjab</option>
                <option>KPK</option>
              </select>
            </div>
            {/* ZIP Code */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">ZIP code</label>
              <input
                type="text"
                placeholder="12345"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Phone */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Phone</label>
              <input
                type="text"
                placeholder="(+92) 123-4567"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Email */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Email address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            {/* Additional Information */}
            <div className="col-span-2">
              <label className="block text-gray-700 font-medium mb-1">Additional Information</label>
              <textarea
                rows={4}
                placeholder="Notes about your order, e.g. special notes for delivery."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              ></textarea>
            </div>
          </form>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full lg:w-1/3  p-16">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Asgard sofa X 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span className="text-yellow-500">Rs. 250,000.00</span>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="radio" id="bank" name="payment" className="mr-2" />
              <label htmlFor="bank" className="text-gray-700 font-medium">
                Direct Bank Transfer
              </label>
            </div>
            <p className="text-sm text-gray-600">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference.
            </p>
            <div className="flex items-center">
              <input type="radio" id="cod" name="payment" className="mr-2" />
              <label htmlFor="cod" className="text-gray-700 font-medium">Cash on Delivery</label>
            </div>
            <p className="text-sm text-gray-600">
              Your personal data will be used to support your experience, manage access, and for purposes described in our{" "}
              <Link href="#" className="text-blue-600 hover:underline">
                privacy policy
              </Link>.
            </p>
          </div>

          {/* Place Order Button */}
          <button className="w-full mt-6 py-3 border border-black text-black rounded-md hover:bg-yellow-400 hover:text-white transition">
            Place Order
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
    </>
  );
};

export default Checkout;

