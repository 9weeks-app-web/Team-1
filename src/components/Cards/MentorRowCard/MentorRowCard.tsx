import React from "react";
import "./style.css";
import { IMember } from "types/mentor";
import MentoringBadge from "components/Badges/MentoringBadge/MentoringBadge";

interface IMentorRowCard {
  member: IMember;
}

function MentorRowCard(props: IMentorRowCard) {
  const { member } = props;

  return (
    <div className="mentor-row-card">
      <div className="mentorcard-badge">
        <MentoringBadge isMentor={member.isMentor} />
      </div>
      <img className="mentor-profileImg" src={member.profileImg} alt="" />
      <div className="member-info">
        <div>
          <p className="member-name">{member.name}</p>
          <p className="member-rating">{member.rating}</p>
        </div>
        <div className="sub-info oneLineEllipsis">
          직무 <span>{member.occupation}</span>
        </div>
        <div className="sub-info oneLineEllipsis">
          <span>경력</span>
          <span>{member.career}</span>
        </div>
      </div>
      <div className="member-introduction">
        <div>시간 엄수</div>
        <div>{member.introduction}</div>
      </div>
    </div>
  );
}

export default MentorRowCard;
