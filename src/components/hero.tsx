// import React from 'react';
// import Image from 'next/image';
// import hero from '../../public/image/sofa 1.png'

// import {Poppins} from 'next/font/google';

// const poppins=Poppins({
//     subsets: ['latin'],
//     display: 'swap',
//     weight: ['400']
//   })

// const Hero = () => {
//   return (
// <div className='w-full h-[900px] bg-[#FBEBB5] flex items-center justify-between px-20'>
//   <div className={`flex flex-col justify-center items-start ml-36 w-[440px] ${poppins.className}`}>
//     <h1 className="text-black font-medium text-[64px] leading-[96px] ">
//       Rocket Single Seater
//     </h1>
//     <button className="text-black text-lg">Shop Now</button>
//   </div>

//   <div className="flex justify-center items-center w-[853px] h-[1000px] mr-24">
//     <Image
//       src={hero} 
//       alt="Hero pic" 
//       width={853} 
//       height={1000} 
//       className="rotate-[-180] drop-shadow-lg" 
//     />
//   </div>

  

// </div>
 
   


// )
// }

// export default Hero

import React from 'react';
import Image from 'next/image';
import hero from '../../public/image/sofa 1.png';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
});

const Hero = () => {
  return (
    <div className="w-full h-auto bg-[#FBEBB5] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12">
      {/* Text Section */}
      <div className={`flex flex-col justify-center items-start w-full text-center md:text-left md:ml-36 md:w-[440px] ${poppins.className}`}>
        <h1 className="text-black font-medium text-4xl md:text-[64px] leading-tight md:leading-[96px]">
          Rocket Single Seater
        </h1>
        <button className="mt-4 px-6 py-2 bg-black text-white text-lg font-medium rounded hover:bg-gray-800">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full h-auto md:w-[853px] md:h-[1000px]">
        <Image
          src={hero}
          alt="Hero pic"
          width={853}
          height={1000}
          className="drop-shadow-lg"
          priority
        />
      </div>
    </div>
  );
};

export default Hero;
