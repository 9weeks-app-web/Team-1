import React from "react";
import MentorCard from "components/Cards/MentorCard/MentorCard";
import { DUMMY_MENTORS } from "constants/dummy";
import "./style.css";

function HomeMentorList() {
  return (
    <div className="montor-list">
      {DUMMY_MENTORS.map((el) => (
        <MentorCard key={el.id} mentor={el} />
      ))}
    </div>
  );
}

export default HomeMentorList;
