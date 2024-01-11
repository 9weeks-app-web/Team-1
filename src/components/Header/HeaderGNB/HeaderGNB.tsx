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
        {user ? (
          <>
            <IconButton
              icon="notifications"
              onClick={() => navigate("/alarm")}
            />
            <IconButton icon="sms" onClick={() => navigate("/chat")} />
            <Avatar alt="displayName" sx={{ bgcolor: randomColorHax() }}>
              <Link to="/mypage" style={{ color: "white" }}>
                {user.displayName.slice(0, 1)}
              </Link>
            </Avatar>
          </>
        ) : (
          <>
            <button
              type="button"
              className="login-button"
              onClick={() => navigate("/login")}
            >
              로그인
            </button>
            <button
              type="button"
              className="register-button"
              onClick={() => navigate("/register")}
            >
              회원가입
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default HeaderGNB;
