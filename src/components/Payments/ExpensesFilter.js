import React from "react";

import "./ExpensesFilter.css";
import PriceFilter from "./PriceFilter";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  const priceChangeHandler = (selectedPrice) => {
    props.onChangePriceFilter(selectedPrice);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
      <PriceFilter onChangePrice={priceChangeHandler}></PriceFilter>
    </div>
  );
};

export default ExpensesFilter;
