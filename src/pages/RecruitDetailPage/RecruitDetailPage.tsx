import PageLayout from "components/layout/PageLayout/PageLayout";
import React from "react";
import "./style.css";
import MentoringBadge from "components/Badges/MentoringBadge/MentoringBadge";
import Badge from "components/Badges/Badge/Badge";
import CardGrid from "components/CardGrid/CardGrid";
import Icon from "components/Icon/Icon";
import usePortfolio from "hooks/usePortfolio";
import PortfolioCard from "components/Cards/PortfolioCard/PortfolioCard";
import { IPortfolioSummary } from "types/portfolio";
import ProjectReviewCard from "components/Cards/ProjectReviewCard/ProjectReviewCard";
import { DUMMY_REVIEWS } from "constants/dummy";
import { IProjectReviewSummary } from "types/project";

function RecruitDetailPage() {
  const tag = ["UI/UX", "그래픽디자인", "인터랙션디자인", "영상"];
  const { data } = usePortfolio();

  return (
    <PageLayout>
      <div className="recruit-detail-page-contents">
        <div className="section">
          {/* 헤더 섹션 */}
          <div className="recruit-detail-header">
            <div className="recruit-detail-header-first">
              <div className="recruit-detail-profile">
                <img
                  src="https://mblogthumb-phinf.pstatic.net/MjAxNzAyMjdfMjk0/MDAxNDg4MTgwMTM2NDQx.hL1PiaJRXlxZlpw9GOtbcdiL-rd2-vq6XNEwm6hel8Eg.qZvMk-q_I2KHj9nkL68LTCT33gkTw380v8KiwffSYtIg.JPEG.octolab/KakaoTalk_20170209_183033988.jpg?type=w800"
                  alt=""
                />
                <div className="flex-column gap-12">
                  <MentoringBadge isMentor={false} />
                  <p className="name">류현수</p>
                  <p className="flex-row gap-12">
                    <span className="follow">팔로워 34</span>
                    <span className="follow">팔로우 34</span>
                  </p>
                </div>
              </div>
              <div className="recruit-detail-button-group">
                <button type="button">팔로우</button>
                <button type="button">제안하기</button>
                <button type="button" className="primary">
                  채팅 보내기
                </button>
              </div>
            </div>

            <div className="recruit-detail-header-second">
              {tag.map((el, idx) => (
                <Badge key={idx} text={el} type="violet" />
              ))}
            </div>
            <p className="oneline-intro oneLineEllipsis">한줄 소개.</p>
          </div>
        </div>

        {/* 연락처 */}
        <div className="section">
          <h3 className="section-title">연락처</h3>
          <div className="section-inner">
            <p>이메일: spac1212@gmail.com</p>
            <p>인스타그램: @spac1212</p>
            <p>링크: https://sniperfactory.com</p>
          </div>
        </div>

        {/* 성향 */}
        <div className="section">
          <h3 className="section-title">성향</h3>
          <div className="flex-row gap-12">
            <span>MBTI</span>
            <Badge text="ENTJ" type="teal" />
          </div>
          <div className="flex-row gap-12">
            <span>키워드</span>
            <Badge text="시간엄수" type="teal" />
            <Badge text="꼼꼼한" type="teal" />
            <Badge text="이성적인" type="teal" />
            <Badge text="외향적인" type="teal" />
            <Badge text="계획적인" type="teal" />
          </div>
        </div>

        {/* 스킬 */}
        <div className="section">
          <h3 className="section-title">스킬</h3>
          <div className="flex-row gap-12">
            <span>기술스택</span>
            <Badge text="Figma" type="orange" />
            <Badge text="Adobe Photoshop" type="orange" />
            <Badge text="Adobe Illustration" type="orange" />
            <Badge text="Adobe Xd" type="orange" />
          </div>
          <div className="flex-row gap-12">
            <span>소프트 스킬</span>
            <Badge text="UX Knowledge" type="orange" />
            <Badge text="VideoEditing" type="orange" />
          </div>
        </div>

        {/* 경력 */}
        <div className="section">
          <h3 className="section-title">경력</h3>
          <div className="section-inner">
            <p className="bold">경력 - 1년 6개월</p>
            <p>OO기업 인턴 (2024/2 ~ 2025/07)</p>
            <p>
              스나이퍼 팩토리 UI/UX 인턴형 프로그램 과정 (2023/10 ~ 2024/01)
            </p>
            <p>OO대학교 디자인 학과 (2018~2023)</p>
          </div>
        </div>

        {/* 포트폴리오 */}
        <div className="section">
          <h3 className="section-title">포트폴리오</h3>
          <CardGrid>
            {data?.data
              .filter((_: IPortfolioSummary, idx: number) => idx < 4)
              .map((el: IPortfolioSummary) => <PortfolioCard portfolio={el} />)}
          </CardGrid>
        </div>

        {/* 프로젝트 후기 */}
        <div className="section">
          <h3 className="section-title">프로젝트 후기</h3>
          <div className="project-reviews">
            {DUMMY_REVIEWS.map((el: IProjectReviewSummary) => (
              <ProjectReviewCard reviewSummary={el} key={el.id} />
            ))}
          </div>
        </div>

        {/* 버튼 그룹 */}
        <div className="section">
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
    </PageLayout>
  );
}

export default RecruitDetailPage;
