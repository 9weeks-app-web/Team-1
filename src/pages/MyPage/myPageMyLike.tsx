import React, { useState } from "react";
import "./style.css";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import { DUMMY_PORTFOLIO_SUMMARY } from "constants/dummy";

function MyPageMyLike() {
  const [selectedTab, setSelectedTab] = useState("likePF");

  return (
    <div>
      <h4 className="myProfileTitle">관심</h4>
      <button
        type="button"
        className={`myProfilePFon ${selectedTab === "likePF" ? "active" : ""}`}
        onClick={() => setSelectedTab("likePF")}
      >
        관심 포트폴리오
      </button>
      <button
        type="button"
        className={`myProfilePFoff ${selectedTab === "likePJ" ? "active" : ""}`}
        onClick={() => setSelectedTab("likePJ")}
      >
        관심 프로젝트
      </button>
      <button
        type="button"
        className={`myProfilePFon ${
          selectedTab === "likeMember" ? "active" : ""
        }`}
        onClick={() => setSelectedTab("likeMember")}
      >
        관심 팀원
      </button>
      <button
        type="button"
        className={`myProfilePFoff ${
          selectedTab === "likePost" ? "active" : ""
        }`}
        onClick={() => setSelectedTab("likePost")}
      >
        관심 게시글
      </button>

      <div className="info">
        {selectedTab === "likePF" && (
          <div className="portfolio-progress">
            {" "}
            {DUMMY_PORTFOLIO_SUMMARY.map((el) => (
              <PortfolioCard key={el.id} portfolio={el} />
            ))}
          </div>
        )}
        {selectedTab === "likePJ" && <div>관심 프로젝트들</div>}
        {selectedTab === "likeMember" && <div>관심 팀원들</div>}
        {selectedTab === "likePost" && <div>관심 게시글들</div>}
      </div>
    </div>
  );
}
export default MyPageMyLike;
