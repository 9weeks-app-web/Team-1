import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

function EventSliderBanner() {
  return (
    <Swiper
      className="mySwiper event-slider-banner"
      slidesPerView="auto"
      spaceBetween={30}
      modules={[]}
      pagination={{
        clickable: true,
      }}
      loop
    >
      {/* TODO : 상수 배열로 분리하기 */}
      <SwiperSlide>
        <img src="https://picsum.photos/527/296" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/527/296" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/527/296" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default EventSliderBanner;
