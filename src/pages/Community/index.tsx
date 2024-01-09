import React, { useState } from "react";
import "./style.css";
import Aside from "components/Aside";
import PageLayout from "components/layout/PageLayout/PageLayout";
import QnASubPage from "./QnASubPage/QnASubPage";
import FreeTopicSubPage from "./FreeTopicSubPage/FreeTopicSubPage";
import ReviewsSubPage from "./ReviewsSubPage/ReviewsSubPage";
import WorriesSubPage from "./WorriesSubPage/WorriesSubPage";
import AllSubPage from "./AllSubPage/AllSubPage";

function Community() {
  const [activeView, setActiveView] = useState("myPageMyProfile");

  const handleMenuChange = (view: React.SetStateAction<string>) => {
    setActiveView(view);
  };
  const menuTitles = { label: "커뮤니티" };
  const menuItems = [
    { label: "전체", menu: "all" },
    { label: "자유 주제", menu: "FreeTopic" },
    { label: "포트폴리오 Q&A", menu: "QnA" },
    { label: "취업 / 실무 고민", menu: "Worries" },
    { label: "프로젝트 / 부트캠프 후기", menu: "Reviews" },
  ];

  return (
    <PageLayout>
      <div className="content-layout">
        <div className="community-sidebar">
          <Aside
            onMenuChange={handleMenuChange}
            menuTitle={menuTitles}
            menuItems={menuItems}
          />
        </div>
        <div className="mypageContainer overflow-scroll subpage">
          {activeView === "all" && <AllSubPage />}
          {activeView === "FreeTopic" && <FreeTopicSubPage />}
          {activeView === "QnA" && <QnASubPage />}
          {activeView === "Worries" && <WorriesSubPage />}
          {activeView === "Reviews" && <ReviewsSubPage />}
        </div>
      </div>
    </PageLayout>
  );
}

export default Community;
