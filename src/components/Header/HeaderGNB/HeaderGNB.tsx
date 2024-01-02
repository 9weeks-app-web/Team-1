import React from "react";
import { ReactComponent as SfacLogo } from "assets/img/SfacLogo.svg";
import "./style.css";
import { useNavigate, NavLink } from "react-router-dom";
import IconButton from "components/IconButton/IconButton";
import SearchBar from "components/Header/HeaderSearchBar/HeaderSearchBar";

function HeaderGNB() {
  const navigate = useNavigate();

  return (
    <div className="header-gnb-container">
      <div className="left">
        <SfacLogo onClick={() => navigate("/")} />
        <ul>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              포트폴리오
            </NavLink>
          </li>
          <li>
            <NavLink to="/community">커뮤니티</NavLink>
          </li>
          <li>
            <NavLink to="/project">프로젝트</NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <SearchBar />
        <IconButton icon="notifications" onClick={() => alert("ㅎㅇ")} />
        <IconButton icon="forum" onClick={() => navigate("/chat")} />
        {/* TODO : 로그인 여부에 따라 다른 컴포넌트 렌더링 */}
        <IconButton icon="account_circle" onClick={() => navigate("/mypage")} />
      </div>
    </div>
  );
}

export default HeaderGNB;
