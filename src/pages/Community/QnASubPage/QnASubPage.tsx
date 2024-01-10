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
                    <span className="category-text">15분 전 · 신입</span>
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
                  <div className="post-inner-first flex-row gap-12 mb-12">
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
                  <div className="post-inner-first flex-row gap-12 mb-12">
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
                  <div className="post-inner-first flex-row gap-12 mb-12">
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
                  <div className="post-inner-first flex-row gap-12 mb-12">
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
    </div>
  );
}

export default QnASubPage;
