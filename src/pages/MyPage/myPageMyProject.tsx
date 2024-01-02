import React, { useState } from "react";
import "./style.css";

function MyPageMyProject() {
  const [selectedTab, setSelectedTab] = useState("progress");

  return (
    <div>
      <h4 className="myProfileTitle">내 프로젝트</h4>
      <button
        type="button"
        className={`myProfilePFon ${
          selectedTab === "progress" ? "active" : ""
        }`}
        onClick={() => setSelectedTab("progress")}
      >
        참여중인 프로젝트
      </button>
      <button
        type="button"
        className={`myProfilePFoff ${
          selectedTab === "completed" ? "active" : ""
        }`}
        onClick={() => setSelectedTab("completed")}
      >
        완료된 프로젝트
      </button>

      <div className="info">
        {selectedTab === "progress" && (
          <div>
            {" "}
            <div className="portfolio-progress" />
          </div>
        )}
        {selectedTab === "completed" && <div>완료된 프로젝트</div>}
      </div>
    </div>
  );
}
export default MyPageMyProject;
