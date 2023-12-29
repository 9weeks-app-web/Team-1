import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "./style.css";

function Register() {
  const [selectedTelecom, setSelectedTelecom] = useState("");
  const [allAgree, setAllAgree] = useState(false);
  const [agreePersonalInfoCollection, setAgreePersonalInfoCollection] =
    useState(false);
  const [agreeUniqueIdentifierProcessing, setAgreeUniqueIdentifierProcessing] =
    useState(false);
  const [agreeTelecomTerms, setAgreeTelecomTerms] = useState(false);
  const [agreeServiceTerms, setAgreeServiceTerms] = useState(false);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("이메일을 입력해 주세요.")
      .required("필수 입력입니다."),
    password: Yup.string().required("필수 입력입니다."),
    rePassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "패스워드가 일치하지 않습니다.",
    ),
  });

  const updateAllAgreeBasedOnDetails = () => {
    if (
      agreePersonalInfoCollection &&
      agreeTelecomTerms &&
      agreeServiceTerms &&
      agreeUniqueIdentifierProcessing
    )
      setAllAgree(true);
    else setAllAgree(false);
  };

  useEffect(() => {
    updateAllAgreeBasedOnDetails();
  }, [
    agreePersonalInfoCollection,
    agreeServiceTerms,
    agreeTelecomTerms,
    agreeUniqueIdentifierProcessing,
  ]);

  return (
    <div>
      <div className="container">
        <div className="center title">
          <span>회원가입</span>
        </div>
        <table className="center form-table">
          <tbody>
            <tr>
              <td>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    rePassword: "",
                    name: "",
                    phone: "",
                    verificationCode: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(a: any) => {
                    console.log(a);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form className="">
                      <div className="form-naming">이름</div>
                      <div className="form-div">
                        <Field
                          type="text"
                          name="name"
                          className={`form-control form-control-user mb-3" +
              ${errors.email && touched.email ? " is-invalid" : ""}`}
                          placeholder="이름"
                        />
                      </div>
                      <div className="form-div">
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-naming">이메일</div>
                      <div className="form-div">
                        <Field
                          type="email"
                          name="email"
                          className={`form-control form-control-user mb-3" +
              ${errors.password && touched.password ? " is-invalid" : ""}`}
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
                      <div className="form-naming">비밀번호</div>
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
                      <div className="form-naming">비밀번호 확인</div>
                      <div className="form-div">
                        <Field
                          type="password"
                          name="rePassword"
                          className={`form-control form-control-user mb-3" +
              ${errors.password && touched.password ? " is-invalid" : ""}`}
                          placeholder="비밀번호 확인"
                        />
                      </div>
                      <div className="form-div">
                        <ErrorMessage
                          name="rePassword"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-naming">휴대폰 인증</div>
                      <div className="telecom-div">
                        <button
                          type="button"
                          className={`telecom-btn  ${
                            selectedTelecom === "SKT" ? "active" : ""
                          }`}
                          onClick={() => {
                            setSelectedTelecom("SKT");
                          }}
                        >
                          SKT
                        </button>
                        <button
                          type="button"
                          className={`telecom-btn  ${
                            selectedTelecom === "KT" ? "active" : ""
                          }`}
                          onClick={() => {
                            setSelectedTelecom("KT");
                          }}
                        >
                          KT
                        </button>
                        <button
                          type="button"
                          className={`telecom-btn  ${
                            selectedTelecom === "LG" ? "active" : ""
                          }`}
                          onClick={() => {
                            setSelectedTelecom("LG");
                          }}
                        >
                          LG U+
                        </button>
                        <button
                          type="button"
                          className={`telecom-btn  ${
                            selectedTelecom === "orther" ? "active" : ""
                          }`}
                          onClick={() => {
                            setSelectedTelecom("orther");
                          }}
                        >
                          알뜰폰
                        </button>
                      </div>
                      <div className="form-div">
                        <Field
                          type="number"
                          name="phone"
                          className={`form-control-phone form-control-user mb-3" +
              ${errors.password && touched.password ? " is-invalid" : ""}`}
                          placeholder="휴대폰 번호"
                        />
                        <button
                          type="button"
                          className="phone-verify-btn"
                          onClick={() => {
                            console.log("a");
                          }}
                        >
                          인증 요청
                        </button>
                      </div>
                      <div className="form-div">
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="form-div">
                        <Field
                          type="text"
                          name="verificationCode"
                          className={`form-control form-control-user mb-3" +
              ${errors.password && touched.password ? " is-invalid" : ""}`}
                          placeholder="인증 번호"
                        />
                      </div>
                      <div className="form-div">
                        <ErrorMessage
                          name="verificationCode"
                          component="div"
                          className="invalid-feedback"
                        />
                      </div>
                      <div className="agree-div">
                        <div
                          role="button"
                          className={
                            allAgree
                              ? "checkmark-circle-active"
                              : "checkmark-circle"
                          }
                          onClick={() => {
                            if (!allAgree) {
                              setAgreePersonalInfoCollection(true);
                              setAgreeUniqueIdentifierProcessing(true);
                              setAgreeServiceTerms(true);
                              setAgreeTelecomTerms(true);
                            } else {
                              setAgreePersonalInfoCollection(false);
                              setAgreeServiceTerms(false);
                              setAgreeTelecomTerms(false);
                              setAgreeUniqueIdentifierProcessing(false);
                            }
                            setAllAgree(!allAgree);
                          }}
                          tabIndex={0} // 키보드 포커스를 위한 tabIndex 추가
                          aria-label="체크마크" // 스크린 리더를 위한 aria-label 추가
                        />
                        <div>본인인증 약관 전체동의 (필수)</div>
                      </div>
                      <div className="agree-div">
                        <div
                          role="button"
                          className={
                            agreePersonalInfoCollection
                              ? "checkmark-circle-active"
                              : "checkmark-circle"
                          }
                          onClick={() => {
                            setAgreePersonalInfoCollection(
                              !agreePersonalInfoCollection,
                            );
                          }}
                          tabIndex={0} // 키보드 포커스를 위한 tabIndex 추가
                          aria-label="체크마크" // 스크린 리더를 위한 aria-label 추가
                        />
                        <div>개인정보 수집 이용 동의</div>
                      </div>
                      <div className="agree-div">
                        <div
                          role="button"
                          className={
                            agreeUniqueIdentifierProcessing
                              ? "checkmark-circle-active"
                              : "checkmark-circle"
                          }
                          onClick={() => {
                            setAgreeUniqueIdentifierProcessing(
                              !agreeUniqueIdentifierProcessing,
                            );
                          }}
                          tabIndex={0} // 키보드 포커스를 위한 tabIndex 추가
                          aria-label="체크마크" // 스크린 리더를 위한 aria-label 추가
                        />
                        <div>고유식별 정보처리 동의</div>
                      </div>
                      <div className="agree-div">
                        <div
                          role="button"
                          className={
                            agreeTelecomTerms
                              ? "checkmark-circle-active"
                              : "checkmark-circle"
                          }
                          onClick={() => {
                            setAgreeTelecomTerms(!agreeTelecomTerms);
                          }}
                          tabIndex={0} // 키보드 포커스를 위한 tabIndex 추가
                          aria-label="체크마크" // 스크린 리더를 위한 aria-label 추가
                        />
                        <div>통신사 이용약관 동의</div>
                      </div>
                      <div className="agree-div">
                        <div
                          role="button"
                          className={
                            agreeServiceTerms
                              ? "checkmark-circle-active"
                              : "checkmark-circle"
                          }
                          onClick={() => {
                            setAgreeServiceTerms(!agreeServiceTerms);
                          }}
                          tabIndex={0} // 키보드 포커스를 위한 tabIndex 추가
                          aria-label="체크마크" // 스크린 리더를 위한 aria-label 추가
                        />
                        <div>서비스 이용약관 동의</div>
                      </div>
                      <div className="form-div">
                        <button
                          type="submit"
                          disabled={!allAgree}
                          className="form-control form-btn"
                        >
                          다음
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Register;
