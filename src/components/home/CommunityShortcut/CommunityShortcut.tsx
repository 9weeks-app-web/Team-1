import React from "react";
import "./style.css";

function CommunityShortcut() {
  return (
    <div className="community-shortcut-container">
      <div className="shortcut-card">
        <div className="shortcut-info">
          <p className="title">포트폴리오 Q&A</p>
          <p className="description">포트폴리오 고민 함께 해소하기</p>
        </div>
        <div>아이콘</div>
      </div>
      <div className="shortcut-card">
        <div className="shortcut-info">
          <p className="title">취업·실무 고민</p>
          <p className="description">
            취업, 실무 관련 도움이 필요할 땐 여기로!
          </p>
        </div>
        <div>아이콘</div>
      </div>
      <div className="shortcut-card">
        <div className="shortcut-info">
          <p className="title">자유주제</p>
          <p className="description">디자이너, 기획자들의 자유로운 이야기</p>
        </div>
        <div>아이콘</div>
      </div>
      <div className="shortcut-card">
        <div className="shortcut-info">
          <p className="title">프로젝트·부트캠프 후기</p>
          <p className="description">솔직한 참여 후기들 모아보기</p>
        </div>
        <div>아이콘</div>
      </div>
    </div>
  );
}

export default CommunityShortcut;
