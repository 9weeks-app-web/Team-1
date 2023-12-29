import React from "react";
import "./style.css";
import { DUMMY_PORTFOLIO_SUMMARY } from "constants/dummy";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import Icon from "components/Icon/Icon";
import Chip from "../../components/Chips/Chip";
import Dropdown from "../../components/Dropdown/Dropdown";

function PortfolioPage() {
  const options = ["UI/UX", "기획", "패키지"];
  return (
    <>
      <div className="container">
        <div className="main-title">
          <span className="sub-title">오늘의 스팩폴리오 Pick!</span>
          <div className="view-all">
            <span className="view-text">전체보기</span>
            <Icon icon="keyboard_arrow_right" className="keyboard-arrow" />
          </div>
        </div>
        <div className="chip-section">
          <Chip title="디자인 전체" onClick={() => {}} />
          <Chip title="패키지 디자이너" onClick={() => {}} />
          <Chip title="웹 디자이너" onClick={() => {}} />
        </div>
        <div className="portfolio-card">
          {DUMMY_PORTFOLIO_SUMMARY.map((el) => (
            <PortfolioCard key={el.id} portfolio={el} />
          ))}
        </div>

        <Dropdown defaultOption="디자이너" options={options} />
      </div>
    </>
  );
}

export default PortfolioPage;
