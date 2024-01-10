import React from "react";
import { IProject } from "types/project";
import RecruitBadge from "components/Badges/RecruitBadge/RecruitBadge";
import IconText from "components/IconText/IconText";
import { convertToKNotation } from "utils/convertToKNotation";
import { useNavigate } from "react-router-dom";
import getDday from "utils/getDday";
import Card from "../Card/Card";
import "./style.css";

interface IProjectCardProps {
  project: IProject;
}

function ProjectCard(props: IProjectCardProps) {
  const { project } = props;
  const navigate = useNavigate();

  return (
    <Card width="m">
      <div
        role="presentation"
        onClick={() => navigate(`/project/${project.id}`)}
        className="project-card-container"
      >
        <div className="project-card-thumbnail-container">
          <img
            className="project-card-thumbnail"
            src={project.thumbnail}
            alt=""
          />
        </div>
        <div className="project-card-info">
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
