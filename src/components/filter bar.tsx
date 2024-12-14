import React from 'react';
import Image from 'next/image';
export default function FilterBar() {
    return (
      <div className="flex justify-between items-center bg-gray-50 py-4 px-6 border-b border-gray-200">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Filter Button */}
          <button className="flex items-center gap-2 px-3 py-2 bg-white border rounded shadow-sm hover:bg-gray-100">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h7.5m-7.5 6h4.5m-4.5 6h7.5M3 6h.008v.008H3V6zm0 6h.008v.008H3V12zm0 6h.008v.008H3V18z"
              />
            </svg>
            Filter */}
            <Image src="/image/filter.png" alt='filter icon' width={60} height={40}/>
          </button>
  
          {/* Grid and List View Buttons */}
          <div className="flex items-center gap-2">
            <button className="p-2 bg-white border rounded shadow-sm hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </button>
            <button className="p-2 bg-white border rounded shadow-sm hover:bg-gray-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h6.5v6.5h-6.5zM13.25 5.25h6.5v6.5h-6.5zM3.75 14.75h6.5v6.5h-6.5zM13.25 14.75h6.5v6.5h-6.5z"
                />
              </svg>
            </button>
          </div>
  
          {/* Showing Results */}
          <span className="text-sm text-gray-500">Showing 1–16 of 32 results</span>
        </div>
  
        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Show Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Show</label>
            <select className="px-3 py-2 border rounded bg-white text-sm text-gray-600 shadow-sm">
              <option value="16">16</option>
              <option value="32">32</option>
              <option value="64">64</option>
            </select>
          </div>
  
          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Sort by</label>
            <select className="px-3 py-2 border rounded bg-white text-sm text-gray-600 shadow-sm">
              <option value="default">Default</option>
              <option value="price">Price</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  
