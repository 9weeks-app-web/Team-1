/* eslint-disable consistent-return */
import React from "react";
import "./style.css";
import ProjectBigCard from "components/Cards/ProjectBigCard/ProjectBigCard";
import { DUMMY_HOT_PROJECTS } from "constants/dummy";
import ProjectRowCard from "components/Cards/ProjectRowCard/ProjectRowCard";

function HotProjectList() {
  // eslint-disable-next-line consistent-return
  return (
    <div className="hot-project-list">
      <ProjectBigCard
        key={DUMMY_HOT_PROJECTS[0].id}
        project={DUMMY_HOT_PROJECTS[0]}
      />
      <div className="hot-project-rowcard">
        {DUMMY_HOT_PROJECTS.filter((_, idx) => idx !== 0).map((el) => (
          <ProjectRowCard key={el.id} project={el} />
        ))}
      </div>
    </div>
  );
}

export default HotProjectList;
