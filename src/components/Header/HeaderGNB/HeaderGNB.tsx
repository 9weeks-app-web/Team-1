import React from "react";
import Avatar from "@mui/material/Avatar";
import { ReactComponent as SfacLogo } from "assets/img/SfacLogo.svg";
import "./style.css";
import { useNavigate, NavLink, Link } from "react-router-dom";
import IconButton from "components/IconButton/IconButton";
import SearchBar from "components/Header/HeaderSearchBar/HeaderSearchBar";
import randomColorHax from "utils/getRandomColorHax";
import useUser from "hooks/useUser";

function HeaderGNB() {
  const navigate = useNavigate();
  const { user } = useUser();

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
          <li>
            <NavLink to="/recruit">팀원·멘토</NavLink>
          </li>
        </ul>
      </div>
      <div className="right">
        <SearchBar />
        <IconButton icon="notifications" onClick={() => alert("ㅎㅇ")} />
        <IconButton icon="forum" onClick={() => alert("ㅎㅇ")} />
        {/* TODO : 로그인 여부에 따라 다른 컴포넌트 렌더링 */}
        {user ? (
          <Avatar alt="displayName" sx={{ bgcolor: randomColorHax() }}>
            <Link to="/mypage" style={{ color: "white" }}>
              {user.displayName.slice(0, 1)}
            </Link>
          </Avatar>
        ) : (
          <IconButton
            icon="account_circle"
            onClick={() => navigate("/login")}
          />
        )}
      </div>
    </div>
  );
}

export default HeaderGNB;
