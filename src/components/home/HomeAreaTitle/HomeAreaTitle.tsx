import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface IHomeAreaTitleProps {
  text: string;
  renderViewAll?: boolean;
  viewAllUrl?: string;
}
function HomeAreaTitle(props: IHomeAreaTitleProps) {
  const { text, renderViewAll, viewAllUrl = "" } = props;
  const navigate = useNavigate();

  return (
    <div className="home-area-title-container">
      <h1>{text}</h1>
      {renderViewAll && (
        <button type="button" onClick={() => navigate(viewAllUrl)}>
          전체보기
        </button>
      )}
    </div>
  );
}

export default HomeAreaTitle;
