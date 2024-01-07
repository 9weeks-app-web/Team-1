import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Icon from "components/Icon/Icon";

interface IAreaTitleProps {
  text: string;
  renderViewAll?: boolean;
  viewAllUrl?: string;
}
function AreaTitle(props: IAreaTitleProps) {
  const { text, renderViewAll, viewAllUrl = "" } = props;
  const navigate = useNavigate();

  return (
    <div className="area-title-container">
      <h1>{text}</h1>
      {renderViewAll && (
        <button
          className="view-all-button"
          type="button"
          onClick={() => navigate(viewAllUrl)}
        >
          전체보기
          <Icon icon="chevron_right" />
        </button>
      )}
    </div>
  );
}

export default AreaTitle;
