import React, { useState } from "react";
import "./style.css";
import MentorRowCard from "components/Cards/MentorRowCard/MentorRowCard";
import { DUMMY_MENTEES, DUMMY_MENTORS } from "constants/dummy";
import SinglePickChip from "components/Chips/SinglePickChip/SinglePickChip";

function BestMemberList() {
  const [selected, setSelected] = useState("팀원");

  return (
    <div className="bestmember-container">
      <div className="chip-group">
        <SinglePickChip
          isActive={selected === "멘토"}
          title="멘토"
          onClick={() => {
            setSelected("멘토");
          }}
        />
        <SinglePickChip
          isActive={selected === "팀원"}
          title="팀원"
          onClick={() => {
            setSelected("팀원");
          }}
        />
      </div>
      <div className="member-list">
        {selected === "멘토" &&
          DUMMY_MENTORS.filter((el) => el.isMentor).map((el) => (
            <MentorRowCard member={el} />
          ))}
        {selected === "팀원" &&
          DUMMY_MENTEES.filter((el) => !el.isMentor).map((el) => (
            <MentorRowCard member={el} />
          ))}
      </div>
    </div>
  );
}

export default BestMemberList;
