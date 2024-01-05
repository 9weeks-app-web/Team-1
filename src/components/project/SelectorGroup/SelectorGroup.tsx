import React, { useState } from "react";
import "./style.css";
import DropdownSelector from "components/DropdownSelector/DropdownSelector";

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
    <div className="selector-group-container">
      <DropdownSelector
        options={periodOptions}
        selectedOption={period}
        setSelectedOption={setPeriod}
      />
      <DropdownSelector
        options={categoryOptions}
        selectedOption={category}
        setSelectedOption={setCategory}
      />
      <DropdownSelector
        options={jobOptions}
        selectedOption={job}
        setSelectedOption={setJob}
      />
      <DropdownSelector
        options={methodOptions}
        selectedOption={method}
        setSelectedOption={setMethod}
      />
      <DropdownSelector
        options={statusOptions}
        selectedOption={status}
        setSelectedOption={setStatus}
      />
    </div>
  );
}

export default SelectorGroup;
