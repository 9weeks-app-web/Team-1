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
  ishyunsu?: boolean;
}

function PortfolioCard(props: IPortfolioCardProps) {
  const { portfolio, ishyunsu } = props;
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
        <div className="thumbnail-container">
          <img className="thumbnail" src={portfolio.thumbnail ?? ""} alt="" />
        </div>
        <div className="card-info">
          <div className="card-first">
            {ishyunsu ? (
              <img
                className="profile-img"
                src="https://media.istockphoto.com/id/1350690621/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EC%8B%9C%EC%95%84-%EB%82%A8%EC%9E%90%EC%9D%98-%EC%B4%88%EC%83%81%ED%99%94.webp?b=1&s=170667a&w=0&k=20&c=mN5kxbjK_8df8di5IN614DQgjBhXnVIcmst0WDY3TAw="
                alt=""
              />
            ) : (
              <img
                className="profile-img"
                src={portfolio.writer.profileImg}
                alt=""
              />
            )}
            <p>{ishyunsu ? "류현수" : portfolio.writer.name}</p>
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
