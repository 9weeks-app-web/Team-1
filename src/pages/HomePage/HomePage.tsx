import React, { useEffect } from "react";
import "./style.css";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import { DUMMY_PORTFOLIO_SUMMARY } from "constants/dummy";
import { getExample } from "api/example";
import SliderBanner from "components/SliderBanner/SliderBanner";

function HomePage() {
  useEffect(() => {
    getExample("key").then((res) => console.log(res));
  }, []);

  return (
    <div className="homepage-container">
      <SliderBanner />
      {DUMMY_PORTFOLIO_SUMMARY.map((el) => (
        <PortfolioCard key={el.id} portfolio={el} />
      ))}
    </div>
  );
}

export default HomePage;
