"use client";
import React from "react";
import {
  Pagination,
  A11y,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from 'uuid';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import Image from "next/image";

//import images
import imgone from '../../assets/images/feedback-1.jpg'
import imgtwo from '../../assets/images/feedback-2.jpg'
import imgthree from '../../assets/images/feedback-3.jpg'


function TestimonialsSlider() {
  const feedbacks = [
    {
    name : 'Eleanor Crisp',
    jobTitle :'UX Design' , 
    src : imgone
    } , 
    {
    name : 'Gordon Norman',
    jobTitle :'Accountant' , 
    src : imgtwo
    } , 
    {
    name : 'Sue Shei',
    jobTitle :'Public Relations' , 
    src : imgthree
    }  
]

  return (
    <div className="test-slider py-10">
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, EffectCoverflow , Autoplay ]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={-100}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="mySwiper"
        key={uuidv4()}
      >
  {feedbacks.map((feedback , index)=>{
    return(
      <>
<SwiperSlide key={index}  >
  <figure>
    <Image key={index} src={feedback.src} alt="profile-sample" width={100} height={100} className="profile" />
    <figcaption>
      <h2 className="text-2xl font-bold text-center my-3">{feedback.name}</h2>
      <h4 className="text-[--main-color] font-semibold text-xl text-center my-3">{feedback.jobTitle}</h4>
      <blockquote className="text-gray-300 text-center my-3  md:w-[70%] md:mx-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis rerum, voluptates facilis enim ullam ex maiores voluptate earum obcaecati corporis laudantium iure sint officiis veritatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit . </blockquote>
    </figcaption>
  </figure>
  </SwiperSlide>
  </>
    )
  })}

  
      </Swiper>
    </div>
  );
}

export default TestimonialsSlider;
