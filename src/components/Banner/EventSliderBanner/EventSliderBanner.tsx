import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
      modules={[]}
      pagination={{
        clickable: true,
      }}
      loop
    >
      {networkingBanner &&
        networkingBanner.map((el: IBanner) => (
          <SwiperSlide>
            <img src={el.src} alt="" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default EventSliderBanner;
