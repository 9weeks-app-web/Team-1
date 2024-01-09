import PageLayout from "components/layout/PageLayout/PageLayout";
import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import IconText from "components/IconText/IconText";
import Icon from "components/Icon/Icon";
import Chip from "components/Chips/Chip";
import Badge from "components/Badges/Badge/Badge";

function CommunityDetailPage() {
  const params = useParams();
  const keywords = [
    "UI/UX",
    "Figma",
    "멘토링",
    "부트캠프",
    "포트폴리오",
    "Adobe XD",
    "신입",
    "프로젝트 후기",
    "Photoshop",
    "기획",
    "서비스 기획",
    "프로젝트",
    "팀원",
    "커뮤니티",
    "상품 기획",
    "취업",
    "Q&A",
    "부트캠프 후기",
    "게임 기획",
  ];
  console.log(params);
  return (
    <PageLayout>
      <div className="project-detail-page-content">
        <div className="project-detail-inner">
          <div className="category">포트폴리오 Q&A</div>
          <h1 className="project-detail-title">
            세미프로젝트 - 걱정 공유[디자이너 모집]
          </h1>
          <div className="project-detail-section1 justify-between">
            {/* 1번줄 (작성자, 좋아요, 댓글, 조회수) */}
            <div className="flex-row justify-between">
              <div className="flex-row gap-20">
                <span className="flex-row gap-8">
                  <Icon icon="account_circle" />
                  배고픈 오징어
                  <span className="time">15분 전</span>
                </span>
              </div>
              <div className="flex-row gap-8">
                <IconText icon="favorite" text="50" />
                <IconText icon="chat_bubble" text="50" />
                <IconText icon="visibility" text="85" />
              </div>
            </div>

            {/* 2번줄 (진행방식, 모집직군) */}
            <div className="flex-row gap-48">
              <div className="flex-row gap-20">
                <span>
                  <b>진행방식</b>
                </span>
                <div className="flex-row gap-12">
                  <Chip title="디자인" disabled />
                </div>
              </div>
              <div className="flex-row gap-20">
                <span>
                  <b>세부 카테고리</b>
                </span>
                <div className="flex-row gap-12">
                  <Chip title="UI/UX" disabled />
                  <Chip title="서비스 기획" disabled />
                </div>
              </div>
            </div>

            {/* 구분선  */}
            <div className="hr" />
          </div>

          <div className="project-detail-section2">
            <div className="project-detail-introduce">
              <img
                className="image"
                src="https://picsum.photos/850/500"
                alt=""
              />
              <pre className="pre">
                {`안녕하세요 저는 물리학과를 졸업하고 UI/UX에 관심이 생겨서 공부 중이에요! 
물론 취업도 전공 살리지 않고 UI/UX 쪽으로 원하구요! 

포트폴리오라는 건 배운 적도 만들어본 적도 없어서 너무 어렵네요 ㅜㅜ 
그래도 열심히 만들어보고 있어요.... 

이런 비주얼 컨셉으로 만들어 보고 싶은데 뭐부터 해야 할까요? 
그리고, 주제는 어떻게 정하는게 효율적일까요?

능력자분들의 꿀팁이 궁금합니다!!!! 🥹`}
              </pre>
              <div className="flex-row gap-8 badge-group">
                <span className="tag-badge">#개발자</span>
                <span className="tag-badge">#포트폴리오</span>
                <span className="tag-badge">#취업</span>
              </div>
              <div className="circle-button-group">
                <div className="circle-button like">
                  <Icon icon="favorite" />
                  <span>좋아요</span>
                </div>
                <div className="circle-button">
                  <Icon icon="bookmark" />
                  <span>스크랩</span>
                </div>
                <div className="circle-button">
                  <Icon icon="share" />
                  <span>공유</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-section3">
            <div className="project-comment-input-group">
              <input
                className="project-comment-field"
                placeholder="댓글을 입력해주세요"
              />
              <button type="button" className="comment-submit-button">
                댓글 등록
              </button>
            </div>

            <div className="project-comment-header">
              <div className="flex-row gap-12">
                <span>
                  <b>댓글</b>
                </span>
                <span className="comment-cnt">3개</span>
              </div>
            </div>
            <div className="project-comment-list-group">
              <div className="project-comment-list">
                {/* 댓글 하나 */}
                <div className="project-comment flex-row gap-12">
                  <img src="https://picsum.photos/48/48" alt="" />
                  <div className="flex-column gap-8">
                    <p className="flex-row gap-8">
                      <b className="project-comment-writer">김민혁</b>
                      <span className="project-comment-time">• 16시간 전</span>
                    </p>
                    <p>
                      안녕하세요! 이렇게 한 프로젝트 만드는데 얼마나 걸리셨는지
                      궁금합니다.
                    </p>
                    <div className="project-commnet-menu flex-row gap-20">
                      <IconText icon="favorite" text="좋아요 23" />
                      <IconText icon="chat_bubble" text="답글 남기기" />
                    </div>
                  </div>
                </div>

                {/* 댓글 하나 */}
                <div className="project-comment flex-row gap-12">
                  <img src="https://picsum.photos/48/48" alt="" />
                  <div className="flex-column gap-8">
                    <p className="flex-row gap-8">
                      <b className="project-comment-writer">김민혁</b>
                      <span className="project-comment-time">• 16시간 전</span>
                    </p>
                    <p>
                      안녕하세요! 이렇게 한 프로젝트 만드는데 얼마나 걸리셨는지
                      궁금합니다.
                    </p>
                    <div className="project-commnet-menu flex-row gap-20">
                      <IconText icon="favorite" text="좋아요 23" />
                      <IconText icon="chat_bubble" text="답글 남기기" />
                    </div>
                  </div>
                </div>

                {/* 댓글 하나 */}
                <div className="project-comment flex-row gap-12">
                  <img src="https://picsum.photos/48/48" alt="" />
                  <div className="flex-column gap-8">
                    <p className="flex-row gap-8">
                      <b className="project-comment-writer">김민혁</b>
                      <span className="project-comment-time">• 16시간 전</span>
                    </p>
                    <p>
                      안녕하세요! 이렇게 한 프로젝트 만드는데 얼마나 걸리셨는지
                      궁금합니다.
                    </p>
                    <div className="project-commnet-menu flex-row gap-20">
                      <IconText icon="favorite" text="좋아요 23" />
                      <IconText icon="chat_bubble" text="답글 남기기" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 사이드바 */}
        <aside className="project-detail-aside">
          <div className="aside-section">
            <p className="aside-section-title">비슷한 게시글</p>

            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>

            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
          </div>

          <div className="aside-section">
            <p className="aside-section-title">지금 뜨는 게시글</p>

            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>

            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list">
              <p>세미프로젝트 - 걱정 공유 [디자이너 모집]</p>

              <div className="color-gray flex-row justify-between">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
          </div>

          <div className="aside-section">
            <p className="aside-section-title">지금 뜨는 키워드</p>
            <div className="keyword-badge-list">
              {keywords.map((el) => (
                <Badge text={el} type="normal" className="badge" />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </PageLayout>
  );
}

export default CommunityDetailPage;
