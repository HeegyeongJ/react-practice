import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");
  const [filteredPrice, setFilteredPrice] = useState(0);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const priceChangeHandler = (selectedPrice) => {
    setFilteredPrice(selectedPrice);
  };
  const filterByYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterByPrice = props.items.filter((expense) => {
    return expense.amount <= filteredPrice;
  });
  // console.log(filterByPrice);

  let expensesContent = <p>Empty</p>;
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        onChangePriceFilter={priceChangeHandler}
      />
      {filterByPrice.length > 0
        ? filterByPrice.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        : expensesContent}

      {/* { filterByYear.length > 0 ?  filterByYear.map((item) => (
					<ExpenseItem
						title={item.title}
						amount={item.amount}
						date={item.date}
			))}
		)): expensesContent} */}
    </Card>
  );
};

export default Expenses;
