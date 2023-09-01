"use client";
import React from "react";
import { Pagination, Scrollbar, A11y , Autoplay  } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';
import heroSlideOne from "../../assets/images/slide-hero-1.jpg";
import heroSlidetwo from "../../assets/images/slide-hero-2.png";
import heroSlideThree from "../../assets/images/slide-hero-3.jpg";
import Image from "next/image";
import { v4 as uuidv4 } from 'uuid';
import { motion } from "framer-motion"

function RightHero() {
  let images = [heroSlideOne,heroSlidetwo,heroSlideThree]
  return (
    <motion.div 
    initial={{ opacity: 0 , x: "100%" }}
    animate={{ opacity: 1 , x : 0 }}
    transition={{duration : 1}}
    className="right-side max-sm:w-full  max-md:py-2  !rounded-xl md:ps-2 z-10  md:w-1/2">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Scrollbar, A11y , Autoplay  ]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        key={uuidv4()}
>
{[...images].map((item, index) =>
        <SwiperSlide key={uuidv4()}>
        <Image
          alt={`slide-img-${index}`}
          src={item}
          width={1000}
          height={100}
          className="w-full max-h-[400px] max-sm:py-3 !rounded-xl"
        />
      </SwiperSlide>
)}
      </Swiper>
    </motion.div>
  );
}

export default RightHero;
