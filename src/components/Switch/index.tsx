/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import "./style.css";

function Switch() {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="switch-container">
      <div className="slide-switch" onClick={handleClick}>
        <div className={`slider ${isToggled ? "on" : ""}`} />
        <span className={`switchPublic ${isToggled ? "active" : ""}`}>
          공개
        </span>
        <span className={`switchPrivate ${!isToggled ? "active" : ""}`}>
          비공개
        </span>
      </div>
    </div>
  );
}

export default Switch;
