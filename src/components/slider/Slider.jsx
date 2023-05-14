import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import Slide1img from "../../assets/slider-buy-us@2x.png";
import Slide2img from "../../assets/slider-borrow.png";
import Slide3img from "../../assets/slider-card.png";
import Slide1bg from "../../assets/slider-background-01.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = () => {
  // const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className=" bg-gray-100 p-4 rounded-t-md w-[69.5%] m-auto relative -mt-20">
        <div className="flex items-center justify-center gap-7">
          <div>
            <Button />
          </div>
          <div>
            <Button />
          </div>
          <div>
            <Button />
          </div>
        </div>
        
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          type: "progressbar",
          
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-[69.5%]"
      >
        <SwiperSlide className="">
          <div className="w-full z-50 ">
            <div
              className="w-min mx-auto rounded-b-lg p-9  flex justify-center items-center"
              style={{
                backgroundImage: `url(${Slide1bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" leading-loose ">
                <h4 className="text-blue-700  text-sm">THE RIGHT PLACE TO</h4>
                <h1 className="text-2xl font-semibold">
                  Buy Crypto in Seconds
                </h1>
                <p className="text-gray-400 w-96">
                  Buy 60+ digital assets in seconds with card or instant bank
                  transfer. Get up to 0.5% in crypto rewards on your purchase.
                </p>
                <div className="flex gap-3  mt-5">
                  <div>
                    <Button />
                  </div>
                  <div>
                    <Button />
                  </div>
                </div>
              </div>
              <div className="h-96 w-96">
                <img src={Slide1img} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full z-50 ">
            <div
              className="w-min mx-auto rounded-b-lg p-9  flex justify-center items-center"
              style={{
                backgroundImage: `url(${Slide1bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" leading-loose ">
                <h4 className="text-blue-700  text-sm">THE RIGHT PLACE TO</h4>
                <h1 className="text-2xl font-semibold">
                  Buy Crypto in Seconds
                </h1>
                <p className="text-gray-400 w-96">
                  Buy 60+ digital assets in seconds with card or instant bank
                  transfer. Get up to 0.5% in crypto rewards on your purchase.
                </p>
                <div className="flex gap-3  mt-5">
                  <div>
                    <Button />
                  </div>
                  <div>
                    <Button />
                  </div>
                </div>
              </div>
              <div className="h-96 w-96">
                <img src={Slide2img} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="w-full z-50 ">
            <div
              className="w-min mx-auto rounded-b-lg p-9  flex justify-center items-center"
              style={{
                backgroundImage: `url(${Slide1bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" leading-loose ">
                <h4 className="text-blue-700  text-sm">THE RIGHT PLACE TO</h4>
                <h1 className="text-2xl font-semibold">
                  Buy Crypto in Seconds
                </h1>
                <p className="text-gray-400 w-96">
                  Buy 60+ digital assets in seconds with card or instant bank
                  transfer. Get up to 0.5% in crypto rewards on your purchase.
                </p>
                <div className="flex gap-3  mt-5">
                  <div>
                    <Button />
                  </div>
                  <div>
                    <Button />
                  </div>
                </div>
              </div>
              <div className="h-96 w-96">
                <img src={Slide3img} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
