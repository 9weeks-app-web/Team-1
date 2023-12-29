import React, { useEffect } from "react";
import "./style.css";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import { DUMMY_PORTFOLIO_SUMMARY } from "constants/dummy";
import { getExample } from "api/example";
import Badge from "components/Badges/Badge/Badge";
import RecruitBadge from "components/Badges/RecruitBadge/RecruitBadge";

function HomePage() {
  useEffect(() => {
    getExample("key").then((res) => console.log(res));
  }, []);

  return (
    <div className="container">
      <Badge type="teal" text="그래픽/디자인" />
      <Badge type="orange" text="그래픽/디자인" />
      <Badge type="violet" text="그래픽/디자인" />
      <Badge type="blue" text="그래픽/디자인" />
      <RecruitBadge nowCnt={2} maxCnt={5} />
      {DUMMY_PORTFOLIO_SUMMARY.map((el) => (
        <PortfolioCard key={el.id} portfolio={el} />
      ))}
    </div>
  );
}

export default HomePage;
