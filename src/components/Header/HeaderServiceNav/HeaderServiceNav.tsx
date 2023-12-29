import React from "react";
import "./style.css";

function HeaderServiceNav() {
  return (
    <ul className="header-service-nav-container">
      <li>
        <a href="/">스팩폴리오</a>
      </li>
      <li>
        <a className="unselected" href="https://sniperfactory.com">
          스팩로그
        </a>
      </li>
    </ul>
  );
}

export default HeaderServiceNav;
