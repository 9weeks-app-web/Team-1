import React from "react";
import { IPortfolioSummary } from "types/portfolio";
import IconText from "components/IconText/IconText";
import { convertToKNotation } from "utils/convertToKNotation";
// import Badge from "components/Badges/Badge/Badge";
import Icon from "components/Icon/Icon";
import "./style.css";
import { useRecoilState } from "recoil";
import { portfolioDetailModalState } from "store/modal";
import Card from "../Card/Card";

interface IPortfolioCardProps {
  portfolio: IPortfolioSummary;
}

function PortfolioCard(props: IPortfolioCardProps) {
  const { portfolio } = props;
  const [, setModal] = useRecoilState(portfolioDetailModalState);

  return (
    <Card width="m">
      <div
        role="presentation"
        className="portfolio-container"
        onClick={() => {
          setModal(true);
        }}
      >
        {/* category 뱃지 */}
        {/* <Badge type="blue" text={portfolio.category} className="category" /> */}

        {/* 스팩 인증 아이콘 */}
        {portfolio.isVerified && <Icon className="verified" icon="verified" />}

        {/* 카드 내용 */}
        <img className="thumbnail" src={portfolio.thumbnail ?? ""} alt="" />
        <div className="card-info">
          <div className="card-first">
            <img
              className="profile-img"
              src={portfolio.writer.profileImg}
              alt=""
            />
            <p>{portfolio.writer.name}</p>
          </div>
          <div className="card-second">
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
