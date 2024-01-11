import React, { useState } from "react";
import "./style.css";
import { ReactComponent as FreeSubject } from "assets/icons/home/FreeSubject.svg";
import DropdownSelector from "components/DropdownSelector/DropdownSelector";
import SortDropdown from "components/SortDropdown/SortDropdown";
import Badge from "components/Badges/Badge/Badge";
import IconText from "components/IconText/IconText";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FreeTopicSubPage() {
  const jobOptions = ["기획", "디자인"];
  const secondOptions = ["전체", "옵션1", "옵션2"];
  const [selectedJob, setSelectedJob] = useState("");
  const [selectedSecond, setSelectedSecond] = useState("");
  const navigate = useNavigate();

  return (
    <div className="free-topic-container">
      <div className="section">
        <div className="free-topic-header">
          <FreeSubject />
          디자이너, 기획자들의 자유로운 이야기
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
                <div className="flex-row gap-8">
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
                    <span className="category-text">28분 전 · 시니어</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      이런 커뮤니티 공간 정말 좋은 것 같네요 !
                    </p>
                    <p className="post-content threeLineEllipsis">
                      지금까지는 보통 단톡방, 네이버 카페 등 개인에서 출발하는
                      조직들이 많았기 때문에 커뮤니티마다 입장요건도 다르고,
                      활동 활성화 여부에 따른 베네핏 차별, 그리고 규제도 어떤건
                      너무 꽉 막혀있어서 좀처럼 연결되거나 소통하기 어렵다고
                      느꼈는데, 이렇게 유연하게 많은 사람들이 활동할 수 있는
                      오픈공간이 노트폴리오에 있어서 다행이란 생각이 들어요ㅎ
                      특히나 신입/주니어분들이 자주 찾으시는 곳이란 점에서는
                      이런 커뮤니티 공간이 함께 있는게 자유롭게 조언과 피드백을
                      주고받을 수 있단 점에서도 유용할것 같구요! (박수 짝짝짝
                      칭찬스티커!)
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#토크" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="22" />
                  <IconText icon="comment" text="18" />
                  <IconText icon="visibility" text="72" />
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
                    <span className="category-text">34분 전 · 주니어</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      프리랜서 디자이너 프로젝트 수정 횟수{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      프리랜서 디자이너 분들 혹은 이런 업무 맡아보신 분들
                      궁금합니다ㅠㅠ!! 큰 프로젝트 같은 경우 (키 비쥬얼+인쇄물)
                      수정 몇회 이후 추가 금액이 발생 되는지, 추가 금액은
                      어느정도로 제시하시는지 궁금합니다...!! 주로 외주받는
                      디자인과 달라서 기준을 어떻게 잡아야하는지 궁금합니다ㅠㅠ
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#디자인" type="normal" />
                  <Badge text="#직무변경" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="18" />
                  <IconText icon="comment" text="24" />
                  <IconText icon="visibility" text="65" />
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
                    <span className="category-text">52분 전 · 주니어</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      지방에서 디자인 워크숍 들을 곳 있나요?
                    </p>
                    <p className="post-content threeLineEllipsis">
                      회사를 나오고 프리 혹은 디자인 사업을 목표로 하고있어요.
                      업무때 한 작업들은 포폴에 쓸 결과물이 없고 뒤늦게 돌아보니
                      많이 뒤쳐진것같아 실력을 쌓기위해! 다시 공부를 해보려고
                      합니다! 그런데 지방에 살다보니 서울처럼 워크숍, 세미나
                      등이 없네용.. 서울로 매주 올라가서 수업을 들으려하니
                      이동시 소요되는 시간이 아까워 고민이에요ㅠㅠ 인터넷 강의가
                      더 효율적일까요? 그치만 현장에서 바로받는 피드백과 직접
                      해보는 경험이 중요할듯하여 정말 고민이 많네용..!
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#디자인" type="normal" />
                  <Badge text="#직무변경" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="27" />
                  <IconText icon="comment" text="26" />
                  <IconText icon="visibility" text="72" />
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
                    <span className="category-text">1시간 전 · 주니어</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">디자이너 동료 고민...</p>
                    <p className="post-content threeLineEllipsis">
                      저는 마케팅팀이고 팀내에 디자이너는 저 포함 2명이에요.
                      메인/서브 역할을 굳이 나누자면 제가 메인디자이너구요.
                      찍어내기 식의 업무를 다른 디자이너분이 주로 했어요. 근데
                      제가 최근 포지션 변경이 있으면서 기존 제 업무를 넘기게
                      됐는데 너무 못미더워서 고민이에요 ㅠㅠ 이 분은 컨텐츠나
                      프로모션을 디자인할 때 그냥 디자인 소스 사이트(클립아트
                      같은)에 올라온 포맷을 그대로 사용해요. 소스들을 조합하는
                      것도 아니고 그냥 남이 해놓은 디자인을 그대로 갖다 써요
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#디자인" type="normal" />
                  <Badge text="#직무변경" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="43" />
                  <IconText icon="comment" text="24" />
                  <IconText icon="visibility" text="71" />
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

export default FreeTopicSubPage;
