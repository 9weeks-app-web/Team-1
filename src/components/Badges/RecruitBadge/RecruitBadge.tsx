import React, { useEffect, useState } from "react";
import "./style.css";
import Icon from "components/Icon/Icon";

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
      <Icon icon="group" className="group-icon" />
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
