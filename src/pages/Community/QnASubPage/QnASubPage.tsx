import React, { useState } from "react";
import "./style.css";
import DropdownSelector from "components/DropdownSelector/DropdownSelector";
import SortDropdown from "components/SortDropdown/SortDropdown";
import Badge from "components/Badges/Badge/Badge";
import IconText from "components/IconText/IconText";
import { Pagination } from "@mui/material";
import Icon from "components/Icon/Icon";
import { useNavigate } from "react-router-dom";

function QnASubPage() {
  const jobOptions = ["기획", "디자인"];
  const secondOptions = ["전체", "옵션1", "옵션2"];
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedSecond, setSelectedSecond] = useState("");
  const navigate = useNavigate();

  return (
    <div className="free-topic-container">
      <div className="section">
        <div className="free-topic-header">
          <Icon icon="live_help" className="icon" />
          함께 만들어나가는 포트폴리오
        </div>
        <div className="menus">
          <div className="dropdown-menus">
            <DropdownSelector
              options={jobOptions}
              selectedOption={selectedJob}
              setSelectedOption={setSelectedJob}
            />
            <DropdownSelector
              options={secondOptions}
              selectedOption={selectedSecond}
              setSelectedOption={setSelectedSecond}
            />
          </div>
          <div>
            <SortDropdown />
          </div>
        </div>
      </div>
      <div className="section">
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
                      혼자 준비 한 포트폴리오가 아니다보니, 어떻게 시작을
                      해야할지 또 어떤 내용을 담아야할지 고민이 많이 되더라구요.
                      겨우겨우 완성한 포트폴리오라 많이 미숙하고 부족한데 편하게
                      피드백 해주세요!
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
                    <div className="category">포트폴리오 Q&A</div>
                    <span className="category-text">14분 전 · 신입 </span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      포트폴리오에 비수상작 넣어도 괜찮을까요?
                    </p>
                    <p className="post-content threeLineEllipsis">
                      다른 분들 포트폴리오 보면 수상작 위주로 많이
                      넣으시더라구요.. 그런데 저는 수상을 한 경험이 없어요..
                      그냥 제가 개인적으로 만족하는 프로젝트들은 많은데 그런
                      것들을 넣어도 될까요? 다른 분들 의견은 어떠세요? 편하게
                      말씀해주세요
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/617e/c809/0a6e142091ccc900062b54f75737a4da?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HqTyLJnsZV2RO1Qc9QV-EcC19wLc-oXzl~iAsupEMjNRr0zHe-yIBvfgeuRheMUXJwgPowQXUAKJVX-EB7cOroIDBba~rtN9OG171XxFafD-HGx7di-KiV2XMRj6xcYqo6S3XoFNUfByo4kVeR79fKBVC0UZBqR-UmKT8gU8o9YQzs0D-4E2zjVT2wvukxPiq0tOjryDPbf5WRsBB7J8RYmI0zx-LXxVFUIKRlTrfI6ZBs1OHH0OQTav871p4u2ga-DCeTVXjfgL0IrSg3AwHmWcdQ7-f19YD~qRvdrT54g~Hh-0efx8Lja5Kw3fAtVXGd-aF6-blqhz3UTAaQw5VA__"
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#디자인" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="12" />
                  <IconText icon="comment" text="23" />
                  <IconText icon="visibility" text="24" />
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
                    <div className="category">포트폴리오 Q&A</div>
                    <span className="category-text">23분 전 · 신입</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      포트폴리오 만들기가 처음이라 몇가지 질문이 있습니다
                      도와주세요!
                    </p>
                    <p className="post-content threeLineEllipsis">
                      콘텐츠 디자이너로 취업하고 싶어서 여러 콘텐츠 디자인
                      분야에서 활동을 했는데, 이걸 포트폴리오 분량에 다 담으려고
                      하니 양이 너무 많아지는 것 같아요. 보통 분량을 어느 정도로
                      하시는 지 궁금합니다. 또 전체적으로 레이아웃에 관해서는
                      상관 없는 걸까요?
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/bce1/b75b/4e4a09f4c37ebded30fd96e941fa75c1?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yt4P2qzOQenE5khuFwRqq9OsbEXD3T63X5wEA5N13x-u71VF5vqlysmGUMn-SSvCGlIw6Rq~CRJLDq~-NY9V3B-bLWdc0cHk8wJhdBNUC20TFs9pt2gqje~3MIhR52PBONGCDXNDNGsfFBR-mpyqWr~AJC9LwWJaaByErhkz6qRvfzhKE-T5NQHyI8SmqDulpoMRAk60HPEMts5TO6rdxlTm5YXUyt4OBwMtr2MHtkAWD0eEJyE3HDeWMXpp0WivVvTMJU0drS04kJAA3ent9SG4E0Xgb~a1qieowG7Ey7KnhPe9qPRSPvKEZqHD0Ych~oDQgbG3Os3AlEa1zOTdmg__"
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#디자인" type="normal" />
                  <Badge text="#질문" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="21" />
                  <IconText icon="comment" text="25" />
                  <IconText icon="visibility" text="29" />
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
                    <div className="category">포트폴리오 Q&A</div>
                    <span className="category-text">34분 전 · 신입</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      안녕하세요, 취업을 위한 포트폴리오를 준비하려는
                      취준생입니다.
                    </p>
                    <p className="post-content threeLineEllipsis">
                      콘텐츠 디자이너로 취업을 희망하여 다양한 콘텐츠 디자인
                      분야에서 경험을 쌓았습니다. 그러나 포트폴리오의 분량이
                      지나치게 많아져서 어떤 내용을 선택할지 고민 중입니다.
                      일반적으로 콘텐츠 디자인 포트폴리오의 적절한 분량은 어느
                      정도이며, 레이아웃에 대한 특별한 가이드라인이 있는지
                      궁금합니다.
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/5ffc/0cf5/bb35cf66d6195bab1cd38256ec7344af?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SWxFik6nDEv5pIeqUHeJKobKXmvYFRdXxgpMwMC5QjjD4B9U7O6cHiRSWuVej4kIMl4X5b7tKSKD7xC2ZpLuOErBeE9y3DqX1xJcVk7qKwQRFL4IHj3X~po4r1wuNYvCGcWYarI1bzaUBCpYsbu1HZ3h~uhqmhZOTpW5NfRkp6qdxI14G2kxe8or73YUWQ1GobfRL7Cn9orvZ4R8V3HAGSOhe-X3iLGIxT-ob65~t2OErKBVg1nc11WRjd5b6mSLfkZnKfUUyF0aCncs-x~~77bniz7o8no1HuzebOCFrGfErK88OL4QQKIKTDKaNBID0GebtDpykgtpd1xr6JZdnQ__"
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#디자인" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="28" />
                  <IconText icon="comment" text="31" />
                  <IconText icon="visibility" text="34" />
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
                    <div className="category">포트폴리오 Q&A</div>
                    <span className="category-text">45분 전 · 주니어</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      다들 포폴 웹사이트 어떤 플랫폼으로 만드시나용?????
                    </p>
                    <p className="post-content threeLineEllipsis">
                      디자인 포트폴리오를 처음으로 만드려고 하는데 포트폴리오
                      웹사이트가 되게 많더라구요. 다들 어떤 플랫폼을 쓰시나요?
                      저는 개인적으로 스팩폴리오를 많이 사용하는데, 이게
                      업로드할 땐 좋은데 제작 전용 사이트는 아니라는 생각이
                      들어서요. 주변에서 보면 피그마나 파워포인트 많이
                      사용하던데 ... 디자이너들은 다
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/1a69/979d/063b6f64e0c9406a9f0999a054cde6cb?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fiO01TKvS~fZmNBZ3HSLW4zt8Yy9NgTbhhxFSqTU-nLsFXVEbGqib5hgdzyn~rkPZ4CjSKo~q~HsrWUscFn2KUMvllE4DYLLwbsy6APf4xv3-U9iLyDeotZ-rRk~HWWBKX2kghWv~1ptE7M8DXNqXmvF4uLeGdkSKqC1QQzu90u2pJjc6GivsGOKGWVpww4N~664A7a8r2Bzlg1nT3JUGjIOyjTnug21Gj-nncnZYcPWdCYaDCIvD2vvFx2DDx-~z7SUzZQI9Qo8NUWj0Bb8~xGFqWiUGzh9~iUXB3Lqbj9t4r-mbmUGVFzPRFrSnEbILCxN5Y5el1OLjkyDG~cUtw__"
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#디자인" type="normal" />
                  <Badge text="#플랫폼" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="31" />
                  <IconText icon="comment" text="21" />
                  <IconText icon="visibility" text="43" />
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <Pagination count={5} color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QnASubPage;
