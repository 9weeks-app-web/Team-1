import React from "react";
import "./style.css";

function FreeTopicSubPage() {
  return (
    <div className="free-topic-container">
      <div className="section">
        <div className="area-title">지금 뜨는 게시글</div>
        <div className="now-floating-post-list">
          {/* 게시글 하나 */}
          <div className="now-floating-post">
            <div>1</div>
            <div>
              <p className="oneLineEllipsis">
                UX 디자인 프로젝트 진행중인 학부생입니다!{" "}
              </p>
              <p className="oneLineEllipsis">
                여러분들은 설문조사 인원 어떻게 모집하시나요. 저는 보통...{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeTopicSubPage;
