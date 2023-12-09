import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        key={option.value}
        onClick={() => {
          handleSelect(option);
        }}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div onClick={handleClick}>
        {!selectedOption ? "선택하기" : selectedOption.label}
      </div>
      {isOpen && renderedOptions}
    </div>
  );
};

export default Dropdown;
