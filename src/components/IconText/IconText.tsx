import React from "react";
import "./style.css";

interface IIconTextProps {
  icon: string;
  text: string;
}

function IconText(props: IIconTextProps) {
  const { icon, text } = props;

  return (
    <div className="icon-text-container">
      <span className="material-symbols-outlined">{icon}</span>
      <p>{text}</p>
    </div>
  );
}

export default IconText;
