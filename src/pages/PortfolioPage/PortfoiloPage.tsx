import React, { useState } from "react";
import "./style.css";
import PageLayout from "components/layout/PageLayout/PageLayout";
import AreaTitle from "components/home/AreaTitle/AreaTitle";
import Icon from "components/Icon/Icon";
import HomePortfolioList from "components/home/HomePortfolioList/HomePortfolioList";
import StaticBanner from "components/Banner/StaticBanner/StaticBanner";
import { ReactComponent as QA } from "assets/icons/home/QA.svg";
import { Tab, Tabs } from "@mui/material";
import CustomTabPanel from "components/CustomTabPanel/CustomTabPanel";

function PortfolioPage() {
  const [value, setValue] = useState(0);

  return (
    <PageLayout>
      <div className="portfolio-page-content">
        <div className="section">
          <div className="svg-35 flex-row gap-8">
            <AreaTitle text="오늘의 스팩폴리오 Pick!" />
            <Icon className="verified" icon="verified" />
          </div>
          <HomePortfolioList />
        </div>
        <div className="section">
          <StaticBanner
            title="포트폴리오 제작이 막막하다면? 포트폴리오 Q&A에서 고민을 나눠보세요!"
            buttonText="포트폴리오 Q&A 바로가기"
            icon={<QA />}
            moveUrl="/portfolio"
          />
        </div>
        <div className="section">
          <AreaTitle text="전체 포트폴리오" />
          <Tabs
            className="tabs"
            value={value}
            aria-label="basic tabs example"
            onChange={(_, v: number) => setValue(v)}
          >
            <Tab label="전체" />
            <Tab label="팔로잉" />
          </Tabs>
          <CustomTabPanel value={value} index={0} />
          <CustomTabPanel value={value} index={1} />
        </div>
      </div>
    </PageLayout>
  );
}

export default PortfolioPage;
