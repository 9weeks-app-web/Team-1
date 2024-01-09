import React, { ReactNode } from "react";
import "./style.css";

type AsideProps = {
  onMenuChange: (menu: string) => void;
  menuTitle: { label: string };
  menuItems: { icon: ReactNode; label: string; menu: string }[];
};

function Aside({ onMenuChange, menuTitle, menuItems }: AsideProps) {
  return (
    <aside className="aside">
      <span className="asideTitle">{menuTitle.label}</span>
      <div className="asideList">
        <ul>
          {menuItems.map((item) => (
            <li key={item.menu} onClick={() => onMenuChange(item.menu)}>
              <div className="icon-label">
                <span>{item.icon}</span>
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
