import React from "react";
import "./style.css";

interface IBadgeProps {
  type: "blue" | "teal" | "violet" | "orange";
  text: string;
}

function Badge(props: IBadgeProps) {
  const { type, text } = props;
  return <div className={`badge-container ${type}`}>{text}</div>;
}

export default Badge;
