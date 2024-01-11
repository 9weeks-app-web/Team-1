import React from "react";
import "./style.css";
import AreaTitle from "components/home/AreaTitle/AreaTitle";
import CardGrid from "components/CardGrid/CardGrid";
import ProjectCard from "components/Cards/ProjectCard/ProjectCard";
import { DUMMY_PROJECTS } from "constants/dummy";
import SelectorGroup from "components/project/SelectorGroup/SelectorGroup";
import FloatingButton from "components/FloatingButton/FloatingButton";
import PageLayout from "components/layout/PageLayout/PageLayout";
import HotProjectList from "components/project/HotProjectList/HotProjectList";
import StaticBanner from "components/Banner/StaticBanner/StaticBanner";
import { ReactComponent as QA } from "assets/icons/home/QA.svg";

function ProjectPage() {
  return (
    <PageLayout>
      <FloatingButton />
      <div className="project-page-content">
        <div className="section">
          <AreaTitle text="핫한 프로젝트 모집 공고" />
          <HotProjectList />
        </div>
        <div className="section">
          <AreaTitle text="전체 프로젝트" />
          <SelectorGroup />
          <CardGrid columnGap="cg-20" rowGap="rg-16">
            {DUMMY_PROJECTS.filter((_, idx) => idx < 12).map((el) => (
              <ProjectCard key={el.id} project={el} />
            ))}
          </CardGrid>
          <StaticBanner
            title="프로젝트에 필요한 팀원과 멘토를 찾기 어려우신가요? 스팩폴리오와 함께 찾아보세요!"
            buttonText="팀원 · 멘토 찾기"
            icon={<QA />}
            moveUrl="/recruit"
          />
          <CardGrid columnGap="cg-20" rowGap="rg-16">
            {DUMMY_PROJECTS.filter((_, idx) => idx > 11).map((el) => (
              <ProjectCard key={el.id} project={el} />
            ))}
          </CardGrid>
        </div>
      </div>
    </PageLayout>
  );
}

export default ProjectPage;
