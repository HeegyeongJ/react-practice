import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14),
    },
    {
      id: "e2",
      title: "수건",
      amount: 10,
      date: new Date(2023, 3, 14),
    },
    {
      id: "e3",
      title: "수건",
      amount: 15,
      date: new Date(2021, 8, 1),
    },
  ]);

  const getPaymentFormData = (data) => {
    console.log(data);
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
      },
      ...expenses,
    ]);
  };

  const deleteExpenseItem = (id) => {
    // filter 사용
    const newFilteredArray = expenses.filter((item) => item.id !== id);
    setExpenses(newFilteredArray);
    // slice 사용, id 대신 index를 인자로 받는다
    // const beforeArray = expenses.slice(0, index)
    // const afterArray = expenses.slice(index + 1)
    // setExpenses([...beforeArray, ...afterArray])
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
    </>
  );
}

export default App;
