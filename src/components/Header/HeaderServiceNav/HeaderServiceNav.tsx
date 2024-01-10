import React from "react";
import "./style.css";

function HeaderServiceNav() {
  return (
    <div className="bg-gray">
      <ul className="header-service-nav-container">
        <li className="bg-white">
          <a href="/">스팩폴리오</a>
        </li>
        <li>
          <a className="unselected" href="https://sniperfactory.com">
            스팩로그
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderServiceNav;
