import React from "react";
import { IProject } from "types/project";
import RecruitBadge from "components/Badges/RecruitBadge/RecruitBadge";
import IconText from "components/IconText/IconText";
import { convertToKNotation } from "utils/convertToKNotation";
import Card from "../Card/Card";
import "./style.css";

interface IProjectCardProps {
  project: IProject;
}

function ProjectCard(props: IProjectCardProps) {
  const { project } = props;
  return (
    <Card width="m">
      <div className="project-card-container">
        <img
          className="project-card-thumbnail"
          src={project.thumbnail}
          alt=""
        />
        <div className="project-card-info">
          <div className="recruit-info">
            <RecruitBadge
              nowCnt={project.nowPeopleCnt}
              maxCnt={project.maxPeopleCnt}
            />
            {project.deadline}
          </div>
          <div className="project-info">
            <p className="project-title oneLineEllipsis">{project.title}</p>
            <p className="project-description oneLineEllipsis">
              {project.description}
            </p>
          </div>
          <p className="project-category oneLineEllipsis">
            모집분야 : {project.category}
          </p>
          <div className="sub-info">
            <IconText
              icon="visibility"
              text={convertToKNotation(project.views)}
            />
            <IconText
              icon="favorite"
              text={convertToKNotation(project.likes)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ProjectCard;
