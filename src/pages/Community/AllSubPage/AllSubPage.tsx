import React from "react";
import "./style.css";
import Badge from "components/Badges/Badge/Badge";
import IconText from "components/IconText/IconText";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AllSubPage() {
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
  const navigate = useNavigate();

  return (
    <div className="all-container">
      {/* 지금 뜨는 게시글  */}
      <div className="section">
        <div className="area-title">지금 뜨는 게시글</div>
        <div className="now-floating-post-list">
          {/* 게시글 하나 */}
          <div
            className="now-floating-post"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="number">1</div>
            <div className="flex-column gap-8">
              <p className="now-post-title oneLineEllipsis">
                UX 디자인 프로젝트 진행중인 학부생입니다!{" "}
              </p>
              <p className="now-post-content oneLineEllipsis">
                여러분들은 설문조사 인원 어떻게 모집하시나요. 저는 보통...{" "}
              </p>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="now-floating-post"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="number">2</div>
            <div className="flex-column gap-8">
              <p className="now-post-title oneLineEllipsis">
                가이드 텍스트 위치를 어디에 노출하나요?
              </p>
              <p className="now-post-content oneLineEllipsis">
                위치 잡는게 너무 어렵네요. 보통 디자인 하실 때 가이드 텍스트...
              </p>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="now-floating-post"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="number">3</div>
            <div className="flex-column gap-8">
              <p className="now-post-title oneLineEllipsis">
                메세지 읽음 표시, 어떤 방식을 선호하시나요?
              </p>
              <p className="now-post-content oneLineEllipsis">
                보통 두가지로 나뉘는 것 같은데, 타이핑 중 혹은 읽음 표시 중에서
              </p>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="now-floating-post"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="number">4</div>
            <div className="flex-column gap-8">
              <p className="now-post-title oneLineEllipsis">
                디자이너가 갖추어야 할 가장 중요한 역량
              </p>
              <p className="now-post-content oneLineEllipsis">
                여러분들은 디자이너로서의 가장 필요한 역량이 무엇이라고들...
              </p>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="now-floating-post"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="number">5</div>
            <div className="flex-column gap-8">
              <p className="now-post-title oneLineEllipsis">
                피그마는 나쁜 디자이너를 만들고 있다는 생각이 드네요
              </p>
              <p className="now-post-content oneLineEllipsis">
                피그마처럼 편리한 디자인 협업 툴은 창의성을 빼앗는다고들 생...
              </p>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="now-floating-post"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="number">6</div>
            <div className="flex-column gap-8">
              <p className="now-post-title oneLineEllipsis">
                여러분들 상시 채용 자주 지원하시나요?
              </p>
              <p className="now-post-content oneLineEllipsis">
                취업 준비하시거나 이직 준비하실 때 보통 어떤 식으로 지원하시...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 지금 뜨는 키워드  */}
      <div className="section">
        <div className="area-title">지금 뜨는 키워드</div>
        <div className="keyword-badge-list">
          {keywords.map((el) => (
            <Badge text={el} type="normal" className="badge" />
          ))}
        </div>
      </div>

      {/* 전체 게시글 */}
      <div className="section">
        <div className="area-title">전체 게시글</div>
        <div className="all-post-list">
          {/* 게시글 하나 */}
          <div
            className="post-container"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="post-inner">
              <div className="">
                <div className="post-inner-first flex-row gap-12 mb-12">
                  <div className="category">포트폴리오 Q&A</div>
                  <span className="category-text">2분 전 · 신입</span>
                </div>
                <div>
                  <p className="post-title mb-12">
                    비전공자인데 포트폴리오 방향성 잡기 너무 어렵네요...
                  </p>
                  <p className="post-content threeLineEllipsis">
                    원래 프론트엔드 개발자를 준비하다가, 기획 쪽에 관심이 생겨
                    UX로 직무 변경을 다짐했습니다. 첫 포트폴리오이기도 하고,
                    혼자 준비 한 포트폴리오가 아니다보니, 어떻게 시작을 해야할지
                    또 어떤 내용을 담아야할지 고민이 많이 되더라구요. 겨우겨우
                    완성한 포트폴리오라 많이 미숙하고 부족한데 편하게 피드백
                    해주세요!
                  </p>
                </div>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/9a4e/b3f3/285ecf2425a8f8428e86e74a469934df?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nKWuk4OLOJ3MxyLgPi6i2WRylktX0RqAZmKIXuOZCTLDzdx~FJ8nDNOazONTkH2SEHcBG6fgX2GtNfIEYkne-OI6nSscpI~u4tVCFUnwHu4dGAumd2jtug9J50Hxl94jWO449pETzmYusFFPkjTw3CcaFrZHpsZ7rpwem7GKTDjSuWl2OdP8W5xjXZ17llzyAJyOAbcXOe8XeThtvCk9I0ABhKMDii8loAHllEojLa2rhJ0vAUv3Kqt5sHHoIG3KcSKN7YllIXU-KOOd1LfX8YpiQKgWwxDo7tMUJtrCRDu-Cenu6ITeBZhrY-Qbt2cjjCaq-xa-NDb45-rbk0KxeQ__"
                alt=""
              />
            </div>
            <div className="post-bottom">
              <div className="post-bottom-badge flex-row gap-8">
                <Badge text="#디자인" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="2" />
                <IconText icon="comment" text="4" />
                <IconText icon="visibility" text="11" />
              </div>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="post-container"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="post-inner">
              <div className="">
                <div className="post-inner-first flex-row gap-12 mb-12">
                  <div className="category">취업 고민</div>
                  <span className="category-text">5분 전 · 신입</span>
                </div>
                <div>
                  <p className="post-title mb-12">
                    최종 면접 결과 문의 메일 보내도 괜찮을까요?
                  </p>
                  <p className="post-content threeLineEllipsis">
                    면접서류 지원부터 시작해서 최종까지 거의 세 달동안 취업
                    전형을 진행했습니다. 저번 주에 최종 면접을 봤고 면접 때 합불
                    여부는 12월 첫째 주에 알려준다고 했는데 아직도 결과 메일을
                    못 받았네요. 불합격일까요? 오래 준비한만큼 마음이 너무
                    뒤숭숭해서 일이 손에 안잡히네요ㅜㅜ 최종 결과를
                    물어보고싶은데 괜히 물어봤다가 감점 요소가 될까봐 걱정되기도
                    하고 .. 보통 이런 경우에는 어떻게 하시는 편인가요? 그냥
                    기다리시나요..? 빨리 알려주면
                  </p>
                </div>
              </div>
            </div>
            <div className="post-bottom">
              <div className="post-bottom-badge flex-row gap-8">
                <Badge text="#면접" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="3" />
                <IconText icon="comment" text="11" />
                <IconText icon="visibility" text="42" />
              </div>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="post-container"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="post-inner">
              <div className="">
                <div className="post-inner-first flex-row gap-12 mb-12">
                  <div className="category">실무 고민</div>
                  <span className="category-text">8분 전 · 주니어</span>
                </div>
                <div>
                  <p className="post-title mb-12">이직을 고민 중입니다..</p>
                  <p className="post-content threeLineEllipsis">
                    안녕하세요 선배님들 저는 작년에 국비지원으로 ui/ux
                    웹디자인&퍼블리셔 과정을 수강한 비전공자입니다. 지금은
                    쇼핑몰 디자이너로 취업을 해서 3개월정도 다니고 있어요.
                    디자이너로서 근무하고 있기는 하지만 아무래도 간단한 포토샵을
                    다루는 업무이고 포트폴리오 만들기도 애매해서 .. 여기서
                    시간만 떼우기에는 물경력이 될 것 같아서 고민이에요. 학원에서
                    ui/ux에 대해서 배우긴했지만 정확하게 회사에서는 어떤
                    업무들을 담당하고 하는지 잘 파악이 안돼서 이쪽으로
                    가야하고자하는 확신은 안서지만 전망을 생각했을땐 지금 쇼핑몰
                    디자인보다는 좋을 것 같아서 이직을 고민중입니다..,
                  </p>
                </div>
              </div>
            </div>
            <div className="post-bottom">
              <div className="post-bottom-badge flex-row gap-8">
                <Badge text="#마감일" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="22" />
                <IconText icon="comment" text="12" />
                <IconText icon="visibility" text="55" />
              </div>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="post-container"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="post-inner">
              <div className="">
                <div className="post-inner-first flex-row gap-12 mb-12">
                  <div className="category">프로젝트 후기</div>
                  <span className="category-text">12분 전 · 신입</span>
                </div>
                <div>
                  <p className="post-title mb-12">UI/UX 인턴형 프로그램 후기</p>
                  <p className="post-content threeLineEllipsis">
                    인턴 경험만을 위해서 가볍게 신청한 프로그램이었습니다. 막상
                    진행해보니 생각보다 더 철저한 수업과 각자 다른 분야의 경험을
                    가진 사람들이 새로움 꿈을 향해서 다양한 의견들을 자유롭게
                    주고 받을 수 있는 분위기가 너무 좋았습니다. 다들 불편하지
                    않게 모든 의견을 다 들어주시고 그에 맞는 피드백을 주고
                    받으며, 프로젝트를 성공적으로 이끌기 위해 노력하는 모습이
                    힘이 많이 된 것 같습니다. 처음이라서 많이 떨리기도 했는데
                  </p>
                </div>
              </div>
              <img
                src="https://s3-alpha-sig.figma.com/img/b7c3/f3a3/eb653a5f5672558395127d56f5ad6019?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HP2hsBy83Px8syeG4M0y6430IepqKg6CkxXt4HeZYSg0Pqy1Dfn-nmIX6ANwxBTvH~nesk~F3I8olg9Z8gHaiI-MKCxMVvJydF-eYZwSyzUyaen1PDX7jK4aKdg5J-NmPfNcnr~Qowsa9oaul4tSsKkt26G7gzYiJBf25MyOKLAlmjcVD~e~duBrSZ6LxJfeWvRpKv7RUKt9z97vuI4Txq1OHoFnaC5RDnxfVuFbatZIN3evsmgp7GUq7zVRtJgZN11UTg2gH9anxjsxjyF5rCousX8VAJAJIXCcONCs4AJdnDQ84pMfa91-FtjTObeGAlrLI4MwSQxQ5wCW13CKew__"
                alt=""
              />
            </div>
            <div className="post-bottom">
              <div className="post-bottom-badge flex-row gap-8">
                <Badge text="#디자인" type="normal" />
                <Badge text="#직무변경" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="0" />
                <IconText icon="comment" text="0" />
                <IconText icon="visibility" text="0" />
              </div>
            </div>
          </div>

          {/* 게시글 하나 */}
          <div
            className="post-container"
            role="presentation"
            onClick={() => navigate("/community/1")}
          >
            <div className="post-inner">
              <div className="">
                <div className="post-inner-first flex-row gap-12 mb-12">
                  <div className="category">자유 주제</div>
                  <span className="category-text">16분 전 · 주니어</span>
                </div>
                <div>
                  <p className="post-title mb-12">
                    여러분 디자인 레퍼런스 어디서 찾아보시나요?
                  </p>
                  <p className="post-content threeLineEllipsis">
                    디자인으로 직무 변경 후 독학하려고 레퍼런스 찾아보는데
                    실무진 혹은 공부하시는 분들이 많이 찾아보는 레퍼런스
                    사이트를 찾기 어렵네요 ㅜㅜ 광고도 많고.. 대부분 외국
                    레퍼런스이기도 하고 ... 보통 어디서 많이 찾아보세요? 저는
                    핀터레스트나 드리블을 많이 보는데, 주변 보면 비헨스도 많이
                    보는 것 같더라구요. 포트폴리오 말고 디자인 자체 레퍼런스는
                    다들 어디서 많이 보시는지 공유 부탁드려요!
                  </p>
                </div>
              </div>
            </div>
            <div className="post-bottom">
              <div className="post-bottom-badge flex-row gap-8">
                <Badge text="#디자인" type="normal" />
                <Badge text="#레퍼런스" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="13" />
                <IconText icon="comment" text="11" />
                <IconText icon="visibility" text="64" />
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </div>
  );
}

export default AllSubPage;
