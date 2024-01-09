import React from "react";
import "./style.css";
import { IProjectReviewSummary } from "types/project";
import { Rating } from "@mui/material";

interface IProjectReviewCardProps {
  reviewSummary: IProjectReviewSummary;
}
function ProjectReviewCard(props: IProjectReviewCardProps) {
  const { reviewSummary } = props;

  return (
    <div className="project-review-card-container">
      <div className="first">
        <div className="profile">
          <img src={reviewSummary.profileImg} alt="" />
          {reviewSummary.writer}
        </div>
        <span className="date">{reviewSummary.date}</span>
      </div>
      <div className="second">
        <Rating
          name="simple-controlled"
          readOnly
          value={reviewSummary.rating}
        />
        {reviewSummary.rating}
      </div>
      <div className="third threeLineEllipsis">{reviewSummary.content}</div>
    </div>
  );
}

export default ProjectReviewCard;
