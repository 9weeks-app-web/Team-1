import PageLayout from "components/layout/PageLayout/PageLayout";
import React, { KeyboardEvent, useState } from "react";
import ReactQuill from "react-quill";
import AreaTitle from "components/home/AreaTitle/AreaTitle";
import Chip from "components/Chips/Chip";
import Badge from "components/Badges/Badge/Badge";
import "./style.css";
import "react-quill/dist/quill.snow.css";
import Icon from "components/Icon/Icon";
import { useNavigate } from "react-router-dom";

function ProjectUploadPage() {
  const [stack, setStack] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const [portfolioContent, setPortfolioContent] = useState<string>("");
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value) {
      setStack([...stack, value]);
      setValue("");
    }
  };

  const uploadProject = () => {
    setIsDone(true);
  };

  if (!isDone)
    return (
      <PageLayout>
        <div className="project-upload-page-contents">
          <div className="flex-row justify-between header-line">
            <AreaTitle text="프로젝트 게시" />
            <div className="button-group flex-row gap-12">
              <button type="button">임시저장</button>
              <button type="button" className="done" onClick={uploadProject}>
                작성완료
              </button>
            </div>
          </div>
          <div className="section">
            {/* 첫 줄 */}
            <div className="flex-row gap-48">
              <div className="flex-row gap-20">
                <span>
                  <b>진행방식</b>
                </span>
                <div className="flex-row gap-12">
                  <Chip title="온라인" />
                  <Chip title="오프라인" />
                </div>
              </div>
              <div className="flex-row gap-20">
                <span>
                  <b>모집 직군</b>
                </span>
                <div className="flex-row gap-12">
                  <Chip title="기획" />
                  <Chip title="디자인" />
                  <Chip title="iOS" />
                  <Chip title="Android" />
                  <Chip title="Front-end" />
                  <Chip title="Back-end" />
                </div>
              </div>
            </div>

            {/* 둘 째 줄 */}
            <div className="flex-row gap-48">
              <div className="flex-row gap-20">
                <span>
                  <b>기술 스택</b>
                </span>
                <input
                  className="stack-input"
                  placeholder="기술 스택 입력 후 엔터를 눌러주세요"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyUp={onSubmit}
                />
                {stack.map((el) => (
                  <Badge text={el} type="orange" />
                ))}
              </div>
            </div>

            {/* 구분선  */}
            <div className="hr" />

            {/* 4번줄 (진행방식, 모집직군) */}
            <div className="flex-row gap-48">
              <div className="flex-row gap-20">
                <span>
                  <b>모집 인원</b>
                </span>
                <select className="people-select">
                  <option selected disabled>
                    선택
                  </option>
                  <option>1명</option>
                  <option>2명</option>
                  <option>3명</option>
                  <option>4명</option>
                  <option>5명 이상</option>
                </select>
              </div>
              <div className="flex-row gap-20">
                <span>
                  <b>예상 기간</b>
                </span>
                <select className="people-select">
                  <option selected disabled>
                    선택
                  </option>
                  <option>전체</option>
                  <option>기간미정</option>
                  <option>1개월</option>
                  <option>2개월</option>
                  <option>3개월</option>
                  <option>4개월</option>
                  <option>5개월</option>
                  <option>6개월</option>
                  <option>6개월~1년</option>
                  <option>1년 이상</option>
                </select>
              </div>
              <div className="flex-row gap-20">
                <span>
                  <b>모집 마감</b>
                </span>
                <input className="date-input" type="date" />
              </div>
            </div>

            {/* 5번줄 (진행방식, 모집직군) */}
            <div className="flex-row gap-48">
              <div className="flex-row gap-20">
                <span>
                  <b>연락 방법</b>
                </span>
                <div className="flex-row gap-20">
                  <span className="flex-row gap-8">
                    이메일
                    <input
                      className="stack-input"
                      placeholder="이메일을 입력해주세요"
                    />
                  </span>
                  <span className="flex-row gap-8">
                    지원하기
                    <input
                      className="stack-input"
                      placeholder="구글 폼 등 지원링크를 입력해주세요"
                    />
                  </span>
                  <span className="flex-row gap-8">
                    연락방법
                    <input
                      className="stack-input"
                      placeholder="오픈 채팅방 등 링크를 입력해주세요"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 제목란 */}
          <div className="section">
            <p className="title-header">제목</p>
            <input
              placeholder="프로젝트 제목을 입력해주세요"
              className="title-input"
            />
          </div>

          {/* 에디터 */}
          <div className="section">
            <p className="title-header oneLineEllipsis">설명 및 소개</p>
            <div className="editor">
              <div className="editor-introduce">
                <span className="introduce-text">
                  <Icon icon="error_outline" className="blue" />
                  구체적인 설명이 필요하시다면 참고자료나 이미지를 함께 첨부해
                  주세요!
                </span>
              </div>
              <ReactQuill
                className="text-editor"
                theme="snow"
                value={portfolioContent}
                onChange={setPortfolioContent}
                placeholder={`이런 내용을 적으면 좋아요!
- 프로젝트 컨셉
- 달성 목표
- 팀원에게 바라는 역량
- 원하는 팀 분위기`}
              />
            </div>
          </div>
        </div>
      </PageLayout>
    );

  return (
    <PageLayout>
      <div className="success-container">
        <div className="flex-column gap-20">
          <Icon icon="check" className="color-green" />
          <p className="success-head color-green">프로젝트 등록 완료</p>
          <p className="success-text">지금 바로 내 게시글을 확인해보세요!</p>
        </div>
        <button
          type="button"
          className="success-button"
          onClick={() => navigate("/project/1")}
        >
          게시글 확인하기
        </button>
      </div>
    </PageLayout>
  );
}

export default ProjectUploadPage;
