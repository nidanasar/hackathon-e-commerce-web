import Link from "next/link";
import React from "react";
import Image from "next/image";

const Account: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    {/* Header Section */}
    <div className="flex items-center justify-center bg-[url('/image/shop-bg.png')] bg-cover bg-center w-full h-[316px]">
        <div className="flex flex-col items-center">
          <Image src="/image/logo.png" alt="logo" width={77} height={77} />
          <h1 className="text-[48px] font-medium text-center">My Account</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>My Account</span>
          </div>
        </div>
      </div>
  
    <div className=" mt-16 flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full h-[760px] max-w-7xl mx-auto bg-white  overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 py-32 ">
          {/* Log In Section */}
          <div className="p-8 border-r border-gray-200  ">
            <h2 className="text-2xl font-bold mb-6">Log In</h2>
            <form>
              <div className="mb-20">
                <label
                  htmlFor="login-username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username or email address
                </label>
                <input
                  type="text"
                  id="login-username"
                  className="mt-1 block w-[423px] p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your username or email"
                />
              </div>
              <div className="mb-10">
                <label
                  htmlFor="login-password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="mt-1 block w-[423px] p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="#"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Lost Your Password?
                </Link>
              </div>
              <button
                type="submit"
                className="border border-black text-black py-2 px-10 rounded hover:bg-blue-400 hover:text-black transition">
                Log In
              </button>
            </form>
          </div>

          {/* Register Section */}
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-10">Register</h2>
            <form>
              <div className="mb-10">
                <label
                  htmlFor="register-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="register-email"
                  className="mt-2 block w-[423px] p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our
                <Link
                  href="#"
                  className="text-blue-600 hover:underline ml-1"
                >
                  privacy policy
                </Link>
                .
              </p>
              <button
                type="submit"
                className="border border-black text-black py-2 px-10 rounded hover:bg-blue-400 hover:text-black transition">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    {/* Benefits Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 text-center bg-[#FAF4F4] p-6 ">
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
          <div className=" p-6 ">
            <h3 className="text-lg font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
    </div>
  );
};

export default Account;


