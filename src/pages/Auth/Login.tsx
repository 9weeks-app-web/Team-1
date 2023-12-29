import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./style.css";
import fireStore from "api/firestoreConfig";
import { collection, getDocs } from "firebase/firestore";

function Login() {
  //   const fireBaseTest = async () => {
  //     try {
  //       // Firestore에 새 문서 추가
  //       await addDoc(collection(fireStore, "your-collection-name"), {
  //         email: "123@123",
  //         password: "123123",
  //       });
  //       console.log("Document successfully written!");
  //     } catch (error) {
  //       console.error("Error writing document: ", error);
  //     }
  //   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Firestore에서 데이터 가져오기
        const querySnapshot = await getDocs(
          collection(fireStore, "your-collection-name"),
        );
        const dataList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(dataList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
    // fireBaseTest();
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("이메일을 입력해 주세요.")
      .required("필수 입력입니다."),
    password: Yup.string().required("필수 입력입니다."),
  });

  return (
    <div className="container">
      <span className="login-logo">로고</span>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(a: any) => {
          console.log(a);
        }}
      >
        {({ errors, touched, values }) => (
          <Form className="">
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
          아직 회원이 아니신가요? <Link to="/register">회원가입 하기</Link>
        </span>
        <span>
          <Link to="/forgot-email">이메일 찾기</Link>
          <span> | </span>
          <Link to="/forgot-password">비밀번호 찾기</Link>
        </span>
      </div>
      <div className="center sns-text">
        <span>SNS 연동 로그인</span>
      </div>
      <div className="center sns-btn-div">
        <button type="button" className="sns-btn">
          구글
        </button>
        <button type="button" className="sns-btn">
          네이버
        </button>
        <button type="button" className="sns-btn">
          카카오
        </button>
        <button type="button" className="sns-btn">
          애플
        </button>
      </div>
    </div>
  );
}

export default Login;
