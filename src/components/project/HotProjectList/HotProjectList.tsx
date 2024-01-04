import React from "react";
import "./style.css";
import ProjectBigCard from "components/Cards/ProjectBigCard/ProjectBigCard";
import { DUMMY_HOT_PROJECTS } from "constants/dummy";
import ProjectRowCard from "components/Cards/ProjectRowCard/ProjectRowCard";

function HotProjectList() {
  return (
    <div className="hot-project-list">
      <ProjectBigCard project={DUMMY_HOT_PROJECTS[0]} />
      <div>
        <ProjectRowCard />
        <ProjectRowCard />
        <ProjectRowCard />
      </div>
    </div>
  );
}

export default HotProjectList;
