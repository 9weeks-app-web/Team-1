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
            비전공자인데 포트폴리오 방향성 잡기 너무 어렵네요...
          </h1>
          <div className="project-detail-section1 justify-between">
            {/* 1번줄 (작성자, 좋아요, 댓글, 조회수) */}
            <div className="flex-row justify-between">
              <div className="flex-row gap-20">
                <span className="flex-row gap-8">
                  <Icon icon="account_circle" />
                  배고픈 오징어
                  <span className="time">2분 전</span>
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
                src="https://s3-alpha-sig.figma.com/img/e5af/5aaa/b8f4bcfc085224ec1b16a184ead7877e?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kg5dB20x6oVJ8sl3WBesLeYa9aZeayMdTrpQIM7A3Mm-Vg2QKqoWUfzhlCef~tpQFUA6RSsvor2Hc~MiBPKca2uemgP1WBZN4XDZAVo~dMrkiD5BlpxVbLgfCoDMM2rKx-4Tyq7j0teXzh9DdJEzk-7A4VJaVxi1PfPtLouDI7xR7RfjbigOuB3TFug~FKbqVCU2ExmgIYj-zQmxoWb03uShUIU13af8N2CoxkjKazSyz11QNovecuDZ4r21LvOmwUFL~S3Dmk5h8i5ieLdcFNALrVBo-Lv~1GWq~~jDLJcu7Z~xyI9aL2UMTMlEFOX0uCwKQGNA~aEho13U-JEckQ__"
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
                <span className="tag-badge">#디자인</span>
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
                      <b className="project-comment-writer">디쟌좋아</b>
                      <span className="project-comment-time">• 2시간 전</span>
                    </p>
                    <p>
                      너무 잘 보고 가요! 저는 다른 분들 포트폴리오 많이 참고하는
                      것 같아요.
                    </p>
                    <div className="project-commnet-menu flex-row gap-20">
                      <IconText icon="favorite" text="좋아요 1" />
                      <IconText icon="chat_bubble" text="답글 남기기" />
                    </div>
                  </div>
                </div>

                {/* 댓글 하나 */}
                <div className="project-comment flex-row gap-12">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/9370/e6db/33a75943cc1f1400c54e314c06005f6f?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BGJRUgNGlVZOwSaZsvZrDL1yJorD4VXm-bLxSxNPe7xp5~Vper6eAJb9Ruq8wN3t1tKyeXx0goVzKmNBGsuYSj8YGIqHAE6VI4khL3MXKiVojVmBFJV1HX8XTXsEGD7PFMuK6u3i8ZQhVrC4DQ-VZhkeaKMK2UtLAncsQYjAvT413Kwqph1ODSYYnwD7YOEGQlJryaeC1rkWbgPmd7WExG572maqlQaFhVNdFZ5HxnoSdL-v5-gvx0Ei0CLtvtMXSVGYFrNwnV62uci7adufybGwBWJhIlzBE6IPAWWc8u6sJmZgRB4mHzXiQgYJ1TERs74sW1dTLzhKQyQ7RMt3Jg__"
                    alt=""
                  />
                  <div className="flex-column gap-8">
                    <p className="flex-row gap-8">
                      <b className="project-comment-writer">최지우</b>
                      <span className="project-comment-time">• 6시간 전</span>
                    </p>
                    <p>
                      물리학과요? 완전 디자인 전공생인 줄 알았어요. 대단해요
                    </p>
                    <div className="project-commnet-menu flex-row gap-20">
                      <IconText icon="favorite" text="좋아요 23" />
                      <IconText icon="chat_bubble" text="답글 남기기" />
                    </div>
                  </div>
                </div>

                {/* 댓글 하나 */}
                <div className="project-comment flex-row gap-12">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/6146/83b8/0e26848c5a036028ea7cc53865227c34?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G6x5vgil1OnSLn7fZJSwzGbxhcI-a-QRUKqdXYblPCQ7UVS6tiC4tVAmRJqilTVf6Vf5IrvGPMcCXDB4Ych~Lzwl39fkbwA6h73NymTBXYRxS9ERuuI07yq3xZB1sftFUAOevIhoNUIMshc4g0yb44yHsfVahJzLxoJP2haJTH6RQc1yAfLGVK65Q1R~pJY-t20q~mSEnyBVUMG8sbuKoYagEmbjizPEgtPqXVfq4c0bZyPQY-zFDrTbFNleNMpG0d7PzCIQAwdb7WxqSk5ZV2PWvO-eU-cDzL1j-rsAxE20wjngBDbEZ4soaIXxhOKIfB6GOxrokrKaGw93gTObpw__"
                    alt=""
                  />
                  <div className="flex-column gap-8">
                    <p className="flex-row gap-8">
                      <b className="project-comment-writer">신난 펭귄</b>
                      <span className="project-comment-time">• 3시간 전</span>
                    </p>
                    <p>
                      안녕하세요! 이렇게 한 프로젝트 만드는데 얼마나 걸리셨는지
                      궁금합니다.
                    </p>
                    <div className="project-commnet-menu flex-row gap-20">
                      <IconText icon="favorite" text="좋아요 3" />
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
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>UX 디자인 프로젝트 진행중인 학부생입니다! </p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  아자아자잣
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="51" />
                  <IconText icon="chat_bubble" text="30" />
                </div>
              </div>
            </div>

            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>직무 변경 후 첫 포트폴리오 리뷰 부탁드립니다!</p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  바쁜 다람쥐
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="50" />
                  <IconText icon="chat_bubble" text="50" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>메세지 읽음 표시, 어떤 방식을 선호하시나요? </p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  배고픈 오징어
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="12" />
                  <IconText icon="chat_bubble" text="24" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>디자이너가 갖추어야 할 가장 중요한 역량 </p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  오크리스탈
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="11" />
                  <IconText icon="chat_bubble" text="28" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>여러분들 상시 채용 자주 지원하시나요?</p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  김나영
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="26" />
                  <IconText icon="chat_bubble" text="3" />
                </div>
              </div>
            </div>
          </div>

          <div className="aside-section">
            <p className="aside-section-title">지금 뜨는 게시글</p>

            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>가이드 텍스트 위치를 어디에 노출하나요? </p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  고승호
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="32" />
                  <IconText icon="chat_bubble" text="5" />
                </div>
              </div>
            </div>

            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>이런 커뮤니티 왜 이제야 알았을까요 ㅠㅠ</p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  장화 신은 고양이
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="42" />
                  <IconText icon="chat_bubble" text="34" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>여러분 포트폴리오에 보통 작품 몇 개 넣으시나요?</p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  이경서
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="28" />
                  <IconText icon="chat_bubble" text="28" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>기획자 전향 쉽지 않네요....</p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  곽시탈
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="19" />
                  <IconText icon="chat_bubble" text="18" />
                </div>
              </div>
            </div>
            {/* 프로젝트 모집 한장 */}
            <div className="flex-column gap-8 hot-project-list align-start">
              <p>개발자들과 효율적으로 소통 하는 법 공유 드려요</p>

              <div className="color-gray flex-row justify-between gap-8">
                <span className="flex-row">
                  <Icon icon="account_circle" />
                  화이팅 해야지
                </span>
                <div className="flex-row gap-8">
                  <IconText icon="favorite" text="34" />
                  <IconText icon="chat_bubble" text="42" />
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
