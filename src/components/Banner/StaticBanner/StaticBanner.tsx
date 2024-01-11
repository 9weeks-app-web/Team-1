import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

interface IStaticBannerProps {
  title: string;
  buttonText: string;
  icon: ReactNode;
  moveUrl: string;
}
function StaticBanner(props: IStaticBannerProps) {
  const { title, buttonText, icon, moveUrl } = props;
  const navigate = useNavigate();

  const movePage = () => {
    navigate(moveUrl);
  };

  return (
    <div className="static-banner-container noDrag">
      <div className="static-banner-left">
        <p className="banner-title">{title}</p>
        <button type="button" onClick={movePage} className="move-button">
          {buttonText}
        </button>
      </div>
      <div className="static-banner-right">{icon}</div>
    </div>
  );
}

export default StaticBanner;
