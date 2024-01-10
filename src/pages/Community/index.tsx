import React from "react";
import "./style.css";
import Aside from "components/Aside";
import PageLayout from "components/layout/PageLayout/PageLayout";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as FreeSubject } from "assets/icons/home/FreeSubject.svg";
import { ReactComponent as Review } from "assets/icons/home/Review.svg";
import { ReactComponent as SuitCase } from "assets/icons/home/SuitCase.svg";
import Icon from "components/Icon/Icon";

function Community() {
  const navigate = useNavigate();

  const handleMenuChange = (url: string) => {
    navigate(url);
  };

  const menuTitles = { label: "커뮤니티" };
  const menuItems = [
    { icon: <Icon icon="home" />, label: "전체", menu: "" },
    { icon: <FreeSubject />, label: "자유 주제", menu: "free" },
    { icon: <Icon icon="live_help" />, label: "포트폴리오 Q&A", menu: "qna" },
    { icon: <SuitCase />, label: "취업 / 실무 고민", menu: "worries" },
    { icon: <Review />, label: "프로젝트 / 부트캠프 후기", menu: "reviews" },
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
        <Outlet />
      </div>
    </PageLayout>
  );
}

export default Community;
