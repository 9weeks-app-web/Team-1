import React from "react";
import "./style.css";

type AsideProps = {
  onMenuChange: (menu: string) => void;
  menuTitle: { label: string };
  menuItems: { label: string; menu: string }[];
};

function Aside({ onMenuChange, menuTitle, menuItems }: AsideProps) {
  return (
    <aside className="aside">
      <span className="asideTitle">{menuTitle.label}</span>
      <div className="asideList">
        <ul>
          {menuItems.map((item) => (
            <li key={item.menu} onClick={() => onMenuChange(item.menu)}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
