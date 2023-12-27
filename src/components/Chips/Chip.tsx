import React, { useState } from "react";
import "./style.css";

interface IChipProps {
  title: string;
  onClick: () => void;
}

function Chip({ title, onClick }: IChipProps): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setIsClicked(true);
  };
  return (
    <>
      <button
        className={`${isClicked ? "chip-clicked" : "chip"}`}
        type="button"
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
}

export default Chip;
