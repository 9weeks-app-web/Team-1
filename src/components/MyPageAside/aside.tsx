import React from "react";
import "./style.css";

// type AsideProps = {
//   onMenuChange: (menu: string) => void;
// };

function MyPageAside() {
  return (
    <aside className="mypageAside">
      <div className="myProfileSec">
        <div className="myProfilePicture" />
        <strong className="myProfileName">류현수</strong>
        <div className="myProfilePositions">
          <span>UX designer | 신입</span>
        </div>
        <div className="profileFollowBtn">
          <a href="/">
            <strong>20</strong> 좋아요
          </a>
          <a href="/">
            <strong>73</strong> 팔로워
          </a>
          <a href="/">
            <strong>51 </strong> 팔로잉
          </a>
        </div>
        <div className="profileSetBtn">
          <button type="button" className="myprofileSetBtn">
            내 프로필 설정
          </button>
          <button type="button" className="accountSetBtn">
            계정 설정
          </button>
        </div>
      </div>
      {/* <div className="MyProfileAsideList">
        <ul>
          <li onClick={() => onMenuChange("myPageMyProfile")}>
            마이 스팩폴리오
          </li>
          <li onClick={() => onMenuChange("myPageMyProject")}>프로젝트</li>
          <li onClick={() => onMenuChange("myPageMyPost")}>내 활동</li>
          <li onClick={() => onMenuChange("myPageMyLike")}>관심</li>
        </ul>
      </div> */}
    </aside>
  );
}

export default MyPageAside;
