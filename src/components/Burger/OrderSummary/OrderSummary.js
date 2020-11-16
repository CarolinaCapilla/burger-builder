import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxiliary>
      <h3>Your order</h3>
      <p>Ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <button>Checkout</button>
    </Auxiliary>
  );
};

export default orderSummary;
