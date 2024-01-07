import React from "react";
import "./style.css";
import SliderBanner from "components/Banner/SliderBanner/SliderBanner";
import HomeAreaTitle from "components/home/AreaTitle/AreaTitle";
import HomePortfolioList from "components/home/HomePortfolioList/HomePortfolioList";
import HomeProjectList from "components/home/HomeProjectList/HomeProjectList";
import EventSliderBanner from "components/Banner/EventSliderBanner/EventSliderBanner";
import HomeMentorList from "components/home/HomeMentorList/HomeMentorList";
// import HomeCommunityList from "components/home/HomeCommunityList/HomeCommunityList";
import PageLayout from "components/layout/PageLayout/PageLayout";
import CommunityShortcut from "components/home/CommunityShortcut/CommunityShortcut";

function HomePage() {
  return (
    <PageLayout>
      <div className="homepage-slider-banner">
        <SliderBanner />
      </div>
      <div className="homepage-contents">
        {/* 오늘의 스팩폴리오 */}
        <div className="section">
          <HomeAreaTitle
            text="오늘의 스팩폴리오 Pick!"
            renderViewAll
            viewAllUrl="/portfolio"
          />
          <HomePortfolioList />
        </div>

        {/* 핫한 프로젝트 모집 공고 */}
        <div className="section">
          <HomeAreaTitle
            text="핫한 프로젝트 모집 공고"
            renderViewAll
            viewAllUrl="/project"
          />
          <HomeProjectList />
        </div>

        {/* 이벤트 배너 */}
        <div className="section">
          <HomeAreaTitle
            text="실무진과의 교류 기회! 네트워킹 이벤트"
            renderViewAll
            viewAllUrl="/event"
          />
          <EventSliderBanner />
        </div>

        {/* 지금 뜨는 커뮤니티 게시글 */}
        <div className="section">
          <HomeAreaTitle
            text="커뮤니티 바로가기"
            renderViewAll
            viewAllUrl="/community"
          />
          <CommunityShortcut />
          {/* <HomeCommunityList /> */}
        </div>

        {/* 이 주의 BEST 멤버 */}
        <div className="section">
          {/* 칩 넣기 */}
          <HomeAreaTitle
            text="이 주의 BEST 멤버"
            renderViewAll
            viewAllUrl="/project"
          />
          <HomeMentorList />
        </div>
      </div>
    </PageLayout>
  );
}

export default HomePage;
