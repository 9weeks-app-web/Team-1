import React from "react";
import "./style.css";
import RecruitBadge from "components/Badges/RecruitBadge/RecruitBadge";
import { IProject } from "types/project";
import { convertToKNotation } from "utils/convertToKNotation";
import IconText from "components/IconText/IconText";

interface IProjectRowCardProps {
  project: IProject;
}
function ProjectRowCard(props: IProjectRowCardProps) {
  const { project } = props;

  return (
    <div className="project-row-card">
      <img className="project-row-thumbnail" src={project.thumbnail} alt="" />
      <div className="project-row-info">
        <div className="recruit-info">
          <RecruitBadge
            nowCnt={project.nowPeopleCnt}
            maxCnt={project.maxPeopleCnt}
          />
          D-7
          {/* {project.deadline} */}
        </div>
        <div className="project-info">
          <p className="project-title oneLineEllipsis">{project.title}</p>
          <p className="project-description oneLineEllipsis">
            {project.description}
          </p>
        </div>
        <div className="row">
          <div className="project-category oneLineEllipsis">
            모집분야 : {project.category}
          </div>
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
    </div>
  );
}

export default ProjectRowCard;
