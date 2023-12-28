import React from "react";
import "./style.css";
import { DUMMY_PORTFOLIO_SUMMARY } from "constants/dummy";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import Chip from "../../components/Chips/Chip";
import Dropdown from "../../components/Dropdown/Dropdown";

function PortfolioPage() {
  const options = ["UI/UX", "기획", "패키지"];
  return (
    <>
      <div className="portfolio">
        {DUMMY_PORTFOLIO_SUMMARY.map((el) => (
          <PortfolioCard key={el.id} portfolio={el} />
        ))}
        <Chip title="디자인 전체" onClick={() => {}} />
        <Chip title="패키지 디자이너" onClick={() => {}} />
        <Chip title="웹 디자이너" onClick={() => {}} />
        <Dropdown defaultOption="디자이너" options={options} />
      </div>
    </>
  );
}

export default PortfolioPage;
