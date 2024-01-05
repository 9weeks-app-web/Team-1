import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Chip from "components/Chips/Chip";
import { auth } from "../../api/fireauthConfig";

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
    name: Yup.string().required("필수 입력입니다."),
  });

  const [view, setView] = useState(false);

  const navi = useNavigate();

  const register = async (email: any, password: any, displayName: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(userCredential.user, { displayName });
      navi("/");
      return userCredential.user;
    } catch (error) {
      console.error("Signup Error", error);
      alert("회원가입에 실패하였습니다.");
      return "에러";
    }
  };

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

  const initUser = {
    email: "",
    password: "",
    name: "",
    phone: "",
  };

  const [user, setUser] = useState(initUser);

  const onClickSubmit = (e: any) => {
    console.log("a");
    // const { email, password, name, phone } = e;
    setUser(e);
    setView(true);
    console.log(user);
  };

  const [displayName, setDisplayName] = useState("");

  const onClickRegister = () => {
    console.log(user);
    register(user.email, user.password, displayName);
  };

  const [checkbox8, setCheckbox8] = useState(true);
  const [checkbox9, setCheckbox9] = useState(true);
  const [checkbox10, setCheckbox10] = useState(true);

  return (
    <div>
      <div className="auth-container">
        <div className="container">
          <div className="auth-title">
            <span className="login-title">회원가입</span>
            <span className="login-subtitle">
              지금 스팩폴리오에 가입해서 다양한 혜택을 누리세요.
            </span>
          </div>
          <div className="register-process">
            <span id="baseInfo">1</span>
            <hr />
            <span id="addInfo">2</span>
          </div>
          <table className="center form-table">
            <tbody>
              <tr>
                <td>
                  {!view ? (
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
                      onSubmit={onClickSubmit}
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
                                selectedTelecom === "SKT"
                                  ? "telecom-active"
                                  : ""
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
                                selectedTelecom === "KT" ? "telecom-active" : ""
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
                                selectedTelecom === "LG" ? "telecom-active" : ""
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
                                selectedTelecom === "orther"
                                  ? "telecom-active"
                                  : ""
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
              ${errors.phone && touched.phone ? " is-invalid" : ""}`}
                              placeholder="휴대폰 번호"
                            />
                            <button
                              type="button"
                              className="phone-verify-btn"
                              onClick={() => {
                                console.log("a");
                                setView(true);
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
              ${
                errors.verificationCode && touched.verificationCode
                  ? " is-invalid"
                  : ""
              }`}
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
                          <div className="agree-container">
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
                  ) : (
                    <div className="addInfo-container">
                      <div className="form-div">
                        <div className="addform-naming-nickname">닉네임</div>
                        <input
                          type="text"
                          className="form-control form-control-user mb-3"
                          placeholder="닉네임"
                          onChange={(e: any) => {
                            setDisplayName(e.target.value);
                          }}
                          value={displayName}
                        />
                        <div className="addform-naming">
                          관심 분야 (최대 3개)
                        </div>
                        <div className="form-chips">
                          <Chip title="서비스 기획" onClick={() => {}} />
                          <Chip title="UI/UX" onClick={() => {}} />
                          <Chip title="영상/모션그래픽" onClick={() => {}} />
                          <Chip title="편집 디자인" onClick={() => {}} />
                          <Chip title="타이포그래피" onClick={() => {}} />
                          <Chip title="그래픽 디자인" onClick={() => {}} />
                          <Chip title="모바일 디자인" onClick={() => {}} />
                          <Chip title="패키지 디자인" onClick={() => {}} />
                          <Chip title="3D 디자인" onClick={() => {}} />
                          <Chip title="2D 디자인" onClick={() => {}} />
                          <Chip title="일러스트레이션" onClick={() => {}} />
                          <Chip title="산업 디자인" onClick={() => {}} />
                          <Chip title="캐릭터 디자인" onClick={() => {}} />
                          <Chip title="VMD 디자인" onClick={() => {}} />
                          <Chip title="PM 디자인" onClick={() => {}} />
                          <Chip title="광고 디자인" onClick={() => {}} />
                        </div>
                        <div className="addform-naming">
                          <span className="accept-title">제안 허용</span>
                          <span className="form-naming-sub">
                            {" "}
                            {user.name}님 맞춤 제안을 해드려요!
                          </span>
                        </div>

                        <div
                          className="agree-div"
                          onClick={() => {
                            setCheckbox8(!checkbox8);
                          }}
                          role="button"
                          tabIndex={0}
                        >
                          <div
                            className={
                              checkbox8
                                ? "checkmark-square"
                                : "checkmark-square-active"
                            }
                          />
                          채용 제안
                        </div>
                        <div
                          className="agree-div"
                          onClick={() => {
                            setCheckbox9(!checkbox9);
                          }}
                          role="button"
                          tabIndex={0}
                        >
                          <div
                            className={
                              checkbox9
                                ? "checkmark-square"
                                : "checkmark-square-active"
                            }
                          />
                          의견 제안
                        </div>
                        <div
                          className="agree-div"
                          onClick={() => {
                            setCheckbox10(!checkbox10);
                          }}
                          role="button"
                          tabIndex={0}
                        >
                          <div
                            className={
                              checkbox10
                                ? "checkmark-square"
                                : "checkmark-square-active"
                            }
                          />
                          프로젝트 제안
                        </div>
                        <button
                          type="button"
                          className="form-control form-control-submit mb-3"
                          onClick={onClickRegister}
                        >
                          완료
                        </button>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Register;
