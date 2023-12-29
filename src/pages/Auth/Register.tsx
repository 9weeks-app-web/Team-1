import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import "./style.css";

function Register() {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("이메일을 입력해 주세요.")
      .required("필수 입력입니다."),
    password: Yup.string().required("필수 입력입니다."),
  });

  return (
    <div>
      <div className="container">
        <div>
          <span>회원가입</span>
        </div>
        <div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(a: any) => {
              console.log(a);
            }}
          >
            {({ errors, touched, values }) => (
              <Form className="">
                <div className="form-naming">이름</div>
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
        </div>
      </div>
    </div>
  );
}

export default Register;
