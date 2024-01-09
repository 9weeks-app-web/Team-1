import React from "react";
import "./style.css";
// import Switch from "components/Switch";
import { DUMMY_PORTFOLIO_SUMMARY } from "constants/dummy";
import MyPagePFCard from "components/Cards/MyPagePFCard";

function MyPageMyProfile() {
  return (
    <div>
      {/* <h4 className="myProfileTitle">프로필 소개</h4>
      <div className="myProfileinfo">
        <Switch />
        <div className="myProfileInfoTitle">소개 제목을 입력해 주세요.</div>
        <div className="myProfileInfoText">본인을 자유롭게 소개해주세요.</div>

        <button type="button" className="myPfModifyBtn">
          수정하기
        </button>
      </div>
      <div className="mySfacpolio">
        <h4 className="myProfileTitle">스팩폴리오</h4> */}
      <div className="mypagePfCount">
        전체 <p>3</p>
      </div>
      <div className="portfolio-progress">
        {DUMMY_PORTFOLIO_SUMMARY.map((el) => (
          <MyPagePFCard key={el.id} portfolio={el} />
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}
export default MyPageMyProfile;
