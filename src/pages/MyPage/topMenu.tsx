import React, { useState } from "react";
import "./style.css";

type TopMenuProps = {
  onMenuChange: (menu: string) => void;
};
function MyPageTopMenu({ onMenuChange }: TopMenuProps) {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const handleClick = (menu: string) => {
    setSelectedMenu(menu);
    onMenuChange(menu);
  };

  return (
    <div className="topMenuList">
      <ul>
        <li
          className={selectedMenu === "myPageMyProfile" ? "selected" : ""}
          onClick={() => handleClick("myPageMyProfile")}
        >
          스팩폴리오
        </li>
        <li
          className={selectedMenu === "myPageMyProject" ? "selected" : ""}
          onClick={() => handleClick("myPageMyProject")}
        >
          프로젝트
        </li>
        <li
          className={selectedMenu === "myPageMyPost" ? "selected" : ""}
          onClick={() => handleClick("myPageMyPost")}
        >
          내 활동
        </li>
        <li
          className={selectedMenu === "myPageMyLike" ? "selected" : ""}
          onClick={() => handleClick("myPageMyLike")}
        >
          스크랩
        </li>
      </ul>
    </div>
  );
}

export default MyPageTopMenu;
