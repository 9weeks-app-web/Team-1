import React, { useEffect } from "react";
import "./style.css";
import { getExample } from "api/example";
import SliderBanner from "components/SliderBanner/SliderBanner";
import HomeAreaTitle from "components/HomeAreaTitle/HomeAreaTitle";
import HomePortfolioList from "components/HomePortfolioList/HomePortfolioList";

function HomePage() {
  useEffect(() => {
    getExample("key").then((res) => console.log(res));
  }, []);

  return (
    <div className="homepage-container">
      <div className="homepage-slider-banner">
        <SliderBanner />
      </div>
      <div className="homepage-contents">
        <div>
          <HomeAreaTitle text="오늘의 스팩폴리오 Pick!" />
          <HomePortfolioList />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
