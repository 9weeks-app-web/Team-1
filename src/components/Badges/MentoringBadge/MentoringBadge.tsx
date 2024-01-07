import React from "react";
import "./style.css";

function MentoringBadge({ isMentor }: { isMentor: boolean }) {
  return (
    <div className={`mentoring-badge-container ${isMentor || "mentee"}`}>
      {isMentor ? "Mentor" : "Sniper"}
    </div>
  );
}

export default MentoringBadge;
