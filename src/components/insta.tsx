import React from "react"
import Link from "next/link"

export default function Insta(){
    return (
    <div className="bg-[url(/image/insta.png)] w-full h-[450px] top-[502px] text-black py-40">
  <div className="container mx-auto px-4 flex flex-col items-center justify-center">
    <h1 className="text-5xl text-center font-bold mb-4">Our Instagram</h1>
    <p className="text-lg mb-4 text-center">
      Follow our store on Instagram
    </p>
    <div className="flex justify-center py-10">
      <Link
        href="#"
        className="w-[200px] text-center border-2 border-[#FAFAFA] text-black py-2 px-6 text-lg font-semibold rounded-[50px] shadow-md md hover:bg-black hover:text-white transition"
      >
        Follow Us
      </Link>
    </div>
  </div>
</div>
    )}