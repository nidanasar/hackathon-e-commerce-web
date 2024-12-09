import React from 'react';
import Image from 'next/image';
import table from '../../public/image/side table .png';
import sofa from '../../public/image/sofa 2.png';

export default function Product() {
  return (
    <div className="flex items-center justify-around w-full h-[672px] bg-[#FAFAFA] px-20 py-10">
      {/* Side Table Section */}
      <div className="flex flex-col items-center w-[605px] h-[562px] text-black relative">
        <Image
          src={table}
          alt="Side Table"
          width={1092}
          height={1641}
          className="w-full h-auto object-cover"
        />
        <p className="absolute bottom-10 text-[36px] font-medium">
          Side Table
        </p>
        <button className="absolute bottom-2 text-lg text-black font-medium underline hover:no-underline">
          View More
        </button>
      </div>

      {/* Sofa Section */}
      <div className="flex flex-col items-center w-[605px] h-[562px] text-black relative">
        <Image
          src={sofa}
          alt="Sofa"
          width={1092}
          height={1641}
          className="w-full h-auto object-cover"
        />
        <p className="absolute bottom-10 text-[36px] font-medium">
          Side Sofa
        </p>
        <button className="absolute bottom-2 text-lg text-black font-medium underline hover:no-underline">
          View More
        </button>
      </div>
    </div>
  );
}
