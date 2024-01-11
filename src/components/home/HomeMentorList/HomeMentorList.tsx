import React, { useState } from "react";
import MentorCard from "components/Cards/MentorCard/MentorCard";
import "./style.css";
import useMember from "hooks/useMember";
import { IMember } from "types/mentor";
import SinglePickChip from "components/Chips/SinglePickChip/SinglePickChip";

function HomeMentorList() {
  const members = useMember().results[0].data?.data;
  const [category, setCategory] = useState("멘토");

  return (
    <>
      <div className="flex-row gap-8">
        <SinglePickChip
          title="팀원"
          onClick={() => setCategory("팀원")}
          isActive={category === "팀원"}
        />
        <SinglePickChip
          title="멘토"
          onClick={() => setCategory("멘토")}
          isActive={category === "멘토"}
        />
      </div>
      <div className="montor-list">
        {members &&
          members
            .filter((e: IMember) => (category === "멘토") === e.isMentor)
            .map((el: IMember) => <MentorCard key={el.id} mentor={el} />)}
      </div>
    </>
  );
}

export default HomeMentorList;
