import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="container mx-auto px-5">
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div>
            <p className="text-gray-600">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul>
              <li className="text-gray-600 hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="text-gray-600 hover:underline">
              <Link href="/shop">Shop</Link>
              </li>
              <li className="text-gray-600 hover:underline">
              <Link href="/about">About</Link>
              </li>
              <li className="text-gray-600 hover:underline">
              <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul>
              <li className="text-gray-600 hover:underline">
              <Link href="/checkout">Payment Options</Link>
              </li>
              <li className="text-gray-600 hover:underline">
              <Link href="#">returns</Link>
              </li>
              <li className="text-gray-600 hover:underline">
                 <Link href="#">Privecy Policy</Link>

              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-2">Newsletter</h3>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
              />
              <button className="px-4 py-2 bg-black text-white rounded-r-md hover:bg-gray-800">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500">
          <p>2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
