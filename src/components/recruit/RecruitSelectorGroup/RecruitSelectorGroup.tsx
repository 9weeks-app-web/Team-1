import Selector from "components/Selector/Selector";
import React, { useState } from "react";
import "./style.css";

function RecruitSelectorGroup() {
  const teamInfoOptions = ["전체", "팀원", "멘토"];
  const categoryOptions = ["전체", "기획", "디자인"];
  const jobOptions = ["기획", "디자인"];
  const stackOptions = ["React", "Figma", "Front-end", "Back-end"];

  const [teamInfo, setTeamInfo] = useState("");
  const [category, setCategory] = useState("");
  const [job, setJob] = useState("");
  const [stack, setStack] = useState("");

  return (
    <div className="recruit-selector-group-container">
      <Selector
        options={teamInfoOptions}
        value={teamInfo}
        setValue={setTeamInfo}
        placeholder="팀원"
      />
      <Selector
        options={categoryOptions}
        value={category}
        setValue={setCategory}
        placeholder="분야"
      />
      <Selector
        options={jobOptions}
        value={job}
        setValue={setJob}
        placeholder="직무"
      />
      <Selector
        options={stackOptions}
        value={stack}
        setValue={setStack}
        placeholder="기술스택"
      />
    </div>
  );
}

export default RecruitSelectorGroup;
