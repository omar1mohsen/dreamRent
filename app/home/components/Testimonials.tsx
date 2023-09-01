import React from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import TestimonialsSlider from "./TestimonialsSlider";

function Testimonials() {
  return (
    <section className="py-8 px-4 rounded-lg bg-black text-[--main-text-color]">
          <h3 className="sec-title text-[--main-text-color]  tracking-wide text-center">
            OUR  COMMUNTITY
          </h3>
          <p className="sec-pragrah max-sm:text-xs tracking-wide !text-[--bg-color] leading-[1.2] text-center">
            Step-by-step Guide to Renting Your  Dream Home<br /> Through Our
            Platform{" "}
          </p>
      <TestimonialsSlider />
    </section>
  );
}

export default Testimonials;
