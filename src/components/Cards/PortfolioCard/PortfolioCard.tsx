import React from "react";
import { IPortfolioSummary } from "types/portfolio";
import IconText from "components/IconText/IconText";
import { convertToKNotation } from "utils/convertToKNotation";
import Badge from "components/Badges/Badge/Badge";
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
        {/* 스팩 인증 아이콘 */}
        {portfolio.isVerified && (
          <span className="material-symbols-outlined verified">verified</span>
        )}

        {/* 카드 내용 */}
        <img className="thumbnail" src={portfolio.thumbnail ?? ""} alt="" />
        <div className="info">
          <div className="main">
            <Badge type="blue" text={portfolio.category} />
            <p className="title">{portfolio.title}</p>
          </div>
          <div className="sub">
            <IconText
              icon="visibility"
              text={convertToKNotation(portfolio.views)}
            />
            <IconText
              icon="favorite"
              text={convertToKNotation(portfolio.likes)}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PortfolioCard;
