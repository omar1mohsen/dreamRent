"use client";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { ImSearch } from "react-icons/im";
import { BiSolidOffer } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { BsFillPersonFill } from "react-icons/bs";

function MainNav() {
  const router = usePathname();
  function pathMatch  (route: string) {
    if (router === route) {
      return true;
    }
  };

  return (
    <nav className="hidden  w-[99%] mx-auto z-50 fixed bottom-0 left-1 py-2 px-3 mb-2 mt-3 bg-gray-300/80 rounded-xl max-sm:flex justify-evenly items-center'">
      <Link
        href="/"
        className={` text-xs justify-center tracking-wider uppercase items-center space-y-2 hover:text-[--sec-text-color] font-bold ${
          pathMatch("/")
            ? "text-[--sec-text-color] border-b-2 border-[--sec-text-color]"
            : "text-[--text-color]"
        }`}
      >
        <AiFillHome className="h-6 w-6 mx-auto" /> Home
      </Link>
      <Link
        href="/explore"
        className={` text-xs justify-center tracking-wider uppercase items-center space-y-2 hover:text-[--sec-text-color] font-bold ${
          pathMatch("/explore")
            ? "text-[--sec-text-color] border-b-2 border-[--sec-text-color]"
            : "text-[--z-color]"
        }`}
      >
        <ImSearch className="h-6 w-6 mx-auto" /> Explore
      </Link>
      <Link
        href="/offers"
        className={` text-xs justify-center tracking-wider uppercase items-center space-y-2 hover:text-[--sec-text-color] font-bold ${
          pathMatch("/offers")
            ? "text-[--sec-text-color] border-b-2 border-[--sec-text-color]"
            : "text-[--text-color]"
        }`}
      >
        <BiSolidOffer className="h-6 w-6 mx-auto" /> Offers
      </Link>
      <Link
        href="/profile"
        className={` text-xs justify-center tracking-wider uppercase items-center space-y-2 hover:text-[--sec-text-color] font-bold ${
          pathMatch("/profile")
            ? "text-[--sec-text-color] border-b-2 border-[--sec-text-color]"
            : "text-[--text-color]"
        }`}
      >
        <BsFillPersonFill className="h-6 w-6 mx-auto" />
        Profile
      </Link>
    </nav>
  );
}

export default MainNav;
