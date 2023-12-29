import React, { useEffect } from "react";
import "./style.css";

interface ISinglePickChipProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

function SinglePickChip(props: ISinglePickChipProps): JSX.Element {
  const { title, onClick, isActive } = props;

  const handleClick = () => {
    onClick();
  };

  useEffect(() => {}, []);

  return (
    <>
      <button
        className={`${isActive ? "chip-clicked" : "chip"}`}
        type="button"
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
}

export default SinglePickChip;
