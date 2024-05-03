"use client"
import React from 'react'
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Home from "/public/images/home1.png"; 

const swiper1 = () => {
  return (
    <div className="swiper flex flex-row">
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={8}
    
      slidesPerView={1.1}
      loop={true}
      autoplay={{ delay: 2000 }}
      centeredSlides={true}
      initialSlide={1}
    >
      <SwiperSlide>
        <Image src="/images/home1.png" height={139} width={354} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Home} className="h-[139px] w-[354px]" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Home} className="h-[139px] w-[354px]" />
      </SwiperSlide>
    </Swiper>
  </div>
  )
}

export default swiper1
