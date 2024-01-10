import React from "react";
import "./style.css";
import { ReactComponent as FreeSubject } from "assets/icons/home/FreeSubject.svg";
import { ReactComponent as Review } from "assets/icons/home/Review.svg";
import { ReactComponent as SuitCase } from "assets/icons/home/SuitCase.svg";
import Icon from "components/Icon/Icon";
import { useNavigate } from "react-router-dom";

function CommunityShortcut() {
  const navigate = useNavigate();

  return (
    <div
      className="community-shortcut-container"
      role="presentation"
      onClick={() => navigate("/community/qna")}
    >
      <div className="shortcut-card">
        <div className="shortcut-info">
          <p className="title">포트폴리오 Q&A</p>
          <p className="description">포트폴리오 고민 함께 해소하기</p>
        </div>
        <div className=" flex-column justify-center">
          <Icon icon="live_help" className="icon" />
        </div>
      </div>
      <div
        className="shortcut-card"
        role="presentation"
        onClick={() => navigate("/community/worries")}
      >
        <div className="shortcut-info">
          <p className="title">취업·실무 고민</p>
          <p className="description">
            취업, 실무 관련 도움이 필요할 땐 여기로!
          </p>
        </div>
        <div className="flex-column justify-center">
          <SuitCase />
        </div>
      </div>
      <div
        className="shortcut-card"
        role="presentation"
        onClick={() => navigate("/community/free")}
      >
        <div className="shortcut-info">
          <p className="title">자유주제</p>
          <p className="description">디자이너, 기획자들의 자유로운 이야기</p>
        </div>
        <div className="flex-column justify-center">
          <FreeSubject />
        </div>
      </div>
      <div
        className="shortcut-card"
        role="presentation"
        onClick={() => navigate("/community/reviews")}
      >
        <div className="shortcut-info">
          <p className="title">프로젝트·부트캠프 후기</p>
          <p className="description">솔직한 참여 후기들 모아보기</p>
        </div>
        <div className="flex-column justify-center">
          <Review />
        </div>
      </div>
    </div>
  );
}

export default CommunityShortcut;
