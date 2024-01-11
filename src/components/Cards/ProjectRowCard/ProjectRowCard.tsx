import React from "react";
import "./style.css";
import RecruitBadge from "components/Badges/RecruitBadge/RecruitBadge";
import { IProject } from "types/project";
import { convertToKNotation } from "utils/convertToKNotation";
import IconText from "components/IconText/IconText";
import { useNavigate } from "react-router-dom";
import getDday from "utils/getDday";

interface IProjectRowCardProps {
  project: IProject;
}
function ProjectRowCard(props: IProjectRowCardProps) {
  const { project } = props;
  const navigate = useNavigate();

  return (
    <div
      className="project-row-card"
      role="presentation"
      onClick={() => navigate(`/project/${project.id}`)}
    >
      <div className="project-row-thumbnail-container">
        <img className="project-row-thumbnail" src={project.thumbnail} alt="" />
      </div>
      <div className="project-row-info">
        <div className="recruit-info">
          <RecruitBadge
            nowCnt={project.nowPeopleCnt}
            maxCnt={project.maxPeopleCnt}
          />
          <span
            className={`deadline ${
              getDday(project.deadline) <= 7 ? "red" : ""
            }`}
          >
            D-{getDday(project.deadline)}
          </span>
        </div>
        <div className="project-info">
          <p className="project-title oneLineEllipsis">{project.title}</p>
          <p className="project-description twoLineEllipsis">
            {project.description}
          </p>
        </div>
        <div className="row project-line-two">
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
