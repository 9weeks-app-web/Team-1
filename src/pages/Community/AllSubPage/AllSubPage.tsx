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
            <div className="number">3</div>
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
            <div className="number">4</div>
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
            <div className="number">5</div>
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
            <div className="number">6</div>
            <div className="flex-column gap-8">
              <p className="now-post-title oneLineEllipsis">
                UX 디자인 프로젝트 진행중인 학부생입니다!{" "}
              </p>
              <p className="now-post-content oneLineEllipsis">
                여러분들은 설문조사 인원 어떻게 모집하시나요. 저는 보통...{" "}
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
                <div className="flex-row gap-12 mb-12">
                  <div className="category">포트폴리오 Q&A</div>
                  <span className="category-text">15분 전 · 신입</span>
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
              <div className="flex-row gap-8">
                <Badge text="#디자인" type="normal" />
                <Badge text="#직무변경" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="43" />
                <IconText icon="comment" text="33" />
                <IconText icon="visibility" text="81" />
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
                <div className="flex-row gap-12 mb-12">
                  <div className="category">포트폴리오 Q&A</div>
                  <span className="category-text">15분 전 · 신입</span>
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
              <div className="flex-row gap-8">
                <Badge text="#디자인" type="normal" />
                <Badge text="#직무변경" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="43" />
                <IconText icon="comment" text="33" />
                <IconText icon="visibility" text="81" />
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
                <div className="flex-row gap-12 mb-12">
                  <div className="category">포트폴리오 Q&A</div>
                  <span className="category-text">15분 전 · 신입</span>
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
              <div className="flex-row gap-8">
                <Badge text="#디자인" type="normal" />
                <Badge text="#직무변경" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="43" />
                <IconText icon="comment" text="33" />
                <IconText icon="visibility" text="81" />
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
                <div className="flex-row gap-12 mb-12">
                  <div className="category">포트폴리오 Q&A</div>
                  <span className="category-text">15분 전 · 신입</span>
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
              <div className="flex-row gap-8">
                <Badge text="#디자인" type="normal" />
                <Badge text="#직무변경" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="43" />
                <IconText icon="comment" text="33" />
                <IconText icon="visibility" text="81" />
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
                <div className="flex-row gap-12 mb-12">
                  <div className="category">포트폴리오 Q&A</div>
                  <span className="category-text">15분 전 · 신입</span>
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
              <div className="flex-row gap-8">
                <Badge text="#디자인" type="normal" />
                <Badge text="#직무변경" type="normal" />
              </div>
              <div className="flex-row gap-12">
                <IconText icon="favorite" text="43" />
                <IconText icon="comment" text="33" />
                <IconText icon="visibility" text="81" />
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
