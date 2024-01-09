import React from "react";
import { IPortfolioSummary } from "types/portfolio";
// import Badge from "components/Badges/Badge/Badge";
import Icon from "components/Icon/Icon";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import "./style.css";

interface IPortfolioCardProps {
  portfolio: IPortfolioSummary;
}

function MyPagePFCard(props: IPortfolioCardProps) {
  const { portfolio } = props;
  const navigate = useNavigate();

  return (
    <Card width="m">
      <div
        role="presentation"
        className="mypagePfContainer"
        onClick={() => navigate(`/portfolio/${portfolio.id}`)}
      >
        {portfolio.isVerified && <Icon className="verified" icon="verified" />}

        {/* 카드 내용 */}
        <img className="PFthumbnail" src={portfolio.thumbnail ?? ""} alt="" />
      </div>
    </Card>
  );
}

export default MyPagePFCard;
