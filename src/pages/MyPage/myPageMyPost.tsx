import React, { useState } from "react";
import "./style.css";

function MyPageMyPost() {
  const [selectedTab, setSelectedTab] = useState("myPost");

  return (
    <div>
      <h4 className="myProfileTitle">내 활동</h4>
      <button
        type="button"
        className={`myProfilePFon ${selectedTab === "myPost" ? "active" : ""}`}
        onClick={() => setSelectedTab("myPost")}
      >
        내가 쓴 게시글
      </button>
      <button
        type="button"
        className={`myProfilePFoff ${
          selectedTab === "myComment" ? "active" : ""
        }`}
        onClick={() => setSelectedTab("myComment")}
      >
        내가 쓴 댓글
      </button>
      <div className="info">
        {selectedTab === "myPost" && <div>내가 쓴 게시글들</div>}
        {selectedTab === "myComment" && <div>내가 쓴 댓글들</div>}
      </div>
    </div>
  );
}
export default MyPageMyPost;
