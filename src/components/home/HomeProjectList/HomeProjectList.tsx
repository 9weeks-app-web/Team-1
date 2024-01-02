import React from "react";
import "./style.css";
import CardGrid from "components/CardGrid/CardGrid";
import ProjectCard from "components/Cards/ProjectCard/ProjectCard";
import { DUMMY_PROJECTS } from "constants/dummy";

function HomeProjectList() {
  return (
    <div>
      <CardGrid rowGap="rg-16" columnGap="cg-16">
        {DUMMY_PROJECTS.map((el) => (
          <ProjectCard project={el} key={el.id} />
        ))}
      </CardGrid>
    </div>
  );
}

export default HomeProjectList;
