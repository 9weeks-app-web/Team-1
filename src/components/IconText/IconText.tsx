import React from "react";
import "./style.css";
import Icon from "components/Icon/Icon";

interface IIconTextProps {
  icon: string;
  text: string;
}

function IconText(props: IIconTextProps) {
  const { icon, text } = props;

  return (
    <div className="icon-text-container">
      <Icon icon={icon} />
      <p>{text}</p>
    </div>
  );
}

export default IconText;
