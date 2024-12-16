import { Link } from "lucide-react"
import Image from "next/image"
import { BsSuitHeart } from "react-icons/bs"
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"
export default function SingleProduct(){
  return (
<div className="container mx-auto px-4 py-8">
  {/* Breadcrumb */}
  <div className="text-sm text-gray-500 mb-6">
    <span>Home</span> / <span>Shop</span> / <span className="text-gray-800">Asgaard sofa</span>
  </div>

  {/* Product Section */}
  <div className="flex flex-col md:flex-row gap-8">
    {/* Left Section: Thumbnails + Main Image */}
    <div className="md:w-1/2 flex gap-4">
      {/* Thumbnails */}
      <div className=" flex flex-col gap-2">
        <div className=" bg-[#FFF9E5] w-20 h-20 border border-gray-300 rounded overflow-hidden cursor-pointer hover:border-blue-500">
          <Image
            src="/image/outdoor sofa.png" // Replace with your image
            alt="pic 1"
            width={80}
            height={80}
            className="  object-cover "
          />
        </div>
        <div className=" bg-[#FFF9E5] w-20 h-20 border border-gray-300 rounded overflow-hidden cursor-pointer hover:border-blue-500">
          <Image
            src="/image/outdoor sofa 2.png" // Replace with your image
            alt="Thumbnail 2"
            width={80}
            height={80}
            className=" object-cover"
          />
        </div>
        <div className=" bg-[#FFF9E5] w-20 h-20 border border-gray-300 rounded overflow-hidden cursor-pointer hover:border-blue-500">
          <Image
            src="/image/sofa33.png" // Replace with your image
            alt="Thumbnail 3"
            width={80}
            height={80}
            className=" object-cover"
          />
        </div>
        <div className=" bg-[#FFF9E5] w-20 h-20 border border-gray-300 rounded overflow-hidden cursor-pointer hover:border-blue-500">
          <Image
            src="/image/maya sofa 2.png" // Replace with your image
            alt="Thumbnail 4"
            width={80}
            height={80}
            className=" object-cover pt-5"
          />
        </div>
      </div>

      {/* Main Image */}
      <div className="flex-1">
        <div className=" bg-[#FFF9E5] border border-gray-300 rounded overflow-hidden">
          <Image
            src="/image/big sofa.png" // Replace with your main image path
            alt="Asgaard sofa main view"
            width={600}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>

    {/* Right Section: Product Details */}
    <div className="md:w-1/2">
      {/* Product Title and Price */}
      <h1 className="text-3xl font-bold mb-2">Asgaard sofa</h1>
      <p className="text-2xl font-semibold text-blue-600 mb-4">Rs. 250,000.00</p>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="flex">
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          </svg>
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          </svg>
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          </svg>
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          </svg>
          <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          </svg>
        </div>
        <span className="ml-2 text-gray-600">5.0 (Customer Reviews)</span>
      </div>

      {/* Product Description */}
      <p className="text-gray-600 mb-6">
        Setting the bar as one of the loudest speakers in its class, the Asgaard sofa delivers
        powerful, room-filling sound with deep bass that makes you feel like you're in the center
        of the action.
      </p>

      {/* Color Selection */}
      <div className="mb-6">
        <p className="font-medium mb-2">Color</p>
        <div className="flex space-x-2">
          <button className="w-8 h-8 rounded-full bg-[#816DFA] border"></button>
          <button className="w-8 h-8 rounded-full bg-black border"></button>
          <button className="w-8 h-8 rounded-full bg-[#CDBA7B] border"></button>
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="flex items-center mb-6">
        <div className="flex items-center border rounded mr-4">
          <button className="px-3 py-1 text-xl">-</button>
          <span className="px-3 py-1">1</span>
          <button className="px-3 py-1 text-xl">+</button>
        </div>
      
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
        Add To Cart
      </button>
      
    
        
      </div>

      {/* Product Details */}
      <div className="border-t pt-6">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="font-medium"> SKU :</div>
          <div className="text-gray-600"> SS001</div>
          <div className="font-medium">Category :</div>
          <div className="text-gray-600">Sofas</div>
          <div className="font-medium">Tags :</div>
          <div className="text-gray-600">Furniture, Sofa</div>
          <div className="font-medium">Store :</div>
          <div className="flex space-x-4">
            <FaFacebook />
            <FaLinkedin/>
            <FaTwitter/>
            <BsSuitHeart className="text-red-600  "/>



          </div>
        </div>
      </div>
    </div>
  </div>

    <div className="container mx-auto px-4 py-8">
      {/* Tabs */}
        <div className="mt-10 ">
          <div className=" w-full text-gray-600 border-[1px]"/>
          <div className="w-full flex justify-center mt-10 gap-16">
            <button className="py-2 px-4 text-gray-800 font-semibold border-b-2 border-black">Description</button>
            <button className="py-2 px-4 text-gray-600">Additional Information</button>
            <button className="py-2 px-4 text-gray-600">Reviews [5]</button>
          </div>
          <div className=" w-[1026] h-[174px] font-normal text-[16px] leading-[24px] mt-5 text-gray-600 text-justify">
            <p>
            Embodying the raw, wayward spirit of rock & roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
              <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
              </p>
          </div>
    <div className="flex flex-col items-center w-[1239px] h-[348px] top-[1326px] left-[100px] ml-14">
  <div className="flex w-full h-full gap-5">
    <div className="flex-1 bg-[#FFF9E5]">
      <Image
        src="/image/sofa 4.png"
        alt="sofa"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 bg-[#FFF9E5]">
      <Image
        src="/image/sofa 5.png"
        alt="sofa"
        width={600}
        height={600}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

  
</div>
        </div>
    
        <div className=" w-full text-gray-600 border-[1px]"/>
      {/* Related Products */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-14 mt-14 text-center">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Wicker Armchair', price: 'Rs. 25,000.00', image: '/image/sofa 3.png' },
            { title: 'Outdoor Dining Set', price: 'Rs. 25,000.00', image: '/image/dining table.png' },
            { title: 'Outdoor Bar Table', price: 'Rs. 25,000.00', image: '/image/bar table.png' },
            { title: 'Plush Ottoman', price: 'Rs. 25,000.00', image: '/image/mirror.png' }
          ].map((product, index) => (
            <div key={index} className="text-center">
              <Image 
                src={product.image} 
                alt={product.title}
                width={200}
                height={150}
                className="rounded-lg mx-auto"
              />
              <h3 className="mt-2 text-lg font-medium">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="py-2 px-6  text-black font-bold text-xl underline">View More</button>
        </div>
      </section>
    </div>

)}

