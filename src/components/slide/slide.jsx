import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function Slide() {
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
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-4 gap-4 my-4">
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
          </div>
          <div className="slide transform-left">
            <h1 className="text-4xl font-bold mt-8">
              Pay near zero transfer fees
            </h1>
            <h3 className="text-xl mt-2 text-[#19171199] mb-8">
              Reduce payment costs by paying your team at near-zero transaction
              fees.
            </h3>
            <img
              className="w-5/6"
              src="https://business.wind.app/images/landing/landing-slide-2.svg"
              alt=""
            />
          </div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-4 gap-4 my-4">
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-8">
            Run payroll using the batch payments tool
          </h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Easily pay your entire remote teams in just few simple clicks,
            anywhere across the globe.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-3.svg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="grid grid-cols-4 gap-4 my-4">
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"></p>
            </div>
          </div>
          <h1 className="text-4xl font-bold mt-8">Withdraw locally, anytime</h1>
          <h3 className="text-xl mt-2 text-[#19171199] mb-8">
            Your teams can cash out funds locally to their banks or e-wallets
            from any of our supported countries.
          </h3>
          <img
            className="w-5/6"
            src="https://business.wind.app/images/landing/landing-slide-4.svg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="grid grid-cols-4 gap-4 my-4">
            <div>
              <p className="py-1 rounded-md w-full bg-gradient-to-r from-purple-600 to-pink-500 bg-left-top bg-no-repeat bg-cover animate-gradient"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
            <div>
              <p className="py-1 rounded-md w-full bg-[#6e50ff]"></p>
            </div>
          </div>
          <div className="slide transform-left">
            <h1 className="text-4xl font-bold mt-8">
              Cheaper, faster, simpler payouts
            </h1>
            <h3 className="text-xl mt-2 text-[#19171199] mb-8">
              Make cross-border payments with the lowest fees at the best
              conversion rates.
            </h3>
            <img
              className="w-5/6"
              src="https://business.wind.app/images/landing/landing-slide-1.svg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
