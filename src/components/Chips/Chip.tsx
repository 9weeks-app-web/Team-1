import React, { useState } from "react";
import "./style.css";

interface IChipProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Chip({
  title,
  onClick = () => {},
  disabled,
}: IChipProps): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    onClick();
    setIsClicked(!isClicked);
  };
  return (
    <>
      <button
        className={`${isClicked || disabled ? "chip-clicked" : "chip"}`}
        type="button"
        onClick={handleClick}
      >
        {title}
      </button>
    </>
  );
}

export default Chip;
