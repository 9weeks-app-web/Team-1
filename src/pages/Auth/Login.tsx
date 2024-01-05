import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "./style.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, GoogleAuthProvider } from "../../api/fireauthConfig";

function Login() {
  const navi = useNavigate();

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
        <span className="login-title">로그인</span>
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
            <span className="login-field-title-pwd">비밀번호</span>
            <div className="form-div">
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </div>
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
        <span>
          <Link to="/forgot-email">이메일 찾기</Link>
          <span className="forgot-or">|</span>
          <Link to="/forgot-password">비밀번호 찾기</Link>
        </span>
      </div>
      <div className="center sns-text">
        <span className="hrLine">
          <hr />
          또는
          <hr />
        </span>
      </div>
      <div className="center sns-btn-div">
        <button type="button" className="sns-btn-kakao">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="28"
            viewBox="0 0 30 28"
            fill="none"
          >
            <path
              d="M15.0836 0.333984C7.02672 0.333984 0.480469 5.62982 0.480469 12.1215C0.480469 16.2215 3.16611 19.809 7.02672 22.0298L6.01961 27.6673L12.2302 23.5673C13.0694 23.7382 14.0765 23.7382 14.9158 23.7382C22.9727 23.7382 29.519 18.4423 29.519 11.9507C29.6868 5.62982 23.1406 0.333984 15.0836 0.333984Z"
              fill="black"
            />
          </svg>
        </button>
        <button
          type="button"
          className="sns-btn-google"
          onClick={onClickGoogle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M35.1126 18.1113H20.8873V24.0067H29.0737C28.3117 27.7531 25.1223 29.9056 20.8873 29.9056C19.7023 29.9076 18.5286 29.6757 17.4334 29.2231C16.3382 28.7705 15.3432 28.1061 14.5053 27.2681C13.6675 26.4301 13.0033 25.4349 12.5509 24.3397C12.0985 23.2444 11.8668 22.0706 11.869 20.8856C11.867 19.7007 12.0989 18.5271 12.5514 17.4321C13.0039 16.337 13.6681 15.342 14.5059 14.5042C15.3437 13.6664 16.3387 13.0022 17.4338 12.5497C18.5288 12.0972 19.7025 11.8653 20.8873 11.8673C23.0381 11.8673 24.9822 12.6309 26.5077 13.8797L30.9494 9.43977C28.2434 7.08057 24.7738 5.62507 20.8873 5.62507C18.8814 5.6192 16.8941 6.00997 15.0398 6.77489C13.1854 7.53982 11.5006 8.6638 10.0822 10.0822C8.66381 11.5006 7.53982 13.1854 6.7749 15.0398C6.00997 16.8941 5.61921 18.8814 5.62507 20.8873C5.61898 22.8933 6.00959 24.8807 6.77444 26.7351C7.53928 28.5896 8.66325 30.2745 10.0817 31.6929C11.5001 33.1114 13.1851 34.2354 15.0395 35.0002C16.894 35.765 18.8813 36.1557 20.8873 36.1496C28.5184 36.1496 35.4577 30.5992 35.4577 20.8873C35.4577 19.9853 35.3193 19.0133 35.1126 18.1113Z"
              fill="white"
            />
          </svg>
        </button>
        <button type="button" className="sns-btn-naver">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="28"
            viewBox="0 0 32 28"
            fill="none"
          >
            <path
              d="M20.8866 0.333984V14.2323L11.1134 0.333984H0.625V27.6673H11.1134V14.0007L20.8866 27.6673H31.375V0.333984H20.8866Z"
              fill="white"
            />
          </svg>
        </button>
        <button type="button" className="sns-btn-apple">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M34.0939 29.211C33.621 30.3133 33.0368 31.3644 32.3503 32.3481C31.4333 33.6579 30.6802 34.563 30.1029 35.0668C29.2064 35.8899 28.2432 36.3134 27.2135 36.3373C26.4757 36.3373 25.5843 36.1273 24.546 35.7003C23.5043 35.2751 22.5479 35.0668 21.6719 35.0668C20.7548 35.0668 19.7712 35.2751 18.7175 35.7003C17.6655 36.1273 16.8151 36.351 16.1644 36.3715C15.1791 36.4142 14.1937 35.9804 13.2118 35.0668C12.585 34.5203 11.8012 33.581 10.8602 32.2524C9.85265 30.8367 9.02439 29.1888 8.37546 27.3154C7.68041 25.2883 7.33203 23.3278 7.33203 21.4288C7.33203 19.2549 7.80166 17.3781 8.74262 15.807C9.45431 14.5731 10.4718 13.5433 11.697 12.8167C12.9052 12.0921 14.2844 11.7019 15.6931 11.6862C16.4787 11.6862 17.5084 11.9287 18.7841 12.4069C20.0598 12.885 20.8795 13.1275 21.2364 13.1275C21.5062 13.1275 22.413 12.8423 23.9568 12.2771C25.4135 11.7528 26.6431 11.5359 27.6506 11.6213C30.383 11.8416 32.434 12.9175 33.7985 14.8575C31.3564 16.3381 30.1491 18.4095 30.173 21.0685C30.1935 23.14 30.9466 24.8631 32.422 26.231C33.0744 26.8552 33.8355 27.3547 34.6677 27.7047C34.4867 28.229 34.2954 28.7294 34.0939 29.211ZM27.8317 4.56666C27.8317 6.18901 27.2374 7.70548 26.0573 9.10752C24.6297 10.7743 22.9048 11.7391 21.0349 11.5872C21.0104 11.3831 20.9984 11.1778 20.999 10.9724C20.999 9.41321 21.6753 7.74646 22.8826 6.38198C23.4838 5.69206 24.2488 5.11655 25.1761 4.65888C26.1017 4.20804 26.9761 3.95871 27.7992 3.91602C27.8214 4.13461 27.8317 4.35149 27.8317 4.56666Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <span className="resigterGroup">
        <span>아직 회원이 아니신가요?</span>
        <span className="resigterBtn">
          <Link to="/register">회원가입 하기</Link>
        </span>
      </span>
    </div>
  );
}

export default Login;
