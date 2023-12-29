import React, { useState } from "react";
import "./style.css";
import Aside from "components/MyPageAside/aside";
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
    <div className="mypageAll">
      <div className="mypage">
        <Aside onMenuChange={handleMenuChange} />
        <div className="mypageContainer">
          {selectedMenu === "myPageMyProfile" && <MyPageMyProfile />}
          {selectedMenu === "myPageMyProject" && <MyPageMyProject />}
          {selectedMenu === "myPageMyPost" && <MyPageMyPost />}
          {selectedMenu === "myPageMyLike" && <MyPageMyLike />}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
