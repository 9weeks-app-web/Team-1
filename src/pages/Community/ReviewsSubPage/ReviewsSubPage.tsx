import React, { useState } from "react";
import "./style.css";
import DropdownSelector from "components/DropdownSelector/DropdownSelector";
import SortDropdown from "components/SortDropdown/SortDropdown";
import Badge from "components/Badges/Badge/Badge";
import IconText from "components/IconText/IconText";
import { Pagination } from "@mui/material";
import { ReactComponent as Review } from "assets/icons/home/Review.svg";
import { useNavigate } from "react-router-dom";

function ReviewsSubPage() {
  const jobOptions = ["기획", "디자인"];
  const secondOptions = ["전체", "옵션1", "옵션2"];
  const [selectedJob, setSelectedJob] = useState("");
  const navigate = useNavigate();
  const [selectedSecond, setSelectedSecond] = useState("");

  return (
    <div className="free-topic-container">
      <div className="section">
        <div className="free-topic-header">
          <Review />
          솔직한 참여후기들 모아보기
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
                    <div className="category">프로젝트 후기</div>
                    <span className="category-text">12분 전 · 신입 </span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      UI/UX 인턴형 프로그램 후기{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      인턴 경험만을 위해서 가볍게 신청한 프로그램이었습니다.
                      막상 진행해보니 생각보다 더 철저한 수업과 각자 다른 분야의
                      경험을 가진 사람들이 새로움 꿈을 향해서 다양한 의견들을
                      자유롭게 주고 받을 수 있는 분위기가 너무 좋았습니다. 다들
                      불편하지 않게 모든 의견을 다 들어주시고 그에 맞는 피드백을
                      주고 받으며, 프로젝트를 성공적으로 이끌기 위해 노력하는
                      모습이 힘이 많이 된 것 같습니다. 처음이라서 많이 떨리기도
                      했는데
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/b7c3/f3a3/eb653a5f5672558395127d56f5ad6019?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HP2hsBy83Px8syeG4M0y6430IepqKg6CkxXt4HeZYSg0Pqy1Dfn-nmIX6ANwxBTvH~nesk~F3I8olg9Z8gHaiI-MKCxMVvJydF-eYZwSyzUyaen1PDX7jK4aKdg5J-NmPfNcnr~Qowsa9oaul4tSsKkt26G7gzYiJBf25MyOKLAlmjcVD~e~duBrSZ6LxJfeWvRpKv7RUKt9z97vuI4Txq1OHoFnaC5RDnxfVuFbatZIN3evsmgp7GUq7zVRtJgZN11UTg2gH9anxjsxjyF5rCousX8VAJAJIXCcONCs4AJdnDQ84pMfa91-FtjTObeGAlrLI4MwSQxQ5wCW13CKew__"
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
                    <div className="category">프로젝트 후기</div>
                    <span className="category-text">14분 전 · 신입</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      반려동물 사이드 프로젝트 후기{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      사이드 프로젝트로 어떤 걸 할 지 고민하다가, ‘반려동물’
                      라는 단어에 꽂히게 되어서 참여하게 되었습니다. 사실 IT
                      쪽으로 취업하기를 원해서 고민을 조금 했었는데, 지금 아니면
                      언제 내 관심사에 맞는 프로젝트를 하겠냐는 마음으로
                      진행했습니다. 개발하면서 생각보다 많은 것을 고려해야했기에
                      어려움도 많았어요. 동물들 개개인의 특성을 따로 분류
                      해야했고, 또 배경지식이 없는 상태에서 개발을 한다는 게
                      쉽지는 않더라구요. 그래도 좋은 마음으로 즐겁게
                      작업했습니다. 다른 팀원분들이
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/920d/11d0/a2a2937738456cce0a47908dead656a6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bW6Phj3eatfBa-fUxOXkuqRdNPQpWGKhkGXhXvgL66UAuL-grI3V5RGwzhhfW2a917bWpRZ82Fstr8FQMya9zFhirvY5SV-NkGHJNn8YnyPgJGaBHX~ywFeZmdHRp4wWkiQR6vKx9WKZrBJFLRRn9mWPkHw9pVKU2iYmPs74YJXPyjn9KJk8XHowEi4ejagZnVC9SWx6fGnEhe-guWgYkNt3tmvWO0koXULjAC3OOhPHqgJJYNCJshwHF6N0nfQ1FfaU-4K4LKCQG~CgPy5e3vdq9SsPhDVC9FQ2BjNreXhQuVBmwDxkaU-PI4M6F4JVMIw31g5c3YhgnFUwwRI~oQ__"
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#서비스기획" type="normal" />
                  <Badge text="#프로젝트" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="12" />
                  <IconText icon="comment" text="18" />
                  <IconText icon="visibility" text="18" />
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
                    <div className="category">부트캠프 후기</div>
                    <span className="category-text">29분 전 · 신입 </span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      ‘특수동물 라이프케어 ‘프로젝트 캠프 : IT 서비스 기획’ 후기
                      프로젝트 후기{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      역시 기획이 제일 재밌다라고 느낄 수 있던
                      프로그램이었습니다. 다른 기획자들이랑 협업하면서 시간이
                      지날수록 나 점점 잘하고 있잖아? 하는 생각이 들었어요.
                      기획자의 꿈을 가진지 고작 두 달 밖에 되지 않았는데 이번
                      캠프를 통해서 서비스 기획에 대한 전반적인 과정을 경험할 수
                      있었습니다. 타 직군의 사람들과도 협업할 수 있었으면 좋았을
                      것 같은데 그런 부분에서는 좀 아쉽습니다.
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/920d/11d0/a2a2937738456cce0a47908dead656a6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bW6Phj3eatfBa-fUxOXkuqRdNPQpWGKhkGXhXvgL66UAuL-grI3V5RGwzhhfW2a917bWpRZ82Fstr8FQMya9zFhirvY5SV-NkGHJNn8YnyPgJGaBHX~ywFeZmdHRp4wWkiQR6vKx9WKZrBJFLRRn9mWPkHw9pVKU2iYmPs74YJXPyjn9KJk8XHowEi4ejagZnVC9SWx6fGnEhe-guWgYkNt3tmvWO0koXULjAC3OOhPHqgJJYNCJshwHF6N0nfQ1FfaU-4K4LKCQG~CgPy5e3vdq9SsPhDVC9FQ2BjNreXhQuVBmwDxkaU-PI4M6F4JVMIw31g5c3YhgnFUwwRI~oQ__"
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#IT서비스 기획" type="normal" />
                  <Badge text="#프로젝트" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="12" />
                  <IconText icon="comment" text="18" />
                  <IconText icon="visibility" text="18" />
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
                    <span className="category-text">43분 전 · 신입 </span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      ‘인테리어 안전거래 서비스’ 프로젝트 후기{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      처음 프로젝트 제목을 보고 인테리어를 안전거래한다는 게
                      무엇일까 하는 고민을 했습니다. 기존에 안전거래라는
                      키워드를 가지고 기획하던 디자인이 있어서 접목시켜보면
                      어떨까 하는 생각으로 접근했던 것 같습니다. 프로젝트를
                      제안해주신 팀장님이 전체적으로 팀을 잘 이끌어주신 것
                      같아요. 역시 팀 프로젝트는 협동과 화합이 중요하다는 걸
                      느낄 수 있었습니다.
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/d71d/417a/e29f35b51cdd44907338340e4fa6d566?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gxtAA65thwN~DAcDaTs6qGjmNNVjhWDcZTFUy5RaIUnVVCGk~lq7Qahq3XemyN3vNVwfUnD3fpnSqbJYpt6BfyqtiK7zBfkmZwddgMdL~PE1tdzviU-R6CbP60nKiXcZpyV35C1AiKjMmsxb-gdI74ySouCMobiq7kTXpWB1DSaNRSOrotlUeBgTSA9BGZ-y-3G-pGDyZZFcWH8Pai2haM81KVoE-lrkiY3FHitiQmj0a4g7tCZtlP4LGFptuvhrPnt~~ElVYbDlM-rxzZNg34IwwRmgb5Q17~gU8Q4MalnNz3aCOEGC7pnrXFXw2BB491GMolcKRqU1bmZd7bln~w__"
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#UI/UX" type="normal" />
                  <Badge text="#그래픽디자인" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="24" />
                  <IconText icon="comment" text="21" />
                  <IconText icon="visibility" text="28" />
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
                    <div className="category">부트캠프 후기</div>
                    <span className="category-text">15분 전 · 신입</span>
                  </div>
                  <div>
                    <p className="post-title mb-12">
                      유데미 큐레이션 개선 프로젝트 후기{" "}
                    </p>
                    <p className="post-content threeLineEllipsis">
                      처음에 직무를 변경하고 싶어서 고민하던 중 이 프로그램을
                      알게되었습니다. 비전공자로서 프로그램을 수강하는 거에 대한
                      걱정이 많았지만 용기를 한 번 냈습니다. 결론을 먼저
                      말씀드리자면 너무 유익한 프로그램이라고 생각합니다.
                      비전공자인 저에게도 너무 쉽게 이해가 되도록 기초부터
                      하나하나 알려주신
                    </p>
                  </div>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/c2c2/2e04/be7d4baa7c7431644d782702b96f0075?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q68y85FLrI3zTA1oksm2mOPAuUq4bJ~S3Ff5nq3fH-0fwLLnwK0eh~cO9QASlJ3wnfyi5jQHl6zi8tan83fFJkWsvleComcltfv6V-1FlPYpcxMFFrzxb2jQin~dAr6k7HTzYApBWvAS50X-ulDBDbbb~8FGMaUrNK7WUVW4PapB1MOjYkfVMKUws1p~d63XcgUAI08jfTk4vING2nn51ySyxq-GxADB~H6vCUPCFW9X8C2B81nGOHEPHqbJGBMoBY9tNIcf8SCnFPvR-qo9LwKz-B5w7ksJwNI-XMJzkb7rIkDdLKa4KcORkSUcBUDGVeYx0GMRIKVyiBtGVLgmBw__"
                  alt=""
                />
              </div>
              <div className="post-bottom">
                <div className="flex-row gap-8">
                  <Badge text="#UIUX" type="normal" />
                  <Badge text="#그래픽디자인" type="normal" />
                </div>
                <div className="flex-row gap-12">
                  <IconText icon="favorite" text="58" />
                  <IconText icon="comment" text="68" />
                  <IconText icon="visibility" text="34" />
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

export default ReviewsSubPage;
