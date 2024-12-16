import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     {/* Header Section */}
     <div className="flex items-center justify-center bg-[url('/image/shop-bg.png')] bg-cover bg-center w-full h-[316px]">
        <div className="flex flex-col items-center">
          <Image src="/image/logo.png" alt="logo" width={77} height={77} />
          <h1 className="text-[48px] font-medium text-center">Contact</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-20">
      <h2 className="text-4xl font-bold text-center mb-4">Get In Touch With Us</h2>
        <p className="text-center text-gray-600 mb-6">
          For more information about our product & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
        </p>
      </div>
      {/* Parent Wrapper */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 py-10 lg:py-20 max-w-5xl mx-auto">
      {/* Left Section - Contact Info */}
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="flex items-start space-x-3">
          <MapPin />
         <div>
           <p className="text-gray-700 font-bold text-lg">Address</p>
           <p className="text-gray-700">
           238 5th St Avenue, <br />
           New York NY10000, United States
            </p>
          </div>
          </div>

          </div>
          <div className="flex items-center">
            <div className="flex items-start space-x-3">
          <Phone/>
        

            <div>
              <p className="text-gray-700 font-bold text-lg">Phone</p>
              <p className="text-gray-700">Mobile: (+84) 546-9789</p>
              <p className="text-gray-700">Hotline: (+84) 456-9789</p>
            </div>
          </div>
          </div>
          <div className="flex items-center">
          <div className="flex items-start space-x-3">
          <Clock />            
            <div>
              <p className="text-gray-700 font-bold text-lg">Working Time</p>
              <p className="text-gray-700">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-700">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        </div>
      </div>

        {/* Right Section - Contact Form */}
      <div className="w-full lg:w-1/2 ">
        <form className="space-y-6 p-6 ">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Your name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="This is optional"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Hi! I'd like to ask about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-[237px] border-[1px] text-black py-2 px-4 border-black rounded-md hover:bg-blue-600 transition duration-200">
            Submit
          </button>
        </form>
      </div>
      </div>
       {/* Benefits Section */}

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
  );
};

export default ContactSection;
