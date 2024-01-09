import React, { useState } from "react";
import "./style.css";
import MyPageAside from "components/MyPageAside/aside";
import MyPageTopMenu from "./topMenu";
import MyPageMyProfile from "./myPageMyProfile";
import MyPageMyProject from "./myPageMyProject";
import MyPageMyPost from "./myPageMyPost";
import MyPageMyLike from "./myPageMyLike";

function MyPage() {
  const [selectedMenu, setSelectedMenu] = useState("myPageMyProfile");

  const handleMenuChange = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="mypageWrapper">
      <div className="mypageAll">
        <div className="mypage">
          <MyPageAside />
          <div className="mypageContainer">
            <div className="mypageView">
              <MyPageTopMenu onMenuChange={handleMenuChange} />
              {selectedMenu === "myPageMyProfile" && <MyPageMyProfile />}
              {selectedMenu === "myPageMyProject" && <MyPageMyProject />}
              {selectedMenu === "myPageMyPost" && <MyPageMyPost />}
              {selectedMenu === "myPageMyLike" && <MyPageMyLike />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
