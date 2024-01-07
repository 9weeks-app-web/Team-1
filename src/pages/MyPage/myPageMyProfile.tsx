import React from "react";
import "./style.css";
import Switch from "components/Switch";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import { DUMMY_PORTFOLIO_SUMMARY } from "constants/dummy";

function MyPageMyProfile() {
  return (
    <div>
      <h4 className="myProfileTitle">프로필 소개</h4>
      <div className="myProfileinfo">
        <Switch />
        <div className="myProfileInfoTitle">소개 제목을 입력해 주세요.</div>
        <div className="myProfileInfoText">본인을 자유롭게 소개해주세요.</div>

        <button type="button" className="myPfModifyBtn">
          수정하기
        </button>
      </div>
      <div className="mySfacpolio">
        <h4 className="myProfileTitle">스팩폴리오</h4>

        <div className="portfolio-progress">
          {DUMMY_PORTFOLIO_SUMMARY.map((el) => (
            <PortfolioCard key={el.id} portfolio={el} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default MyPageMyProfile;
