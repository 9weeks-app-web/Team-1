import React from "react";
import "./style.css";
import PageLayout from "components/layout/PageLayout/PageLayout";
import BestMemberList from "components/project/BestMemberList/BestMemberList";
import AreaTitle from "components/home/AreaTitle/AreaTitle";
import EventSliderBanner from "components/Banner/EventSliderBanner/EventSliderBanner";
import { DUMMY_MENTORS } from "constants/dummy";
import MentorCard from "components/Cards/MentorCard/MentorCard";

function RecruitPage() {
  return (
    <PageLayout>
      <div className="recruit-page-content">
        <div className="two-col-section">
          <div className="weekly-best-member">
            {/* 이번 주 베스트 멤버 */}
            <AreaTitle text="이번주 BEST 멤버 🏆" />
            <BestMemberList />
          </div>
          <div className="weekly-best-member">
            {/* 이번 주 베스트 멤버 */}
            <AreaTitle text="실시간 NEW 멤버" />
            <BestMemberList />
          </div>
        </div>
        <div className="section">
          <AreaTitle
            text="실무진과의 교류 기회! 네트워킹 이벤트"
            renderViewAll
            viewAllUrl="/event"
          />
          <EventSliderBanner />
        </div>
        <div className="section">
          <AreaTitle text="전체 멤버" />
          {/* 셀렉트 넣기 */}
          <div className="all-of-members">
            {DUMMY_MENTORS.map((el) => (
              <MentorCard mentor={el} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default RecruitPage;
