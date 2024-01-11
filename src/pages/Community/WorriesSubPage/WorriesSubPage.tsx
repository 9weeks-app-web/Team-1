import React, { useState } from "react";
import "./style.css";
import DropdownSelector from "components/DropdownSelector/DropdownSelector";
import SortDropdown from "components/SortDropdown/SortDropdown";
import Badge from "components/Badges/Badge/Badge";
import IconText from "components/IconText/IconText";
import { Pagination } from "@mui/material";
import { ReactComponent as SuitCase } from "assets/icons/home/SuitCase.svg";
import { useNavigate } from "react-router-dom";

function WorriesSubPage() {
  const jobOptions = ["기획", "디자인"];
  const secondOptions = ["전체", "옵션1", "옵션2"];
  const [selectedJob, setSelectedJob] = useState("");
  const navigate = useNavigate();
  const [selectedSecond, setSelectedSecond] = useState("");

  return (
    <div className="free-topic-container">
      <div className="section">
        <div className="free-topic-header">
          <SuitCase />
          취업부터 실무 고민까지 함께 해소하기
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
                    <div className="category">취업 고민</div>
                    <span className="category-text">5분 전 · 신입</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      최종 면접 결과 문의 메일 보내도 괜찮을까요?{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      면접서류 지원부터 시작해서 최종까지 거의 세 달동안 취업
                      전형을 진행했습니다. 저번 주에 최종 면접을 봤고 면접 때
                      합불 여부는 12월 첫째 주에 알려준다고 했는데 아직도 결과
                      메일을 못 받았네요. 불합격일까요? 오래 준비한만큼 마음이
                      너무 뒤숭숭해서 일이 손에 안잡히네요ㅜㅜ 최종 결과를
                      물어보고싶은데 괜히 물어봤다가 감점 요소가 될까봐
                      걱정되기도 하고 .. 보통 이런 경우에는 어떻게 하시는
                      편인가요? 그냥 기다리시나요..? 빨리 알려주면
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
                    <div className="category">취업 고민</div>
                    <span className="category-text">8분 전 · 주니어</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">이직을 고민중입니다 </p>
                    <p className="post-content threeLineEllipsis">
                      안녕하세요 선배님들 저는 작년에 국비지원으로 ui/ux
                      웹디자인&퍼블리셔 과정을 수강한 비전공자입니다. 지금은
                      쇼핑몰 디자이너로 취업을 해서 3개월정도 다니고 있어요.
                      디자이너로서 근무하고 있기는 하지만 아무래도 간단한
                      포토샵을 다루는 업무이고 포트폴리오 만들기도 애매해서 ..
                      여기서 시간만 떼우기에는 물경력이 될 것 같아서 고민이에요.
                      학원에서 ui/ux에 대해서 배우긴했지만 정확하게 회사에서는
                      어떤 업무들을 담당하고 하는지 잘 파악이 안돼서 이쪽으로
                      가야하고자하는 확신은 안서지만 전망을 생각했을땐 지금
                      쇼핑몰 디자인보다는 좋을 것 같아서 이직을 고민중입니다..,
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#이직" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="22" />
                  <IconText icon="comment" text="11" />
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
                    <div className="category">취업 고민</div>
                    <span className="category-text">34분 전 · 미들</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      경력이 있지만 들어가고싶은 회사가 인턴밖에 안뽑네요...{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      콘텐츠, 브랜드 디자인, 영상디자인 등 다양한 시각 디자인
                      분야에서 커리어를 쌓았는데요. 한 6년정도 요즘 눈 여겨 보는
                      성장가능성이 있어보이는 회사에 취업하고싶은데 저번에도
                      이번에도 인턴밖에 뽑지를 않네요. 이런 회사는 그냥 피하는게
                      나을까요...? 회사에서 뽑아주기는 할까요..? 다양한
                      분야에서쌓은 커리어를 포기하고 인턴으로 들어가는 건
                      비추인가요? 6년동안 눈여겨 본 회사라서 쉽게 포기가
                      안되네요.. 뭐 당연히 붙는다는 보장은 없지만 너무 고민이
                      됩니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#경력직" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="28" />
                  <IconText icon="comment" text="43" />
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
                    <div className="category">취업 고민</div>
                    <span className="category-text">47분 전 · 신입</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      웹디자인으로 취직 할 수 있는 실력 되기까지 최단 기간이
                      얼마정도일까요?{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      학교를 다니고 있는데 너무 멀어요.. 왕복 4시간 거리입니다..
                      몸이 힘들다보니 마음도 힘들고 지치네요.. 4년째 해도
                      익숙해지지 않는 거리.. 빨리 취업하고 싶어요 그러면 몸이 좀
                      편해질것같아요.. 웹디자인 시작한지 한달 남짓 됬는데..취직
                      할 수 있는 실력의 최단기간은 몇개월이라고
                      생각하시나요?ㅠㅠ 물론 실력 오르는 속도는
                      사람바이사람이겠지만.. 그래도 최단기간 예상 개월수
                      알고있으면 조금 더 동기부여 되고 열심히 공부 할 수 있을 것
                      같아서요ㅠㅠ
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#취업" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="23" />
                  <IconText icon="comment" text="52" />
                  <IconText icon="visibility" text="68" />
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
                    <span className="category-text">56분 전 · 주니어</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      2년차 서비스 기획자인데 .. 잡일을 맡고 있어요 ...{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      이제 만 2년차 경력인데요.. 현재 다니고 있는 회사에서는
                      사업 기획 + 서비스기획 + 운영업무 + 마케팅 업무 + 잡다한
                      일을 합니다. 그냥 말 그대로 잡을 모두 다 해요. 직원이 적은
                      것도 아닌데 제가 막내다보니 잡일 거리를 하나씩 받다보니
                      결국에는 제가 다 맡게 되었습니다.. 잔 일처리하는 것도
                      힘든데 ㅜㅜ 아침에 눈 뜨는 게 너무 스트레스에요.. 조금 더
                      규모 있는 기업의 ux 기획으로 가서 성장하고 싶은데 포폴은
                      성에 안차고.. 넘 초라해보이구 걱정입니다 휴휴
                    </p>
                  </div>
                </div>
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#기획" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="34" />
                  <IconText icon="comment" text="46" />
                  <IconText icon="visibility" text="72" />
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

export default WorriesSubPage;
