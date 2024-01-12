import React, { useState } from "react";
import "./style.css";
import MentorRowCard from "components/Cards/MentorRowCard/MentorRowCard";
import SinglePickChip from "components/Chips/SinglePickChip/SinglePickChip";
// import useMember from "hooks/useMember";
import { IMember } from "types/mentor";
import { DUMMY_MENTORS, DUMMY_MENTEES } from "constants/dummy";

function NewMemberList() {
  const [selected, setSelected] = useState("멘토");
  // const members = useMember().results[2].data?.data;
  const members = selected === "멘토" ? DUMMY_MENTORS : DUMMY_MENTEES;

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
        {members
          ? selected === "멘토"
            ? members
                .filter((el: IMember) => el.isMentor)
                .map((el: IMember) => (
                  <MentorRowCard key={el.id} member={el} isNew />
                ))
            : members
                .filter((el: IMember) => !el.isMentor)
                .map((el: IMember) => (
                  <MentorRowCard key={el.id} member={el} isNew />
                ))
          : ""}
      </div>
    </div>
  );
}

export default NewMemberList;
