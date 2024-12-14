
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPortrait, FaRegHeart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`w-full h-[100px] border-2 ${
        isHomePage ? "bg-[#FBEBB5]" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-full px-5">
       
        <nav
          className={`hidden md:flex items-center justify-center flex-1 text-[16px] font-medium gap-10 ${poppins.className}`}
        >
          <Link href="/" className="text-black hover:underline">
            Home
          </Link>
          <Link href="/shop" className="text-black hover:underline">
            Shop
          </Link>
          <Link href="/about" className="text-black hover:underline">
            About
          </Link>
          <Link href="/contact" className="text-black hover:underline">
            Contact
          </Link>
        </nav>

        
        <div className="hidden md:flex items-center gap-5 text-black">
          <FaPortrait className="w-7 h-7" />
          <CiSearch className="w-7 h-7" />
          <FaRegHeart className="w-7 h-7" />
          
          <Link href="/singleproduct">
          <IoCartOutline className="w-7 h-7" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <FiX className="w-7 h-7 text-black" />
            ) : (
              <FiMenu className="w-7 h-7 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden bg-white border-t-2 ${poppins.className}`}>
          <nav className="flex flex-col items-center gap-5 py-5">
            <Link
              href="/"
              className="text-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-black hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
