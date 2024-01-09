import React, { useState } from "react";
import "./style.css";
import Aside from "components/Aside";
import PortfolioQnA from "./portfolioReview";
import FreeTopic from "./freeTopic";

function Community() {
  const [activeView, setActiveView] = useState("myPageMyProfile");

  const handleMenuChange = (view: React.SetStateAction<string>) => {
    setActiveView(view);
  };
  const menuTitles = { label: "커뮤니티" };
  const menuItems = [
    { label: "전체", menu: "Community" },
    { label: "자유 주제", menu: "freeTopic" },
    { label: "포트폴리오 Q&A", menu: "portfolioQnA" },
    { label: "취업/실무 고민", menu: "workWorries" },
    { label: "프로젝트/부트캠프 후기", menu: "projectReview" },
  ];

  return (
    <div className="mypageWrapper">
      <div className="mypageAll">
        <div className="mypage">
          <Aside
            onMenuChange={handleMenuChange}
            menuTitle={menuTitles}
            menuItems={menuItems}
          />
          <div className="mypageContainer">
            {activeView === "all" && <Community />}
            {activeView === "freeTopic" && <FreeTopic />}
            {activeView === "portfolioQnA" && <PortfolioQnA />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
