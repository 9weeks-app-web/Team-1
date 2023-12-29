import React, { ReactNode } from "react";
import "./style.css";

interface ICardGridProps {
  children: ReactNode;
  columnGap?: "cg-16" | "cg-20";
  rowGap?: "rg-16" | "rg-32";
}

function CardGrid(props: ICardGridProps) {
  const { children, columnGap, rowGap } = props;

  return (
    <div className={`cardgrid-container ${columnGap} ${rowGap}`}>
      {children}
    </div>
  );
}

export default CardGrid;
