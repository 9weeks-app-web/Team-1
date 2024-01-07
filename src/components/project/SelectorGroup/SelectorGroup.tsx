import React, { useState } from "react";
import "./style.css";
import SortDropdown from "components/SortDropdown/SortDropdown";
import Selector from "components/Selector/Selector";

function SelectorGroup() {
  const [period, setPeriod] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const periodOptions = ["전체", "기간 미정 ~ 3개월", "4~6개월", "6개월 이상"];
  const categoryOptions = [
    "전체",
    "사이드 프로젝트",
    "공모전",
    "해커톤",
    "창업 및 수익 창출",
  ];
  const jobOptions = ["전체", "기획", "디자인"];
  const methodOptions = ["전체", "온라인", "오프라인", "온/오프라인"];
  const statusOptions = ["전체", "모집 중", "모집 완료"];

  return (
    <div className="selector-group">
      <div className="selector-group-container">
        <Selector
          options={periodOptions}
          value={period}
          setValue={setPeriod}
          placeholder="기간"
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
          options={methodOptions}
          value={method}
          setValue={setMethod}
          placeholder="진행방식"
        />
        <Selector
          options={statusOptions}
          value={status}
          setValue={setStatus}
          placeholder="모집여부"
        />
      </div>
      <div>
        <SortDropdown />
      </div>
    </div>
  );
}

export default SelectorGroup;
