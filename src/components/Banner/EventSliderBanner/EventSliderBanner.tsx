import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import useBanners from "hooks/useBanners";

interface IBanner {
  id: number;
  src: string;
}
function EventSliderBanner() {
  const networkingBanner = useBanners().results[1].data?.data;

  return (
    <Swiper
      className="mySwiper event-slider-banner"
      slidesPerView="auto"
      spaceBetween={30}
      navigation
      modules={[Navigation]}
      pagination={{
        clickable: true,
      }}
      loop
    >
      {networkingBanner &&
        networkingBanner.map((el: IBanner) => (
          <SwiperSlide key={el.id} className="noDrag">
            <img src={el.src} alt="" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default EventSliderBanner;
