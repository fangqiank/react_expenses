import React, { useContext } from "react";
import { MyContext } from "../context/GloState";

export const Balance = () => {
  const { transactions } = useContext(MyContext);
  const amounts = transactions.map((item) => item.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
