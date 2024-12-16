import React from 'react';
import Image from 'next/image';
import logo from '../../public/image/logo.png'
import Link from 'next/link';

const ShopHeader= () => {
  return (
    <div className="flex items-center justify-center bg-[url(/image/shop-bg.png)] w-full h-[316px] top-[100px] gap-0">
  <div className="flex flex-col items-center w-[124px] h-[132px]">
    <Image src={logo} alt="logo" className="w-[77px] h-[77px " />
    <h1 className=" w-[124px] h-[72px] font-medium text-[48px] text-center ">
      Shop
    </h1>
     <div className="mt-4 flex items-center space-x-2 text-sm text-black">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <span>/</span>
                <span>Shop</span>
              </div>
  </div>
</div>

  )
}

export default ShopHeader;