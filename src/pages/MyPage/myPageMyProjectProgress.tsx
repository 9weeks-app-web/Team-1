import React, { useState } from "react";
import "./style.css";

function MyPageMyProjectProgress() {
  const [isActive, setIsActive] = useState(true); // 첫 번째 버튼의 활성화 상태

  return (
    <div>
      <h4 className="myProfileTitle">진행중 프로젝트</h4>
      <button
        type="button"
        className={`myProfilePFon ${isActive ? "active" : ""}`}
        onClick={() => setIsActive(true)}
      >
        참여중인 프로젝트
      </button>
      <button
        type="button"
        className={`myProfilePFoff ${!isActive ? "active" : ""}`}
        onClick={() => setIsActive(false)}
      >
        완료된 프로젝트
      </button>
    </div>
  );
}
export default MyPageMyProjectProgress;
