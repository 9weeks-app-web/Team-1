import React from "react";
import "./style.css";
import { ReactComponent as Logo } from "assets/icons/Logo.svg";
import { ReactComponent as Google } from "assets/icons/Google.svg";
import { ReactComponent as Kakao } from "assets/icons/Kakao.svg";
import { ReactComponent as Apple } from "assets/icons/Apple.svg";
import { ReactComponent as Naver } from "assets/icons/Naver.svg";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useUser from "hooks/useUser";
import { auth } from "api/fireauthConfig";

function RegisterSelect() {
  const navi = useNavigate();
  const { refetchUser } = useUser();

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const { user } = result;
      if (user.email) {
        localStorage.setItem("email", user.email);
      }
      if (user.displayName) {
        localStorage.setItem("displayName", user.displayName);
      }
      refetchUser();
      navi("/");
    } catch (error) {
      console.error("Google Sign In Error", error);
      alert("로그인에 실패하였습니다.");
    }
  };

  const onClickGoogle = () => {
    signInWithGoogle();
  };

  return (
    <div className="container">
      <div className="auth-title">
        <div>
          <span className="login-title">
            <Logo />
          </span>
          <span className="resigterGroup">
            <span>회원이신가요?</span>
            <span className="resigterBtn">
              <Link to="/login">로그인 하기</Link>
            </span>
          </span>
        </div>
        <div className="signup">
          <button
            type="button"
            className="kakao"
            onClick={() =>
              alert(
                "죄송합니다! 현재는 일반 회원가입과 구글 회원가입만 지원합니다.",
              )
            }
          >
            <Kakao />
            카카오로 3초만에 시작하기
          </button>
          <button
            type="button"
            className="email"
            onClick={() => navi("/registerform")}
          >
            이메일로 가입하기
          </button>
        </div>
      </div>
      <div className="center sns-text">
        <span className="hrLine">
          <hr />
          다른 방식으로 가입하기
          <hr />
        </span>
      </div>
      <div className="center sns-btn-div">
        <button type="button" className="sns-btn-kakao">
          <Kakao />
        </button>
        <button
          type="button"
          className="sns-btn-google"
          onClick={onClickGoogle}
        >
          <Google />
        </button>
        <button type="button" className="sns-btn-naver">
          <Naver />
        </button>
        <button type="button" className="sns-btn-apple">
          <Apple />
        </button>
      </div>
    </div>
  );
}

export default RegisterSelect;
