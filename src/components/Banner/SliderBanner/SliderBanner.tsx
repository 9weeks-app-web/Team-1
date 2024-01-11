import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import useBanners from "hooks/useBanners";
import { IBannerInfo } from "types/home";
import { Swiper as SwiperType } from "swiper/types";
import Icon from "components/Icon/Icon";

function SliderBanner() {
  const sliderBanners = useBanners().results[0].data?.data;
  const [slideIdx, setSlideIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      autoplay={autoplay && { delay: 2000, disableOnInteraction: false }}
      centeredSlides
      navigation
      onSlideChange={(e: SwiperType) => setSlideIdx(e.realIndex)}
      modules={[Navigation, Autoplay]}
      loop
      className="mySwiper main-slider-banner "
    >
      {sliderBanners ? (
        <div className="index-indicator">
          <button
            className="indicator-icon"
            type="button"
            onClick={() => setAutoplay(!autoplay)}
          >
            {autoplay ? <Icon icon="pause" /> : <Icon icon="play_arrow" />}
          </button>
          <div className="indicator-text">
            {slideIdx + 1}/{sliderBanners && sliderBanners.length}
          </div>
        </div>
      ) : (
        <></>
      )}

      {sliderBanners?.map((el: IBannerInfo) => (
        <SwiperSlide key={el.id} className="noDrag">
          <a href={el.link} target="_blank" rel="noreferrer">
            <img src={el.imgSrc} alt="" />
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderBanner;
