import React from "react";
import "./style.css";
import AreaTitle from "components/home/AreaTitle/AreaTitle";
import CardGrid from "components/CardGrid/CardGrid";
import ProjectCard from "components/Cards/ProjectCard/ProjectCard";
import { DUMMY_PROJECTS } from "constants/dummy";
import SelectorGroup from "components/project/SelectorGroup/SelectorGroup";
import FloatingButton from "components/FloatingButton/FloatingButton";

function ProjectPage() {
  return (
    <div className="project-page-container">
      <FloatingButton />
      <div className="project-page-content">
        <div className="section">
          <AreaTitle text="핫한 프로젝트 모집 공고" />
          <CardGrid rowGap="rg-16">
            {DUMMY_PROJECTS.map((el) => (
              <ProjectCard key={el.id} project={el} />
            ))}
          </CardGrid>
        </div>
        <div className="section">
          <AreaTitle text="전체 프로젝트" />
          <SelectorGroup />
          <CardGrid rowGap="rg-16">
            {DUMMY_PROJECTS.map((el) => (
              <ProjectCard key={el.id} project={el} />
            ))}
          </CardGrid>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
