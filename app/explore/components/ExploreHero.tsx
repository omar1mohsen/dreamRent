"use client";
import React from "react";
import exportHero from "../../assets/images/exploreHero.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
function ExploreHero() {
  return (
    <div
      className="w-full h-[40vh] lg:h-[70vh] mt-4 rounded-xl relative overflow-hidden"
    >
      <Image
        src={exportHero}
        alt="export-hero"
        width={100}
        height={100}
        className="w-full h-full rounded-xl exportHero"
      />
      <div className="w-full h-full px-16 bg-black/40 rounded-xl absolute top-0 left-0"></div>
      <div
        className="hero-desc absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10"
      >
        <h3 className="text-3xl max-sm:text-lg md:text-5xl lg:text-6xl capitalize font-bold text-center leading-[1.5] tracking-wider w-full text-[--main-text-color] ">
          Lets find a home that`s <br /> perfect for you
        </h3>
        <p
          className="text-gray-300 capitalize font-semibold leading-[2] my-4 lg:my-8 text-xs md:text-lg text-center"
        >
          this is where you can find a dream place for you of various types{" "}
          <br className="max-sm:hidden" /> all over the woeld at affordable
          prices
        </p>
      </div>
    </div>
  );
}

export default ExploreHero;
