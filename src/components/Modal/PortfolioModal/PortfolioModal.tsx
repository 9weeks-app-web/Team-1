/* eslint-disable prettier/prettier */
import * as React from "react";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { portfolioDetailModalState } from "store/modal";
import "./style.css";
import Icon from "components/Icon/Icon";
import IconText from "components/IconText/IconText";
import { useNavigate } from "react-router-dom";

export default function PortfolioModal() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [portfolioModalState, setPortfolioModalState] = useRecoilState(
    portfolioDetailModalState
  );

  const handleClose = () => {
    setPortfolioModalState(false);
    setOpen(false);
  };

  React.useEffect(() => {
    setOpen(portfolioModalState);
  }, [portfolioModalState]);

  return (
    <div>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="portfolio-modal-container">
          <div>
            {/* 포트폴리오 상단 */}
            <div className="portfolio-modal-header">
              <img
                className="portfolio-modal-profile-img"
                src="https://s3-alpha-sig.figma.com/img/291b/2a58/2055d89e239b187c75a056963523bbcf?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PTqkWx1eFaoTTz-8UqxJdnqdEOHc~HzNdtZ06J6VdJDQOoh-Ww6w28vOxYVHiTuTQ9QNgugW-KnJfrdIdT3cLCu57kjcXShHBZpzS9Rb3rsCWcsRGrf8MbIqMK3dLohilN1FCdEu3bGgjwrYU3MRbhd3Y1JaspLfeZBDE4AXz6Cgl534BpYqP-cUm0Ixg1a1VQgSgOmtBza7jwaPe1erG-Bq~pW~YhfPH2J1r4SBvVvNZPvseT8VUAFdYaeKEVH2KW~vONRvVo~XYl7mODzbYiNABep7z8Hk~TsTzLAKRTHfgvHi3vuD3IQKN-RWq1jOT2KloQWN8RQoopFdZqCHVg__"
                alt=""
              />
              <div className="portfolio-modal-header-text ">
                <p className="first-text">Motion Graphic Project</p>
                <p className="second-text">김민석 Graphic design</p>
              </div>
            </div>

            {/* 포트폴리오 본문 */}
            <div className="portfolio-section">
              <img
                src="https://s3-alpha-sig.figma.com/img/f9cf/d6b3/d83d09f569b6e3ac029db190ad52cde3?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PdMbOms3BRbwRpHmQzB6qCg4TR8QeopkNhiJK6Rw3RCgSENCKQbydJ0HJMYWM4DUkIQBXr2nCo51tOuHwYDPHdUav9834ZgAAf0ycpTpIugHz1SRDglqDr3DkNSDS6A4sEZEYu2bHNli3AUz87sJ1s6LYrf-PgSFl7kGQF~BPEXV15Q7nu-nd7NbOnvPYBogOKUe8gIw5Vq5YziFW3gtr8cKJ4~ISXXHFSc9HE3Wuc1xyPNhI-zTSzYqISroROcHaR2NOSQczDvxPujUFAvuXhwPeKOmkUQ8wFP5CVdFHx0WCrm3gnaPlSMkaIZREH04J6beCgI1WAl8bYL2~NETCw__"
                alt=""
              />
              <img src="https://s3-alpha-sig.figma.com/img/44c5/5657/92fe028b0dfe22dc9688771cd3e26ba5?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MvBozPGh5AUeHYeOoLszSCvkr2yJD76ZpBQD94zehZrufLczu-fEamFW-E5EbZB1zKI6y5byBOT6PWwK2cIw3-bAB91Trrz~deO1TQWQKNdhZXH1tvN1XZPimQqLahdEDiiyYSGjKG1z2~HqYLZCC-5XNg5RFk4atWl6cm9URjSNN9OUqs~eno0UCWpI6I4FGSDJXfADGpxXqPd9usjDNbrvuwGhBcy9L0n0jYYsypHsBGJ6vCD-cztc1VEvdzDb1fXf3NwbqUsOwMpgNurJD~X-uKxdoHilxguyfYQRnbPKP0mLLL5ahXhqeiZCT0ag0KzF~oGrPuv7w3yDWEk37Q__" alt="" />
              <img src="https://s3-alpha-sig.figma.com/img/9daa/631d/597b4369ff03132351892bc774330485?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lhoSanRFpmKMqPycW-mxTXcx2n7PKvtRD86D6bz4sGOhUOGVui2ddDgAO2wfnKgtrCW4NTF1wDUA9qQ8blfmFAQAeJUEijOO4eIX9qGG~wA204hLwverdHZ-Mfrzi8NBODhVZGVwSzkgNx~7ezm16nYlz2fGQ5yrbEc9GPtlMjeQyb2o-1h615b1I7s3NYM2ceDlaZDVahV64Wt8I9b6p7CVRY5DVjkYXTqDVhpc22~Fbd~sqf-5OLAaW-vFnrQxDtu~mZPAtzQAiy~wUfLBTz34atwhOejZ36W32pyDKTJEiZrIl98dDJQ0M0FNoAoVQpZ0kpvFEbs3WzqJGb15Zg__" alt="" />
              <img src="https://s3-alpha-sig.figma.com/img/e6cc/652e/63a7ac75f0550cf29b88e2a0b6a79e64?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SDU518PNheT8MszHCmDh~gEv68VpxuyOUUdZFsoPaZlG9zLRX6aNb3ohtchzYrL8NKSYoRlaBxxUUdpE61vd11BNdTa87XH4CuNHBnVzmMSymdB41hWq~~3zmCZpV30rnrSJrAUZ1-Cc80ZofRzYNqeYtWwLqZ~QIDArMvf-7b52Mg3EWz-7e~enpP38nNegS-Ze5wzNXuDg-cEg9FIV~iGQfFgGpShFnr6AsrLT~eeS1l1o4Y0szQg87KLBx9CKwY-vryu-tWe95OZrwUtVvv0cGNi0UqcTWcIMGXKpCVJaaz~dxLfpwtDeM0LYWg~Av2yCkxXXOjel1s~nVQtKJQ__" alt="" />
              <img src="https://s3-alpha-sig.figma.com/img/9d18/4cdb/1fd7d4afb2c368892618d10c384f19b5?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T46Zd7EfrhyJ1tXAn-14LNCR8LPX4Aho6emMMVNMaF4IK5PTcOeKnVTXrioLp5IHY5ccfb6l3wDGmfgImzKktqxcrtbci3s0me~lOshmzsgp-OTQ4DyT9CrGipLbdvtCNhDRNwjJ-STgNSx-cmYdtNYLvDn77hPmxQNj61~YYvbQgHc2URmOd7T1hocIVp1Op~3kAR5pm~Mt9LcAkiue2T6xtF0sBL-6bqTG0RgCH865eq8aEyJH~EfPuMBnr8uZEpH4gPc~-Ss2Ou4EYNOH1EhRiaat6Yf13ly7tIFuASZMkVIcTkElkxPBCcpAz3qZNdnTmb9eX50SeCJAEbY-ew__" alt="" />
            </div>

            <div className="portfolio-section">
              <div className="portfolio-bottom-menu">
                <div className="portfolio-button-group">
                  <button type="button" className="like"onClick={() =>alert("좋아요를 눌렀습니다!")}>
                    <Icon icon="favorite"/>
                    작품 좋아요</button>
                  <button type="button" onClick={() =>alert("작품이 스크랩 되었습니다!")}>
                    <Icon icon="bookmark"/>
                    작품 스크랩</button>
                </div>
              </div>
              <div className="portfolio-info">
                <p className="portfolio-info-title">Motion Graphic Project</p>
                <p className="portfolio-info-content">
                  <span>2023.12.13</span>
                  <span>|</span>
                  <span>Graphic Design</span>
                </p>
                <p className="portfolio-info-options">
                  <IconText icon="visibility" text="2.1K"/>
                  <IconText icon="favorite" text="680"/>
                  <IconText icon="comment" text="10"/>
                </p>
              </div>
            </div>

            {/* 포트폴리오 댓글 */}
            <div className="portfolio-section comment-area">
              <div className="comment-input-group">
                <input
                  className="comment-field"
                  placeholder="댓글을 입력해주세요"
                />
                <button type="button" className="comment-submit-button">
                  댓글 등록
                </button>
              </div>

              <div className="comment-header">
                <div className="flex-row gap-12">
                  <span>
                    <b>댓글</b>
                  </span>
                  <span className="comment-cnt">3개</span>
                </div>
              </div>
              <div className="comment-list-group">
                <div className="comment-list">
                  {/* 댓글 하나 */}
                  <div className="comment flex-row gap-12">
                    <img src="https://picsum.photos/48/48" alt="" />
                    <div className="flex-column gap-8">
                      <p className="flex-row gap-8">
                        <b className="comment-writer">
                        김진아
                        </b>
                        <span className="comment-time">
                           • 16시간 전
                        </span>
                      </p>
                      <p>
                      안녕하세요! 정말 잘 봤습니다.
                      </p>
                      <div className="commnet-menu flex-row gap-20">
                        <IconText icon="favorite" text="좋아요 23"/>
                        <IconText icon="chat_bubble" text="답글 남기기" />
                      </div>
                    </div>
                  </div>
                  {/* 댓글 하나 */}
                  <div className="comment flex-row gap-12">
                    <img src="https://picsum.photos/48/48" alt="" />
                    <div className="flex-column gap-8">
                      <p className="flex-row gap-8">
                        <b className="comment-writer">
                        이은미
                        </b>
                        <span className="comment-time">
                           • 16시간 전
                        </span>
                      </p>
                      <p>
                      너무 잘 봤습니다!
                      </p>
                      <div className="commnet-menu flex-row gap-20">
                        <IconText icon="favorite" text="좋아요 23" />
                        <IconText icon="chat_bubble" text="답글 남기기" />
                      </div>
                    </div>
                  </div>
                  {/* 댓글 하나 */}
                  <div className="comment flex-row gap-12">
                    <img src="https://picsum.photos/48/48" alt="" />
                    <div className="flex-column gap-8">
                      <p className="flex-row gap-8">
                        <b className="comment-writer">
                          김민혁
                        </b>
                        <span className="comment-time">
                           • 16시간 전
                        </span>
                      </p>
                      <p>
                        안녕하세요! 이렇게 한 프로젝트 만드는데 얼마나
                        걸리셨는지 궁금합니다.
                      </p>
                      <div className="commnet-menu flex-row gap-20">
                        <IconText icon="favorite" text="좋아요 23" />
                        <IconText icon="chat_bubble" text="답글 남기기" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 여기부터 사이드바 */}
          <aside className="portfolio-sidebar">
            <div className="sidebar-menu">
              <div className="menu-circle" role="presentation" onClick={() =>alert("팔로잉 되었습니다.")}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/f9cf/d6b3/d83d09f569b6e3ac029db190ad52cde3?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PdMbOms3BRbwRpHmQzB6qCg4TR8QeopkNhiJK6Rw3RCgSENCKQbydJ0HJMYWM4DUkIQBXr2nCo51tOuHwYDPHdUav9834ZgAAf0ycpTpIugHz1SRDglqDr3DkNSDS6A4sEZEYu2bHNli3AUz87sJ1s6LYrf-PgSFl7kGQF~BPEXV15Q7nu-nd7NbOnvPYBogOKUe8gIw5Vq5YziFW3gtr8cKJ4~ISXXHFSc9HE3Wuc1xyPNhI-zTSzYqISroROcHaR2NOSQczDvxPujUFAvuXhwPeKOmkUQ8wFP5CVdFHx0WCrm3gnaPlSMkaIZREH04J6beCgI1WAl8bYL2~NETCw__"
                  alt=""
                />
              </div>
              <p>팔로우</p>
            </div>
            <div className="sidebar-menu">
              <div className="menu-circle" role="presentation" onClick={() => { handleClose(); navigate("/chat")}}>
                <Icon icon="chat_bubble" />
              </div>
              <p>채팅</p>
            </div>
            <div className="sidebar-menu">
              <div className="menu-circle" role="presentation" onClick={() =>alert("사용툴 입니다")}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/2101px-Adobe_After_Effects_CC_icon.svg.png"
                  alt=""
                />
              </div>
              <p>사용툴</p>
            </div>
            <div className="sidebar-menu">
              <div className="menu-circle" role="presentation" onClick={() =>alert("스크랩 입니다")}>
                <Icon icon="bookmark" />
              </div>
              <p>스크랩</p>
            </div>
            <div className="sidebar-menu">
              <div className="menu-circle" role="presentation" onClick={() =>alert("공유 입니다")}>
                <Icon icon="share" />
              </div>
              <p>공유</p>
            </div>
            <div className="sidebar-menu">
              <div className="menu-circle" role="presentation" onClick={() =>alert("댓글 입니다.")}>
                <Icon icon="comment" />
              </div>
              <p>댓글</p>
            </div>
            <div className="sidebar-menu">
              <div className="menu-circle like" role="presentation" onClick={() =>alert("좋아요를 눌렀습니다!")}>
                <Icon icon="favorite" />
              </div>
              <p>좋아요</p>
            </div>
          </aside>
        </div>
      </Modal>
    </div>
  );
}
