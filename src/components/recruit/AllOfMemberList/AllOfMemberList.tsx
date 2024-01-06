import React from "react";
import MentorCard from "components/Cards/MentorCard/MentorCard";
import "./style.css";
import useMember from "hooks/useMember";
import { IMember } from "types/mentor";
import StaticBanner from "components/Banner/StaticBanner/StaticBanner";
import Icon from "components/Icon/Icon";

function AllOfMemberList() {
  const members = useMember().results[3].data?.data;

  return (
    <div className="montor-list">
      {members &&
        members
          .filter((_: IMember, idx: number) => idx < 15)
          .map((el: IMember) => <MentorCard key={el.id} mentor={el} />)}
      <StaticBanner
        title="포트폴리오 제작이 막막하다면? 포트폴리오 Q&A에서 고민을 나눠보세요!"
        buttonText="포트폴리오 Q&A 바로가기"
        icon={<Icon icon="star" />}
        moveUrl="/portfolio"
      />
      {members &&
        members
          .filter((_: IMember, idx: number) => idx >= 15)
          .map((el: IMember) => <MentorCard key={el.id} mentor={el} />)}
    </div>
  );
}

export default AllOfMemberList;
