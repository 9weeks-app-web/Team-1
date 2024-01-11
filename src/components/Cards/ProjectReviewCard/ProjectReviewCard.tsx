import React from "react";
import "./style.css";
import { IProjectReviewSummary } from "types/project";
import { Rating } from "@mui/material";

interface IProjectReviewCardProps {
  reviewSummary: IProjectReviewSummary;
  ishyunsu?: boolean;
}
function ProjectReviewCard(props: IProjectReviewCardProps) {
  const { reviewSummary, ishyunsu } = props;

  return (
    <div className="project-review-card-container">
      <div className="first">
        <div className="profile">
          {ishyunsu ? (
            <img
              src="https://media.istockphoto.com/id/1350690621/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EC%8B%9C%EC%95%84-%EB%82%A8%EC%9E%90%EC%9D%98-%EC%B4%88%EC%83%81%ED%99%94.webp?b=1&s=170667a&w=0&k=20&c=mN5kxbjK_8df8di5IN614DQgjBhXnVIcmst0WDY3TAw="
              alt=""
            />
          ) : (
            <img src={reviewSummary.profileImg} alt="" />
          )}
          {ishyunsu ? "류현수" : reviewSummary.writer}
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
