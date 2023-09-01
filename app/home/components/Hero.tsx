"use client"
import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import BottomHero from "./BottomHero";

function Hero() {
  return (
    <>
    <main className=" my-1 py-2 sm:px-2 md:flex overflow-hidden">
      <LeftHero />
      <RightHero />
    </main>
    <BottomHero />
    </>
  );
}

export default Hero;
