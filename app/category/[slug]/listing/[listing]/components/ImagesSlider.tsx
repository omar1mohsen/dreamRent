import React, {  useMemo, useState } from "react";
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

function ImagesSlider({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(images[0]);
  return (
    <>
      <Image
        src={current}
        alt="home-image"
        width={100}
        height={100}
        priority
        objectFit="cover"
        className="w-full max-lg:h-[40vh]  h-[55vh] mb-2 transition-all rounded-lg select-none "
      />
      {useMemo(() => {
        return (
          <Swiper
            // install Swiper modules
            modules={[Pagination, Navigation, A11y, EffectCoverflow, Autoplay]}
            grabCursor={true}
            slidesPerView={3}
            spaceBetween={2}
            navigation
            pagination={{ clickable: true }}
            key={uuidv4()}
            className="categorySwiper bg-[--bg-color] !py-2 !px-2 rounded-lg"
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
                      onClick={() => setCurrent(img)}
                      objectFit="cover"
                      className="w-full h-[150px] md:h-[190px] rounded-3xl max-sm:rounded-md cursor-pointer scale-95 hover:scale-100 transition-all duration-300  select-none "
                    />
                  </SwiperSlide>
                );
            })}
          </Swiper>
        );
      }, [images])}
    </>
  );
}

export default ImagesSlider;
