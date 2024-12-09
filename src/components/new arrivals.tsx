// import React from 'react';
// import Image from 'next/image';

// const NewArrivals = () => {
//   return (
//     <div className="bg-[#FDF3E6] w-full h-[639px] top-[2469px] py-16 flex ">
//       <div className="container mx-auto   flex flex-col md:flex-row items-center justify-between">
//         <div className="relative w-full md:w-1/2 h-80">
//           <Image
//             src="/image/big sofa.png" 
//             alt="Asgaard Sofa"
//             width={983}
//             height={799}
//           />
//         </div>
//         <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
//           <h3 className="text-black text-lg font-medium mb-2">New Arrivals</h3>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Asgaard Sofa</h2>
//           <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800">
//             Order Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewArrivals;

import React from 'react';
import Image from 'next/image';

const NewArrivals = () => {
  return (
    <div className="bg-[#FDF3E6] w-full py-16 flex ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-5 md:px-0">
       

        {/* Text Section */}
        <div className="mt-8 md:mt-0 md:w-1/2 text-center md:text-left">
          <h3 className="text-black text-lg font-medium mb-2">New Arrivals</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Asgaard Sofa</h2>
          <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded hover:bg-gray-800">
            Order Now
          </button>
        </div>
         {/* Image Section */}
         <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src="/image/big sofa.png"
            alt="Asgaard Sofa"
            width={983}
            height={799}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
