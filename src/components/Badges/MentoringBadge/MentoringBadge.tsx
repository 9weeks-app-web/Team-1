import React from "react";
import "./style.css";

function MentoringBadge({ isMentee }: { isMentee: boolean }) {
  return (
    <div className={`mentoring-badge-container ${isMentee && "mentee"}`}>
      {isMentee ? "Mentee" : "Mentor"}
    </div>
  );
}

export default MentoringBadge;
