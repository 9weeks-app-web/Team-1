import React from "react";
import { IMember } from "types/mentor";
import MentoringBadge from "components/Badges/MentoringBadge/MentoringBadge";
import Card from "../Card/Card";
import "./style.css";

interface IMentorCardProps {
  mentor: IMember;
}

function MentorCard(props: IMentorCardProps) {
  const { mentor } = props;

  return (
    <Card width="s">
      <div className="mentorcard-container">
        <img className="profile-img" src={mentor.profileImg ?? ""} alt="" />
        <div className="mentorcard-info">
          <MentoringBadge isMentor={mentor.isMentor} />
          <p className="name">{mentor.name}</p>
          <p className="occupation">{mentor.occupation}</p>
          <p className="introduction twoLineEllipsis">{mentor.introduction}</p>
        </div>
      </div>
    </Card>
  );
}

export default MentorCard;
