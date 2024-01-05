import React from "react";
import "./style.css";
import { IProject } from "types/project";
import IconText from "components/IconText/IconText";
import { convertToKNotation } from "utils/convertToKNotation";
import RecruitBadge from "components/Badges/RecruitBadge/RecruitBadge";

interface IProjectBigCardProps {
  project: IProject;
}
function ProjectBigCard(props: IProjectBigCardProps) {
  const { project } = props;

  return (
    <div className="hot-project-list">
      <div className="big-card">
        <img className="big-card-thumbnail" src={project.thumbnail} alt="" />
        <div className="big-card-info-container">
          <div className="big-card-badge">
            <RecruitBadge
              maxCnt={project.maxPeopleCnt}
              nowCnt={project.nowPeopleCnt}
            />
            <div>D-7</div>
          </div>
          <div className="big-card-info">
            <div className="big-card-title">{project.title}</div>
            <div className="big-card-content twoLineEllipsis">
              {project.description}
            </div>
          </div>
          <div className="big-card-category">
            <span>모집분야 : {project.category}</span>
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
    </div>
  );
}

export default ProjectBigCard;
