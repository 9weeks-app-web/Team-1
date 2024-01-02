import React from "react";
import { ReactComponent as Facebook } from "assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "assets/icons/Instagram.svg";
import { ReactComponent as YouTube } from "assets/icons/YouTube.svg";
import "./style.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-inner">
        <div className="footer-left">
          <p>인사이드아웃 사회적 협동조합</p>
          <div className="corporate-info">
            <p>고유번호 : 324-82-00580 | 이사장 : 염민호 (와이엠에스닷코)</p>
            <p>통신판매업 신고번호 : 2022-경기김포-3659</p>
            <p>
              주소 : 서울특별시 강서구 마곡중앙2로 11, 3층 305호(마곡동, M밸리 W
              TOWER III)
            </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-sns">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <YouTube />
            </a>
          </div>
          <div className="footer-terms">
            <p>
              <a href="https://notion.so" target="_blank" rel="noreferrer">
                개인정보 처리방침
              </a>
            </p>

            <p>
              <a href="https://notion.so" target="_blank" rel="noreferrer">
                서비스 이용약관
              </a>
            </p>
            <p>
              <a href="https://notion.so" target="_blank" rel="noreferrer">
                환불규정
              </a>
            </p>
          </div>
          <div className="footer-contact">
            <span>연락처 : 050-6683-1001</span>
            <span>고객센터 : cs@sniperfactory.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
