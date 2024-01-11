import PageLayout from "components/layout/PageLayout/PageLayout";
import React from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import IconText from "components/IconText/IconText";
import Icon from "components/Icon/Icon";
import Chip from "components/Chips/Chip";
import Badge from "components/Badges/Badge/Badge";

function ProjectDetailPage() {
  const params = useParams();

  console.log(params);
  return (
    <PageLayout>
      <div className="project-detail-page-content">
        <div className="project-detail-inner">
          <h1 className="project-detail-title">
            세미프로젝트 - 걱정 공유[디자이너 모집]
          </h1>
          <div className="project-detail-section1 justify-between">
            {/* 1번줄 (작성자, 좋아요, 댓글, 조회수) */}
            <div className="flex-row justify-between">
              <div className="flex-row gap-20">
                <span>
                  <b>작성자</b>
                </span>
                <span className="flex-row text-bold">
                  <img
                    className="profile-img"
                    src="https://s3-alpha-sig.figma.com/img/726f/0f5b/bab1da5d63b453d8b153933f0a3e7695?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M1BPZ7E8syGKWL9oSnjSAGDYVhnCf5YDaX~dhpcrjZo6ClEf-Ti0R2V6aCYzFKTp4z1K1tZw8sScfVVERNHBFWdSaDxZA9nSk-KsjV5pw0o~aEfdwkvr12Fkxx-fzbnbGTeYR-wmYTgTVyTNQhN~04oqtgV-c91qTJxkzQcvMroC-4rG6PhfkndjnMULu4yfS9fkKMl87B16LAzDcIdumxW0-GZpyQyagOiUDKyo08rfNKVMPJSfmRnTqd07jaGHrEPiQfCNmtubWhK~~lfjhqD3RKOdGoWhc12K3FND-2kZO-0bfShpoj79ZunivGl-CRs8WxjTsopXbsuPP5l7xQ__"
                    alt=""
                  />
                  김은아
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
                  <Chip title="온라인" disabled />
                  <Chip title="오프라인" disabled />
                </div>
              </div>
              <div className="flex-row gap-20">
                <span>
                  <b>모집 직군</b>
                </span>
                <div className="flex-row gap-12">
                  <Chip title="기획" disabled />
                  <Chip title="디자인" disabled />
                  <Chip title="Front-end" disabled />
                  <Chip title="Back-end" disabled />
                </div>
              </div>
            </div>

            {/* 3번줄 (작성자, 좋아요, 댓글, 조회수) */}
            <div className="flex-row justify-between">
              <div className="flex-row gap-20">
                <span>기술 스택</span>
                <div className="flex-row gap-12">
                  <Badge text="Figma" type="orange" />
                  <Badge text="React" type="orange" />
                  <Badge text="TypeScript" type="orange" />
                  <Badge text="Next.js" type="orange" />
                </div>
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
                <span>4인 ~ 10인</span>
              </div>
              <div className="flex-row gap-20">
                <span>
                  <b>예상 기간</b>
                </span>
                <span>4개월 ~ 6개월</span>
              </div>
              <div className="flex-row gap-20">
                <span>
                  <b>모집 마감</b>
                </span>
                <span>2024.01.12</span>
              </div>
            </div>

            {/* 5번줄 (진행방식, 모집직군) */}
            <div className="flex-row gap-48">
              <div className="flex-row gap-20 align-start">
                <span>
                  <b>연락 방법</b>
                </span>
                <div className="flex-column gap-20">
                  <span>이메일 team01@sniperfactory.com</span>
                  <span>지원하기 https://forms.gle/fASvrj5s2PL3QohPA</span>
                  <span>오픈채팅방 https://open.kakao.com/o/ghgf12gZf</span>
                </div>
              </div>
            </div>
          </div>

          <div className="project-detail-section2">
            <h2>프로젝트 소개</h2>
            <div className="project-detail-introduce">
              <img
                className="image"
                src="https://picsum.photos/850/500"
                alt=""
              />
              <pre className="pre">
                {`안녕하세요 저는 프론트엔드 개발자로 4년째 일하고있습니다.

지금까지의 경력과 사이드 프로젝트를 바탕으로 기획 / PM으로의 경험도 해보고 싶어서 프로젝트를 기획하게 되었구요

계획은 2달 동안 빠르게 세미프로젝트를 통해 기획 - 디자인 - 개발 간 커뮤니케이션과,
개발자 간의 코딩 스타일 및 협업 방식을 조율한 뒤

프론트엔드 , 백엔드, 디자이너 별로 각각 원하는 기술을 고려하여 각자의 니즈를 최대한 반영한 새로운 기획을 하도록 할 예정입니다.
(프론트엔드를 예로들면, 리액트로 클린아키텍처 기반의 프로젝트를 구현하고싶다, Next.js 최신 버전으로 서버컴포넌트를 제대로 사용하여 ssr, ssg등을 구현해보고싶다, 디자인 시스템을 제대로 구축해서 작업해보고싶다 등등)
(백엔드를 예로 들면 aws의 람다, 클라우드워치 등특정 서비스를 이용해보고싶다, 대규모 트래픽처리를 경험해보고싶다, 실시간 소켓 통신을 개발해보고싶다 등)
(디자이너는 잘 모르겠네요....)

저는 PM 겸 기획자로 참여 할 예정이며 현재

디자이너 - 0 /1
프론트엔드 2 / 3
백엔드 2 / 2

모집중에 있습니다.
기술 스택은

디자이너 - Figma
프론트엔드 - React / Next.js / Typescript (조율 가능)
백엔드 - Spring ( DB 조율 가능)

입니다.

프론트엔드 같은 경우 다른 프레임워크를 사용해도 되지만 해당 프레임워크를 사용할 경우 저도 같이 소통하는데 유리함이 있을 것 같아서 임시로 적어놓았습니다.

= 세미 프로젝트 =

2달간 간단하게 작업할 세미프로젝트는 간단한 아이디어에서 시작했습니다.

대부분의 사람들은 누구나 각자의 걱정과 고민거리 힘든일이 있습니다.

슬픔은 나누면 반이되고 기쁨은 나누면 배가 된다는 말이 있습니다.
그런데 사촌이 땅을사면 배가 아프다 라는 속담도 있습니다.

저는 두가지 인간의 기본적인 본성에서 착안해서 걱정을 공유하는 서비스를 생각했습니다.

같이 자격증 시험을 공부하던 친구가 혼자 합격했을 때, 친구의 주식, 코인만 대박이 났을 때
다들 진심으로 축하가 나오셨나요?

혹시 축하하면서도 왠지 모를 이상한 기분이 들면서도 이러면 안된다고 스스로 되뇌이지 않으셨나요?

반면에 연봉협상에서 실패한 친구의 이야기를 들을 때, 여자친구랑 다툰 친구의 이야기를 들을 때
진심으로 위로해주는 마음이 들면서도 동시에 조금의 위안을 삼지 않으시나요?

우리는 우리보다 월등히 높다고 생각하는 사람이나 월등히 낮다고 생각하는 사람의 슬픔이나 아픔에 대해서는 질투가 느껴지지 않지만
우리와 비슷한 수준이라고 생각하는 사람에 대해서는 스스로도 모르게 질투심을 느끼고 비교를 하게 됩니다.

다행히 우리가 쓰레기라서 그런게 아니라 인간의 본성이며 관련된 다양한 논문이나 책도 있습니다.

저러한 감정을 조절하여 좋은 사람이 되려는 노력도 필요하겠지만 본능적인 감정을 이용하면 어떨까요?

기능1)
익명으로 오늘 있었던 안좋은 일이나 힘든 일을 말하며 감정 쓰레기통 역할을 하는 기능과

기능2)
다른 사람들이 힘들게 사는 일화들을 보면서 위안을 얻는 기능

두가지 기능을 고도화해서 간단한 익명 서비스를 만들 계획입니다.

이러한 간단한 세미프로젝트를 거친 뒤 본 프로젝트는 위에서 기재한 바와 같이 각자의 니즈에 맞춰서 정하도록 하겠습니다.

감사합니다.`}
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
            <p className="aside-section-title">핫한 프로젝트 모집 공고</p>

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

          {/* 이번 주 베스트 팀원 */}
          <div className="aside-section">
            <p className="aside-section-title">이번 주 BEST 팀원 🏆</p>

            {/* 베스트 팀원 한장 */}
            <div className="flex-row member-card">
              <span className="ranking-number">1</span>
              <img src="https://picsum.photos/48/48" alt="" />
              <div className="flex-column gap-4">
                <p>🏆 김민지짱짱</p>
                <p>⭐️ 5.0</p>
                <p className="color-gray">UX 리서처 | 미들(4~8년)</p>
              </div>
            </div>
            {/* 베스트 팀원 한장 */}
            <div className="flex-row member-card">
              <span className="ranking-number">2</span>
              <img src="https://picsum.photos/48/48" alt="" />
              <div className="flex-column gap-4">
                <p>🏆 바쁜 다람쥐</p>
                <p>⭐️ 5.0</p>
                <p className="color-gray">UI 디자이너 | 주니어 (1~3년)</p>
              </div>
            </div>
            {/* 베스트 팀원 한장 */}
            <div className="flex-row member-card">
              <span className="ranking-number">3</span>
              <img src="https://picsum.photos/48/48" alt="" />
              <div className="flex-column gap-4">
                <p>🏆 배고픈 오징어</p>
                <p>⭐️ 5.0</p>
                <p className="color-gray">광고 기획자 | 시니어 (9년~)</p>
              </div>
            </div>
            {/* 베스트 팀원 한장 */}
            <div className="flex-row member-card">
              <span className="ranking-number">4</span>
              <img src="https://picsum.photos/48/48" alt="" />
              <div className="flex-column gap-4">
                <p>🏆 오크리스탈</p>
                <p>⭐️ 5.0</p>
                <p className="color-gray">UX 리서처 | 주니어 (1~3년)</p>
              </div>
            </div>
          </div>

          {/* 이번 주 베스트 멘토 */}
          <div className="aside-section">
            <p className="aside-section-title">이번 주 BEST 멘토 🏆</p>

            {/* 베스트 팀원 한장 */}
            <div className="flex-row member-card">
              <span className="ranking-number">1</span>
              <img src="https://picsum.photos/48/48" alt="" />
              <div className="flex-column gap-4">
                <p>🏆 김나영</p>
                <p>⭐️ 5.0</p>
                <p className="color-gray">UX 리서처 | 미들(4~8년)</p>
              </div>
            </div>
            {/* 베스트 팀원 한장 */}
            <div className="flex-row member-card">
              <span className="ranking-number">2</span>
              <img src="https://picsum.photos/48/48" alt="" />
              <div className="flex-column gap-4">
                <p>🏆 고승호</p>
                <p>⭐️ 5.0</p>
                <p className="color-gray">UI 디자이너 | 주니어 (1~3년)</p>
              </div>
            </div>
            {/* 베스트 팀원 한장 */}
            <div className="flex-row member-card">
              <span className="ranking-number">3</span>
              <img src="https://picsum.photos/48/48" alt="" />
              <div className="flex-column gap-4">
                <p>🏆 나준택</p>
                <p>⭐️ 5.0</p>
                <p className="color-gray">UX 리서처 | 시니어 (9년~)</p>
              </div>
            </div>
            {/* 베스트 팀원 한장 */}
            <div className="flex-row member-card">
              <span className="ranking-number">4</span>
              <img src="https://picsum.photos/48/48" alt="" />
              <div className="flex-column gap-4">
                <p>🏆 이경서</p>
                <p>⭐️ 5.0</p>
                <p className="color-gray">UX 리서처 | 주니어 (1~3년)</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </PageLayout>
  );
}

export default ProjectDetailPage;
