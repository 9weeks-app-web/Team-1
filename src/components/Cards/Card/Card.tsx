import React, { ReactNode, useEffect, useState } from "react";
import "./style.css";

interface ICardProps {
  children: ReactNode;
  width?: "s" | "m" | "l";
}

function Card({ width, children }: ICardProps) {
  const [size, setSize] = useState("");

  useEffect(() => {
    switch (width) {
      case "s":
        setSize("s-width");
        break;
      case "m":
        setSize("m-width");
        break;
      case "l":
        setSize("l-width");
        break;
      default:
        setSize("");
    }
  }, [size]);

  return <div className={`card-container ${size}`}>{children}</div>;
}

export default Card;
