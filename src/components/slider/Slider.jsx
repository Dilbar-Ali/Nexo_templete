import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        

        <SwiperSlide >
          <div> 
            <div className="">
              <h4 className="text-gray-400  text-sm">THE RIGHT PLACE TO</h4>
              <h1 className="text-4xl font-bold">Buy Crypto in Seconds</h1>
              <p className="text-gray-400">
                Buy 60+ digital assets in seconds with card or instant bank
                transfer. Get up to 0.5% in crypto rewards on your purchase.
              </p>
              <div className="flex gap-3">
                <div>
                  <Button />
                </div>
                <div>
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Slider;
