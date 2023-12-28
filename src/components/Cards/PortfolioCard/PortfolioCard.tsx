import React from "react";
import { IPortfolioSummary } from "types/portfolio";
import Card from "../Card/Card";
import "./style.css";

interface IPortfolioCardProps {
  portfolio: IPortfolioSummary;
}

function PortfolioCard(props: IPortfolioCardProps) {
  const { portfolio } = props;

  return (
    <Card width="l">
      <div className="portfolio-container">
        <img className="thumbnail" src={portfolio.thumbnail ?? ""} alt="" />
        <div className="info">
          <div className="main">
            {/* TODO : 뱃지 컴포넌트 추가 */}
            <p className="category">{portfolio.category}</p>
            <p className="title">{portfolio.title}</p>
          </div>
          <div className="sub">
            {/* TODO : 조회수 컴포넌트 추가 */}
            <p className="views">{portfolio.views}</p>
            {/* TODO : 좋아요 컴포넌트 추가 */}
            <p className="likes">{portfolio.likes}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PortfolioCard;
