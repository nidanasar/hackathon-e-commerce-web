"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  return (
    <div className="bg-[#ffffff]">
      {/* Blog Header Section */}
      <div className="flex items-center justify-center bg-[url('/image/shop-bg.png')] bg-cover bg-center w-full h-[316px]">
        <div className="flex flex-col items-center">
          <Image src="/image/logo.png" alt="logo" width={77} height={77} />
          <h1 className="text-[48px] font-medium text-center">Blog</h1>
          <div className="mt-4 flex items-center space-x-2 text-sm text-black">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>Blog</span>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="flex-1">
          {/* Blog Post 1 */}
          <div className="mb-8">
            <Image
              src="/image/blog1.png"
              alt="Blog Post 1"
              width={817}
              height={500}
              className="rounded-lg shadow-lg mb-4"
            />
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-2">
              <span className="flex items-center space-x-1">
                <Image src="/image/blog2.png" alt="Admin Icon" width={20} height={20} />
                <span className="font-bold">Admin</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image src="/image/blog3.png" alt="Date Icon" width={20} height={20} />
                <span className="font-bold">14 Oct 2022</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image src="/image/blog4.png" alt="Category Icon" width={20} height={20} />
                <span className="font-bold">Wood</span>
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-2">Going all-in with Millennial Design</h2>

            {/* Use state to control the expand/collapse logic */}
            <BlogPostContent />

          </div>

          {/* Blog Post 2 */}
          <div className="mb-8">
            <Image
              src="/image/blog5.png"
              alt="Blog Post 2"
              width={817}
              height={500}
              className="rounded-lg shadow-lg mb-4"
            />
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-2">
              <span className="flex items-center space-x-1">
                <Image src="/image/blog2.png" alt="Admin Icon" width={20} height={20} />
                <span className="font-bold">Admin</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image src="/image/blog3.png" alt="Date Icon" width={20} height={20} />
                <span className="font-bold">14 Oct 2022</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image src="/image/blog4.png" alt="Category Icon" width={20} height={20} />
                <span className="font-bold">Handmade</span>
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Exploring new ways of decorating</h2>

            {/* Use state to control the expand/collapse logic */}
            <BlogPostContent />

          </div>

          {/* Blog Post 3 */}
          <div className="mb-8">
            <Image
              src="/image/blog10.png"
              alt="Blog Post 3"
              width={817}
              height={500}
              className="rounded-lg shadow-lg mb-4"
            />
            <div className="flex items-center space-x-4 text-gray-500 text-sm mb-2">
              <span className="flex items-center space-x-1">
                <Image src="/image/blog2.png" alt="Admin Icon" width={20} height={20} />
                <span className="font-bold">Admin</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image src="/image/blog3.png" alt="Date Icon" width={20} height={20} />
                <span className="font-bold">14 Oct 2022</span>
              </span>
              <span className="flex items-center space-x-1">
                <Image src="/image/blog4.png" alt="Category Icon" width={20} height={20} />
                <span className="font-bold">Handmade</span>
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-2">Exploring new ways of decorating</h2>

            {/* Use state to control the expand/collapse logic */}
            <BlogPostContent />

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3">
          {/* Search Box */}
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 p-2 w-full rounded-lg"
            />
          </div>

          {/* Categories */}
          <div className="mb-8 ml-14">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul className="space-y-8">
              {[{ name: 'Crafts', count: 2 }, { name: 'Design', count: 8 }, { name: 'Handmade', count: 7 }, { name: 'Interior', count: 1 }, { name: 'Wood', count: 6 }].map((category, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-gray-500 hover:text-blue-500 "
                >
                  <span className="font-bold">{category.name}</span>
                  <span className="font-bold">{category.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="mb-8 mt-60 ml-14 space-y-11">
            <h2 className="text-xl font-bold mb-4">Recent Posts</h2>
            {[{ title: 'Post 1', img: '/image/blog6.png', date: '03 Aug 2022' }, { title: 'Post 2', img: '/image/blog7.png', date: '04 Oct 2022' },{ title: 'Post 3', img: '/image/blog8.png', date: '04 Oct 2022' },{ title: 'Post 4', img: '/image/blog9.png', date: '04 Oct 2022' },{ title: 'Post 5', img: '/image/blog11.png', date: '04 Oct 2022' }].map((post, index) => (
              <div key={index} className="flex items-center mb-4 ">
                <Image
                  src={post.img}
                  alt={post.title}
                  width={80}
                  height={80}
                  className="rounded-lg mr-4"
                />
                <div>
                  <h3 className="font-bold text-black text-lg mb-1">{post.title}</h3>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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

// Blog Post Content with Read More/Less Toggle
function BlogPostContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p className="text-gray-700 mb-4 text-justify">
        {isExpanded
          ? (
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
              <button onClick={toggleContent} className="text-blue-500 underline mt-2">Read Less</button>
            </>
          )
          : (
            <>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
              <button onClick={toggleContent} className="text-blue-500 underline mt-2">Read More</button>
            </>
          )
        }
      </p>
    </div>
  );
}
