import React from "react";
import { IMentor } from "types/mentor";
import Card from "../Card/Card";
import "./style.css";

interface IMentorCardProps {
  mentor: IMentor;
}

function MentorCard(props: IMentorCardProps) {
  const { mentor } = props;

  return (
    <Card width="s">
      <div className="mentorcard-container">
        <img className="profile-img" src={mentor.profileImg ?? ""} alt="" />
        <div className="info">
          <p className="name">{mentor.name}</p>
          <p className="occupation">{mentor.occupation}</p>
          <p className="introduction">{mentor.introduction}</p>
        </div>
      </div>
    </Card>
  );
}

export default MentorCard;
