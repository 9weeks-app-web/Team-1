import React from "react";
import { IMember } from "types/mentor";
import MentoringBadge from "components/Badges/MentoringBadge/MentoringBadge";
import "./style.css";
import Icon from "components/Icon/Icon";
import { useNavigate } from "react-router-dom";

interface IMentorCardProps {
  mentor: IMember;
}

function MentorCard(props: IMentorCardProps) {
  const { mentor } = props;
  const navigate = useNavigate();

  return (
    <div
      className="mentorcard-container"
      role="presentation"
      onClick={() => navigate("/recruit/1")}
    >
      <div className="mentorcard-badge">
        <MentoringBadge isMentor={mentor.isMentor} />
      </div>
      <img className="profile-img" src={mentor.profileImg ?? ""} alt="" />
      <div>
        <div className="mentor-name">{mentor.name}</div>
        <div className="rating">
          <Icon icon="star" className="rating-icon" />
          <span className="rating-text">{mentor.rating}</span>
        </div>
      </div>
      <div className="mentorcard-info">
        <div>
          <p className="info-line">
            <span className="info-line-title">직무</span>
            <span className="info-line-content">{mentor.occupation}</span>
          </p>
          <p className="info-line">
            <span className="info-line-title">경력</span>
            <span className="info-line-content">{mentor.career}</span>
          </p>
        </div>
        <p className="info-line">
          <span className="info-line-content">{mentor.introduction}</span>
        </p>
      </div>
      <div className="card__overlay">
        <div className="overlay__text">
          <button
            type="button"
            className="overlay-btn"
            onClick={(event) => {
              event.stopPropagation();
              alert(`${mentor.name}님을 팔로우하였습니다!`);
            }}
          >
            팔로우
          </button>
          <button
            type="button"
            className="overlay-btn"
            onClick={(event) => {
              event.stopPropagation();
              if (window.confirm(`${mentor.name}님께 채팅을 하시겠습니까?`)) {
                navigate("/chat");
              }
            }}
          >
            채팅하기
          </button>
          <button type="button" className="bg-blue overlay-btn">
            상세정보
          </button>
        </div>
      </div>
    </div>
  );
}

export default MentorCard;
