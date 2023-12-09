import React, { useState } from "react";

const PriceFilter = (props) => {
  const [rangeValue, setRangeValue] = useState(0);
  const rangeChangeValue = (e) => {
    setRangeValue(e.target.value);
  };

  const rangeFilterHandler = (rangeValue) => {
    props.onChangePrice(rangeValue);
  };
  return (
    <div>
      <div className="expenses-filter__control">
        <label>Filter by price</label>
        <div>
          0{" "}
          <input
            type="range"
            max={100}
            min={0}
            onChange={rangeChangeValue}
            value={rangeValue}
          />{" "}
          100
        </div>
        {rangeValue}
        <button
          type="submit"
          onClick={() => {
            rangeFilterHandler(rangeValue);
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default PriceFilter;
