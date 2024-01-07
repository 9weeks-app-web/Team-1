import React from "react";
import "./style.css";

function SortDropdown() {
  return (
    <div className="sort-dropdown-container">
      <span>정렬방식</span>
      <select>
        <option>최신순</option>
        <option>오래된순</option>
        <option>마감 임박순</option>
        <option>좋아요순</option>
      </select>
    </div>
  );
}

export default SortDropdown;
