import React, { useEffect, useState } from "react";
import "./style.css";

interface ISinglePickChipProps {
  title: string;
  onClick: () => void;
  isActive: boolean;
}

function SinglePickChip(props: ISinglePickChipProps): JSX.Element {
  const { title, onClick, isActive } = props;
  const [renderComponent, setRenderComponent] = useState(<div />);

  const handleClick = () => {
    onClick();
  };

  useEffect(() => {
    const render = () => (
      <button
        className={isActive ? "chip-clicked" : "chip"}
        type="button"
        onClick={handleClick}
      >
        {title}
      </button>
    );
    setRenderComponent(render());
  }, [isActive]);

  return <>{renderComponent}</>;
}

export default SinglePickChip;
