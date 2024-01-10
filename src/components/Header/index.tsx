import React from "react";
import "./style.css";
import HeaderServiceNav from "./HeaderServiceNav/HeaderServiceNav";
import HeaderGNB from "./HeaderGNB/HeaderGNB";

function Header() {
  return (
    <>
      <HeaderServiceNav />
      <div className="header-container">
        <div className="header-inner">
          <HeaderGNB />
        </div>
      </div>
    </>
  );
}

export default Header;
