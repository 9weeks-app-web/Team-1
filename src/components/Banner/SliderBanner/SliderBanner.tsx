import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import useBanners from "hooks/useBanners";
import { IBannerInfo } from "types/home";

function SliderBanner() {
  const sliderBanners = useBanners().results[0].data?.data;

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      centeredSlides
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay]}
      loop
      className="mySwiper main-slider-banner"
    >
      {sliderBanners?.map((el: IBannerInfo) => (
        <SwiperSlide key={el.id}>
          <a href={el.link} target="_blank" rel="noreferrer">
            <img src={el.imgSrc} alt="" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderBanner;
