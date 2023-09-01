"use client";
import React, { useEffect } from "react";
import { TfiWorld } from "react-icons/tfi";
import AuthBtn from "./AuthBtn";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { ImSearch } from "react-icons/im";
import { usePathname } from "next/navigation";

function HeaderNav() {
  const router = usePathname();
  function pathMatch(route: string) {
    if (router === route) {
      return true;
    }
  }

  return (
    <nav
      className="w-full mx-auto py-3 px-3 mb-2 mt-3 bg-gray-200/50 rounded-xl flex overflow-hidden justify-between items-center"
    >
      <Link href="/">
        <div
          className="logo flex justify-center items-center space-x-1 overflow-hidden"
        >
          <div className="icon w-10 h-10 max-sm:w-7 max-sm:h-7 p-1 rounded-lg bg-black/70 flex justify-center items-center">
            <TfiWorld className=" h-7 w-7 max-sm:w-4 max-sm:h-4 text-slate-200/80" />
          </div>
          <span className="font-bold text-[--sec-text-color] tracking-tight text-2xl max-sm:text-sm sm:hidden md:block  cursor-pointer">
            DREAM<span className="text-[--main-color] stroke-sky-20">RENT</span>
          </span>
        </div>
      </Link>
      <div className="flex justify-center px-2 max-md:space-x-3 lg:space-x-10 xl:space-x-16 items-center w-full max-sm:hidden">
        <Link
          href="/"
          className={` text-sm max-md:text-xs flex justify-center items-center tracking-wider uppercase p-2 rounded-xl space-y-2 hover:text-[--sec-text-color] border-2 border-gray-200/0 hover:border-[--sec-text-color] font-bold ${
            pathMatch("/")
              ? "text-[--sec-text-color] border-2 !border-[--sec-text-color]"
              : "text-[--dark-blue]"
          }`}
        >
          <AiFillHome className="h-5 w-5 max-md:w-4 max-md:h-4 mx-1 lg:mx-2" />{" "}
          Home
        </Link>
        <Link
          href="/explore"
          className={` text-sm max-md:text-xs flex justify-center items-center tracking-wider uppercase p-2 rounded-xl space-y-2 hover:text-[--sec-text-color] border-2 border-gray-200/0 hover:border-[--sec-text-color] font-bold ${
            pathMatch("/explore")
              ? "text-[--sec-text-color] border-2 !border-[--sec-text-color]"
              : "text-[--dark-blue]"
          }`}
        >
          <ImSearch className="h-5 w-5 max-md:w-4 max-md:h-4 mx-1 lg:mx-2" />{" "}
          Explore
        </Link>
        <Link
          href="/offers"
          className={` text-sm max-md:text-xs flex justify-center items-center tracking-wider uppercase p-2 rounded-xl space-y-2 hover:text-[--sec-text-color] border-2 border-gray-200/0 hover:border-[--sec-text-color] font-bold ${
            pathMatch("/offers")
              ? "text-[--sec-text-color] border-2 !border-[--sec-text-color]"
              : "text-[--dark-blue]"
          }`}
        >
          <BiSolidOffer className="h-5 w-5 max-md:w-4 max-md:h-4 mx-1 lg:mx-2" />{" "}
          Offers
        </Link>
        <Link
          href="/profile"
          className={` text-sm max-md:text-xs flex justify-center items-center tracking-wider uppercase p-2 rounded-xl space-y-2 hover:text-[--sec-text-color] border-2 border-gray-200/0 hover:border-[--sec-text-color] font-bold ${
            pathMatch("/profile")
              ? "text-[--sec-text-color] border-2 !border-[--sec-text-color]"
              : "text-[--dark-blue]"
          }`}
        >
          <BsFillPersonFill className="h-5 w-5 max-md:w-4 max-md:h-4 mx-1 lg:mx-2" />
          Profile
        </Link>
      </div>
      <div>
        <AuthBtn />
      </div>
    </nav>
  );
}

export default HeaderNav;
