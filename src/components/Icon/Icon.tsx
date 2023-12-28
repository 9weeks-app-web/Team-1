import React from "react";

interface IIconProps {
  icon: string;
  className?: string;
}

/**
 * https://fonts.google.com/icons의 아이콘 이름을 넣으면 됩니다.
 * @param icon 아이콘 명 (ex : Person, Group, Badge, Face 등)
 * @param className 추가로 전달할 클래스명이 있다면 전달합니다.
 */
function Icon(props: IIconProps) {
  const { icon, className } = props;
  return (
    <span className={`material-symbols-outlined ${className && className}`}>
      {icon}
    </span>
  );
}

export default Icon;
