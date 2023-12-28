import React from "react";
import "./style.css";
import Icon from "components/Icon/Icon";

interface IIconButtonProps {
  icon: string;
  onClick: () => void;
}

function IconButton(props: IIconButtonProps) {
  const { icon, onClick } = props;
  return (
    <button type="button" className="icon-button-contianer" onClick={onClick}>
      <Icon icon={icon} />
    </button>
  );
}

export default IconButton;
