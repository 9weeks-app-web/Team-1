import React from "react";
import "./style.css";

interface IBadgeProps {
  type: "blue" | "teal" | "violet" | "orange";
  text: string;
  className?: string;
}

function Badge(props: IBadgeProps) {
  const { type, text, className } = props;
  return <div className={`badge-container ${type} ${className}`}>{text}</div>;
}

export default Badge;
