import React from "react";
import "./style.css";
import Switch from "components/Switch";

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
    </div>
  );
}
export default MyPageMyProfile;
