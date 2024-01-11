import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./style.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import useUser from "hooks/useUser";
import { ReactComponent as Logo } from "assets/icons/Logo.svg";
import { ReactComponent as Google } from "assets/icons/Google.svg";
import { ReactComponent as Kakao } from "assets/icons/Kakao.svg";
import { ReactComponent as Apple } from "assets/icons/Apple.svg";
import { ReactComponent as Naver } from "assets/icons/Naver.svg";
import { auth, GoogleAuthProvider } from "../../api/fireauthConfig";

function Login() {
  const navi = useNavigate();
  const { refetchUser } = useUser();

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user.email) {
        localStorage.setItem("email", userCredential.user.email);
      }
      if (userCredential.user.displayName) {
        localStorage.setItem("displayName", userCredential.user.displayName);
      }
      refetchUser();
      navi("/");
      return userCredential.user;
    } catch (error) {
      console.error("Login Error", error);
      alert("로그인에 실패하였습니다.");
      return "login error";
    }
  };

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

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("이메일을 입력해 주세요.")
      .required("필수 입력입니다."),
    password: Yup.string().required("필수 입력입니다."),
  });

  const onClickSubmit = (e: any) => {
    console.log(e);
    const result = login(e.email, e.password);
    console.log(result);
  };

  const onClickGoogle = () => {
    signInWithGoogle();
  };

  return (
    <div className="container">
      <div className="auth-title">
        <span className="login-title">
          <Logo />
        </span>
        <span className="resigterGroup">
          <span>아직 회원이 아니신가요?</span>
          <span className="resigterBtn">
            <Link to="/register">회원가입 하기</Link>
          </span>
        </span>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={onClickSubmit}
      >
        {({ errors, touched, values }) => (
          <Form className="">
            <span className="login-field-title">이메일</span>
            <div className="form-div">
              <Field
                type="text"
                name="email"
                className={`form-control form-control-user mb-3" +
              ${errors.email && touched.email ? " is-invalid" : ""}`}
                placeholder="이메일"
              />
            </div>
            <div className="form-div">
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <span className="login-field-title-pwd">비밀번호</span>
            <div className="form-div">
              <Field
                type="password"
                name="password"
                className={`form-control form-control-user mb-3" +
              ${errors.password && touched.password ? " is-invalid" : ""}`}
                placeholder="비밀번호"
              />
            </div>
            <div className="form-div">
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </div>

            <div className="form-div">
              <button
                type="submit"
                disabled={!values.email || !values.password}
                className="form-control form-btn"
              >
                로그인
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="auth-link">
        <span>
          <input type="checkbox" />
          로그인 상태 유지
        </span>
        <div>
          <Link to="/forgot-email">이메일 찾기</Link>
          <span className="forgot-or">|</span>
          <Link to="/forgot-password">비밀번호 찾기</Link>
        </div>
      </div>
      <div className="center sns-text">
        <span className="hrLine">
          <hr />
          다른 방식으로 로그인
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

export default Login;
