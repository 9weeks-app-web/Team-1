import React from "react";
import "./style.css";
import { IMember } from "types/mentor";
import MentoringBadge from "components/Badges/MentoringBadge/MentoringBadge";
import { useNavigate } from "react-router-dom";
import Icon from "components/Icon/Icon";
import Badge from "components/Badges/Badge/Badge";

interface IMentorRowCard {
  member: IMember;
  isBest?: boolean;
  isNew?: boolean;
}

function MentorRowCard(props: IMentorRowCard) {
  const { member, isBest, isNew } = props;
  const navigate = useNavigate();

  return (
    <div
      className="mentor-row-card"
      role="presentation"
      onClick={() => navigate("/recruit/1")}
    >
      <div className="mentorcard-badge">
        <MentoringBadge isMentor={member.isMentor} />
      </div>
      <img className="mentor-profileImg" src={member.profileImg} alt="" />
      <div className="member-info">
        <div>
          <p className="member-name">
            <Icon icon="trophy" className="best-icon" />
            {isBest && <Icon icon="trophy" />}
            {isNew && <span>NEW</span>}
            {member.name}
          </p>
          <p className="member-rating">
            <Icon icon="star" className="star-icon" />
            {member.rating}
          </p>
        </div>
        <div className="flex-column gap-8">
          <div className="sub-info oneLineEllipsis">
            직무 <span>{member.occupation}</span>
          </div>
          <div className="sub-info oneLineEllipsis">
            경력
            <span>{member.career}</span>
          </div>
        </div>
      </div>
      <div className="member-introduction">
        <div className="member-badges">
          <Badge text="시간엄수" type="teal" />
          <Badge text="꼼꼼한" type="teal" />
          <Badge text="이성적인" type="teal" />
          <Badge text="+3" type="teal" />
        </div>
        <div>{member.introduction}</div>
      </div>
    </div>
  );
}

export default MentorRowCard;
