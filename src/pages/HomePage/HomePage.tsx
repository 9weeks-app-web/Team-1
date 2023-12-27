import React, { useEffect } from "react";
import "./style.css";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import MentorCard from "components/Cards/MentorCard/MentorCard";
import { DUMMY_MENTORS, DUMMY_PORTFOLIO_SUMMARY } from "constants/dummy";
import { getExample } from "api/example";

function HomePage() {
  useEffect(() => {
    getExample("key").then((res) => console.log(res));
  }, []);

  return (
    <div className="container">
      {DUMMY_PORTFOLIO_SUMMARY.map((el) => (
        <PortfolioCard key={el.id} portfolio={el} />
      ))}
      {DUMMY_MENTORS.map((el) => (
        <MentorCard key={el.id} mentor={el} />
      ))}
    </div>
  );
}

export default HomePage;
