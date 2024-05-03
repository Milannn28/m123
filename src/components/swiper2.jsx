import React from 'react'
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import M1 from "/public/images/m1.png";
import M2 from "/public/images/m2.png";
import M3 from "/public/images/m3.png";
import M4 from "/public/images/m4.png";
import M5 from "/public/images/m5.png";
import M6 from "/public/images/m6.png";
import M7 from "/public/images/m7.png";
import M8 from "/public/images/m8.png";
import M9 from "/public/images/m9.png";

const swiper2 = () => {
  return (
    <div className="grid gap-6 pb-[100px]">
          <div className="grid gap-4">
            <p className="pl-5 text-[20px] font-semibold">Visit Popup Store</p>
            <div className="swiper flex flex-row gap-2">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={8}
                slidesPerView={2.2}
                // loop={true}
                // autoplay={{ delay: 2000 }}
                initialSlide={1}
              >
                <SwiperSlide>
                  {" "}
                  <Image src={M1} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Image src={M2} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Image src={M3} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="grid gap-4">
            <p className="pl-5 text-[20px] font-semibold">Visit Popup Store</p>
            <div className="swiper flex flex-row gap-2">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={8}
                slidesPerView={2.2}
                // loop={true}
                // autoplay={{ delay: 2000 }}
                initialSlide={1}
              >
                <SwiperSlide>
                  {" "}
                  <Image src={M4} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Image src={M5} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Image src={M6} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="grid gap-4">
            <p className="pl-5 text-[20px] font-semibold">Visit Popup Store</p>
            <div className="swiper flex flex-row gap-2">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={8}
                slidesPerView={2.2}
                // loop={true}
                // autoplay={{ delay: 2000 }}
                initialSlide={1}
              >
                <SwiperSlide>
                  {" "}
                  <Image src={M7} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Image src={M8} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <Image src={M9} className="h-[120px] w-[167px] rounded-xl" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
  )
}

export default swiper2
