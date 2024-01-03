import React, { useState } from "react";
import "./style.css";
import DropdownSelector from "components/DropdownSelector/DropdownSelector";

function SelectorGroup() {
  const [period, setPeriod] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [method, setMethod] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const periodOptions = ["1주", "1달", "6개월", "1년"];
  const categoryOptions = ["디자인", "기획", "UX/UI"];
  const jobOptions = ["디자인", "기획", "UX/UI"];
  const methodOptions = ["디자인", "기획", "UX/UI"];
  const statusOptions = ["디자인", "기획", "UX/UI"];

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
