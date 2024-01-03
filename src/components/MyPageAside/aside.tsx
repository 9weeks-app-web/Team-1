import React from "react";
import "./style.css";

type AsideProps = {
  onMenuChange: (menu: string) => void;
};

function MyPageAside({ onMenuChange }: AsideProps) {
  return (
    <aside className="mypageAside">
      <div className="myProfileSec">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="setIcon"
        >
          <g clipPath="url(#clip0_761_85414)">
            <path
              d="M19.6462 12.9792C19.689 12.6667 19.7104 12.3438 19.7104 12C19.7104 11.6667 19.689 11.3333 19.6355 11.0208L21.8094 9.375C22.0021 9.22917 22.0557 8.94792 21.9379 8.73958L19.8818 5.28125C19.7533 5.05208 19.4855 4.97917 19.2499 5.05208L16.6905 6.05208C16.1551 5.65625 15.5875 5.32292 14.9557 5.07292L14.5701 2.42708C14.5273 2.17708 14.3131 2 14.0561 2H9.94388C9.68687 2 9.4834 2.17708 9.44056 2.42708L9.05504 5.07292C8.42322 5.32292 7.84493 5.66667 7.3202 6.05208L4.76076 5.05208C4.52517 4.96875 4.25744 5.05208 4.12894 5.28125L2.08353 8.73958C1.95502 8.95833 1.99786 9.22917 2.21204 9.375L4.38595 11.0208C4.33241 11.3333 4.28957 11.6771 4.28957 12C4.28957 12.3229 4.31099 12.6667 4.36453 12.9792L2.19062 14.625C1.99786 14.7708 1.94431 15.0521 2.06211 15.2604L4.11823 18.7188C4.24673 18.9479 4.51446 19.0208 4.75005 18.9479L7.30949 17.9479C7.84493 18.3437 8.41251 18.6771 9.04433 18.9271L9.42986 21.5729C9.4834 21.8229 9.68687 22 9.94388 22H14.0561C14.3131 22 14.5273 21.8229 14.5594 21.5729L14.945 18.9271C15.5768 18.6771 16.1551 18.3437 16.6798 17.9479L19.2392 18.9479C19.4748 19.0312 19.7426 18.9479 19.8711 18.7188L21.9272 15.2604C22.0557 15.0312 22.0021 14.7708 21.7987 14.625L19.6462 12.9792ZM12 15.75C9.87963 15.75 8.14478 14.0625 8.14478 12C8.14478 9.9375 9.87963 8.25 12 8.25C14.1204 8.25 15.8552 9.9375 15.8552 12C15.8552 14.0625 14.1204 15.75 12 15.75Z"
              fill="#1A1A1A"
            />
          </g>
          <defs>
            <clipPath id="clip0_761_85414">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="myProfilePicture" />
        <strong className="myProfileName">이름</strong>
        <div className="myProfilePositions">
          <span>UX designer | 주니어</span>
        </div>
        <div className="profileFollowBtn">
          <a href="/">팔로잉 0</a>
          <a href="/">팔로워 0</a>
        </div>
      </div>
      <div className="MyProfileAsideList">
        <ul>
          <li onClick={() => onMenuChange("myPageMyProfile")}>
            마이 스팩폴리오
          </li>
          <li onClick={() => onMenuChange("myPageMyProject")}>프로젝트</li>
          <li onClick={() => onMenuChange("myPageMyPost")}>내 활동</li>
          <li onClick={() => onMenuChange("myPageMyLike")}>관심</li>
        </ul>
      </div>
    </aside>
  );
}

export default MyPageAside;
