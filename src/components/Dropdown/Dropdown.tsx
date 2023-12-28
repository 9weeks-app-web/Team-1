import React, { useState, useEffect } from "react";
import "./style.css";
import Icon from "components/Icon/Icon";

interface IDropdownProps {
  defaultOption: string;
  options: string[];
}

function Dropdown({ defaultOption, options }: IDropdownProps): JSX.Element {
  const [view, setView] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  useEffect(() => {
    console.log(selectedOption);
  }, [selectedOption]);

  const openDropdown = () => {
    setView(!view);
  };

  const handleOptionClick = (item: string) => {
    setSelectedOption(item);
  };

  return (
    <>
      <button type="button" className="dropdown" onClick={openDropdown}>
        <div className="dropdown-content">
          <div className="dropdown-default">{defaultOption}</div>
          <Icon icon="arrow_drop_down" className="dropdown-arrow" />
        </div>
        {view && (
          <ul className="option-container">
            {options.map((item, index) => (
              <li
                key={index}
                className="option"
                onClick={() => handleOptionClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </button>
    </>
  );
}

export default Dropdown;
