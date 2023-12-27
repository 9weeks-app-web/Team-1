import React from "react";
import "./style.css";
import Chip from "../../components/Chips/Chip";

function PortfolioPage() {
  return (
    <>
      <div className="portfolio">
        Portfolio
        <Chip title="디자인 전체" onClick={() => {}} />
        <Chip title="패키지 디자이너" onClick={() => {}} />
        <Chip title="웹 디자이너" onClick={() => {}} />
      </div>
    </>
  );
}

export default PortfolioPage;
