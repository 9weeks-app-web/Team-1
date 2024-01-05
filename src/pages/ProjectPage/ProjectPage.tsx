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
import Icon from "components/Icon/Icon";

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
            title="포트폴리오 제작이 막막하다면? 포트폴리오 Q&A에서 고민을 나눠보세요!"
            buttonText="포트폴리오 Q&A 바로가기"
            icon={<Icon icon="star" />}
            moveUrl="/portfolio"
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
