import React, { useState } from "react";
import "./style.css";
import Aside from "components/Aside";
import PortfolioReview from "./portfolioReview";

function Community() {
  const [activeView, setActiveView] = useState("myPageMyProfile");

  const handleMenuChange = (view: React.SetStateAction<string>) => {
    setActiveView(view);
  };
  const menuTitles = { label: "커뮤니티" };
  const menuItems = [
    { label: "전체", menu: "Community" },
    { label: "포트폴리오 리뷰", menu: "portfolioReview" },
    { label: "취업 고민", menu: "jobWorries" }, // 아,,,
    { label: "실무 고민", menu: "workWorries" }, // 현타온다...
    { label: "프로젝트 후기", menu: "projectReview" },
    { label: "부트캠프 후기", menu: "bootcampReview" },
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
            {activeView === "portfolioReview" && <PortfolioReview />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
