import React, { useEffect, useState } from "react";
import "./style.css";
import Icon from "components/Icon/Icon";

interface IDropdownProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

function DropdownSelector(props: IDropdownProps): JSX.Element {
  const { options, selectedOption, setSelectedOption } = props;
  const [view, setView] = useState(false);

  const openDropdown = () => {
    setView(!view);
  };

  const handleOptionClick = (item: string) => {
    setSelectedOption(item);
  };

  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  return (
    <>
      <button type="button" className="dropdown" onClick={openDropdown}>
        <div className="dropdown-content">
          <div className="dropdown-default oneLineEllipsis">
            {selectedOption}
          </div>
          <Icon icon="arrow_drop_down" className="dropdown-arrow" />
        </div>
        <div>
          {view && (
            <ul className="option-container oneLineEllipsis">
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
        </div>
      </button>
    </>
  );
}

export default DropdownSelector;
