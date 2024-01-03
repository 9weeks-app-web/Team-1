import React from "react";
import "./style.css";
import SliderBanner from "components/Banner/SliderBanner/SliderBanner";
import HomeAreaTitle from "components/home/HomeAreaTitle/HomeAreaTitle";
import HomePortfolioList from "components/home/HomePortfolioList/HomePortfolioList";
import HomeProjectList from "components/home/HomeProjectList/HomeProjectList";
import EventSliderBanner from "components/Banner/EventSliderBanner/EventSliderBanner";
import HomeMentorList from "components/home/HomeMentorList/HomeMentorList";
import HomeCommunityList from "components/home/HomeCommunityList/HomeCommunityList";

function HomePage() {
  return (
    <div className="homepage-container">
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
            text="스펙 업! 을 위한 네트워킹 이벤트"
            renderViewAll
            viewAllUrl="/event"
          />
          <EventSliderBanner />
        </div>

        {/* 지금 뜨는 커뮤니티 게시글 */}
        <div className="section">
          <HomeAreaTitle
            text="지금 뜨는 커뮤니티 게시글"
            renderViewAll
            viewAllUrl="/community"
          />
          <HomeCommunityList />
        </div>

        {/* 인기 멘토 */}
        <div className="section">
          <HomeAreaTitle text="인기 멘토" renderViewAll viewAllUrl="/project" />
          <HomeMentorList />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
