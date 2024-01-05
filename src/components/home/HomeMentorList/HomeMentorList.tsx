import React from "react";
import MentorCard from "components/Cards/MentorCard/MentorCard";
import "./style.css";
import useMember from "hooks/useMember";
import { IMember } from "types/mentor";

function HomeMentorList() {
  const members = useMember().results[0].data?.data;

  console.log(members);
  return (
    <div className="montor-list">
      {members &&
        members.map((el: IMember) => <MentorCard key={el.id} mentor={el} />)}
    </div>
  );
}

export default HomeMentorList;
