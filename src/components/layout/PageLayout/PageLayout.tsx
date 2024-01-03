import React, { ReactNode } from "react";
import "./style.css";

interface IPageLayoutProps {
  children: ReactNode;
}
function PageLayout(props: IPageLayoutProps) {
  const { children } = props;
  return <div className="pagelayout-container">{children}</div>;
}

export default PageLayout;
