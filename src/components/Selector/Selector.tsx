import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./style.css";

interface ISelectorProps {
  options: string[];
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder?: string;
}
function Selector(props: ISelectorProps) {
  const { options, value, setValue, placeholder } = props;

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <select
      className="selector oneLineEllipsis"
      value={value}
      onChange={handleChange}
    >
      <option value="" selected disabled>
        {placeholder}
      </option>
      {options.map((el, idx) => (
        <option key={idx} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
}

export default Selector;
