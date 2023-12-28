import React, { useEffect, useState } from "react";
import "./style.css";

interface IRecruitBadgeProps {
  nowCnt: number;
  maxCnt: number;
}
function RecruitBadge(props: IRecruitBadgeProps) {
  const { nowCnt, maxCnt } = props;
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    if (nowCnt === maxCnt) setIsDone(true);
    else setIsDone(false);
  }, [nowCnt, maxCnt]);

  return (
    <div className={`recruit-badge-container ${isDone ? "done" : ""}`}>
      <span className="material-symbols-outlined group-icon">group</span>
      {isDone ? (
        <span>모집완료</span>
      ) : (
        <>
          <span>모집중</span>
          <span>
            {nowCnt}/{maxCnt}
          </span>
        </>
      )}
    </div>
  );
}

export default RecruitBadge;
