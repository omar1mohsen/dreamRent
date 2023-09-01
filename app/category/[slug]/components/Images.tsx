import React from "react";
import {
  Pagination,
  Navigation,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import Image from "next/image";
function Images({ images ,page}: { images: any ; page ?: string }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, Navigation, A11y, EffectCoverflow, Autoplay]}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={1}
      navigation
      loop
      pagination={{ clickable: true }}
      key={uuidv4()}
      className="categorySwiper"
    >
      {images.map((img: string) => {
        return (
          <SwiperSlide key={uuidv4()} className="!cursor-default ">
            <Image
              src={img}
              alt="home-image"
              width={100}
              height={100}
              priority
              className={`w-full h-[180px]  rounded-t-lg select-none `}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Images;
