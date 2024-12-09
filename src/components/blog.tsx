import React from "react";
import Image from "next/image";
import pic1 from '../../public/image/Rectangle 13.png'
import pic2 from '../../public/image/Rectangle 14.png'
import pic3 from '../../public/image/Rectangle 15.png'



const Blog = () => {
  return (
      <>
      <div className="bg-white text-black py-10">

          <h2 className="text-5xl mb-6 text-center">Our Blog</h2>
          <p className="text-center text-lg mb-8">Find a bright idea to suit your taste with our great selection.</p>
      </div><div className="container mx-auto px-4">
              <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                      <Image
                          src={pic1}
                          alt="Blog Post 1"
                          width={300}
                          height={300}
                          className="object-contain mx-auto" />
                      <p className="text-lg">Going all-in with millennial design</p>
                      <a href="#" className="underline font-bold text-xl mb-4">
                          Read More
                      </a>
                      <div className="flex justify-center gap-4">
                          <span>⏰ 5 mins</span>
                          <span>📅 {new Date().toLocaleDateString()}</span>
                      </div>
                  </div>

                  <div className="text-center">
                      <Image
                          src={pic2}
                          alt="Blog Post 2"
                          width={300}
                          height={300}
                          className="object-contain mx-auto" />
                      <p className="text-lg">Going all-in with millennial design</p>
                      <a href="#" className="underline font-bold text-xl mb-4">
                          Read More
                      </a>
                      <div className="flex justify-center gap-4">
                          <span>⏰ 5 mins</span>
                          <span>📅 {new Date().toLocaleDateString()}</span>
                      </div>
                  </div>

                  <div className="text-center">
                      <Image
                          src={pic3}
                          alt="Blog Post 3"
                          width={300}
                          height={300}
                          className="object-contain mx-auto" />
                      <p className="text-lg">Going all-in with millennial design</p>
                      <a href="#" className="underline font-bold text-xl mb-4">
                          Read More
                      </a>
                      <div className="flex justify-center gap-4">
                          <span>⏰ 5 mins</span>
                          <span>📅 {new Date().toLocaleDateString()}</span>
                      </div>
                  </div>
              </div>

              {/* View All Posts Button */}
              <div className="text-center mt-8">
                  <a href="/blog" className="underline text-sm">
                      View All Posts
                  </a>
              </div>
          </div></>
  

  );
};

export default Blog;